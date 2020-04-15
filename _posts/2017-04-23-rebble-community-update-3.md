---
layout: post
title: "Rebble Community Update 3"
date:   2017-04-23 11:42:42
# categories: community
author: "Ish Ot Jr."
---

*"Where is my Rebble Community Update?"* [the people cry](https://www.reddit.com/r/pebble/comments/66w4h0/rebble_update/)!  At last, it is here, and this time, rather than the typical broad yet shallow summary, we thought we'd take a closer look at a particular area of import: [firmware](http://rebble.io/projects/#firmware).  Familiarize yourself with our feats in this forward-looking firmware-focused feature.  If you'd like to add something, [send us a tweet](https://twitter.com/pebble_dev), or better still, [submit a pull request](https://github.com/pebble-dev/pebble-dev.github.io/pulls)! :bowtie:  

## Firmware

While the Pebble/Rebble ecosystem is comprised of many parts: [hardware](http://aion.watch/), [appstore](http://store.rebble.io/), [mobile apps](https://github.com/pebble-dev/android-store-app), watchapps/watchfaces and more - one of the most critically important pieces in terms of keeping existing hardware alive is developing replacement firmware.  Since the original Pebble firmware was not open source, and is owned by Fitbit, this unfortunately means starting from scratch.  Not *completely* from scratch, since the [FreeRTOS](http://www.freertos.org/) operating system on which Pebble OS is based can be leveraged, and moreover an [example implementation supporting the `STM32F4` family of microcontrollers](https://github.com/wangyeee/STM32F4-FreeRTOS) on which the Pebble Time and subsequent hardware is based was able to serve as a basis for exploration of Pebble's specific hardware implementation(s).  

Part of the reason that an update has not been forthcoming is due to the continual advances being made, so that each milestone at which sharing seemed appropriate ended up being dwarfed by additional progress made before it had even been possible to share the last!  Here's a detailed breakdown of where things are today (who knows how much further along they'll be tomorrow!):  

### Software

Beyond the low-level hardware interfacing work, there is a lot of software that has to be written before "basic" functionality such as drawing shapes and text is possible.  With this in mind, [@jneubrand](https://github.com/jneubrand) began work on [neographics](https://github.com/pebble-dev/neographics), an open-source replacement for Pebble's [graphics routines](https://developer.pebble.com/docs/c/Graphics/), long before there existed firmware sufficiently advanced to support it.  [@ginge](https://github.com/ginge) was then able to drop this code into the firmware, once low-level display support had been developed, and the combination of graphics primitives, fonts, and now image loading (once the various palletised PNG bit-depth formats had been accounted for) allowed for the working system app and even watchfaces seen here:  

<div class="image-gallery">
	<img src="https://i.imgur.com/Yk2Ug2z.png" alt="RebbleOS system app menu">
	<img src="https://i.imgur.com/Eowb3qB.png" alt="RebbleOS - Simple clock">
	<img src="https://i.imgur.com/OCFTsh5.png" alt="RebbleOS - Simply Squares">
	<br>
	<em>see <a href="https://imgur.com/a/idc75">@ginge's RebbleOS gallery</a> for more / ongoing updates!</em>
</div>  

[@NiVZ78](https://github.com/NiVZ78) created the *Simply Squares* watchface depicted above, to which @ginge added colour, as a way for RebbleOS to show off its new capabilities.  While we're not yet able to dynamically load watchfaces (what's pictured, while being a legitimate watchface, still had to be compiled into the firmware), extensive new API support means that the following app-enabling features are now available in Rebble OS:  

* Graphics (drawing, lines, fill, etc)
* Layers
* Bitmap layers
* Text layers
* Bitmap API
* Sub bitmap
* Text / Pebble fonts

### Hardware

@ginge's focus has been on `Snowy`, more commonly known by those not actively involved in firmware development as *Pebble Time*.  `Snowy` support has begun to extend beyond the basics, including the ability to access the external flash, enabling resources, fonts, and images to be utilized.  The I2C interface to the [Maxim `MAX14690EWX`](https://github.com/pebble-dev/datasheets) has been implemented, as has the ambient sensor, though it is currently unused due to experiments in dynamic dimming not having gone particularly well.  Backlight has come on strong (then gradually faded!), however, as evidenced in [this video](https://www.youtube.com/watch?v=nL7yJtKUJLk).  

`Tintin`, more commonly referred to as *Pebble Classic* or *OG* now has basic platform support as well, including support for its display, thanks to a number of contributions from [@jwise](https://github.com/jwise) - although the lack of flash support means no graphics.  @jwise also did wonders with the [`Makefile`](https://github.com/ginge/FreeRTOS-Pebble/blame/master/Makefile) and build process, facilitating testing and contribution from others (there was a magical moment earlier this week when a new contributor posted a picture of the firmware running on actual hardware within a day of his first introduction into the community!).  

### The Road Ahead

As exciting as everything we've been able to demonstrate so far is, there's still a lot to do!  Power management for example - the hardware is currently running at full speed, resulting in battery life of around five hours - and that's without all peripherals even having support yet.  Other basics such as a viable Bluetooth stack are still all to do, although [@XDjackieXD](https://github.com/XDjackieXD) has begun investigating solutions.  A casual list of remaining `TODO`s can be found on the repo's [wiki](https://github.com/ginge/FreeRTOS-Pebble/wiki).  Embedded engineers, especially those with FreeRTOS experience, would be more than welcome to join our efforts if you're interested! :bowtie: :heart:

Hopefully you found this detailed look at the state of Rebble firmware insightful and informative.  If you have questions or would like to get involved, come and find us in the `#firmware` channel on  [Discord](http://discord.gg/aRUAYFN)!  

## News and Miscellany

* The fabulous folks at Fitbit have [released updated versions of the Android and iOS Pebble apps](https://developer.pebble.com/blog/2017/04/04/transitisoning-update/#new-options-for-community-developers) which aim to free Pebble devices from existing tethers to cloud-based services; the most exciting part of this is added support for `pebble://custom-boot-config-url/CUSTOM_URL` - essentially a direct gift to Rebble, allowing us to override and replace the official appstore when it goes offline (which we'd [already made strides towards](https://github.com/pebble-dev/wiki/wiki/Appstore), but official support is especially appreciated! :heart_eyes:)
* Keep an eye on the [Status page](https://rebble.io/status/) - while we originally intended for this to be a summary of how Pebble's backend services' availability would impact usage of our devices, we're planning on expanding it to convey at-a-glance summaries of our own project and services' status, as a way to provide updates between...Updates! :sweat_smile:
* Our good friends at [Engineerable](https://twitter.com/engineerable) are offering members of the Rebble community $20 savings on any [TimeDock](https://www.thatthingyoulove.com/products/timedock-charging-dock-for-pebble-time-and-pebble-time-steel) order with discount code `Rebble`! :gift_heart:
