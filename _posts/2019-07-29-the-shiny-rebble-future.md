---
layout: post
title: "The shiny Rebble future: one year after the Pebble server shutdown"
date:   2019-07-29 18:00:00
# categories: community
author: "Joshua Wise"
alt-bio: "https://joshuawise.com"
---

Hi out there, Rebble world!  [Joshua](https://joshuawise.com) on the
microphone here for a bit.  It's been a year since the Pebble servers have
shut down, and I'm still wearing my beloved Pebble 2 on my wrist every day;
as far as I can tell, it's *still* the case that nothing else out there
compares to these things.  As the buttons start to wear out on this one,
though, I'm starting to ask some of the same questions that I hear echoed
out in the Pebble world: what does the future of Rebble and of
Pebble-like things look like?  Well, I'm an optimist on that -- and I wanted
to fill you all in on some of the reasons why.  I'll catch you after the
fold.

<!--more-->

Lingering in the back of my head have been three things: money, movement,
and hardware.  Without money, the Rebble web services can't run; without
forward movement, we fade quietly into the sunset; and without hardware,
there's nothing to put on our wrists!  On all three of those, I have pretty
darn good news in the short term, and I have ideas for the long run, too.
I'm going to get into each of those in a moment, but before I do, I want to
give you the same proviso [that Katharine did last
year](http://rebble.io/2018/02/15/rebble-web-services.html): I can't guarantee the future, but I'm going
to give you my best guess.  Let's start!

## Money

I think this is the biggest question on everyone's mind after we watched the
downfall of our beloved Pebble Technology Corporation: how can we build a
_sustainable_ way to keep our watches ticking?  After all, web hosting can
be pretty expensive for a cloud application like Rebble, and we're not even
making any revenue by selling watches.  The solution that we came up with
was to have a two-tier model: everybody gets access to the basic services
for Pebble for free -- firmware updates, the app store, account management,
and such, but the things that cost us money -- dictation and weather -- we'd
charge a small amount of money for, and if we got the math right, the paid
users would subsidize the free users.

So the question is: how well did that work out?  I'm happy to say that it
seems to be working pretty well.  We have around 7,000 paid users, which
comes out to about an annual run rate of around $190,000.  This means that we're
doing a fair bit better than breaking even for now: even though we're not
drowning in cash, Rebble is definitely managing to pay its own rent from
Amazon.  This is heartwarming news, and I hope that it makes everyone feel
better about the sustainability of Rebble itself, and also about Rebble's
model for running services.

On that front, I wanted to thank all of you who are Rebble subscribers:
without you, it wouldn't be possible to keep this service running, and you
all are amazing proof that people will pay to sustain technology that they
want to have more of in their life. :heart_eyes:  [Maciej Ceglowski](http://idlewords.com/),
proprietor of a small bookmarking service called [Pinboard](https://pinboard.in), wrote [a
good piece a few years ago](https://blog.pinboard.in/2011/12/don_t_be_a_free_user/) about the importance of small paid services, and
how they help build business models that center their users as a priority,
instead of business models that center investors or surveillance systems as
priorities; I have looked to that as inspiration, and I'm glad that we can follow in those footsteps.  It's a joy to serve you all!

I suppose this would be the right time, also, to invite those of you who
haven't joined us as subscribers to come on board!  I think that $3/month (or
$33/year, if you subscribe for a year at a time) is a great value for being
able to dictate messages while I'm out on my bike, and for knowing at a
glance when the sun is going to close me out without having to pull out my
phone -- and, of course, as I noted above, subscriptions go towards keeping
Rebble sustainable.  So it's never too late to [join the
Rebble-lution](https://auth.rebble.io/account/])!

## Movement

One worry, of course, is that if Rebble is standing still, we start to look
pretty dead.  After all, we'd been pretty quiet for about a year after the
initial Rebble Web Services launch.  Well, I assure you that we're not dead!
Some of you with eagle eyes :eyes: have been watching commits to the Rebble
repositories, and have noticed that the pace of development has picked up
some over the past few months, culminating with the most recent [launch of
Timeline](http://rebble.io/2019/07/24/its-timeline-time.html).  You might be asking: what lead to this sudden surge in motion?
And will the development continue?

Well, in May, [Katharine](https://twitter.com/KatharineBerry), [Ish Ot
Jr.](https://twitter.com/IShJR), and [I](https://joshuawise.com) got
together in a Hangout, and we spent some time thinking about the future of
Rebble.  We decided that we had a little bit of money left to spare, and
that we wanted to reinvest it in the development of Rebble, and so we'd pay
someone to do a little engineering work.  Well, precisely, we'd pay, well --
me!  About a year ago, I left my previous day job to [do some software and
hardware consulting](https://accelerated.tech), and as a result of that, it
suddenly became possible for me to dedicate time in small quantities, rather
than as "everything or nothing".  For the past few months, I've been doing
about six hours of paid work a week or so on Rebble (and maybe another five
or six during the evenings and on the weekends!) to knock off some features
that we've been hoping to build.

I've been doing a bunch of work behind the scenes on building development
tools and administrative features so that we can help you out with billing
problems, but Timeline was the first major fruit of that work that was
visible to you, our beloved users.  I don't think Timeline will be the end,
either: on my to-do list is to start building out the app store developer
portal, and even some work on longer-term ideas for keeping the Pebble
ecosystem alive.  Of course, all of the work that I'm doing is and always
will be open-source, just like the rest of Rebble (it's even written into
the contract!).

I'm doing this all on the back of the amazing work that Katharine did to get
Rebble Web Services off the ground.  She basically put this whole thing
together single-handedly, and I owe her incredible thanks for such a strong
foundation to keep building on top of.  If you haven't watched her talk from
[!!Con West 2019](http://bangbangcon.com/west), it's a great story about how
we got here, told expertly in 10 minutes -- [go watch it; you won't regret
it](https://www.youtube.com/watch?v=6qrfjbb5jKw)!

A year ago, Ish Ot Jr. wrote and said that we're just getting started, and
he was right.  It feels to me like we have a path forward to keep building
Rebble into the future: we took a breather after we launched, but we're back
at it, and now we're geared up to -- as Pebble liked to say -- keep making
awesome happen! :rocket:

## Hardware

The last piece of the puzzle, I claim, is hardware.  I'm not the only one
with holes bursting in the buttons of his Pebble 2.  Pebble Technology
Corporation isn't making any more of the things, so in theory, our userbase
is only shrinking from here, and that's not a good place to be.  How can we
keep more Pebbles running for longer, and is there ever a possibility of
there being more?

### Pebble life support: you can save your Pebble now!

I am a die-hard believer in my Pebble 2, but as we all know, these things
have a serious design defect: [the silicone buttons on the side fall apart
after about a year](https://m.imgur.com/a/98Z7A).  There have been a handful of makeshift solutions out
there, but I never found the Sugru approach to be great.  Fortunately, the
quality of 3D printing has gotten quite good in recent years -- and even
more fortunately, two wonderful Pebblers have been experimenting with
hardware to rebuild Pebbles stronger, and, frankly, I think even
better-looking.  Tation and Astosia have [a Shapeways store](https://www.shapeways.com/shops/astosia?section=pebble&sort=) with all manner
of exciting fixes for your Pebble 2, including entirely new cases that use
the original "OG" Pebble buttons; they also have [Imgur albums](https://m.imgur.com/gallery/cvdagKI) [with the guts](https://m.imgur.com/a/nGeXEq0) of how to dissasemble and reassemble the devices.  They're also experimenting with
replacement 3D printed rubber buttons that you can glue right on.  So if
your Pebble 2 is falling apart, don't despair: there are fixes that you can
make today to bring it back to life!  There are also some [models available](https://www.thingiverse.com/thing:3464868) [on Thingiverse](https://www.thingiverse.com/thing:2599551), for those inspired to print their own.

The batteries in these things also don't last forever, we've found.
Luckily, it seems like you can get anything in China if you know where to
look -- people have had success with batteries from Aliexpress for the
original Pebbles, for Pebble Time and Pebble Time Steel, and for Pebble 2.
If you're handy doing a little soldering, Pebble batteries are not too
tricky to replace, and you can get years more of reliable service from your
beloved Pebble.

### Pebble life support going forward

Here's the bit where I start to speculate a little bit.  I've heard
[rumblings of the GadgetWraps guys making some side buttons for Pebble 2](https://www.reddit.com/r/pebble/comments/chqa9v/pebble_2_side_buttons_should_we_makesell_these/) with
their beautiful silicone molding process.  If they do, it could be possible
to get the same lovely smooth feeling buttons that you were used to, without
any major surgery at all.  If that sounds like something you'd like, you
might want to shoot them some mail telling them that you'd be interested!

I've also been talking a little bit with a low-volume injection molding
company.  I don't want to say too much about that, since I don't know where
it will end up, but it's definitely possible that in the not-so-distant
future, we could have new cases for Pebbles in all manner of interesting
shapes designs, and materials.  The logistics of selling them are very scary
to me, but if there's interest, Astosia, Tation, and I are interested in
making it happen!

### The post-Pebble problem

Of course, this is all well and good, but how can we bring new Rebblers into the
fold?  In some ideal universe, it would be nice to sell new hardware,
without all of the pain of trying to limp along something that we didn't
design.  What if we could improve on Pebble with new features?  After all,
Bluetooth microcontrollers have come a long way in the last few years in
terms of power consumption...

It sounds like a pipe dream, but it's not entirely.  Over the Christmas
break last year, I [designed an nRF52840-powered microcontroller board](https://github.com/jwise/aWatch2-hw) that,
hopefully, could be shrunk down into the form factor of a watch.  A month or
two later, I had a circuit board that I called "Asterix" that I had
Bluetooth and a display up and running on ...  and a month after that, I
managed to bring RebbleOS up on that, along with my Pebble app "Dali Clock".
For the first time in history, I think, I had an application that was built
using only Pebble tools running on non-Pebble Technology Corp hardware!

I don't want to get your hopes up too much.  There's a lot of work to do.
Barry -- who some of you on Discord may know as
[ginge](https://github.com/ginge) -- did an *amazing* job laying the
groundwork for RebbleOS, but as everybody who's come and asked about it
knows, we still have a long way to go on the software front.  The hardware
that I have is about four times too big; I think it's definitely possible to
shrink it, but it'll require a good amount of effort to do.  And the
question of manufacturing it looms huge in my mind, and I don't know where
to even start with that.

But it feels possible, in a way that it didn't a year ago.  I'm hoping that
I can put some time towards that once I get Timeline settled in and under
control.  I don't know anything about manufacturing, and distributing and
selling them scares the dickens out of me even if I manage to make more than
one of them.  So, hey, if you know about these things and want to take
charge of a piece of it -- come in and help out!  I'd be happy to work with
you!

On that front, I'll leave you with an [exciting little video of Asterix
booting into RebbleOS](https://www.youtube.com/watch?v=Gd2VBVRp234).  It's
way less complete than it looks: it's incredibly unstable, and it doesn't
even know how to talk to the Pebble app yet.  There's so much I don't know,
and I don't even know how to estimate how much is behind it.  But it's hard
not to look at it and grin.  What is the purpose of the future, if not to
give us something to aspire to?

## Conclusions

Rebble is alive and well.  I touched on three pieces: money, progress, and
hardware.  These three things all feed into each other: money keeps us
alive, and helps us make progress; progress keeps us alive, and helps us
make hardware; and keeping hardware alive keeps us alive, and lets
Rebble keep making money.  In the short term, Rebble is healthy on all three
of these fronts.  There's a plausible idea for how we could remain healthy
going forward, too!  It's going to take work, and it's going to take the
continued support of you, our amazing community, but it's not impossible.

On a personal note, it feels very rewarding to get to serve yinz Rebblers.
Pebble built a passionate group of users.  I'm excited.

Ok, that seems like about it for today.  Thanks for staying with us so far,
and I'm looking forward to coming with you all into the Shiny Rebble Future
-- keep your Pebbles on your wrists!
