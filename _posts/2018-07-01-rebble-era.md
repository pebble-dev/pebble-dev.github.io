---
layout: post
title: "Ushering in the Rebble Era!"
date:   2018-07-01 14:14:14
# categories: community
author: "Ish Ot Jr."
---

It's a new day.  It's a new month (:ok_hand: :punch:).  But most importantly, it's a new era! :rocket:  It was over a year and half ago that [Rebble first put its stake in the ground](https://rebble.io/2016/12/09/rebble-pebble-reborn.html) as the unofficial spearhead organization for continuing the advancement of the Pebble platform in the absence of *Pebble Technology Corp.*  Re-reading that first blog post, a lot of the same feelings of fear, anxiety, resilience, and hope have been expressed in recent days as we make another transition - this time from *Pebble* web services to **Rebble Web Services**!  What does that mean?  Why is it necessary?  When is it happening?!  What do I need to do to participate??!  Read on, and all will be explained! :bowtie:  
<!--more-->
## Why RWS?

[Katharine](https://twitter.com/KatharineBerry) gave an [extensive overview of affected services and their impact in an earlier blog post](https://rebble.io/2018/02/15/rebble-web-services.html), so please peruse her detailed enumeration for complete insight, but the TL;DR is that Pebble's current functionality relies on a fairly extensive collection of online services, all of which were slated to be disabled after June 30th.  The particularly astute reader may observe that June 30th, 2018 is quite a bit more recent than the December 7th, 2016 announcement that Pebble had ceased operations - this is primarily due to the largesse of Fitbit, who were kind enough to [extend services an extra six months](https://dev.fitbit.com/blog/2018-01-24-pebble-support/) beyond the already generous year given to help Pebble users transition.  We try to mention this regularly, but we are immensely grateful to Fitbit for helping support the Pebble ecosystem at their own expense for all of this time. :blue_heart:  Even with this gracious extension, it was still a race against the clock to provide a drop-in replacement for the existing services, for which we had no source code and little flexibility in order to maintain compatibility with existing apps and hardware.  

## Enter the pony

Apologies for the gushing praise that follows, but I assure you, it's deserved.  Rebble is made up of a fairly extensive [team](https://rebble.io/team/) of [contributors](https://github.com/orgs/pebble-dev/people) (apologies to the many who are not represented in these lists :blue_heart:) but in terms of *Rebble Web Services*, a particular member embraced the challenge of replacing the untold hours' work of an entire corporation over the course of just a few weeks! :trophy:  That somepony is our Sparkly Code Princess [Katharine Berry](https://twitter.com/KatharineBerry), who - with respect to everyone involved - almost single-handedly recreated the necessary services and the production environment required to support them (shout out to [@jwise](https://github.com/jwise) too on deployment, plus [these guys](https://github.com/pebble-dev/rebble-auth-py/graphs/contributors) for styling and GitHub auth :heart:).  Please Tweet your appreciation, give [her](https://www.reddit.com/user/katieberry) Reddit Gold, or send her MLP plushes (clearly she has enough already, but, it's surely the best way to demonstrate appreciation?!).  Oh, and: ***subscribe***!  "How/huh?" you ask?  Great segue! :grinning:  

## Enter the Rebble Era

As detailed in [our last blog post](https://rebble.io/2018/06/13/get-ready-to-rebble.html), existing Pebble users had the option to retain their Pebble account data by linking their Rebble accounts before the Pebble service End of Life on June 30th.  Even if you missed out on the chance to link accounts, or are a new user (welcome!), the process for transitioning to RWS is the same:

* log into (or create) your Rebble account at [https://auth.rebble.io/](https://auth.rebble.io/) on your mobile device (it should already have the official Pebble app installed)
* (optionally) subscribe to get weather and dictation services (and even better: support the project!) via [your account page](https://auth.rebble.io/account/)
* visit [https://boot.rebble.io/](https://boot.rebble.io/) from your mobile device to switch the Pebble app to Rebble Web Services!!! :rocket:

The boot page contains instructions and caveats, but just as a heads up, iOS users need to wait 15 seconds then tap the yellow exclamation mark to log in, while Android users may need to log out or kill the app, but will eventually see a big red button to press (ignore the orange spinner if present), after which you're all set (your Pebble may disconnect - that's OK, just re-connect and you'll be all set!).  

*Breaking: appstore superstar [@sGerli](https://github.com/sGerli) has [produced an iOS setup video](https://youtu.be/8Z4Jtl_0UMw) - follow along for an even easier migration!* :heart_eyes:  

## A return to normalcy

The above steps completed, you can officially consider yourself part of the Rebble Alliance!  As such, you are free to enjoy the following services:

* **appstore** - browse and download watchfaces and apps
* **locker** - your personalized local cache of watchfaces and apps, as well as the ability to configure those that are configurable
* **firmware** - make sure your watch is running the latest available bits!
* **language packs** - Rebble is a worldwide movement - [look at all this language support](https://github.com/pebble-dev/rebble-lp/blob/master/language_packs.json)
* **support pages** - we're here to help - or at least these mirrored docs are!

For just $3/month, you can also enjoy:

* **dictation** - reply or compose messages with your voice like some futuristic Dick Tracy!
* **weather** - not just what it's doing right now, but in the future too - know whether to bring an umbrella to tomorrow's sunset - and when!

Not yet:

* **full Timeline support** - while some Timeline functionality, such as pins from your local calendar, will continue to work, the server required by 3rd-party apps is not yet available (:soon:)
* **dictation on iOS 11 with Pebble Time Round or Pebble 2** - iOS 11 unfortunately broke this, but we think we might have a fix ... :soon:
* **SMS replies on iOS** - due to the unique arrangement that Pebble had with carriers in order to accomplish this, it is unlikely that we will be able to recreate this functionality :disappointed:

## A bright, open future

This isn't the end.  It's not even the beginning.  It's the bit just before the beginning when it seems like it should be the beginning but everything's not actually quite :100: yet.  Your bags are packed and you're ready to go, but you're waiting for your ride to the airport.  Or maybe you're already on the plane and it just hasn't taken off yet.  Or maybe you're mid-flight and eagerly awaiting your destination.  Or maybe you're already there but waiting for that one friend who is always late to arrive.  Wherever you are in this rapidly unraveling metaphor, Rebble is there with you, now, and in the future.  It's OK to be excited!  But there's so much more to come - not just the above-mentioned services, but the replacement appstore, and the replacement firmware, and the return of CloudPebble (Cloud*R*ebble?!), and the ability to submit new apps, and ... well, we have to save something for the next Community Update! :heart_eyes: :rocket:  
