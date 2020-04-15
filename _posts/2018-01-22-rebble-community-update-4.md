---
layout: post
title: "Rebble Community Update 4: Love and Rockets!"
date:   2018-01-22 11:42:42
# categories: community
author: "Ish Ot Jr."
---

Welcome to the first *Rebble Community Update* of 2018! :heart: :rocket:  One of [my](https://twitter.com/IShJR) most important roles in the Rebble project is *Lead Emoji Sprinkler*, which requires fastidious monitoring of the [Rebble Discord](http://discord.gg/aRUAYFN) to ensure that all comments indicating progress or good will are met with a swift :rocket: or :heart: respectively - and lately the emoji have been flowing liberally as the firmware team's progress continues to :rocket: thanks to the prodigious output of new and old [contributors](https://github.com/ginge/FreeRTOS-Pebble/graphs/contributors) alike.  Daren't delay divulging details of the downright deluge of development deeds!  As always, if you'd like to add something, [send us a tweet](https://twitter.com/pebble_dev), or better still, [submit a pull request](https://github.com/pebble-dev/pebble-dev.github.io/pulls)! :bowtie:  
<!--more-->
## Firmware

### Contributing

Do you know how simple it is to build the firmware and run it in an emulator?  If you're a Pebble developer with all of the standard tools already in place, building and running the firmware in an emulator is as simple as:  

* cloning the [repo](https://github.com/ginge/FreeRTOS-Pebble#building)
* [copying the resources](https://github.com/ginge/FreeRTOS-Pebble/blob/master/Utilities/mk_resources.sh) and firmware blob *(see pinned resources in `#firmware` on [Discord](https://discord.gg/aRUAYFN))*
* running `make snowy_qemu`

This will launch `QEMU` and you'll see something like this:  

![RebbleOS QEMU](/images/community-update/Screenshot_2018-01-22_23.53.31.png "it's that easy!")

which is the actual RebbleOS firmware running on your machine! :muscle:  

Once you're up and running with the firmware, you can be like [@CTKRocks](https://github.com/CTKRocks), [@TerttyCurlyfries](https://github.com/TerttyCurlyfries), [@Stubenhocker1399](https://github.com/Stubenhocker1399) and [@zbsz](https://github.com/zbsz) and work alongside [@ginge](https://github.com/ginge) and [@jwise](https://github.com/jwise) to flesh out the UI, system apps, and OS functionality.  Contributing to an *operating system* might seem intimidating - but developers of all levels can make meaningful contributions to RebbleOS!  

If you're not a developer, you can help by testing and [reporting issues](https://github.com/pebble-dev/RebbleOS/issues), creating graphical assets, or assisting with [documentation](https://github.com/ginge/FreeRTOS-Pebble#rebbleos) or [the wiki](https://github.com/pebble-dev/wiki/wiki).  We're feeling a lot of this out as we go as well, and we're excited to have you come and learn alongside us.  So don't be shy -- we'd love to have you come and [join us](https://discord.gg/aRUAYFN), no matter who you are! :sparkling_heart:  



### Status

So, what's new?  Here's some highlights:  

#### Real, working watchfaces and watchapps

Previously, the watchfaces you saw were all [baked into the firmware](https://rebble.io/2017/04/23/rebble-community-update-3.html) -- everything had to be compiled in with the OS.  We've added preliminary support for reading the Pebble filesystem, so you can see the apps that PebbleOS installed on the watch; and, to our surprise, some of them even run!  We're working on adding more features and more API compatibility every day! :soon:  

#### Notifications, scrolling, and status bar

A big step towards making your watch look and feel like a watch!  Thanks especially to [@CTKRocks](https://github.com/CTKRocks) and [@Stubenhocker1399](https://github.com/Stubenhocker1399) who have worked hard to get the UI [looking beautiful](https://drive.google.com/file/d/124C5KEZH6i2efAuxmFqJVaqp8sJVrXMo/view?usp=sharing). :sparkles:  

#### Initial `chalk` (Pebble Time Round) support

RebbleOS was designed to support multiple different types of watches, and [now `chalk` builds in the same tree](https://drive.google.com/file/d/1jaShT80CXJJazQMBo4HKsM8pEwRawRmd/view?usp=sharing) as our beloved `snowy`.  If you're interested in getting RebbleOS working on `tintin`, we'd love to have your help, too! :family:  

#### Rebble logo splash screen!

![Rebble logo splash](/images/community-update/Peek_2018-01-23_12-55.gif "Rebble logo splash is awesome!")

Take a look at the [closed PRs](https://github.com/ginge/FreeRTOS-Pebble/pulls?q=is%3Apr+is%3Aclosed) and [commit history](https://github.com/ginge/FreeRTOS-Pebble/commits/master) on GitHub for more detail... :sweat_smile:  

*Please note: this is alpha firmware and while all this stuff may look pretty cool, it's not to the point where you're going to be wearing it on your wrist daily yet! (for example, the battery won't last that long until we take a serious look at power management!)* :sweat_smile:  

One fundamental challenge in working with the Pebble has been Bluetooth communication, which is critical to meaningful operation since most Pebble functionality requires the device to be able to talk to your phone.  Firmware superhero [@ginge](https://github.com/ginge) has now overcome this challenge as demonstrated in this [newly-released video of real notifications being sent to a RebbleOS-powered Pebble from a PC via Bluetooth](https://youtu.be/SZ2l1pTfuZA)! :heart_eyes: :rocket:  

***Breaking: [an even newly-er released video of notifications being sent via Gadgetbridge](https://youtu.be/36Vs-G1-1D0)!*** *(friends of Rebble - [check them out!](https://github.com/Freeyourgadget/Gadgetbridge/wiki/Pebble))*  

### OK but why?

I'm glad you asked - actually [@jwise](https://github.com/jwise) thought you might ask and I've paraphrased his thoughts and added some of my own:  

It's a fact that no new Pebble hardware is being produced, ever.  It's been over a year since [Pebble closed its doors](http://ishotjr.com/a-love-letter-to-pebble-and-the-pebble-community/) and as such there are a finite number of devices out there, and their ZEBRA connectors are going wonky, their cases are suddenly ingressing water, and their batteries are getting one charge closer to failure ~~each day~~ every 4-10 days.  But while Pebble hardware may remain frozen in time, technology marches on.  New versions of Android and iOS continue to be released, along with new hardware, and with every major release we all cringe and utter "will our Pebbles still work"?  Well that's part of why we're building new [apps](https://github.com/pebble-dev/android-store-app), [appstores](https://github.com/pebble-dev/rebble-store) and [firmware](https://github.com/pebble-dev/RebbleOS/issues) - but another exciting reason for creating our own open-source, [FreeRTOS](https://www.freertos.org/)-based OS is that it opens the door to [other Pebble fans](http://aion.watch) or even large smartwatch manufacturers in Shenzhen to build their own new hardware in the spirit of Pebble/Rebble! :sparkles:  

And that's pretty cool, don't you think? :sunglasses: :cool:  


## News and Miscellany

* ***This one's huge:*** Rebble weighs in at ***number 15*** in [Wareable's *50 wearable tech predictions for 2018*](https://www.wareable.com/wearable-tech/best-wearable-tech-2018-506) - ahead of Amazon, MIT, Microsoft, Nokia and...urm... *Neuroscience*?! :bowtie:
* [/u/RomanPort](https://www.reddit.com/user/RomanPort) has created [PebbleRipper](https://www.reddit.com/r/pebble/comments/7ow60m/making_progress_on_the_front_end_of_pebbleripper/), a handy tool for downloading `.pbw`s
* [@Helco](https://github.com/Helco) made [`pbw_api_info`](https://github.com/Helco/pbw_api_info) to help analyze which API functions are utilized by a `.pbw`
