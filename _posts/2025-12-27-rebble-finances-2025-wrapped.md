---
layout: post
title: "Rebble Foundation Finances 2025 #Wrapped!"
date: 2025-12-27 20:10:00
author: "Joshua Wise"
---

Hi everyone!  It's me, Joshua, your friendly Treasurer for the Rebble Foundation.  [We promised earlier this year](https://rebble.io/2025/11/24/rebble-in-your-own-world.html) that we were going to find ways to be more transparent with how Rebble is run -- so I wanted to provide an update on our finances for this year, so you can see what we're spending money on, where it's going, and how we're doing!  

<!--more-->

Anyway, I just finished the QuickBooks review for December, and I am happy to say that our financial situation is decently strong. So first off, here’s a table of our cash flow for this calendar year. (There are some notes below.) Our fiscal year closes in June, so this isn’t a formal 'annual report'.  But given this is coming in December, it obviously is a #Wrapped!

## Foundation Financial Overview

<style>
table.argh * { box-sizing: border-box; }
/* why does this radius work for hackmd but not me?  whatever, argh */
table.argh {border-radius: 4px; border: 1px solid #aaa; border-spacing: 0; border-collapse: collapse;} 
table.argh td, table.argh th { min-width: 1em; border-left: 1px solid #aaa; border-top: 1px solid #aaa; padding: 3px 10px; }
table.argh thead tr th { border-top: none; border-left: none; }
table.argh td:first-child, table.argh th:first-child { border-left: none; }
table.argh tr:nth-child(even) { background: #EEE; }
table.argh tr:nth-child(odd) { background: #FFF; }
</style>
<table class="argh">
    <thead><tr><th colspan="3">Rebble Foundation Financial Report</th></tr></thead>
    <tr><td colspan="2">Starting Cash on Hand</td><td><b>$508,407</b></td></tr>
    <tr><td colspan="2">Income</td><td><b>+$87,457</b></td></tr>
    <tr><td></td><td><i>Subscription revenue</i></td><td><i>$82,054</i></td></tr>
    <tr><td></td><td><i>Interest income</i></td><td><i>$5,403</i></td></tr>
    <tr><td colspan="2">Program Expenditures</td><td><b>-$37,320</b></td></tr>
    <tr><td></td><td><i>Initial port of NimBLE to PebbleOS (Hexxeh)</i></td><td><i>$18,000</i></td></tr>
    <tr><td></td><td><i>MicroPebble iOS initial work (Intent sp. z o.o.)</i></td><td><i>$11,000</i></td></tr>
    <tr><td></td><td><i>NimBLE debug assistance for Snowy (Codecoup sp. z o.o.) </i></td><td><i>$7,000</i></td></tr>
    <tr><td></td><td><i>pebble.nix Apple Silicon hardware subsidy (Ruby)</i></td><td><i>$820</i></td></tr>
    <tr><td></td><td><i>Hackathon #002</i></td><td><i>$500</i></td></tr>
    <tr><td colspan="2">Administrative Expenses</td><td><b>-$30,138</b></td></tr>
    <tr><td></td><td><i>Legal fees for Foundation startup (Bodman PLC)</i></td><td><i>$14,068</i></td></tr>
    <tr><td></td><td><i>Federal tax</i></td><td><i>$11,955</i></td></tr>
    <tr><td></td><td><i>Accountant fees (Curcuru & Associates CPA)</i></td><td><i>$2,800</i></td></tr>
    <tr><td></td><td><i>Software: G Suite; 1Password; QuickBooks Online; Acodei; Zendesk; Figma</i></td><td><i>$1,315</i></td></tr>
    <tr><td colspan="2">Cost of Goods Sold</td><td><b>-$22,452</b></td></tr>
    <tr><td></td><td><i>The Weather Company</i></td><td><i>$8,652</i></td></tr>
    <tr><td></td><td><i>GCP</i></td><td><i>$6,585</i></td></tr>
    <tr><td></td><td><i>Honeycomb</i></td><td><i>$6,435</i></td></tr>
    <tr><td></td><td><i>Algolia</i></td><td><i>$420</i></td></tr>
    <tr><td></td><td><i>AWS</i></td><td><i>$360</i></td></tr>
    <tr><td colspan="2">Ending Cash on Hand</td><td><b>$509,315</b></td></tr>
    <tr><td></td><td><i>2025 Profit / Loss</i></td><td><i>+$908</i></td></tr>
</table>

### Notes

* These data were collected from January 1, 2025, to December 25, 2025.  Our fiscal year actually ends in June but I really wanted to get a report out for the end of the year, and most people don't think in fiscal years anyway, so there you have it.
* Figures are not fully final (various service fees / bank fees / etc. are not included in this report).
* Heck yes you read that right!  MicroPebble iOS initial work!  More on that in a blog post soon.
* The ending cash on hand does not quite add up because there are outstanding liabilities to GCP / Honeycomb / etc that were accounted above.  However, the cash on hand was taken directly from our bank account numbers, and does represent our real position.
* Rebble Foundation is a non-profit in the State of Michigan, but it is not an IRS-registered tax-exempt non-profit under code 501\(c).  What this means is that we do not pay tax to the State of Michigan, but we *do* pay United States Federal tax.  Our non-profit structure ensures that no individual people have an ownership share in Rebble, and that governance happens in accordance with the by-laws, rather than in the interests of maximizing profits for shareholders.

## Treasurer's Report

Hey, these numbers are not too bad!  Here are some of my interpretations of the above.

One of the big concerns that I've had for a long time is that we have not been spending *enough* to benefit the community -- as you can see by our $500,000 in cash on hand that we started and finished the year with.  (We've been running Rebble for quite a while now!)  To that end, I had hoped that we would *not* turn a profit this year, and we'd start spending that down.  We didn't *quite* achieve that, but I'm not too upset about where we landed: hitting break-even roughly within 1% on a ~$90,000 operating budget is pretty good.

Similarly, I am encouraged that we are starting to ramp our spending up on Pebble-related projects, rather than just web services.  This year, we spent roughly an equal amount on contributors inside our community, and also on engaging external services to perform tasks that we haven't been able to do on our own.  I'd like to continue that trend into 2026 -- we should be using our resources both to extend the reach of what we can do, and to reward people inside the Rebble community who are doing cool things that contribute to the Pebble movement!

We spent lot of money this year on administrative tasks -- we incurred nearly $14,000 in legal expenses.  This is not a surprise -- setting up a legal entity is expensive and time-consuming!  I expect that next year we will spend less money on those tasks, and we can use that additional funding to invest in our community.

I believe that **our financial position is strong**.  For 2026, from the Treasurer's perspective, I have the following recommendations for the rest of the Board:

* **We should continue to increase our investment in the community in 2026 by increasing our program expenditures.**  I recommend a target of at least $60,000 in program expenditures, with a target of splitting this approximately equally between recipients inside the community and external resources to augment our capabilities.
* **Our financial position is strong, and we can afford to dip into our savings** if we can identify programs that provide good value for our community.  It is acceptible to run a deficit in 2026.
* **Our highest goods-sold expense is weather data.**  We should consider finding ways to provide more value to subscribers using these data -- for instance, adding APIs so that watchfaces and watchapps can use weather data that subscribers are already paying for, and finding ways to provide weather data on new Core watches.
* At this time, we do not urgently need to seek out other revenue sources, but it may be useful to lay the groundwork for doing so, especially if we can increase our program spending.  We should evaluate in the second half of the year if we are on track to meet our spending targets, and if so, we should **consider giving our community options to fund our work other than subscriptions**.
* Traditionally, Rebble has had difficulty effectively spending on our programming because of our limited administrative bandwidth.  We should **consider finding a part-time paid executive director** to help us achieve our goals in how we want to invest in the community.

On behalf of the Rebble board, we're looking forward to continuing to serve you in the new year!
