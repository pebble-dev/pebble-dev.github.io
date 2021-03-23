images = {};
appcat = "Faces";
masterpbw = "";
app = {};

function calcperccomplete () {

  if ($('#i-subupdate').prop("checked")) {

    var perc = 0;
    var slice = 25;

    if ($('#u-appstorelink').val() != "") { perc += slice; }
    if ($('#u-developerID').val() != "") { perc += slice; }
    if ($('#u-apprelnotes').val() != "") { perc += slice; }
    if (masterpbw != null && masterpbw != "") { perc += slice; }
    $('#pbbar').css("width", perc + "%");

  } else {
    //Calculate how far through the required fields the user is, and set the progres bar
    var perc = 0;
    var slice = 14;

    if ($('#i-appname').val() != "") { perc += slice }
    // console.log("1Percentage complete: " + perc)
    if ($('#i-iswatchapp').prop("checked") || $('#i-iswatchface').prop("checked")) { perc += slice }
    // console.log("2Percentage complete: " + perc)
    if ($('#i-appdesc').val() != "") { perc += slice }
    // console.log("3Percentage complete: " + perc)
    if ($('#i-apprelnotes').val() != "") { perc += slice }
    // console.log("4Percentage complete: " + perc)

    if ($('#i-iswatchapp').prop("checked")) {
    if (images["i-icon-1"] != null && images["i-icon-1"] != "") { perc += slice }
    } else if ($('#i-iswatchface').prop("checked")){
    perc += slice
  }
    // console.log("5Percentage complete: " + perc)

    if (images["i-ban"] != null && images["i-ban"] != "") {
    perc += slice
  }
    // console.log("6Percentage complete: " + perc)

    if (masterpbw != null && masterpbw != "") {
    perc += slice
  }
    // console.log("7Percentage complete: " + perc)

    if (perc > 97) { perc = 100 }
    // console.log("8Percentage complete: " + perc)

    $('#pbbar').css("width", perc + "%");
  }

}

