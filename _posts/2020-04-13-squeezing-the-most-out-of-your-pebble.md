---
layout: post
title: "Squeezing the most out of your Pebble"
date:   2020-04-13 09:00:42
author: "Will Murphy"
# categories: community
---

Hi there! It's Will here (some of you may know me as @Will0 on [Discord](https://rebble.io/discord)). In the ~6 months since our [last blog post](https://rebble.io/2019/11/02/rebble-rebble-everywhere.html) a lot has happened, both in the Pebbleverse and the real world. Yet, despite the ever-increasing gap between the Pebble shutdown and today, still new people are signing up with Rebble to bring their beloved smartwatch back to life!

On that note, there have been a number of similar questions over the last few months on Reddit and the [Rebble Discord](https://rebble.io/discord), such as 'why do I need to use RWS', 'I'm struggling to get setup', 'What are the best apps to use in 2020?'.

In this post we'll go over the answer to all of these, as well as cover how you can squeeze the most out of your Pebble in 2020.

Let's start with the easy questions first...

<!--more-->


# What is RWS / Why do I need it?
RWS stands for Rebble Web Services, and is what most people mean when they say 'Rebble' (though Rebble encompasses more than RWS, I'll get to that later). RWS replaces the old Pebble servers, but does not replace the app - instead, during setup, you're telling the original Pebble app to point to Rebble servers. Without RWS you'll have to sideload Pebble apps, and won't get any of the other server-dependent functions. RWS provides two tiers: Free and Paid. Here's what you get with each:
#### Free Tier:
   - Access to the Rebble appstore
   - Timeline Server Support (3 hour sync period)

#### Paid Tier:
   - Access to the Rebble app store
   - Timeline Server Support (30 minute sync period)
   - Voice Dictation (note that iOS SMS reply doesn't work)
   - Weather API (For the system weather app and timeline pins, watchfaces do not need this as they handle it themselves)
   - You fund the free tier and other Rebble work

# How do I get setup with RWS?
Follow the guide at [rebble.io/howto](https://rebble.io/howto). Do not use any 'Rebble' apps from the appstore, as they aren't legitimate and probably don't work. If you run into any issues, check the 'common issues' section under the howto, or ask in #rebble-help on [Discord](https://rebble.io/discord).

# What doesn't work anymore?
Since the Pebble shutdown in 2016 some small features don't work anymore, namely:

   - Timeline based apps that use '[topics](https://developer.rebble.io/developer.pebble.com/guides/pebble-timeline/timeline-js/index.html#subscribe-to-a-topic)', which allow lots of users to subscribe to a single source of timeline pins. But this is a small percentage of timeline apps, the rest still work. Note that your calendar pins are special, and do not require the timeline server to work.
   - Reply to SMS on iOS - Pebble used clever carrier-specific workarounds for iOS' locked down SMS behaviour in a way that Rebble can't easily replicate.
   - Apps that rely on servers no longer available - Some apps serve their settings page from web servers, and if those servers don't exist anymore you can't setup the apps. [It's not always a total loss though](https://old.Reddit.com/r/Pebble/comments/eccrn7/getting_an_error_when_i_try_to_access_the/).

# So what *can* I do with my Pebble in 2020?
The sky is the limit! Most of the apps and watchfaces on the appstore still work, and more are still being published - Like swanswanswanswansosoft's [Covid-19 tracker](https://apps.rebble.io/en_US/application/5e65d05a3dd3108f341c08ec).

### Apps
Here are some great apps that still work and are useful daily:   

App | Description | Platform   
:--|:--|:--|:--|:--   
[Checklist](https://apps.rebble.io/en_US/application/5620e876768e7ada4e00007a) | A checklist of items, for shopping etc. | Both
[Timer+](https://apps.rebble.io/en_US/application/54a1ba1afc5f23e4c000012d) | Pretty, animated timer  | Both
[Alarmist](https://apps.rebble.io/en_US/application/5684387eb35693ab43000032)    | Set phone alarms from your watch | Android
[Dashboard](https://apps.rebble.io/en_US/application/53ec8d840c3036447e000109)    | Control your phone from your Pebble | Android
[Dialer for Pebble](https://apps.rebble.io/en_US/application/532323bf60c773c1420000a8) | Better call integration | Android
[Skunk](https://apps.rebble.io/en_US/application/553aaf29bf1a5965020000c8)    | Store and view barcodes (for reward cards etc.) | Both
[RSS Reader](https://apps.rebble.io/en_US/application/5d8d503bc393f5215a13e5e6) |  Browse and read RSS feeds | Both
[Snowy ($2.99)](https://apps.rebble.io/en_US/application/561960c8a1dd2652af00000d) | Voice assistant for Pebble | Both

... some other personal favourites ...  

App | Description | Requires Voice | Platform
:--|:--|:--|:--|:--
[HTTP Push](https://apps.rebble.io/en_US/application/567af43af66b129c7200002b) | Make HTTP Calls (useful for home automation) | No | Both
[News Headlines](https://apps.rebble.io/en_US/application/5387b383f60819963900000e) | View BBC News Headlines | No | Both
[Solanum](https://apps.rebble.io/en_US/application/5639b1a377b75e5dfd000030) | A pomodoro timer to help you focus | No | Both
[Music Boss](https://apps.rebble.io/en_US/application/52c6c88dccc92142e6000050) | A better music app | No | Android
[Piny Wings](https://apps.rebble.io/en_US/application/54e69569ad38b6399f000017) | A fun little game | No | Both
[Pebtris](https://apps.rebble.io/en_US/application/52f9b7cd57e7c27b290000d7) | You'll have to hum your own theme music | No | Both

..and some that have been released only recently:

App | Description
:--|:--
[Hand wash timer](https://apps.rebble.io/en_US/application/5e9001813dd3102ef3c20a1a) | Make sure you wash your hands for long enough!
[2019-Ncov](https://apps.rebble.io/en_US/application/5e65d05a3dd3108f341c08ec) | Track the number of Covid-19 cases around you
[RSS Reader](https://apps.rebble.io/en_US/application/5d8d503bc393f5215a13e5e6) | Read the title and contents of your favourite RSS feeds
[Hybrid Watchface](https://apps.rebble.io/en_US/application/5e463ef63dd31016ad6b17af) | A minimalistic watchace for Pebble Time and later
[Sheikah Slate Watchface](https://apps.rebble.io/en_US/application/5e28ea933dd3109f151c7e0a) | The power of the sheikah slate on your wrist!

<br>
# Timeline
June last year Rebble implemented timeline support. Which means you can once again push news, data, stocks, events and more to your timeline. It's a convenient way to get information you can about available quickly but unobtrusively. As some you already know, [I](https://willmurphy.co.uk/) wrote [a service](https://willow.systems/integrate-Pebble-with-ifttt-once-again/) that lets you hook anything from [If-This-Then-That](https://ifttt.com) to Pebble timeline, making it easy to push data.    

As an example, I push the following data to my timeline:   

Data  |  Method
:--|:--
BBC Breaking News | IFTTT: New Tweet to Timeline
New post to /r/Pebble | IFTTT: Reddit to Timeline
New RSS feed | IFTTT: RSS Feed applet to Timeline
NASA Breaking News alerts | IFTTT: NASA to Timeline
Monzo Debit card payments | [Timeline Bounce Server](https://github.com/Willow-Systems/timeline-bounce-server)
New Hot item on hacker news | IFTTT: Hacker News to Timeline

This keeps my timeline full of interesting stuff to read when I choose to. Only BBC breaking news creates a notification, the rest is passive and I either read it when it pops up in [timeline peek](https://i.redd.it/7l87rqv4y9n41.png) or when I scroll back through timeline past (By mapping the 'up' quicklaunch to timeline past)   

To get going with timeline you'll need [this app to generate a 'token'](https://apps.rebble.io/en_US/application/5d9ac26dc393f54d6b5f5445) and to follow [this guide](https://willow.systems/integrate-Pebble-with-ifttt-once-again/) or - if you prefer pictures - [this guide](https://imgur.com/a/IWG28JA). It helps if you're familiar with [If-This-Then-That](https://ifttt.com) too.

# Developing New Apps
Do you know how to program in C or JavaScript? Maybe you want to learn? Developing on the Pebble is super fun and between the #app-dev channel on [the Discord](https://rebble.io/discord) and [the documentation](https://developer.rebble.io/developer.pebble.com/index.html) there's plenty of support still.   

To get started you'll need the SDK. For which there are now a few options:   

   - [Install to your computer natively](https://old.Reddit.com/r/Pebble/comments/9i9aqy/developing_for_Pebble_without_cloudPebble_windows/)   
   - [Install to your computer with a script](https://gist.github.com/zeevro/ce20d0d74a869d73119e9d1522b7caa7)   
   - [Use a docker image](https://hub.docker.com/r/rebble/pebble-sdk)   
   - [Use a virtual machine](https://willow.systems/pebble/vm/)   

Once you've got an app or a watchface you'd like to publish, you can do so through the new [Rebble developer portal](https://rebble.io/submit). This developer portal is a work in progress, but the basics are there now. Watch this space!

# Some other neat tips
Here are a couple of neat Pebble tips that I've seen recently, that maybe you didn't already know:   

   - When you start playing music on your phone, the stock music app will move to the top of your app list on your watch, making it easy to open by pressing select twice from your watchface   
   - Holding back from a notification will toggle quiet time
   - Enabling 'Stand-By Mode' from Settings -> System on your watch will disable Bluetooth when your Pebble doesn't move for 30 minutes, saving battery power   

# Darksky API Shutdown
You might also have seen recently that Apple have purchased Darksky, one of the most popular weather API providers for Pebble apps and faces. Apple are going to shut down the API June 2021, and have already stopped issuing new API keys. Whilst this won't affect the Rebble weather service, watchfaces that require this API will no longer work properly from June 2021. There's plenty of time to come up with a replacement solution though, so I'm hopeful.   

# What else are Rebble up to?
Work continues in the background by our [trusty band of volunteers](https://rebble.io/team/), which can be followed on [Github](https://github.com/Pebble-dev/) and [Discord](https://rebble.io/discord).

   - RebbleOS (the replacement firmware) continues to get frequent updates, with automated testing being a recent addition, as well as loading apps over bluetooth! Check out [#firmware](https://rebble.io/discord) for more.
   - The RWS infrastructure has seen some upgrades recently, moving some services to Google Cloud and integrating operational analytics and observability tooling to make finding and fixing errors and choke points easier.
   - RWS Bugfixes! - For those of you on iOS, a fix was recently deployed that resolves the locker sync issue some of you were experiencing. If this has affected you, [check out this Reddit post](https://old.Reddit.com/r/Pebble/comments/fueo35/potential_fix_for_ios_rebble_app_store_issues_try/). You'll also notice that the 'see all' buttons that mysteriously disappeared from the appstore [are back for good now](https://i.imgur.com/T7sR8WG.png).
   - Work on the [developer portal](https://rebble.io/submit) has begun, to make submitting new apps easier.
   - There's even some work on a replacement mobile app, though this is a *huge* piece of work likely to take time.

So there you have it, the answer to some of the more commonly asked questions and hopefully a demonstration of just how much functionality you can get with a few apps and some timeline trickery! At some point I'd like to do a blog post of my Pebble workflow, and all the cool things I use it for, so *watch* 😉 this space.

Finally, if you have a question that wasn't covered in this post, check the [Common Issues section](https://rebble.io/howto/#common-issues) or stop by #rebble-help [ on Discord](https://rebble.io/discord). If there's one thing the Pebble community isn't short on, it's people willing to help!
