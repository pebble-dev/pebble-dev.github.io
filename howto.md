---
layout: text-page
title: "HOWTO"
date:   2019-02-11 21:56:42

permalink: /howto/
---

## Start using Rebble

### On iOS

So, you got yourself a Pebble, and found that you need something like Rebble to get it going. Ok, let's go!

Part one: connect the watch to the phone.

* Connect your Pebble to the plugged in USB charging cable. You really don't want it to loose power in the middle of a firmware update! The watch powers up. Press the left button to dismiss the charging screen.
* If you now see a clock face, it means that your Pebble is still configured, maybe by the previous owner, maybe by you. If you used it before, now is the time to write down the watchfaces and apps you want to reinstall after this procedure is done.
* If you see a clock face, press middle right button, go to settings, then system, and choose factory reset. This might take a few minutes.
* Get your iPhone and install the [Pebble app](https://itunes.apple.com/en/app/pebble/id957997620?mt=8) from the app store. Then, start the app.
* You'll be greeted by a "Pebble Account" page. Simply tap the "Skip" in the top left corner to continue.
* Choose your language for voice input. Then, choose the type of Pebble you have. iOS asks for permission to use Bluetooth, choose "OK".
* The app starts looking for nearby Pebbles. It should shortly see your Pebble, as "Pebble xxxx". This same string can be seen on the Pebble, so you know the phone sees the right watch. Tap it.
* The watch asks to pair. Press the upper right button. Tap "Pair" on the phone.
* If the Pebble has an old firmware, it will now be updated. Keep the watch on the charging cable, and close to the phone. This will take a few minutes to complete, after that the watch will reboot.
* In the Pebble app, choose the language of the menu's, notifications and messages on the watch.
* Many Pebbles need to use a second Bluetooth connection. If you have one of those, the app now asks to pair the watch again. Tap "Enable", press the upper right button on the watch to pair, and tap "pair" on the phone.
* Tap "grant access", and tap accept if you want notifications from your phone to be sent to your watch.
* Tap "grant access", and tap accept always if you want your watch and apps on it to know where you are.
* Tap "grant access", and tap accept if you want you calendar items for the next couple of days appear on your watch.
* You're done. Well, the Pebble part is done. Tap "done".

Part two: connect the Pebble app to the Rebble Web Services.

* On the phone, open Safari, and go to [auth.rebble.io](https://auth.rebble.io/).
* You are greeted with a number of ways to sign in. Choose one (and remember which you chose) and sign in. You will return to the Rebble site, and are greeted with "You're all set!". Read the page, then tap the "get started now" link in the first paragraph.
* You are redirected to [boot.rebble.io](https://boot.rebble.io/), and are greeted with "Here we go!". Read the page, then tap the "switch to rebble" button. Safari asks if you want to open it with Pebble. Tap "Open".
* The Pebble app opens, and gives a popup "Configuration Change". Tap "Change".
* Now, wait at least 15 seconds before you go to the next step.
* Meanwhile, in the top left corner, a yellow exclamation mark appeared. Tap it.
* You get to a screen titled "Fixes" and "Logged out". Tap "log in".
* You get to a screen "Pebble Account" and "Welcome to Rebble". Tap "IT'S REBBLE TIME!"
* You're done! Go to "Watchfaces", choose "Get Watchfaces" and find and install watchfaces you like from the Rebble store.

Part two can also be seen in [our video](https://www.youtube.com/watch?v=8Z4Jtl_0UMw).

### On Android

Howto on Android

## Issues

### On Android (9.0+), incoming calls are displayed on the watch as "Unknown caller"

In order to fix "Unknown caller" or altogether missing notifications on incoming calls for Pebble paired with Android 9.0 devices, there is a workaround with Dialer for Pebble app:
* Install [Dialer for Pebble](https://play.google.com/store/apps/details?id=com.matejdro.pebbledialer) companion app and a respective App for Pebble.
* Go to your Pebble App > Notifications tab and Disable notifications for Phone Calls.
* Go to Dialer for Pebble app on your phone and enable Call Popup for Incoming and Outgoing calls.
* Make sure Dialer for Pebble app has system permissions to access Contacts, Cal Log, Dialer and SMS on your phone.

This should fix the issue. In case if Dialer for Pebble works inconsistently, make sure it runs in background both on your Pebble and on you Phone.

### Issue

Fix

## More help

Join us on the *officially* unofficial [Pebble Dev Discord server](http://discord.gg/aRUAYFN), then head to `#rebble-help` and post your issue!
