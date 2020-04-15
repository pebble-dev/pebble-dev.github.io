---
layout: post
title: "Rebble Community Update 2"
date:   2017-01-31 19:49:42
# categories: community
author: "Ish Ot Jr."
---

Welcome to the first *Rebble Community Update* of 2017!  Please peruse our paraphrased prospectus of progress over the preceding period.  If you'd like to add something, [send us a tweet](https://twitter.com/pebble_dev), or better still, [submit a pull request](https://github.com/pebble-dev/pebble-dev.github.io/pulls)! :bowtie:  

It's been over a month since our last update, though the lack of updates here belies the tremendous strides made across myriad projects!  While our early efforts concentrated heavily on investigation and reverse engineering, often manifesting as [wiki pages](https://github.com/pebble-dev/wiki/wiki) and rough proofs of concept, many projects are starting to mature into tangible, viable entities.  The Rebble Store now has a live, functional front end, with the required back end to support it well underway.  Firmware has moved beyond emulation and onto real hardware, with promising demos on both Pebble Time and Pebble Steel.  Replacement graphics libraries and fonts are being scratch-built for inclusion in upcoming firmware.  There have even been pics posted of what appears to be some kind of new Pebble-esque prototype!  Details, source code links, videos, and more below... :rocket:


## Appstore

* [@sGerli](https://github.com/sGerli), [@Zetaphor](https://github.com/Zetaphor), and [@mvaneijgen](https://github.com/mvaneijgen) have published a functional appstore front end at [http://store.rebble.io/](http://store.rebble.io/) :tada:
* [@frostyfrog](https://github.com/frostyfrog) and [@HenrydelMal](https://github.com/HenrydelMal) ported [@afourney](https://github.com/afourney)'s Python [bootstrap URI override](https://github.com/pebble-dev/wiki/wiki/Mobile-Application-URI-Bootstrap) to Go
* [@bbenne10](https://github.com/bbenne10) has been spearheading efforts on a [Python-based appstore back end](https://github.com/pebble-dev/rebblestore-api-python) using imported data from our archived appstore copy, and is currently laying the groundwork for authorization and user management


## Firmware

* [@ginge](https://github.com/ginge) has been focusing on [refactoring his FreeRTOS port](https://github.com/ginge/FreeRTOS-Pebble) recently, after implementing DMA for faster display refreshing, UART for smartstrap-based debugging, and making first contact with the power management IC and accelerometer; if you're not sure what all that means, [enjoy a nice video instead](https://www.youtube.com/watch?v=J7jF3eiRud0) :grin:
* after fully annotating the [IDA](https://www.hex-rays.com/products/ida/index.shtml) [database for the Pebble/Pebble Steel bootloader](https://github.com/jwise/pebble-idbs) from QEMU, [@jwise](https://github.com/jwise) now has a [checkerboard running on real Pebble Steel hardware](https://www.youtube.com/watch?v=7ObGakFxnSs), and is beginning to reverse the original Pebble's firmware binary
* [@jneubrand](https://github.com/jneubrand)'s [neographics](https://github.com/pebble-dev/neographics) library currently supports paths and primitives, with drawcommands in the works!
* [@jneubrand](https://github.com/jneubrand)'s new project, [Renaissance](https://github.com/pebble-dev/renaissance) - a replacement for the Gothic font - is underway! Community members who speak non-English languages (which are based on the Latin alphabet) are kindly asked to contact `@johannesn#4019` via [Discord](http://discord.gg/aRUAYFN) for proofreading. :heart: [@jneubrand](https://github.com/jneubrand) also created a fantastic [wiki page on the format](https://github.com/pebble-dev/wiki/wiki/Firmware-Font-Format) and is [looking for feedback on his ligature support proposal](https://github.com/pebble-dev/wiki/wiki/Firmware-Font-Format#ligatures-proposal)


## Mobile Apps

* [@KonradIT](https://github.com/KonradIT) has joined the [native Android app](https://github.com/pebble-dev/android-store-app) effort


## News and Miscellany

* [@juliendarrah](https://github.com/juliendarrah) and [@ishotjr](https://github.com/ishotjr) gave a sneak peek of their mysterious new hardware project in `#hardware` on [Discord](http://discord.gg/aRUAYFN)
* [rjndrx](https://twitter.com/rjndrx)'s [Simplications](https://www.kickstarter.com/projects/rajendra/simplications/description) Kickstarter campaign was successfully funded!