function start() {
  $('#i-subnew').prop("checked", true);

  if (! $('#i-iswatchapp').prop("checked")) {
    $('.watchapponly').hide();
  }

  if ($('#i-sw-usesamescreenshots').prop("checked")) {
    $('#scr-allsame').hide();
    $('#scr-diff').show();
  } else {
    $('#scr-allsame').show();
    $('#scr-diff').hide();
  }

  //Register Handlers
  $( ".rbtype" ).change(function() {
    if ($('#i-iswatchapp').prop("checked")) {
      $('.watchapponly').show();
    } else {
      $('.watchapponly').hide();
    }
    $('#watchapptype').removeClass("danger");
    calcperccomplete();
  });
  $( ".rbcat" ).change(function() {
    $('#watchcat').removeClass("danger");
    appcat = this.value;
    calcperccomplete();
  });
  $( ".rbmode" ).change(function() {
    if ($('#i-subnew').prop("checked")) {
      $('#mode-appupdate').addClass("hidden");
      $('#mode-newapp').removeClass("hidden");
    } else {
      $('#mode-appupdate').removeClass("hidden");
      $('#mode-newapp').addClass("hidden");
    }
  });
  $( "#i-sw-usesamescreenshots" ).change(function() {
    if ($('#i-sw-usesamescreenshots').prop("checked")) {
      $('#scr-allsame').hide();
      $('#scr-diff').show();
    } else {
      $('#scr-allsame').show();
      $('#scr-diff').hide();
    }
    calcperccomplete();
  });

  $( "textarea" ).focusout(function() {
    $(this).removeClass("danger");
    calcperccomplete();
  })
  $( "input" ).focusout(function() {
    $(this).removeClass("danger");
    calcperccomplete();
  })
  $( "img" ).click(function() {
    $(this).removeClass("danger");
    calcperccomplete();
  })

  //this is pretty hacky, future me please fix this
  $(".screenshot").click(function() {
    console.log("Select " + this.id);
    $('.activeImage').removeClass("activeImage");
    $(this).addClass("activeImage");
  });

}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('.activeImage').attr('src', e.target.result);

            var i = null;
            $('.activeImage').each(function () {
              i = this.id;
            });
            images[i] = e.target.result.split("base64,")[1];
            console.log("Image ID " + i + " = " + e.target.result)
            // $('.activeImage').css('display', 'inline');

        };

        reader.readAsDataURL(input.files[0]);
    }
}
function readPBW(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          console.log("pbw: " + e.target.result)
          console.log("pbw2: " + e.target.result.split("base64,")[1])
          masterpbw = e.target.result.split("base64,")[1];
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function buildError(msg, ehid) {
  $('#' + ehid).addClass("danger");
  $('#buildbtn').removeClass("btn-primary");
  $('#buildbtn').addClass("btn-danger");
  $('#buildbtn').html(msg);
  setTimeout(function () {
    $('#buildbtn').removeClass("btn-danger");
    $('#buildbtn').addClass("btn-primary");
    $('#buildbtn').html("Build zip package");
  }, 2000);
}
function build() {
  if ($('#i-subnew').prop("checked")) {
    build_newapp()
  } else {
    build_update()
  }
}
function build_update() {
  $('.danger').removeClass(".danger");
  $('#buildbtn').html('<span class="spinner-border spinner-grow-sm" role="status" aria-hidden="true"></span>  <span class="sr-only">Loading...</span> Building zip package');

  app = {};
  app.pbw = masterpbw;

  var appstoreurl = $('#u-appstorelink').val();
  if (appstoreurl == null || appstoreurl == "") {
    buildError("Appstore link cannot be blank", "u-appstorelink");
    return;
  }
  //Get UUID of app
  if (! appstoreurl.includes("apps.rebble.io")) {
    buildError("Invalid appstore link", "u-appstorelink");
    return;
  }
  if (appstoreurl[appstoreurl.length-1] == "/") { appstoreurl = appstoreurl.substr(0, appstoreurl.length - 1)}
  var appstoreparts = appstoreurl.split("/");
  appstoreparts = appstoreparts[appstoreparts.length - 1];
  app.update = {
    url: appstoreurl,
    uuid: appstoreparts
  }

  if ($('#u-developerID').val() == null || $('#u-developerID').val() == "") {
    buildError("Developer ID is required for app updates", "u-developerID");
    return;
  }
  app.developerID = $('#u-developerID').val();

  if ($('#u-apprelnotes').val() == null || $('#u-apprelnotes').val() == "") {
    buildError("Release notes are required for app updates", "u-apprelnotes");
    return;
  }
  app.releasenotes = $('#u-apprelnotes').val();


  //We've assembled the data, generate the yaml
  //Could use a library, but I don't want to

  var yaml = "";
  var pbwfile = $('#i-f-pbw').val().split("\\")[2]

  yaml = yaml + "mode: update \n"
  yaml = yaml + "pbw_file: " + pbwfile + "\n"
  yaml = yaml + "appstore: " + app.update.url + "\n"
  yaml = yaml + "uuid: " + app.update.uuid + "\n"
  if (app.hasOwnProperty("developerID")) {
    yaml = yaml + "developer_id: " + app.developerID + "\n"
  }
  app.releasenotes = "  " + app.releasenotes.replace(/\n/g,"\n  ");
  yaml = yaml + "release_notes: |\n" + app.releasenotes + "\n";

  //yaml complete, build the .zip

  var zip = new JSZip();

  zip.file("build.yaml", yaml);
  zip.file(pbwfile, app.pbw, {base64: true})

  zip.generateAsync({type:"blob"}).then(function(content) {
    // see FileSaver.js
    saveAs(content, app.update.uuid.replace(/\s/g,'') + "-update.zip");

    $('#buildbtn').removeClass("btn-primary");
    $('#buildbtn').addClass("btn-success");
    $('#buildbtn').html("Success! Downloading .zip");
    $('#finishedModal').modal("show");
    setTimeout(function () {
      $('#buildbtn').removeClass("btn-success");
      $('#buildbtn').addClass("btn-primary");
      $('#buildbtn').html("Build zip package");
    }, 5000);

  });

  // $("body").html(JSON.stringify(app))

}
function build_newapp() {
  $('.danger').removeClass(".danger");
  $('#buildbtn').html('<span class="spinner-border spinner-grow-sm" role="status" aria-hidden="true"></span>  <span class="sr-only">Loading...</span> Building zip package');

  app = {};

  app.pbw = masterpbw;

  //Sanity check
  if ($('#i-appname').val() == null || $('#i-appname').val() == "") {
    buildError("App name cannot be blank", "i-appname");
    return;
  } else {
    app.title = $('#i-appname').val();
  }

  if ($('#i-weburl').val() != null) {
    app.website = $('#i-weburl').val();
  }

  if ($('#i-sourceurl').val() != null) {
    app.source = $('#i-sourceurl').val();
  }

  if ($('#i-developerID').val() != null && $('#i-developerID').val() != "") {
    app.developerID = $('#i-developerID').val();
  }

  if ($('#i-supportemail').val() != null) {
    app.support = $('#i-supportemail').val();
  }

  if ($('#i-iswatchface').prop("checked")) {
    app.type = "watchface"
  } else if ($('#i-iswatchapp').prop("checked")) {
    app.type = "watchapp"
  } else {
    buildError("Must select app type", "watchapptype");
    return;
  }

  if ($('#i-iswatchapp').prop("checked")) {

    if (appcat == null || appcat == "") {
      buildError("Must select app category", "watchcat");
      return;
    } else {
      app.category = appcat
    }

  } else {
    app.category = "Faces"
  }

  if ($('#i-appdesc').val() == null || $('#i-appdesc').val() == "") {
    buildError("App description cannot be blank", "i-appdesc");
    return;
  } else {
    app.description = $('#i-appdesc').val();
  }

  if ($('#i-apprelnotes').val() == null || $('#i-apprelnotes').val() == "") {
    buildError("Release notes cannot be blank", "i-apprelnotes");
    return;
  } else {
    app.releasenotes = $('#i-apprelnotes').val();
  }

  if ((app.type == "watchapp") && (images["i-icon-1"] == null || images["i-icon-1"] == "")) {
    buildError("Large icon is required for watchapp", "i-icon-1");
    return;
  } else {
    app.icons = {};
    app.icons.large = images["i-icon-1"];
  }

  if ((app.type == "watchapp") && (images["i-icon-2"] == null || images["i-icon-2"] == "")) {
    buildError("Small icon is required for watchapp", "i-icon-2");
    return;
  } else {
    app.icons.small = images["i-icon-2"];
  }

  app.screenshots = {};
  app.screenshots.aplite = [];
  app.screenshots.basalt = [];
  app.screenshots.chalk = [];
  app.screenshots.diorite = [];
  app.screenshots.emery = [];
  //app.screenshots.emery will always be blank :'(

  if ($('#i-sw-usesamescreenshots').prop("checked")) {

    //Use different screenshots

    var totalScreenshots = 0;
    //aplite
    if (images["i-scr-aplite-1"] != null && images["i-scr-aplite-1"] != "") {
      for (i = 1; i < 6; i++) {
        if (images["i-scr-aplite-" + i] != null && images["i-scr-aplite-" + i] != "") {
          app.screenshots.aplite.push(images["i-scr-aplite-" + i]);
          totalScreenshots += 1;
        }
      }
    }
    //basalt
    if (images["i-scr-basalt-1"] != null && images["i-scr-basalt-1"] != "") {
      for (i = 1; i < 6; i++) {
        if (images["i-scr-basalt-" + i] != null && images["i-scr-basalt-" + i] != "") {
          app.screenshots.basalt.push(images["i-scr-basalt-" + i]);
          totalScreenshots += 1;
        }
      }
    }
    //chalk
    if (images["i-scr-chalk-1"] != null && images["i-scr-chalk-1"] != "") {
      for (i = 1; i < 6; i++) {
        if (images["i-scr-chalk-" + i] != null && images["i-scr-chalk-" + i] != "") {
          app.screenshots.chalk.push(images["i-scr-chalk-" + i]);
          totalScreenshots += 1;
        }
      }
    }
    //diorite
    if (images["i-scr-diorite-1"] != null && images["i-scr-diorite-1"] != "") {
      for (i = 1; i < 6; i++) {
        if (images["i-scr-diorite-" + i] != null && images["i-scr-diorite-" + i] != "") {
          app.screenshots.diorite.push(images["i-scr-diorite-" + i]);
          totalScreenshots += 1;
        }
      }
    }

    if (totalScreenshots < 1) {
      buildError("At least one screenshot must be provided");
      return;
    }

  } else {

    //Use the same screenshots
    if (images["i-scr-a-1"] == null || images["i-scr-a-1"] == "") {

      buildError("At least one screenshot is required", "i-scr-a-1");
      return;

    } else {

      for (i = 1; i < 6; i++) {
        if (images["i-scr-a-" + i] != null && images["i-scr-a-" + i] != "") {
          app.screenshots.aplite.push(images["i-scr-a-" + i]);
          app.screenshots.basalt.push(images["i-scr-a-" + i]);
          app.screenshots.chalk.push(images["i-scr-a-" + i]);
          app.screenshots.diorite.push(images["i-scr-a-" + i]);

        }
      }

    }

  }

  if (app.type == "watchface") {
    //Use screenshot as large icon
    app.icons = {};
    if ($('#i-sw-usesamescreenshots').prop("checked")) {
      app.icons.large = images["i-scr-basalt-1"];
    } else {
      app.icons.large = images["i-scr-a-1"];
    }
  }

  if ((images["i-ban"] == null || images["i-ban"] == "")) {
    //Throw an error only if watchapp. They are optional for faces
    if (app.type == "watchapp") {
      buildError("A banner is required for watchapps", "i-icon-2");
      return;
    }
  } else {
    app.header = images["i-ban"];
  }



  //We've assembled the data, generate the yaml
  //Could use a library, but I don't want to

  var yaml = "";
  var pbwfile = $('#i-f-pbw').val().split("\\")[2]

  yaml = yaml + "mode: new\n"
  yaml = yaml + "pbw_file: " + pbwfile + "\n"
  yaml = yaml + "header: banners/Banner.png\n"

  app.description = "  " + app.description.replace(/\n/g,"\n  ");
  yaml = yaml + "description: |\n" + app.description + "\n"

   yaml = yaml + "assets:\n"
  yaml = yaml + "-\n"
  yaml = yaml + "  name: aplite\n"
  yaml = yaml + "  screenshots:\n"
  for (var i = 0; i < app.screenshots.aplite.length; i++) {
    yaml = yaml + "    - screenshots/screenshot-aplite-" + i + ".png\n"
  }
  yaml = yaml + "-\n"
  yaml = yaml + "  name: basalt\n"
  yaml = yaml + "  screenshots:\n"
  for (var i = 0; i < app.screenshots.basalt.length; i++) {
    yaml = yaml + "    - screenshots/screenshot-basalt-" + i + ".png\n"
  }
  yaml = yaml + "-\n"
  yaml = yaml + "  name: chalk\n"
  yaml = yaml + "  screenshots:\n"
  for (var i = 0; i < app.screenshots.chalk.length; i++) {
    yaml = yaml + "    - screenshots/screenshot-chalk-" + i + ".png\n"
  }
  yaml = yaml + "-\n"
  yaml = yaml + "  name: diorite\n"
  yaml = yaml + "  screenshots:\n"
  for (var i = 0; i < app.screenshots.diorite.length; i++) {
    yaml = yaml + "    - screenshots/screenshot-diorite-" + i + ".png\n"
  }

  yaml = yaml + "category: " + app.category + "\n";
  if (app.type == "watchapp") {
    yaml = yaml + "large_icon: icons/Large.png\n"
    yaml = yaml + "small_icon: icons/Small.png\n"
  } else {
    yaml = yaml + "large_icon: icons/Large.png\n"
  }
  if (app.hasOwnProperty("developerID")) {
    yaml = yaml + "developer_id: " + app.developerID + "\n"
  }
  yaml = yaml + "title: " + app.title + "\n";
  yaml = yaml + "source: " + app.source + "\n";
  yaml = yaml + "type: " + app.type + "\n";
  yaml = yaml + "website: " + app.website + "\n";
  app.releasenotes = "  " + app.releasenotes.replace(/\n/g,"\n  ");
  yaml = yaml + "release_notes: |\n" + app.releasenotes + "\n";

  //yaml complete, build the .zip

  var zip = new JSZip();

  zip.file("build.yaml", yaml);
  zip.file(pbwfile, app.pbw, {base64: true})

  var ban = zip.folder("banners");
  ban.file("Banner.png", app.header, {base64: true});

  var icon = zip.folder("icons");
  if (app.icons.large != null && app.icons.large != "") {
    icon.file("Large.png", app.icons.large, {base64: true});
  }

  if (app.icons.small != null && app.icons.small != "") {
    icon.file("Small.png", app.icons.small, {base64: true});
  }

  var img = zip.folder("screenshots");

  for (var i = 0; i < app.screenshots.aplite.length; i++) {
    var n = i+1;
    img.file("screenshot-aplite-" + i + ".png", app.screenshots.aplite[i], {base64: true});
  }
  for (var i = 0; i < app.screenshots.basalt.length; i++) {
    var n = i+1;
    img.file("screenshot-basalt-" + i + ".png", app.screenshots.basalt[i], {base64: true});
  }
  for (var i = 0; i < app.screenshots.chalk.length; i++) {
    var n = i+1;
    img.file("screenshot-chalk-" + i + ".png", app.screenshots.chalk[i], {base64: true});
  }
  for (var i = 0; i < app.screenshots.diorite.length; i++) {
    var n = i+1;
    img.file("screenshot-diorite-" + i + ".png", app.screenshots.diorite[i], {base64: true});
  }


  zip.generateAsync({type:"blob"}).then(function(content) {
    // see FileSaver.js
    saveAs(content, app.title.replace(/\s/g,'') + ".zip");

    $('#buildbtn').removeClass("btn-primary");
    $('#buildbtn').addClass("btn-success");
    $('#buildbtn').html("Success! Downloading .zip");
    $('#finishedModal').modal("show");
    setTimeout(function () {
      $('#buildbtn').removeClass("btn-success");
      $('#buildbtn').addClass("btn-primary");
      $('#buildbtn').html("Build zip package");
    }, 5000);
});

  // $("body").html(JSON.stringify(app))

}

function explain(txt) {
  var exp = {};
  exp.appname = {title: "App Name", subtitle: "The name of the application.", more: "The display name in the app store.", opt: false}
  exp.appstore = {title: "Appstore Link", subtitle: "On <a href='https://apps.rebble.io/' target='_blank'>apps.rebble.io</a>", more: "A link to the appstore listing for the app you want to update", opt: false }
  exp.websiteurl = {title: "Website URL", subtitle: "An optional link to your website, or a page about the face.", opt: true}
  exp.sourcecodeurl = {title: "Source code URL", subtitle: "An optional link to the source code repository, if available.", opt: true}
  exp.apptype = {title: "App type", subtitle: "Watchapp or Watchface.", more: "Watchfaces don't require icons, watchapps require icons and a category.", opt: false}
  exp.category = {title: "Watchapp category", subtitle: "For watch apps only.", more: "Used for categorisation in the store. <br><a href='https://developer.rebble.io/developer.pebble.com/assets/images/guides/appstore-publishing/app-category.png'>Click here</a> for a description of each category.", opt: false }
  exp.appdescription = { title: "Description", subtitle: "A description of the watchface or app.", more: "Used in the appstore.", opt: false}
  exp.releasenotes = { title: "Release Notes", subtitle: "A description of what is new in this release.", more: "Useful for updating users on changes.", opt: false}
  exp.largeicon = { title: "Large icon", subtitle: "Used in the appstore.", more: "Required for watch apps only.", opt: false}
  exp.smallicon = { title: "Small icon", subtitle: "Used in the pebble app applocker.", more: "Required for watch apps only.", opt: false}
  exp.screenshots = { title: "Screenshots", subtitle: "At least one required.", more: "You can use different screenshots per platform, or the same for all.", opt: false}
  exp.banner = { title: "Appstore Banner", subtitle: "A banner advert used in the store.", more: "Make it nice and eye-catching.", opt: false}
  exp.developerID = { title: "Developer ID", subtitle: "Your developer ID. This ties your apps and watchfaces to you.", more: "If you don't provide one, a new one will be generated for you.", opt: true}

  if (exp[txt] != null) {
    $('#helpModalLabel').html(exp[txt].title);
    $('#helpModalDesc').html(exp[txt].subtitle)
    if (exp[txt].more != null) {
      $('#helpModalMore').html(exp[txt].more)
    } else {
      $('#helpModalMore').html("")
    }
    $('#helpModal').modal("show");
  }
}
