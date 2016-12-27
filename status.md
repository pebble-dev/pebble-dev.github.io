---
layout: text-page
title: "Status"
date:   2016-12-09 11:21:42

permalink: /status/
---

## Status

This page contains a list of Pebble's backend services, their status, and
the status of work towards a replacement. It will be updated as new
developments occur.

<style>
    .grayed {
        color: #888;
        font-size: 70%;
    }
    section table {
        border-collapse: collapse;
    }
    section table td {
        font-size: 90%;
        padding: .5rem .7rem;
        border: 1px solid #888;
        line-height: 1.4em;
        width: 43%;
    }
    section table td:first-child {
        font-size: 80%;
        min-width: 12rem;
            width: 12rem;
        max-width: 12rem;
        border-left: none;
        text-align: right;
    }
    section table td:last-child {
        border-right: none;
    }
    section table tr:last-child td {
        border-bottom: none;
    }
</style>

| url | description | replacement |
| --- | ----------- | ----------- |
| boot.<span class="grayed">getpebble.com</span> | Provides API endpoints to clients. | Very simple, becomes necessary as soon as community replacement services exist. [Experimentation ongoing.](https://github.com/pebble-dev/wiki/wiki/Mobile-Application-URI-Bootstrap) |
| auth.<span class="grayed">getpebble.com</span><br/>auth-api.<span class="grayed">getpebble.com</span> | Authorization endpoints. | May not be necessary given a new mobile app. |
| dev-portal.<span class="grayed">getpebble.com</span> | Developer portal. | Replacement will be a part of The Rebble Store. |
| pb-collector.<span class="grayed">getpebble.com</span> | ??? | |
| lp.<span class="grayed">getpebble.com</span> | Language packs. | Low priority. Format seems to be mostly understood. |
| apps.<span class="grayed">getpebble.com</span><br/>appstore-api.<span class="grayed">getpebble.com</span> | App Store. | To be replaced by [The Rebble Store](https://github.com/pebble-dev/rebble-store/). |
| help.<span class="grayed">getpebble.com</span><br/>appstore-api.<span class="grayed">getpebble.com</span> | Support pages. | Not in immediate danger. Archive.org should suffice. |
| cloudpebble.net | Cloud-based IDE. | CloudPebble is open source and will continue as a community project once it once it goes down. **_However_**, you should definitely [export your CloudPebble projects for local safekeeping!](https://www.reddit.com/r/pebble/comments/5h61om/bulk_cloudpebble_project_export/) |
| timeline-sync.<span class="grayed">getpebble.com</span><br/>timeline-api.<span class="grayed">getpebble.com</span> | Timeline servers. | Will continue to be maintained for an indefinite amount of time. Community replacement possible, but very low-priority. |
| cohorts.<span class="grayed">getpebble.com</span> | ??? | |
| <em>various Nuance servers</em> | Dictation support. | Continued Nuance support is unlikely due to prohibitive price. Possible replacements include android's built-in dictation SDK. |
| sms-api.<span class="grayed">getpebble.com</span> | Outgoing text messages for iOS. | Community replacement unlikely due to difficulty of dealing with cell carriers. |
| linked-accounts.<span class="grayed">getpebble.com</span> | Account linking? (very mysterious) |  |
| email-actions-api.<span class="grayed">getpebble.com</span> | Most likely gmail actions. | Community replacement possible but low-priority. |
| notif-app-icons.<span class="grayed">getpebble.com</span> | Probably provides icons for in-app notification permissions list. | Unimportant |
| health-write-api.<span class="grayed">getpebble.com</span> | Sends consenting users' health data to Pebble (for aggregate data and weekly emails) | Unimportant |
