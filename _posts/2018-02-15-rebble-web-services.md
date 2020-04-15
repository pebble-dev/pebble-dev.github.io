---
layout: post
title: "Pebbling after Fitbit: introducing the Rebble Web Services"
date:   2018-02-15 18:00:00
# categories: community
author: "Katharine Berry"
---

Hey there! [Katharine Berry](https://twitter.com/KatharineBerry) here. As you may well have heard
by now, Fitbit will be shutting down all Pebble services at the end of June of this year. After that, if nothing were to be done,
then no services that require a Pebble server would work any more — which includes the appstore,
weather, dictation, some parts of timeline, iOS SMS/email actions, the CloudPebble IDE, and more.
<!--more-->
The observant among you might also notice that none of these things have been mentioned in a
community update in over a year. Fortunately, we have the makings of a plan: the Rebble Web Services.
In this post, we have a few things to cover.  First, I'll talk about what we
plan to replace, and why that's important.  In there, I'll talk about how
we plan to do it.  And somewhere around the end, I'll talk about that little
important detail that all of us in the Pebble community are so acutely aware
of: how we're going to fund it.

Of course, everything in here is our best estimate.  We think we can achieve
almost all of this in time for the Pebble server shutdown, but as is always
the case, no battle plan seems to survive first contact with the enemy... 
We are a team of volunteers who are very excited to bring this to you, but
all manner of real-life things can get in the way, and so potentially large
parts of this post are subject to change.

------

## What we're replacing

The original Pebble services are a pretty large chunk of code!  Some of your
watch's functionality is entirely between your phone and the watch, but a
good portion of the Pebble experience lives in the cloud.  The app store,
for instance, runs entirely on Pebble's servers -- but you might not have
known that some types of timeline notifications go through Pebble, and that
the weather information that's built into the watch comes from the Pebble
servers, not from your phone's weather source.  So let's get started with
what's going to change, and how it'll impact you.

### Apps and firmware

**Impact**: _Users will have to switch to new Rebble Web Services manually._

You will continue to use Pebble's latest Pebble mobile apps and Pebble firmware for the forseeable
future. All of the Rebble Web Services will work with these; you'll just have to create a Rebble
account and tap a button to switch.

### Accounts

**Impact**: _Users will have to create a new Rebble account, but much of
your Pebble account data will be preserved._

Once Fitbit shuts down the Pebble services, you won't even be able to log in! We are going to
replace your Pebble logins with brand new Rebble logins. Because nobody wants to have _yet more_
accounts on the internet, we will back your Rebble login with a Google, Facebook, or similar login.
Don't worry if you happen to dislike one or another of those ... the choice
of which you'll use to log in will be yours!

**For KiezelPay users**: once you switch to using a Rebble account, if you do not perform an import
from your old Pebble account, you will have to re-claim your
apps using the email address you originally used to purchase the app. This should only be necessary
once, after which your apps should continue to work as they did before. You will _not_ have to buy
them again.

### Appstore

**Impact**: _Rebble users will automatically get the Rebble Store as a
replacement._

As mentioned in [previous community updates](https://rebble.io/2017/01/31/rebble-community-update-2.html),
work started on a Pebble Appstore replacement almost as soon as Pebble announced that it was ceasing
operations. The Rebble Store should be ready to go by the time the original Pebble appstore
shuts down, with all the original functionality. We might even be able to import the list of apps
you have installed!

### Timeline

**Impact**: _Most apps will continue to have functioning Timeline pins, but
some apps will need updates from the developers._

Even without Rebble, you could still expect to see your calendar entries on the timeline. _With_
Rebble, it's more complicated: you can expect more, but probably not everything.

Timeline functions as a web API, where other servers push timeline updates to Pebble servers, which
then forward those updates to your watch. We can (and will) rebuild the servers that pass timeline
updates along to your watch. We will also automatically alter apps that skipped the server and
just pushed directly into your timeline (there were many) so that they hit our servers instead of
Pebble's. What we _cannot_ do, however, is alter app developers' servers so they hit us instead of
Pebble. We will provide them with new endpoints to hit before the time comes, and hope that they
get the memo to update.

Finally, Timeline updates will become slower. While Timeline is today sometimes able to update
immediately when a service sends you a pin or notification, for technical reasons it is impossible
for any entity other than Fitbit to provide that service. Using the Rebble timeline service, updates
will instead occur every fifteen minutes.

### Weather

**Impact**: _Built-in weather functions will become an inexpensive, but
paid, feature._

Pebble uses the weather in a couple of places: there's the official weather app, and there are the
sunrise and sunset pins in the Timeline. Today, Pebble fetches this information from The Weather
Channel. We will replace this with information from another weather API. Unfortunately, these APIs cost
us some money to access, so we will be providing weather access as part of a donation-based package (see below).
If you choose to pay for it, that'll enable full weather functionality, and help support the service for
everyone.  If you do _not_ donate, the system weather app and timeline pins won't
appear -- but all third-party watchfaces will continue displaying the weather without
interruption for as long as the APIs they use continue to function.

### Dictation

**Impact**: _Dictation will become an inexpensive, but paid, feature._

Unfortunately, dictation is already broken when using iPhones running iOS 11+ with either a Pebble 2
or Pebble Time Round. As far as we know, there is nothing that we can do to fix this. For Android users, as well as
iOS users with a Pebble Time or Pebble Time Steel, we will be replacing Pebble's Nuance dictation with Google
Cloud Speech. Unfortunately, just like weather, this will cost us some money each time you use it.  So, in order to run this
sustainably, this will also be a paid feature.  If you decide that you don't want dictation, everything
else will continue to work, but your Pebble will display an error when you try to speak to it.

### iOS SMS and e-mail replies/actions

**Impact**: _SMS and e-mail replies and actions won't work on iOS._

Pebble had agreements in place with several carriers and service providers in order to provide the
ability to reply to text messages on iOS.  Pebble also provided e-mail actions by requesting access to your e-mail account.
Unfortunately, there is no way that we can reasonably provide this service: the privacy
and security implications of having this access are greater than we are willing to tolerate. As
such, we will not be providing either SMS or email action support for iOS.

### CloudPebble

**Impact**: _CloudPebble will be transitioning to Rebble Web Services, and
will have the option to import your old CloudPebble projects -- if you
migrate them before the old Pebble servers shut down._

CloudPebble, Pebble's online development environment, is unique among these services in that the
original source code is available (and, in fact, I wrote it). We will be bringing up our own
version of CloudPebble soon, and working with Fitbit to enable developers to migrate from the old
Pebble version to our new version. Any projects not exported or migrated by the time Fitbit shuts
down services will be lost forever, so it is important for developers who use CloudPebble to act
soon. We will be running an initial, limited version of the Rebble services for these developers.
It will continue to work with Pebble's existing appstore, timeline, etc. but will support the
Rebble CloudPebble, as well as using Rebble services for the CloudPebble Developer Connection.

## Funding

Running these services will cost money -- potentially, quite a lot of money.  Beyond just the basic
cost of running any old kind of web service (expensive, these days!), the dictation and weather
services that we depend on each charge per request.  We know the pain of having the services that
run our beloved watches shut down, so we'd like to build a structure such that the Rebble Web
Services are sustainable for quite a while to come.  And to that end, we will be setting up a Patreon,
so that the generous among you can donate to keep the services running.  We want the basic Rebble
experience to be free for everyone -- so if you donate to help us defray the cost of running
Rebble, we'll enable some services that cost us some more.

For right now, we plan to have a couple of options.  The first option, as I mentioned, is to pay nothing
at all: if you don't, you'll still get access to your Rebble account, the app store, timeline, and
CloudPebble. Alternatively, while the exact numbers are up in the air, we expect that for around two dollars per month
not only will you be helping keep Rebble alive for everyone, but you will get everything that we
can provide -- weather, dictation, and the rest of the Rebble
services keeping your beloved watch ticking.

### A brief moment of Fitbit love

When we start talking about money, it's easy to get angry at Fitbit.  It can
feel like they're the ones responsible for taking away our watches, or for
shutting the servers down.  In reality, all of us on the Rebble team are
very grateful for Fitbit's support!  They have been keeping the Pebble
servers running even longer than they'd originally announced, and they've
given us some needed extra time to come up with a solution for you.  If
Fitbit had not purchased Pebble, it's likely that the Pebble servers would
have shut down with no notice at all.  And, if all that was not enough, the
Fitbit team has been very cooperative in working with us to come up with a
plan to transition your watch to our new Rebble Web Services -- something
they had no obligation to do at all, but that they're doing because they
love Pebble the same way that we do.

So for all those reasons, we're thankful for the way Fitbit has handled this
transition -- and we hope that you will be, too!

## tl;dr

We've talked a lot, in a lot of detail, in this post.  If you want just a
few things to take away, here you go:

* We will be providing replacements for almost all Pebble services 🎉
* Most things will work just fine when you switch to the Rebble servers
* Timeline apps may require developer changes to remain functional
* Timeline updates will be limited to every fifteen minutes
* We will have a Patreon page for you to donate to keep the services running
* We will require that you pledge around a couple of dollars a month for weather and dictation.
  All other services will remain free.
* iOS SMS/email actions/replies will not be supported
* Fitbit are our friends
* All of this is subject to change

--------

Whew! That just about covers it. We'll have more updates for you as the months pass. Many of you
have already offered your support in response to
[my tweet](https://twitter.com/CloudPebble/status/956362270761664512), and it is thanks to you all
that we are undertaking this endeavour. See you soon!
