---
layout: post
title: "Hackathon, App Updates & More"
date:   2022-11-02 07:08:09
author: "Will Murphy"
---

Time flies when you're having fun. It's been a year since our last blog post announcing the launch of the [Rebble developer portal](https://dev-portal.rebble.io) and in that time we've seen a whole host of new apps and watchfaces submitted to [the appstore](https://apps.rebble.io). Rebble continues to have an amazing community behind it, so in this blog post we're going to take a look at a few highlights from the last year and announce our first hackathon. But first, how many of us actually are there...?

<!--more-->

# The Rebble Alliance
One question we've always been interested to know the answer to is "how many Rebble users are there?". Rebble web services logs give a rough estimate, but we've never known for sure. A few months ago we deployed an update to RWS that listens for the analytics data the Pebble app sends home. We only store the non-personal information from it, but that's enough for us to see the result: over 24,000 Rebble users!!

![](/images/hackathon-blog-post/bigquery.png)

Now, this number should be taken with a pinch of salt as some of these pings will be from users with the Rebble'd Pebble app installed who are not actively using their Pebbles still, but if we just look at pings from devices with watches connected we get a healthy 16,000 Rebbles! It's unsurprising that these days the majority of our users are on Android, due to the fact that the app can still be [side-loaded easily](https://rebble.io/apk) unlike [on iOS](https://help.rebble.io/sideload-ios-app/). 

![](/images/hackathon-blog-post/bigquery2.png)

It really is amazing to see so many people out there still using Pebbles. Thank you to everyone who continues to be part of the Rebble community. Now, speaking of the Android app...

# The Android app gets an update

Fitbit absorbed Pebble. Google absorbed Fitbit. Despite the Pebble app being a double hand-me-down, we recently saw the Android app get its first update in 4 years! This update changes the Pebble app to be 64-bit, which means it can be installed on the Pixel 7 - the first Android phone to ship with this hard requirement. You can [download the app here](/apk). The app update has also improved the reliability of caller ID.

A massive thank you to Google for putting the effort in to support an app so old it isn't even hosted on their own app store! 

You can read more about this at any of the following links:
- [Ars Technica](https://arstechnica.com/gadgets/2022/10/pebble-a-2013-smartwatch-updated-to-work-with-2022-pixel-7/)
- [XDA](https://www.xda-developers.com/pebble-smartwatches-will-now-work-with-the-pixel-7-and-pixel-7-pro/)
- [Gadgets & Wearables](https://gadgetsandwearables.com/2022/10/26/pebble-android-app-update/)
- [Reddit](https://old.reddit.com/r/pebble/comments/ydc1bj/pebble_android_app_version_443_now_available/)

# Announcing our first Hackathon!

![](/images/hackathon-blog-post/hackathon.png)

Now for the really exciting part: we're thrilled to announce that we're running [our first hackathon](/hackathon-001) on the 18-20th of November. We're hoping it's the first of many too, hence the optimistic 3-digit name! It's a bit of an experiment on our part, but the idea is that anyone who wants to take part simply [fills out the form](https://forms.gle/oACS5hbPedeiEwiG8), [sets up their dev environment](/hackathon-001/vm/), and joins in on that weekend by building a fun watchface, watchapp, or tool for the Pebble watch.

Everyone who [uploads an app](https://dev-portal.rebble.io) to the appstore during the hackathon will receive free Rebble stickers, and our favourite submission(s) will receive a special prize (likely to be a shiny pebble watch).

For more information and live updates, check out the [dedicated hackathon page](/hackathon-001). For even livelier updates be sure to follow us [on Twitter](https://twitter.com/pebble_dev). During the hackathon weekend we'll have dedicated channels [on Discord](/discord) too.

# A few more things

Here are a few more minor updates from the smartwatch community that refuses to move on...

### #buy-sell-trade

![](/images/hackathon-blog-post/buyselltrade.png)

Following Discord's launch of a more mature forum system, we now have a buy/sell/trade channel on the [Rebble Discord Server](/discord). This is a great place to let people know of any good deals, find an old watch a new home, or buy another Pebble (to go with your other 10).

### #releases

![](/images/hackathon-blog-post/releases.png)

We also recently added another new channel: #releases. This channel is read-only, and updates whenever a developer adds or updates a new app or watchface on the appstore.

### Emoji Replacement Project

![](/images/hackathon-blog-post/emojis.png)

Some Rebble users are working on a project that uses Pebble language packs to add support for more modern emojis. It's a fun project that anyone can contribute to. [Check out the GitHub page if you're interesting in helping out](https://github.com/pebble-dev/rebble-emojis).

So there it is, a few updates from the ever-active world of Rebble. To keep up to date we recommend [joining the Discord server](/discord/), where there are literally dozens of us. And if you really want to get involved, here's the [link to the hackathon page once again](/hackathon-001/)! 