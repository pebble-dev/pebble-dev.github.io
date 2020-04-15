---
layout: post
title: "Getting Ready for Rebble"
date:   2018-06-13 18:15:00
# categories: community
author: "Katharine Berry"
---

Hi again! I'm [Katharine Berry](https://twitter.com/KatharineBerry), back
with a brief update about the Rebble Web Services. As you have all probably noticed,
we've been a bit quiet since my [last post](/2018/02/15/rebble-web-services.html).
We've all been very busy, so we haven't had much time to blog lately. However,
we're still on
the case, and before we go any further, we have something important for you to
do!
<!--more-->
## Rebble Accounts

The Rebble account system is up and running, and now is the time for you to
create your accounts. **Head over to [Rebble Auth](https://auth.rebble.io)
and log in using your preferred site.** You'll then be asked to link your
Pebble account. Please do: we will use this to import information from the
Pebble servers before they shut down in order to help make the transition
smoother.

**It is especially important for developers to link their Pebble accounts now.**
Once the Pebble services shut down at the end of this month, we will no longer
be able to identify developers who did not link their accounts, and so we will
be unable to let them update or otherwise change their apps.

We are also going to use the number of accounts created to assist us in
determining service usage and attempt to validate our assumptions about the
number of users we expect to see.

That's all there is to do right now: there is no app to install, and we are not
yet ready for users to switch over to Rebble services. We will be sure to update
you when we are!

So to repeat myself: **please go and
[make your Rebble account](https://auth.rebble.io) right now.** You must do so
before the end of this month, and it only takes a minute!

Okay, now that that's out of the way...

## The State of Rebble Web Services

So here's the bad news: we are probably not going to have _everything_ in place
in time for Fitbit's shutdown. We are working hard to bring up services
as quickly as we can. Indeed already have some backend services in place,
such as auth, cohorts, and boot, with active work ongoing on the appstore
and related services.
However, Pebble is a complicated system, and we ended up with
less time than we had hoped. I still expect that we will have at least some
services up and running in time for the cutoff. I dare not speculate as to which
but I promise we will have more updates before the end of the month. Even after
Pebble's services shut down, we will continue to work to bring up the remaining
services, eventually reaching the collection of services described in my
[previous post](/2018/02/15/rebble-web-services.html).

Here's some good news to go with that: a lot of Pebble functionality will keep
working regardless of what we manage to put together. Your apps will still be
installed, your notifications will still come through, and Pebble Health will
still be entirely functional. Pebble apps and watchfaces will still work fine,
too, except for those that create timeline pins.

Many of you have been asking what they will have to do to start using the Rebble
Web Services. We aren't ready yet, but when we are, it should actually be very
easy: tap a link from our website on
your phone, and you will be switched over to our services. Rebble Web Services
will continue to work with the existing iOS and Android apps, so you have
nothing to download or install. We _may_ have an updated Pebble firmware with
some bugfixes and Rebble-specific changes, but that will install
automatically if necessary.

A number of you have also asked how you can give us money. Don't fret! As
previously mentioned, we intend to offer basic service for free, and charge
a small monthly fee for access to Weather and Dictation, thereby funding the
service. In order to avoid the risk of disappointing those who have paid us,
we do not intend to open up payments until there is something to pay for.

Finally, we would like to extend our thanks to Fitbit once again: they have been
extremely helpful in working with us to enable us to continue Pebble long after
the original Pebble services shut down.


That's all for now. More news coming soon!
