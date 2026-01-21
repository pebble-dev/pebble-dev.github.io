---
layout: post
title: "A peek into the future: microPebble on iOS"
date: 2026-01-21 12:30
author: "Joshua Wise"
---

In [my previous blog post about Rebble's finances this year](https://rebble.io/2025/12/27/rebble-finances-2025-wrapped.html), I alluded to the idea of Rebble commissioning a port of [Matej Drobnič (`matejdro`)'s microPebble](https://github.com/matejdro/microPebble) to iOS.  I promised I'd write more about that soon -- and luckily for you, soon is now!  The most important piece of information is, of course, "yes!  we're doing it!", but I have a fair bit more to say about it, including: why we think microPebble is important; what we're doing to make microPebble possible on other platforms; and where we want to go with microPebble in the future.  I think it's very exciting, and I hope you will too!
 
<!--more-->

## What is microPebble, and why is it important?

For those of you who haven't heard of it, [microPebble](https://github.com/matejdro/microPebble) is an alternative, open source, Pebble companion app that Matej Drobnič started work on back in September.  In Matej's words, it's a "small scrappy app [...] with the functional UI and features [he] cares about."  microPebble is built on Core's `libpebble3`, which in turn, is built on the `libpebblecommon` that we sponsored the development of many years ago.

Matej started this work before Core Devices open sourced their CoreApp; even though CoreApp is now open source, though, we don't think that microPebble is irrelevant!  CoreApp has a focus on all of Core Devices's products, not just their PebbleOS family of watches, and it exists to support their ecosystem (and it should!).  We think that the Pebble world also deserves to have a vendor-neutral app for all sorts of PebbleOS devices past, present, and future.

We think that the Pebble world should have an app that supports many different players in the Pebble ecosystem with many different goals.  For instance, obviously, we shouldn't expect Core Devices to have to support other manufacturers' watches in their app!  But the Pebble world should definitely have an app that allows other people to make their own watches, after all.

And, of course, we'd love to have an app with first-party-quality support for Rebble Web Services.  We'd like to continue to add features, without having to depend on anyone else to implement them -- for instance, we recently rebuilt support for shared pins in the Timeline, and, of course, we'd like to continue to extend how Bobby (Rebble's voice assistant) can be useful.

There are many other things that we'd love to have in an app of our own -- things that don't need to be in scope for CoreApp.  We'd like to be able to publish to F-Droid, for instance -- and it could be exciting to try to use microPebble's Kotlin MP base to try to build a Pebble desktop app.

More than anything, we'd like for microPebble to be the start of a community-owned platform that's designed to last far into the future -- and we've been thinking about how to make that happen.

## Joining forces with Intent

Back in September, the Rebble Board reached out to the team at [Intent](https://www.withintent.com/).  We saw the work that was happening on microPebble, but for the time being, Matej only had development access to Android -- and since it was his own personal project, of course it made sense that he'd prioritize devices that he had!  We explained why we thought it was important to have our own mobile app, and we asked the Intent team to evaluate the state of microPebble, and how it could help us meet our goal.

The Intent team helped us flesh out what we were looking for -- we were hoping to come up with a spiritual successor to the original Rebble mobile app, Cobble.  They came up with a few avenues to explore:

* What would it take to modernize the old Cobble Flutter framework to use `libpebble3`?
* What would the level of effort be to bring up microPebble on iOS?
* And, once CoreApp became open source, would it be better to use CoreApp, microPebble, or Cobble as a base?

We decided to work together for a few weeks to have them do some research, and come up with some conclusions on each of these paths.  They looked at each of the options, and found that microPebble was most likely to meet our requirements -- and then, to our surprise, in the remaining time, the Intent team did not just estimate the effort, but even better than that, they **brought microPebble to life on iOS by rewriting the UI with Compose MP**!

This was obviously very exciting.  I solidly had a big smile on my face when I paired a watch to my daily driver iPhone using microPebble!

## What's next to do?

Of course, this is still just the beginning, and there is a lot of work to do before microPebble-on-iOS becomes the Cobble dream.  We're still working on coming up with a roadmap for what we'd like to prioritize in terms of next features!  We expect that we'll be posting some in the [Rebble itself!](https://forum.rebble.io/c/rebble-foundation/10) category on the Rebble Dev Forum.  For now, here are a handful of things that we're thinking about, in the short term and in the long term:

* Obviously, we should get this merged back into Matej's microPebble base.  We have a development branch right now as a proof of concept, but we should structure it so that we can put up some PRs!
* Also, there are a few changes to `libpebble3` itself that are needed.  We need to upstream these changes.
* The obvious next thing to do is to make sure that iOS is at feature parity with Android.  A few screens are missing, and such; we'll have to improve that (and, while we're at it, probably come up with a feature matrix in the README for what works on Android, what works on iOS, and what works on both!).
* If we're going to sponsor development on microPebble, we'd like to get it to the point of using it as a daily driver in a RWS world -- and, for me, that means being able to use Bobby!  So we'll have to itemize what's missing to get us there -- and then start ticking off the list.  (Even in the time since I started writing this post, `fishy`, on Discord, has been doing a lot of work recently on getting app store support up and running on microPebble-for-Android!)
* And, finally, once microPebble reaches a baseline level of functionality, we'd like to start skinning the UI using some of the Cobble Figma designs (I still love that art style!).  

We'd like to continue to work with the Intent team, and from the Rebble side, we'll continue to fund work on microPebble (by Intent, and by others who are capable!).  My thought was that the Intent team can be active participants in the community, as peers to other developers -- and that they can use their experience in building modern mobile applications to set us up for success by building scaffolding that the community can develop on top of.  For instance, we'd like to have Intent start to build out a visual component library and prepare some best-practice examples for how to implement some of the Cobble UI designs -- and then other people in the community who might have less experience (maybe even hardware engineers like me??) can continue to implement more screens on top of the framework that they'll build for us.

There's a lot to do, and it'll be fun to see how it shakes out!  But it is very exciting to see the initial progress, and one of the fun parts about this project is that we can do all of the planning and coordination work in the open.  I'm looking forward to seeing it come to life!

## You can start playing with it today

Originally, I had planned to wait to write this blog post until we got the initial proof of concept merged back into Matej's upstream.  I still need to spend some time sifting through diffs!  But the more I became busy with other tasks, the more I realized that you all deserved to see it sooner :-)

So, if you want, **you can start playing with microPebble-on-iOS today, and you can build it yourself!**  The Intent team provided us with a proof-of-concept repo, with iOS build instructions in the README -- to get started, just take a look at [github/pebble-dev/micropebble-ios-poc](https://github.com/pebble-dev/micropebble-ios-poc).  Clone it with submodules, follow the build instructions, and you, too can have your iPhone talking to your watch!

And one of the cool things about doing all our work in the open is that we can show you how the sausage is made.  The Intent team put together a great summary report on the work they did for us, and if you're curious, [I've uploaded it here so you can read it](/images/20260121-rebble-intent-findings.pdf). 

Obviously this is very early stages, and I can't imagine this is going to remain in this repository in the long term; we'd like to unify it back with the microPebble repository, and probably these changes will get rebased as individual PRs on top of microPebble (and we have work to do, given that there's been work recently on the non-Compose UI for microPebble!).  So don't count on that particular repo being terribly long-lived.

As always, we'd love to hear your input on what we should do next.  Feel free to [post about it in the Rebble forum](https://forum.rebble.io/c/rebble-foundation/10), or come chat with us on Discord!
