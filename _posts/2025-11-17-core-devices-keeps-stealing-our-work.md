---
layout: post
title: Core Devices Keeps Stealing Our Work
date: 2025-11-17 07:30:00
author: Team Rebble
---

*Edit (November 26th, 2am Pacific): We've had a bit of time to reflect on this blog post, and we no longer agree with the characterization of Core Devices' actions described here as "stealing". We're keeping the original text as-is to avoid confusion, but we've gone into more detail about why we've changed our stance in [our follow-up blog post here](https://rebble.io/2025/11/24/rebble-in-your-own-world.html).*

This is a post that we don't take any joy in writing.  When we [wrote last month about our agreement with Core Devices](https://rebble.io/2025/10/09/rebbles-in-a-world-with-core.html), we went into it believing that cooperation between Core and Rebble would be the best decision for the Pebble community.  Core would spearhead the development of brand new watches, and we'd be there to provide our Rebble Web Services to go with them.

Unfortunately, our agreement is already breaking down.  We hoped that by putting on a kind face, and publishing an optimistic-sounding blog post along with Eric, that we'd be able to collaborate in a way that met [our responsibilities to you, our users](https://rebble.io/2025/10/09/rebbles-in-a-world-with-core.html#Our-promise-to-you).  We knew that neither of us would be able to get all we wanted, but we thought we had enough common ground that we could serve Pebble users together.

