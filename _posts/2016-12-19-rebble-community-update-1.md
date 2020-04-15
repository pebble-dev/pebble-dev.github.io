---
layout: post
title: "Rebble Community Update 1"
date:   2016-12-19 18:49:42
# categories: community
author: "Ish Ot Jr."
---

A cordial hello, and welcome, to our inaugural *Rebble Community Update*!  Herein lies a casual compendium of recent activity within the community.  If you'd like to add something, [send us a tweet](https://twitter.com/pebble_dev), or better still, [submit a pull request](https://github.com/pebble-dev/pebble-dev.github.io/pulls)! :bowtie:  

Not even two full weeks have passed since [Pebble announced their closure](https://blog.getpebble.com/2016/12/07/fitbit/), and already the community has made massive strides across all targets!  Documentation has flourished, with over 100 total commits to the wiki.  Scratch-built iOS and Android apps are underway, and the official iOS app has been successfully duped into loading the Rebble Store.  Speaking of the Rebble Store, the front end has been largely completed, while efforts to marry it to back end functionality are underway.  And apps themselves are free to roam thanks to MPUless firmware, while the firmware team also attacks from the other direction with scratch-built firmware and custom FreeRTOS capable of drawing to the Pebble Time's display.  Details and links to more information for these projects and more are included below.  

## wiki

* [@Jos635](https://github.com/Jos635) [explored and documented a number of Pebble APIs](https://github.com/pebble-dev/wiki/wiki/Appstore#api-info)
* [@XDjackieXD](https://github.com/XDjackieXD) documented [STM32 pin assignments](https://github.com/pebble-dev/wiki/wiki/Pin-Assignments) and [Pebble Time screen/FPGA communication](https://github.com/pebble-dev/wiki/wiki/Snowy-Screen)
* [@ginge](https://github.com/ginge) and [@jwise](https://github.com/jwise) documented [firmware disassembly](https://github.com/pebble-dev/wiki/wiki/Assorted-IDA-notes) with [IDA](https://www.hex-rays.com/products/ida/index.shtml)
* [@jwise](https://github.com/jwise) documented [firmware flashing from the CLI](https://github.com/pebble-dev/wiki/wiki/Firmware%3A-Flashing-from-a-computer) via [pebble REPL](https://developer.pebble.com/guides/tools-and-resources/pebble-tool/#pebble-interaction)

## Appstore

* [@sGerli](https://github.com/sGerli), [@Zetaphor](https://github.com/Zetaphor), and a team of web all-stars created a [demo appstore UI](http://rebble.io/The-Panic-Store/) and began implementing the [Vue.js framework](https://vuejs.org/) in order to allow integration with ongoing back-end development
* [@afourney](https://github.com/afourney) [documented the inner workings of the Pebble appstore](https://github.com/pebble-dev/wiki/wiki/Reverse-Engineering-the-Official-App-Store) and successfully [coaxed the stock iOS app into loading the Rebble appstore](https://github.com/pebble-dev/wiki/wiki/Appstore#new-host-your-own-app-appstore-in-the-pebble-ios-app) via [bootstrap URI override](https://github.com/pebble-dev/wiki/wiki/Mobile-Application-URI-Bootstrap)

## Firmware

* [@jwise](https://github.com/jwise) blazed a trail for further exploration with his [MPUless Pebble firmware](https://github.com/pebble-dev/wiki/wiki/MPUless-Pebble)
* [@ginge](https://github.com/ginge) ~~got tantalizingly close to the checkerboard by [drawing to the Pebble Time display via FPGA in his FreeRTOS port](https://github.com/ginge/FreeRTOS-Pebble)~~ *breaking: [successfully flashed a checkerboard on Pebble Time](https://youtu.be/_IiCGeqjdI4)!!!*
* [@jwise](https://github.com/jwise) wrote some [extremely tiny firmware](https://github.com/pebble-dev/ufw)

## Mobile Apps

* [@misato](https://github.com/misato) [successfully paired Pebble devices](http://blog.misato.es/2016/12/15/rebble-ios-day-2-pairing/) with her [native iOS app](http://blog.misato.es/category/desarrollo/pebble/)
* [@qichuan](https://github.com/qichuan)'s [native Android app](https://github.com/pebble-dev/android-store-app) is [able to consume Pebble API JSON](/images/community-update/Screenshot_20161219-223059.jpg)

## News and Miscellany

* [@mvaneijgen](https://github.com/mvaneijgen) created a [Rebble mascot](http://rebble.io/The-Panic-Store/404.html)
* [/u/PotatoFi](https://www.reddit.com/user/PotatoFi) can't stop making [Pebble icons](https://www.reddit.com/r/pebbledevelopers/comments/5i4h3k/ill_draw_a_free_icon_for_your_watchapp/)
* [@mileskjeller](https://github.com/mileskjeller) sorted us out with copious [Trello boards](https://trello.com/rebble)
* [@orviwan](https://github.com/orviwan) shared [Fitbit's commitment to the Pebble community](https://developer.pebble.com/blog/2016/12/14/first-steps-forward-with-fitbit/)
* [@patcat](https://github.com/patcat) wrote a fantastic piece about [what happened with Pebble and what will happen to its developer community](https://devdiner.com/wearables/what-happened-with-pebble-and-what-will-happen-to-its-developer-community)
