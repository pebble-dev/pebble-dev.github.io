---
layout: post
title: "It's Timeline time!"
date:   2019-07-24 12:34:56
# categories: community
author: "Joshua Wise"
alt-bio: "https://joshuawise.com"
---

Hi there!  Long time, no talk.  Sorry for the silence, but I assure you that
one year on, we're alive and well, and we've got great things to share!
This is the first of two posts coming your way -- in the next post, we'll
talk about the :sparkles: shiny future of Rebble :sparkles:, but for now, we
have an exciting announcement, and that is:

You guessed it, it's finally time: Timeline time, to be specific!  We've been talking about it for a year now,
and thanks to the heroic effort of [Maxim
Teryokhin](https://github.com/teryokhin), Timeline is back up and running! :heart_eyes:
If you loved apps like [Note to Self](https://apps.rebble.io/en_US/application/56231c63ade802b29d00002b), they're ready to roll again on your
wrist.  We've spent the last few weeks carefully setting it up and testing
it on RWS for everyone to use, and we're so excited to announce that it's
ready.  Timeline by now should have rolled out to all subscribers, and
client-side timeline apps should work for you!  We're still rolling it out
to non-subscribers -- for more information on that, and on timeline apps
that depend on a server, and, heck, a few other things we've done in the
intervening time, read on below the fold.
<!--more-->

## Timeline rollout

You can tell if Timeline has hit your account yet by [checking your account
page](https://auth.rebble.io/account/).  If you see a line item, "Timeline
sync interval", your account has Timeline enabled, and the next time your
phone updates services, it'll be ready to go!  (If you see the "Timeline
sync interval" line, and pins don't seem to ever make it into your Timeline,
you can try [rerunning the initial setup](https://boot.rebble.io).  And, if
you are getting errors from Timeline apps, then try uninstalling and
reinstalling the watchapps in question from inside the Pebble app on your
phone, so that you get the patched versions!)

All subscribers should have access to Timeline now.  To make sure our
servers stay happy and healthy, Timeline will be rolled out to
non-subscribers over the course of about a week, so keep checking in
periodically!  (Of course, if you want access to Timeline *right now*,
[subscribing](https://auth.rebble.io/account/) will instantly enable it for
your account, and we'd love to have your support!)

## Timeline sync

Believe it or not, Timeline is one of the more expensive services we offer,
because everybody's phone has to check in regularly to see if there are new
pins.  Subscribers get the added benefit of being able to check in every
half an hour for new Timeline events, but everybody gets to use Timeline,
even if you're not a subscriber -- non-subscriber pins will sync every three
hours, instead.  We're working on ways to "opt in" to more frequent Timeline
checks for power users -- stay tuned for that!

## Server-side Timeline apps

There are really two categories of Timeline apps: apps that post pins to your Timeline directly from your phone ("phone-side Timeline apps"), and apps that post pins from the web.  We've automatically fixed up all the phone-side ones we could find -- all 100 or so of them -- but for apps that post pins to your Timeline from the web, the developers of those will have to do the patching.  Luckily, the change is simple: all a developer has to do is change the endpoint that you post to from `https://timeline-api.getpebble.com` to `https://timeline-api.rebble.io`.  App developers, get in touch with us if you have any questions -- and users, if an app you want doesn't work yet, gently remind the developer that we're alive and well, and that we'd love to have them aboard!

One thing that we currently don't support is Timeline topics.  (Topics were a way that a developer could broadcast an event without having to name each of the users that cared about that event, and users could subscribe to an event.)  It's not fundamentally impossible to do that, but we haven't implemented it yet; if you're a developer who really wants that functionality again, get in touch and we'll talk!

## Subscription renewal

Some of you might have gotten an e-mail that your credit card has expired,
without information on what to do about it.  Never fear, Rebble is still
here!  Go to [your account page](https://auth.rebble.io/account/), and click
'Unsubscribe', and then just subscribe again.  If you have any time left on
your subscription, it'll automatically carry over until your next
subscription begins.  If you run into any problems with billing, just reply to the receipt that you got from Stripe, or reach out to us on Discord, and we'll be happy to get you all
squared away!

## Dictation on iOS

Now that [Note to Self](https://apps.rebble.io/en_US/application/56231c63ade802b29d00002b) is back, you might be wondering -- what ever
happened with dictation on iOS 11 and up?  The answer is: we have a fix! :microphone:
Now, when you connect your watch to a Rebble-activated phone, a firmware
update will get sent to your Pebble that fixes dictation on iOS 11.  Hooray!
(Note that this still won't get you "send text" functionality; that requires
phone carrier agreements that we're not quite so keen on. :no_mobile_phones:)

## Hey, where'd the Android app go?

Some of you may have noticed that the Android app is no longer on the Play
Store.  That's true!  A while ago, Google changed some requirements around
for apps that use SMS on the Play Store, and the Pebble app didn't make the
cut.  Don't worry -- the app still works just fine, you just have to
download it from somewhere else!  You can [download it from
APKMirror](https://www.apkmirror.com/apk/pebble-technology-corp/pebble/pebble-4-4-2-1405-62d45d7d7-endframe-release/pebble-4-4-2-1405-62d45d7d7-endframe-android-apk-download/download/),
and you'll be right as rain to run Rebble on your new Android phone.

## Coming up soon

Ok, that's all from me for right now about the most important updates in the
recent past.  But what's that?  Are we looking... to the FUTURE??  You bet
that there's more where that came from!  Coming up soon: a bright
sustainable future for the Rebble Alliance! :rocket:

And, of course, we enjoy talking to Pebblers who still love their devices just like we do.  So if you have any questions, or just want to say hi, come [visit us on Discord](http://discord.gg/aRUAYFN) -- we'd love to have you join the party!
