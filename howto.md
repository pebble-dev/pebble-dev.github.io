---
layout: text-page
title: "HOWTO"
date:   2019-02-11 21:56:42

permalink: /howto/
---

## Getting started using Rebble Web Services

### On iOS

So, you got yourself a Pebble, and found that you need something like Rebble to get it going. Ok, let's go!

Part one: connect the watch to the phone.

* Connect your Pebble to the plugged in USB charging cable. You really don't want it to loose power in the middle of a firmware update! The watch powers up. Press the left button to dismiss the charging screen.
* If you now see a clock face, it means that your Pebble is still configured, maybe by the previous owner, maybe by you. If you used it before, now is the time to write down the watchfaces and apps you want to reinstall after this procedure is done.
* If you see a clock face, press middle right button, go to settings, then system, and choose factory reset. This might take a few minutes.
* Get your iPhone and install the [Pebble app from the App store](https://itunes.apple.com/en/app/pebble/id957997620?mt=8). Then, start the app.
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
* You are greeted with a number of ways to sign in. Choose one and sign in. **Remember your sign in credentials!** You will return to the Rebble site, and are greeted with "You're all set!". Read the page, then tap the "get started now" link in the first paragraph.
* You are redirected to [boot.rebble.io](https://boot.rebble.io/), and are greeted with "Here we go!". Read the page, then tap the "switch to rebble" button. Safari asks if you want to open it with Pebble. Tap "Open".
* The Pebble app opens, and gives a popup "Configuration Change". Tap "Change".
* Now, wait at least 15 seconds before you go to the next step.
* Meanwhile, in the top left corner, a yellow exclamation mark appeared. Tap it.
* You get to a screen titled "Fixes" and "Logged out". Tap "log in".
* You get to a screen "Pebble Account" and "Welcome to Rebble". Tap "IT'S REBBLE TIME!"
* You're done! Go to "Watchfaces", choose "Get Watchfaces" and find and install watchfaces you like from the Rebble store.

Part two can also be seen in [our video](https://www.youtube.com/watch?v=8Z4Jtl_0UMw).

### On Android

Part one: connect the watch to the phone. This procedure is basically the same as for iOS. Notable exception for part 1:
* Install the [Pebble app from the Play store](https://play.google.com/store/apps/details?id=com.getpebble.android.basalt).

Part two: connect the Pebble app to Rebble Web Services.

* On the phone, open the default browser (most likely Chrome), and go to [auth.rebble.io](https://auth.rebble.io/).
* You are greeted with a number of ways to sign in. Choose one and sign in. **Remember your sign in credentials!** You will return to the Rebble site, and are greeted with "You're all set!". Read the page, then tap the "get started now" link in the first paragraph.
* You are redirected to [boot.rebble.io](https://boot.rebble.io/), and are greeted with "Here we go!". Read the page, then tap the "switch to Rebble" button. The browser asks if you want to open it with Pebble. Tap "Open".
* The Pebble app opens. One of three things will then happen:
* * A Rebble screen will appear. It may have an orange spinner above it; you may ignore this.
* * The old Pebble login screen will appear. If this happens, close the app from the app switcher and open it again. A Rebble screen should now appear.
* * Nothing. If this happens, tap ⋮ in the top right corner, then tap Settings. At this point, either:
* * * A Rebble screen will appear, or
* * * Nothing interesting. In this case, scroll down to "ACCOUNT" and make sure you are logged out. If not, tap it to log out. Now, tap to log in. A Rebble screen should appear.
* In any case, once you tap the button on the Pebble app's "Welcome to Rebble" screen, you are done!
* If your Pebble disconnects, just tap the usual connect button.
* You're done! Go to "Watchfaces", tap the big red "+" in the lower right corner and find and install watchfaces you like from the Rebble store.

### Weather and dication services

So, you started using the Rebble Web Services, but want to add the paid plan for weather and dictation. There are a few things to consider, before you order it:
* On iOS, replying to text messages isn't possible. This is a limitation from iOS. So, dictation will NOT add spoken replies to text messages.
* Weather services is solely for the native Pebble weather app and for weather info in timeline. Watchfaces and 3rd party apps that offer weather info, have their own means to fetch weather info. You don't need the Rebble paid plan for them.
* Payment is handled by Stripe, which only offers payment by credit card.

Still want it? Let's go!
* Open the default browser on your phone and head to [Rebble Account](https://auth.rebble.io/account/).
* **Very important: make sue you are signed in with the same account you used when you first made the switch to Rebble!**
* Choose your plan ($3.00/month or $33/year).
* You are forwarded to Stripe. Enter your card info and finish the payment.
* You are redirected to the Rebble site. Voice / Weather subscription should now be **Active**.
* In the last paragraph, tap the "repeat the initial setup" link. Then, follow the rest of the procedure for stap 2 above.

In the Pebble app, under Apps, the app "The Weather Channel" should now be there. Tap the gear button to configure it to your needs.

## Common issues

### Cannot add watchface, store says its added, but it's not on the phone of watch

Sometimes, the locker gets out of sync with reality. To get it back in sync, do this:
* Start the default browser of your phone and head to [the Rebble app store on the web](https://apps.rebble.io/en_US/watchfaces?dev_settings=true).
* Find the watchface or app and tap it.
* On the bottom, tap "download pwb".
* Open the file with the Pebble app.
* The Pebble app opens, and asks to install the watchface or app. Tap "OK".

Now, the watchface or app is installed, and the locker is no longer out of sync for this watchface. You might have to repeat this for every watchface or app that shows this behaviour.

### On Android (9.0+), incoming calls are displayed on the watch as "Unknown caller"

In order to fix "Unknown caller" or altogether missing notifications on incoming calls for Pebble paired with Android 9.0 devices, there is a workaround with Dialer for Pebble app:
* Install [Dialer for Pebble](https://play.google.com/store/apps/details?id=com.matejdro.pebbledialer) companion app and a respective App for Pebble.
* Go to your Pebble App > Notifications tab and Disable notifications for Phone Calls.
* Go to Dialer for Pebble app on your phone and enable Call Popup for Incoming and Outgoing calls.
* Make sure Dialer for Pebble app has system permissions to access Contacts, Cal Log, Dialer and SMS on your phone.

This should fix the issue. In case if Dialer for Pebble works inconsistently, make sure it runs in background both on your Pebble and on you Phone.

## More help

Join us on the *officially* unofficial [Pebble Dev Discord server](http://discord.gg/aRUAYFN), then head to `#rebble-help` and post your issue!
