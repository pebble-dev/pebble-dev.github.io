---
layout: post
title: Pebbling after Fitbit: introducing the Rebble Web Services
date:   2018-02-02 11:42:42
# categories: community
---

Hey there! [Katharine Berry](https://twitter.com/KatharineBerry) here. As you may well have heard
by now, Fitbit will be shutting down all Pebble services at the end of June of this year. At that
point, no services that require a Pebble server will work any more — which includes the appstore,
weather, dictation, some parts of timeline, iOS SMS/email actions, the CloudPebble IDE, and more.

The observant among you might also notice that none of these things have been mentioned in a
community update in over a year. Fortunately, we have a plan: the Rebble Web Services.

_(Disclaimer: absolutely everything in this post is subject to change)_

------

# Funding

Running these services will cost money. Potentially, quite a lot of money. To that end, we will be
setting up a Patreon page, so that the generous among you can donate to keep the services running.
As a reward for donating and helping us keep the basic service free for everyone, we will enable
some services that cost us more to provide for you.

# What to expect

## Apps and firmware

You will continue to use Pebble's latest Pebble mobile apps and Pebble firmware for the forseeable
future. All of the Rebble Web Services will work with these; you'll just have to create a Rebble
account and tap a button to switch.

## Accounts

Once Fitbit shuts down the Pebble services, you won't even be able to log in! We are going to
replace your Pebble logins with brand new Rebble logins. Because nobody wants to have _yet more_
accounts on the internet, we will back your Rebble login with a Google, Facebook, or similar login
(we have yet to finalise a list).

**For KiezelPay users**: once you switch to using a Rebble account, you will have to re-claim your
apps using the email address you originally used to purchase the app. This should only be necessary
once, after which your apps should continue to work as they did before. You will _not_ have to buy
them again.

## Appstore

As mentioned in [previous community updates](http://rebble.io/2017/01/31/rebble-community-update-2.html),
work started on a Pebble Appstore replacement almost as soon as Pebble announced that it was ceasing
operations. The Rebble Store should be ready to go by the time the original Pebble appstore
shuts down, with all the original functionality. We might even be able to import the list of apps
you have installed!

## Timeline

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

## Weather

Pebble uses the weather in a couple of places: there's the official weather app, and there are the
sunrise and sunset pins in the Timeline. Today, Pebble fetches this information from The Weather
Channel. We will replace this with information from the Dark Sky API. Unfortunately, this API (like
all reliable, high-quality, global weather APIs) costs
us some money to access, so we will be providing weather access as a **$1/month** perk on Patreon.
Paying that dollar will enable full weather functionality, and help support the service for
everyone. If you do _not_ donate on Patreon, the system weather app and timeline pins will not
appear. However, all third-party watchfaces will continue displaying the weather without
interruption for as long as the APIs they use continue to function.

## Dictation

Unfortunately, dictation is already broken when using iPhones running iOS 11+ with either a Pebble 2
or Pebble Time Round. There is nothing that we can do to fix this. For Android users, as well as
iOS users with a Pebble Time or Pebble Time Steel, we will be replacing Pebble's Nuance dictation with Google
Cloud Speech. Like weather, this will cost us some money each time you use it. In order to run this
sustainably, we will request that you pledge at least **$2/month** on Patreon in order to access
dictation (which will also include weather).

## iOS SMS and Email replies/actions

Pebble had agreements in place with several carriers and service providers in order to provide the
ability to reply to text messages on iOS. Unfortunately, there is no way that we can provide this
service. Pebble also provided email actions by requesting access to your email account. The privacy
and security implications of having this access are greater than we are willing to tolerate. As
such, we will not be providing either SMS or email action support for iOS.

## CloudPebble

CloudPebble, Pebble's online development environment, is unique among these services in that the
original source code is available (and, in fact, I wrote it). We will be bringing up our own
version of CloudPebble soon, and working with Fitbit to enable developers to migrate from the old
Pebble version to our new version. Any projects not exported or migrated by the time Fitbit shuts
down services will be lost forever, so it is important for developers who use CloudPebble to act
soon. We will be running an initial, limited version of the Rebble services for these develoeprs.
It will continue to work with Pebble's existing appstore, timeline, etc. but will support the
Rebble CloudPebble, as well as using Rebble services for the CloudPebble Developer Connection.

# tl;dr

* We will be providing replacements for almost all Pebble services 🎉
* Timeline apps may require developer changes to remain functional
* Timeline updates will be limited to every fifteen minutes
* We will have a Patreon page for you to donate to keep the services running
* We will require that you pledge $2/month for dictation and weather, or $1/month for just weather.
  All other services will remain free.
* iOS SMS/email actions/replies will not be supported
* All of this is subject to change

--------

Whew! That just about covers it. We'll have more updates for you as the months pass. Many of you
have already offered your support in response to
[my tweet](https://twitter.com/CloudPebble/status/956362270761664512), and it is thanks to you all
that we are undertaking this endeavour. See you soon!
