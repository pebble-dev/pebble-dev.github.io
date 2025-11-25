---
layout: post
title: Rebble in your own world
date: 2025-11-24 17:30:00
author: the Rebble Foundation Board of Directors
---

It's been a bit of a rough ride in the Pebble world lately. Since our blogpost from [last week](https://rebble.io/2025/11/17/core-devices-keeps-stealing-our-work.html), and [Eric's response to it](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward) (read both, if you haven't yet - there's a lot of important context in them!), we've heard a lot of feedback from the community about the situation we find ourselves in.

When we said we wanted your input in our last post, we meant it - we've been closely watching and participating in the conversations since. Thank you to everyone for giving your input, and for being kind to each other in the process! We're genuinely blown away by how little we've had to step in and moderate heated discussions - couldn't be prouder of this little community we've built together. <3

We'll be honest - our last blogpost was more inflammatory than it needed to be. We've been at this for a while, trying to negotiate a deal with Core Devices while also trying to figure out what we want out of that deal at the same time. Clearly, a lot of the tensions we've been feeling in that process spilled out there, and it wasn't as productive as we would have liked as a result.

If anything, it's made one thing clear to us - *we should have gotten the community's input much earlier*! In hindsight, a lot of the division could have been avoided with the level-headed insight you all have given us over the past few days. We're sorry for letting it get to this point -- no one benefits from a fight between Core and Rebble.

We've been so appreciative of all of the feedback that we've heard.  Many of you have given us words of support, and offered your trust and kindness (thank you so much!) -- and many of you have also given us hard (and, often, well-deserved!) criticism and suggestions for how we can improve.  Today, we want to give you a few concrete steps we're taking as a result of what you've told us, to make sure that we're worthy of your trust long into the future.  Here's a summary of what we want to talk about:

* **We believe that the apps that you made belong to you**.  We didn't make that clear enough, and we want to fix that, including by offering for download an archive of the Rebble App Store.
* We have a better understanding of how Eric interacted with the App Store API, and **we don't think that he intended to "steal" from us** there.
* We've added two more members to the Board of Directors of the Rebble Foundation!  And **we're improving the Foundation's governance** to be more transparent.
* **We're ready to figure out what's next**.

*Updated November 24th, 8pm Pacific: The app store archives are now available!* 

# On the Rebble App Store

By far, one of the most common criticisms we heard from Core Devices and the community was:

> Why does Rebble think they own everything on the Rebble App Store?

It's a great question! We spent a while scratching our head about this, because, **to be clear, we don't believe this at all**.

Of course we don't own every single app and watchface published to the App Store - those are owned by the people who put in the effort to produce them in the first place! As maintainers of the App Store, our jobs are to get them to users that want them -- and to keep them safe, so that effort doesn't end up lost to time. We don't want to claim ownership over everyone's apps - that would be a huge disservice to our amazing community of app developers.

Our last blogpost didn't do us any favours in this regard, though. The first version contained the following wording:

> **What you now know as the Pebble App Store from Eric's new company, Core Devices, is the result of nearly a decade of our work.**  The data behind the Pebble App Store is 100% Rebble.

A lot of people told us that they interpreted this as "everything in the App Store is 100% owned by Rebble". Honestly, we can't really blame them for interpreting it like that (even if we feel it's a little uncharitable). It was a rough choice of wording on our part, and we should have been a lot clearer from the outset -- that shouldn't have made it to our final copy.

We've since edited that section to make our intentions a lot clearer - the part of the App Store that's 100% Rebble is the maintenance, operation and curation of the App Store itself, not the apps it hosts.  We're sorry we gave the impression that we owned all of your apps and watchfaces - that was never our intention, and we should have been a lot more careful about how we phrased it.

**The App Store's apps and watchfaces belong to the community, not to Rebble**. We've always believed this, and we don't intend to change our stance on that anytime soon. In the past, we thought that we could do the best for the community by avoiding fragmentation of the app store.  Former Pebble engineer Lance R. Vick [had an insightful comment thread on Hacker News](https://news.ycombinator.com/item?id=45962008) that meaningfully changed our opinion: we still think that, as a community, we can build the best app store for the Pebbleverse, but we think he's right that other people should get to try out their own "alternative visions" for the Pebble ecosystem.

So on that front, we're **publishing a complete archive of all apps and watchfaces on the Rebble App Store** for everyone to download and use.  You can download it right now on the [dev portal](https://dev-portal.rebble.io/profile) (thanks to the modern world of AI scrapers wasting huge amounts of bandwidth, you'll have to log in, but then click on the gear and click on the download link!).  The archive will update each month with the latest export from our database.  The archives are free for you to do whatever you want with them - share them around, keep your own backups, anything that you come up with!  We only ask that if you do use our archives to make something, **please leave a prominent note saying that you got it from us**, and **provide a link to the archives** so people know where you got them from.  You don't *have* to, but we'd be sad if you didn't.  :(

# On Stealing Allegations

One of the main accusations we made in our first post was about Eric scraping the App Store. It was so prominent that it's even in the title of the post - "Core Devices keeps **stealing** our work". At the time, we felt pretty justified in making that claim (we wouldn't have made it otherwise, obviously). But now that we've had some time to cool off, and reflect on things with level heads... yeah, we've gotta be totally honest here. This accusation was definitely overheated.

A brief timeline of events from our perspective is in order, so we can explain how we got here. On the 11th of November, there was a very large spike of requests to the App Store for roughly 3,600 watchfaces. On the 14th November, after digging into the logs, we identified that the traffic came from an IP that had made other requests from Eric's personal Rebble account.

