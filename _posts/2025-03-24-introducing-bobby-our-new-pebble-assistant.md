---
layout: post
title: Introducing Bobby, our new Pebble assistant
date:   2025-03-24 12:30:00
author: Katharine Berry
---

I'm excited to announce a new Rebble service for our paying Rebble subscribers: **Bobby**, a voice assistant app for
your Pebble!

[![Bobby - Pebble Assistant](/images/bobby/bobby-banner-basalt-2.png)][bobby appstore]

Bobby is [available from the Rebble Appstore][bobby appstore] now! You can also check out
[its webpage](https://bobby.rebble.io).

Bobby is a new voice assistant for your Pebble. It's inspired by [Snowy][snowy appstore], but powered by modern AI
technology (specifically, Google's Gemini LLM). This makes Bobby both easier to use and more powerful than Snowy: no
longer do you need to phrase your requests exactly.

<!--more-->

## Features

### Weather

You can ask Bobby for the weather!

![A weather widget for Redwood City showing a temperature of 62° and sunny, with the text "Seems 60°, Sunny". Below,it reads: It is partly cloudy and 62°F. The…](/images/bobby/bobby-weather-now.png)
![A weather widget for Sunday in Redwood City. It shows a partly cloudy icon, and indicates a high of 68° and a low of 46°. Below, it reads: Sunday will be partly cloud with…](/images/bobby/bobby-weather-tomorrow.png)
![A three-day weather widget for Redwood City. On Saturday, it will be partly cloudy with highs of 62° and lows of 43°. On Sunday, it will be partly cloudy with highs of 69° and lows of 46°. On Monday, it will by sunny with highs of 76° and lows of 48°. Below, it reads: Here's the…](/images/bobby/bobby-weather-week.png)

### Timers

Bobby can set timers for you!

![A widget labelled "Fish Timer" says "29:44". Below, it reads: OK, I've set a timer for 30 minutes called…](/images/bobby/bobby-timer.png)
![You: How long is left on my timer? Bobby: a widget labelled "Fish Timer" says "27:37". Below that, the text: There's 27…](/images/bobby/bobby-timer-remaining.png)
![An alarm going off. The title is "Fish Timer". A countdown says "-00:12". A tired pony is at the bottom. There are action buttons to snooze or dismiss the alarm.](/images/bobby/bobby-timer-elapsed.png)

You can even have multiple timers at once, with different names!

### Alarms

Bobby can do alarms, too!

![You: Set an alarm for 9:00 a.m. Below, a card says "Alarm set for tomorrow at 9:00 AM.".](/images/bobby/bobby-alarm-set.png)
![A list of two alarms. The first says "5:11 PM today". The second says "9:00 AM tomorrow".](/images/bobby/bobby-alarm-list.png)
![A result screen titled "Snoozed". The body text reads "Snoozed for 10 minutes". An image of a sleeping pony is beneath.](/images/bobby/bobby-alarm-snooze.png)

As with timers, you can have multiple alarms set at once, and you can name them individually if you like.

### Reminders

Bobby can remind you to do something in the future by putting a pin on your Pebble's timeline (as well as keeping a
list in the app).

![Remind me to take the bins out at 9:00 p.m. Below, a confirmation: Reminder set for today at 9:00 PM.](/images/bobby/bobby-reminder-set.png)
![The timeline future screen with a pin: 9:00 PM - Take the bins out](/images/bobby/bobby-reminder-timeline.png)

### Calculations and Conversions

Need some numbers numbered? Bobby can help with that!

![You: What is 47 squared? Bobby: 2,209](/images/bobby/bobby-calculation.png)
![You: What's 20 kg in pounds? Bobby: 44.092 pounds](/images/bobby/bobby-unit-conversion.png)
![You: What's $150 in euros? Bobby: 138.59 EUR](/images/bobby/bobby-currency-conversion.png)

### Trivia

Bobby can answer many different types of question:

![You: What is the speed of light? Bobby: 299,792,458 m/s. You: What's that in imles per hour? Bobby: 670,617,741 mph](/images/bobby/bobby-speed-of-light.png)
![You: What is the hottest place in the world? Bobby: The highest registered air temperature on Earth is 56.7°C, recorded on July 10, 1913, at Furnace Creek Ranch in Death Valley, in the United States.](/images/bobby/bobby-hot.png)
![You: How do you say 'good morning' in German? Bobby: That would be "Guten Morgen". You: How about French? Bobby: That's "Bonjour".](/images/bobby/bobby-translation.png)

Bobby doesn't have a knowledge cutoff date - in most cases, Bobby can look up current information to a answer your
questions.

## Feedback

Bobby is a new project, and we're excited to hear what you think! If you have any feedback, please let us know. You can
contact us [on Discord](/discord), or directly through the app. The app gives you three ways to send feedback:

- From the main menu you can dictate feedback at any time
- From the conversation view, you can long-press to bring up a menu with a "Report" option to respond bad responses
- You can ask Bobby to send feedback to the developers (or any similar wording) - it'll send feedback automatically

We'd love to hear what you think, how Bobby works for you, and any suggestions you have for improvements or new
features!

## Compatibility

Bobby is currently available for **Pebble Time**, **Pebble Time Steel**, and **Pebble 2**. Bobby will presumably also work on the
upcoming Core 2 Duo and Core Time 2, but we'll find that out in the future. Maybe Bobby will even gain the (optional!)
ability to speak aloud!

The **Pebble Time Round is not supported** (but may be in the future - especially if there is demand!).
The original Pebble and Pebble Steel don't have microphones, so cannot be supported.

Bobby also currently **does not support Cobble**, Rebble's work-in-progress replacement for the Pebble mobile app.
Please don't try to use it - bugs in Cobble cause many features of Bobby to misbehave. For the time being, Bobby works
best with the official Pebble mobile apps.

## Bonus: a dictation update for Pebble!

Alongside the launch of Bobby, we are introducing an experimental new feature for all Pebble dictation: you can now set
your language to **auto** in the Pebble app's voice language settings. This enables you to switch between dictation
languages on the fly without needing to change settings all the time - handy for the multilingual among you!
We also expect that dictation accuracy should be improved across the board.

Do note that, for short utterances (only a syllable or two), the "auto" setting may guess the _wrong_ language. If
you can't see "auto" in your language list yet, it should show up eventually - or you can
[rerun boot](https://boot.rebble.io) to speed it along. As always, dictation requires a Rebble subscription.

We also now have a way to hear what your watch microphone sounds like, if you're curious (or having problems) - if you
have a Rebble subscription, turn on Audio Debug Mode on [your account page](https://auth.rebble.io/account/) and then
visit the [Audio Debug page](https://audio-debug.rebble.io) to see your recorded audio. Audio debug mode will
automatically turn off after 24 hours, and the recordings are deleted 24 hours after they're taken. When audio debug
mode is disabled (as it is by default), Rebble does not store either recordings or transcripts of your dictation
requests.

## Privacy

Every request you make to Bobby is passed to us, and then passed on to Google (twice, actually - first for speech
recognition, and then for the LLM). Additional details are passed to other parties for certain requests.

We don't store your requests long-term - they are deleted after a short period of time, currently ten minutes. We use
the versions of Google's APIs that do not store your data for training, and we don't pass them any unique identifiers
for you. Similarly, for other APIs, no context is provided as to who is making the request, and all requests are made
via our servers.

There is an exception to this: if you report a thread (either from the long-press menu in the conversation view, or by
asking Bobby to send feedback to us), that conversation will be stored and made available to the Rebble team for review.

## Pricing

Bobby is included as part of your Rebble subscription! Why isn't it free? Two reasons:

- You need to be a Rebble subscriber for dictation to work, and Bobby isn't very useful without that
- Bobby uses a number of expensive APIs (for the LLM, weather, geolocation, POIs, etc.), which cost us money on each use.

Bobby imposes a monthly limit on usage to ensure a single user can't force us to run up a huge bill. We don't expect
most users to hit this, but you can see how close you are to your monthly limit in the "Quota" screen in Bobby's menu
(hit ⋯ on the main screen to get there).

[snowy appstore]: https://apps.rebble.io/application/561960c8a1dd2652af00000d
[bobby appstore]: https://apps.rebble.io/application/67c3afe7d2acb30009a3c7c2