Rebble has been working since the beginning to keep the Pebble experience alive -- maintaining the App Store, building new services like [Bobby](https://rebble.io/2025/03/24/introducing-bobby-our-new-pebble-assistant.html), and running [frontline support](https://help.rebble.io/) for people keeping their Pebbles ticking the whole time.  (The Pebble App Store that Core offers *right now* is backed by Rebble!)  But Eric and Core recently demanded that, instead of working together, we need to just give them all of our work from the last decade so that they could do whatever they want with it.  And in Eric's latest newsletter, he hasn't told you the truth about where the work that makes his business run came from.  **We'd rather have cooperated with them to build something great together, but we've reached an impasse. So now, we're asking you -- our community -- what to do with Core.**

*Update (November 18th, 7pm Pacific): [Eric responded to this blog post.](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward)  Obviously we don't
entirely agree with his position, and we don't agree with how he has characterized our
position -- if we did, we wouldn't be having this conversation! -- but you
should definitely read it too.*

*Edit (November 19th, 5pm Pacific): We added the words 'collected by, maintained by, hosted by, and served by' around '100%' below to
more accurately reflect our original intent.*

<!--more-->

# How we got here

Nine years ago, Eric Migicovsky's company, Pebble Technology Corporation, went out of business and dropped support for the hundreds of thousands of Pebble smartwatches out there.  Rebble -- and our community! -- put together [a Herculean effort](https://rebble.io/2018/02/15/rebble-web-services.html) to salvage the data that was left on the Pebble app store.

Since then, we built a replacement app store API that was compatible with the old app store front end.  We built a storage backend for it, and then we spent enormous effort to import the data that we salvaged.  We've built a totally new dev portal, where y'all submitted brand new apps that never existed while Pebble was around.  So far, we've spent hundreds of thousands of dollars on storing and hosting the data.  And the humans who run the Rebble servers have also spent incredibly late nights upgrading Kubernetes clusters, responding to outages, and generally keeping things ticking.

**What you now know as the Pebble App Store from Eric's new company, Core Devices, is the result of nearly a decade of our work.**  The data behind the Pebble App Store is 100% collected by, maintained by, hosted by, and served by Rebble.  And the App Store that we've built together is much more than it was when Pebble stopped existing.  We've patched hundreds of apps with Timeline and weather endpoint updates.  We've curated removal requests from people who wanted to unpublish their apps.  And it has new versions of old apps, and brand new apps from the two hackathons we've run!

We've been negotiating with Eric for months now.  We'll compromise on almost everything else, but our one red line is this:

**Whatever we agree on, there has to be a future for Rebble in there**.

We want to give Core's users access to the Rebble App Store. (We thought we agreed on that last month.)  We're happy to commit to maintaining the Web Services.  We'd be happy to let them contribute and build new features.  And what we want in return is simple: if we give Core access to our data, we want to make sure they're not just going to build a walled garden app store around our hard work.

The problem is, Core won't commit to this.  Core wants unrestricted access to do whatever they want with the data that we archived and have spent the last years curating, maintaining servers for, and keeping relevant.  If we gave Core the rights to use the App Store data however they want, they could build their own Core-private App Store, replace Rebble, and keep any new changes proprietary -- leaving the community with nothing.

We've asked Eric about this every time we talk.  He has occasionally said verbally that that isn't their plan...  but when it comes time to put it in writing, **he has repeatedly refused to guarantee that**.  A week ago, we asked him to chat about this one more time -- he delayed our conversation, and **then in the intervening time, scraped our app store, in violation of the agreement that we reached with him previously.**

# What's in an agreement?

We're sad that the Rebble community has had tension with Core Devices ever since Google released the original PebbleOS source code.  We've been pretty quiet about it for a while -- we thought that we had a chance of working together if we tried hard not to fracture the community.  But by now, a verbal promise isn't enough.

When the code was released in January, we immediately branched the repository and started maintaining PebbleOS.  The Rebble community [began porting an open-source Bluetooth stack to PebbleOS](https://github.com/pebble-dev/pebble-firmware/commit/a7b074559b806df674c2a61ae16ec188ffa96ce3), to support classic Pebble devices.  Eric [mentions this in his blog post](https://archive.ph/64i0V#pebbleos-firmware-pl), but what he doesn't say is that **Rebble paid for the work** that he took as a base for his commercial watches!

Shortly after, Core [forked PebbleOS](https://discord.com/channels/221364737269694464/256091649996881922/1374320093613527151)[^1] away from public maintainership. Back in June, [they said that they would merge back periodically](https://discord.com/channels/221364737269694464/256091649996881922/1386743333669306409)[^2]; it's now November, and we're yet to see anything get merged back.  [Multiple efforts to contribute to PebbleOS were put on hold](https://discord.com/channels/221364737269694464/256091649996881922/1386334214202331228)[^3] while we waited for Core to merge upstream.  It never happened.  Eric, in his blog post, now says that he will [run PebbleOS as a "benevolent dictatorship"](https://archive.ph/64i0V#pebbleos-firmware-pl).

[^1]: May 20, 2025: "FYI, we'll be moving firmware development to https://github.com/coredevices/pebbleos for now as we need to move faster than what the current repository permits (e.g. merge without reviews). This means we assume a certain technical debt, as there'll be things that may need cleanup before bringing them back upstream. However, Core is de-facto the only contributor at this point, so it's more efficient to develop in a fork and sync later. Note that the same rules will still apply (apache-2.0, keep old device builds, etc.), so things do not get out of control quickly.""

[^2]: June 23, 2025: "FYI, what we'll do for now, once https://github.com/pebble-dev/pebble-firmware/pull/251 is merged (thanks @hexxeh), is to rebase our fork against it. Then, from time to time, post other merge back PRs, like e.g. Obelix initial support. If there's anything that needs to be fixed on those PRs, we're of course open to doing it (we assumed a tech debt when forking). Over time, upstream will become the main source of truth as our fork will contain fewer patches, and it will actually be more efficient to use upstream directly because there'll also be other potential contributions we benefit from."

[^3]: June 22, 2025: re: [PR #58](https://github.com/coredevices/pebbleos/pull/58#issuecomment-2988267715): "I thought previously the stance was not to accept any PRs that were functionality changes yet anyway? Only stuff to fix existing devices or bring up new ones."; "I defer that to @ericmigi , I do not merge these kind of changes w/o him approving. Last one I merged was really a UI bugfix".  See also, [March 4, 2025](https://discord.com/channels/221364737269694464/256091649996881922/1346613720570134641): "From Core's perspective, we're not planning to touch the UI at least until we get PebbleOS working on a real watch. So we won't be merging any UI changes until later.".  Other discussions in PRs.

Rebble's work is the backbone of Core in other ways.  The Core Devices app is based on `libpebble3`; in Eric's blog post, [he said that Core built it](https://archive.ph/64i0V#pebble-mobile-app).  The reality is that it started life as `libpebblecommon`, which Rebblers wrote as part of our mobile app project ([Cobble](https://github.com/pebble-dev/mobile-app)), and we funded through the [Rebble Grants program](https://rebble.io/2020/09/04/rebble-grants.html).  The work that we did together saved Core a month or two of engineering effort at the beginning; Core took Rebble's work, added to it, and then paid us back by [putting a more restrictive license on their contributions](https://github.com/coredevices/libpebble3/commit/35853d45cd0ec51cb732be866f6f72467653a613) and wrapping a closed-source UI around it.

A few months ago, Core promised that they would let Rebble maintain and own [the developer site](https://developer.rebble.io/), after Rebblers spent days making it build again, importing new content, etc.  Then, in Eric's original proposed agreement, he demanded not only that Core publish the developer site on their domain, but that we *remove our copy of the developer site and redirect to theirs*.

These have been blows to our community, to be sure.  We've tried not to let this affect our negotiations: we want to work together.  But we went into this wary, knowing what a promise from Core meant.

The last straw was two weeks ago.  We'd already agreed to give Core a license to our database to build a recommendation engine on.  Then, Eric said that he instead demanded that we give them all of the data that we've curated, unrestricted, for him to do whatever he'd like with.  We asked to have a conversation last week; he said that was busy and could meet the following week.  Instead, **the same day, our logs show that he went and scraped our servers**.

# What's at stake?

Rebble's goal is to have a community-driven place to develop for these watches that we all love -- today, and also in the future, if (love forbid!) [something were to happen](https://financialpost.com/technology/personal-tech/fitbit-inc-buys-pebble-software-calls-time-on-smartwatch-pioneer) to Core Devices.

If we gave Eric an unrestricted license to our data, he could do the same thing he did to our firmware work, and our mobile app work.  He'd have the right to take it and build his own app store -- and the work that we've done together as a community for the past decade would no longer be in our control.

We watched this happen ten years ago when Pebble went under (Rebble has been around longer than Pebble and Core combined by now!).  We don't know that Core can commit to supporting this ecosystem in the long term.  After all, the warranty on Pebble 2 Duo is 30 days long, and [early users are already reporting that](https://www.reddit.com/r/pebble/comments/1oudn9a/it_unfortunately_happen/) [their buttons are falling apart](https://www.reddit.com/r/pebble/comments/1ohxizn/got_my_pebble_core_2_duo_today_and_the_bottom/)!

But even if Eric has the best intentions now and can find the funds to keep Core afloat, you could imagine that OpenAI, or someone else, would want to acquire Core and make him an offer he couldn't refuse.  We've watched this play out [so many times](https://www.slashgear.com/north-bought-by-google-shuts-down-focals-1-0-and-2-0-smart-glasses-30627021/), from [so many other companies](https://www.theverge.com/news/614883/humane-ai-hp-acquisition-pin-shutdown), in [the decade since](https://techcrunch.com/2024/05/23/spotify-to-shut-off-car-thing-for-good-leading-users-to-demand-refunds/) -- a product we love gets released, and [then gets killed off](https://support.google.com/googlenest/answer/16233096?hl=en), another victim of closed-source enshittification for profit.  We love these watches, and we'd be sad if that happened.  And more to the point, we love this community that we've been a hub for.

# This is your choice

In our last post, we said that Rebble belongs to you.  We mean it.  These are the apps that you've written and contributed to your fellow Pebblers.  These are the watches that you spent so long caring about and loving.  This is your community, where you make awesome happen.  So we see two directions from here, and **we need the community's help to decide**.

1. If y'all would like, one option is that we could **aggressively protect the work we've done**, and try to protect the community going forward.  If Eric had the foresight to back up this data nine years ago and maintain it himself, there's nothing we could say about this.  But he didn't, and we, together, did.  We made it absolutely clear to Eric that scraping for commercial purposes was not an authorized use of the Rebble Web Services.

    This gets ugly in a hurry, but we have legal resources that can protect us.  We'd rather spend our time on building a next-generation open source mobile app than spend it on a fight, but if it's what we have to do, we're not afraid.  If we want to keep what we built, we're going to have to use our energy to protect it.

2. The other option is that we could **just let Eric do whatever he wants**.  Eric believes that our database should be free for anyone to make their own copy of, because we are a non-profit Foundation.  We don't agree, but maybe you do!  Nothing has to live forever, and we've done great work together.  If the community prefers that we pass the mantle onwards, we'll do what y'all think is right.

These are both painful options for us.  And to be clear, we'd rather do neither!  **If Eric and Core are willing to give us a legal commitment that they're not just going to kick us out, and that they'll work with us, we'd much rather do that**.  We're happy to let them build whatever they want as long as it doesn't hurt Rebble. Eric, you're the best in the world at making quirky hardware for people who genuinely love what they wear.  We're great at building a community.  Use our locker, use our timeline, use our App Store -- we've built it just for you.  Just as long as we can work together as partners.

But in the mean time, we're here at a crossroads.

# We need you

For our friends who have supported us over the past years: we're sorry that you're caught in the middle of this.  We think Rebble can be the hub of community, and Core can make awesome products, and these don't have to be in conflict.  Eric's new devices, Pebble 2 Duo and Pebble Time 2, look absolutely amazing!  We want to support him in making beautiful hardware long into the future -- without exposing our users to the classic walled garden enshittification trap.

**But we want your input.**  If Eric and Core can't play nice, **we need you, our community, to tell us what to do**.   We're serious: if you think we should do something different, we will.  So we're posting this on [Reddit /r/pebble](https://www.reddit.com/r/pebble/comments/1ozzsr9/an_update_on_rebbles_attempted_collaboration_with/) and a handful of other places.  We'll be (gulp!) reading the comments -- the top rated *and* the long tail -- to try to understand what the community's sentiment is.  We'll be watching the discussion on Discord.  And, of course, if you want, you can [e-mail the Rebble Foundation Board of Directors directly](mailto:board@rebble.foundation).  We'd like to hear from you.

Yours in hope --
so many of us from the Rebble team over the past 9 years, including:
David, Joshua, Will, Ruby, Stasia (LCP), Siân (astosia), Harrison (Link Sky), Lavender, Ben, Ephraim (gibbiemonster), Jakob (Jackie)