At the time, negotiations around the App Store with Core had already significantly deteriorated, in some of the other ways we discussed in our post.  Given that context, we could only assume that this activity was Eric testing a scraper for the App Store.

![Snapshot of the logs mentioned above, showing two larger than usual spikes coming from the same source](/images/rebble-in-your-own-world/logs.png)
*Snapshot of the App Store logs from November 11th*

On the 16th of November, we learnt that Eric had [built an application to help him curate a "Top Picks" section for Core Device's App Store frontend](https://bsky.app/profile/ericmigi.com/post/3m5rhf4nsts2r).  We had no source code for this yet, but in our concern for how things were going, we assumed that this was part of a larger tool that he had planned to use around these scraped data.  After our discussions fell apart on Monday afternoon, our blogpost went out that evening, with the scraping accusations still included.

From [the source code that Eric released](https://github.com/coredevices/erics-appstore-picker), we now know that this was not scraping with the intent of supplanting the App Store, but instead with the intent of augmenting its capabilities.  We may have been upset with his conduct in other parts of the negotiation process, but **Eric's interactions with our appstore API were surely not meant to be "stealing", and we no longer consider them that way**.

Once we understood this, we should have edited our previous blog post.  And we should have done it much sooner, but here we are: we've since added some text at the top to reflect this reality, and we can (and wish to) apologize to Eric for taking so long.

# [Rebble Foundation intensifies]

One of the common things that we heard -- from the community, and from Eric -- is that people don't understand what the Rebble Foundation does, how the Foundation operates, and that we haven't done a good enough job of being transparent enough to earn your trust.  We heard of a few concrete things that would help, and we agree and obviously we should just do them!  Here are a handful of things that we're doing to improve the Foundation's governance:

* **Board elections.** Soon, some seats will turn over on the board!  Until now, we've been co-opting on the Board (i.e., the existing Board agrees to put people on the Board).  We're going to set up a structure so that the community can have a more direct say in how the Foundation is run.
* **Meeting notes.** We've been meeting informally by Discord.  This is effective, but we actually need to set more formal plans!  The Board is going to meet at least once a quarter in a form that enables us to set goals, and put them on record -- and then share them with you all.
* **Budget transparency.** A handful of folks asked how we were spending our money, and thought it sounded like we were holding our funds as a secret.  We don't intend to be that way, but "just posting on Discord here and there" is not a great way to communicate!  The Board will report on our financial situation, and what we're spending money on, and make that public.

Basically, we should have done all of these things a long time ago -- this is how good non-profit governance should work.  We got so distracted by all of the noise with setting up the Foundation, and with negotiating about our relationship with Core, that we've been making much slower progress on this kind of infrastructure than we would have liked!  So watch this space -- we anticipate having something to report **by the end of January**.

And, finally, amidst an otherwise dour blog post, we actually do have some good news to report.  **We're excited to add two new members to the Rebble Foundation Board of Directors, bringing our total up to five Directors!**  We're happy to welcome:

* Ruby Iris Juric, who you may also know as `srxl`.  She's been maintaining `developer.rebble.io` for months now, and has been a real champion of making that experience better for users.
* Stasia Michalska, who you may also know as `LCP`.  They have been recently on an absolute tear of making improvements to the App Store backend, and adding Timeline topics support!  Stasia also brings some desperately-needed governance experience from their work on openSUSE.

In addition to their recent contributions, both Ruby and Stasia have been long-time community members and are all-around Good People To Have in the Rebble community.  We're so glad that they'll be contributing their skills to more directly shape the future of Rebble, and we hope that you will be too!

# Settling Disputes

Fighting sucks. We don't want to keep fighting with Core Devices - no one gets anything out of that. At the end of the day, we want to find a deal with Core that works for Rebble, for Core, and for the broader Pebble community.  Concretely, **we have no intentions of shutting off access to Rebble Web Services for Core's watches, nor do we have any desire to.  If we must do so at some point in the future, we commit to providing at least a month's notice before making any changes.**

But we do need a usage deal in place, so we can ensure the reliability of our services for Core Devices' customers.  Many people within the community have suggested bringing in a third-party mediator to help us figure out how to work together.  We think that's a great idea, and we're ready to do that whenever Eric is.

One of the things that we've understood from both our blog post and Eric's is that we have real common ground: what matters to both of us is keeping the Pebble ecosystem alive and kicking.  And from the community reaction, what we hear is clear: we can only do that by working together.  If you're reading, Eric - we're prepared to come back to the table whenever you are.  Let's both do our best to give your users the best possible Pebble experience.

# Brighter Days Ahead

Ever since our inception, Rebble's goal has always been to keep the Pebble community alive. Keeping Pebble alive means more than just Rebble Web Services, a mobile app, and developer tools - it means keeping the space as inclusive, accessible, and welcoming as possible. We have let a lot of anger and division get in the way of a healthy Pebble community. For that, we're really, truly sorry. We want to get things back on track, and get back to what we all do best - keeping our favourite smartwatches ticking away.

To everyone who has stuck with us up to this point: thank you so, so much. The feedback you've given us has been immensely useful for figuring out what our next steps should be. You've all been overwhelmingly civil and productive (even when we haven't!) and we can't wait to get back to making our Pebbles better than they've ever been before with you all. We've all got brighter days to look forward to - let's keep making awesome happen, together.

And as always, we'd love to hear any more feedback that you have.  Please feel free to get in touch on Discord, or by e-mailing us, at [board@rebble.foundation](mailto:board@rebble.foundation).

Yours in hope,
the new Rebble Board of Directors,
David, Joshua, Ruby, Stasia, and Will
