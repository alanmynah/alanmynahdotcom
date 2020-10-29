---
title: What's an API?
date: 2020-10-02T17:50:00.000Z
---

What's an API?
<!-- more -->

That is a very broad question and i can totally relate to how confusing it can oftentimes be, especially with all the metaphors. I'm feeling that on some level the waiter metaphor is now insufficient, so will try to avoid using them and use some comparisons.

Let's step back for a second. If you were to explain what a UI is to someone who isn't into web dev? Well, netflix has a UI, you can click on shows with a cursor and you can use keyboard to search. But on your phone the UI uses fingers and touchscreen keyboard. I don't know what car you drive, or whether you drive, but i'm certain that you have seen the older versions where the stereo gets operated with knobs and buttons and more modern versions have touchscreens. All of these are User Interfaces.

Well, APIs (Applications Programming Interfaces) are similar for developers.

Users interact with UIs that developers wrote by interacting with APIs that other/same developers wrote.

So developers write programs that expose some interactive points for others to use. API became a catch-all term for these interfaces exposed over the web using, but not limited to, http.

Why API and not just use database straight away? Say, you're in a research lab, collecting weather data. Your institute probably wants to collect loads of data points from across the country and with a fair amount of weather stations, you can't just give username and password to your database to everyone. For one, you'll have to teach them all SQL and secondly, managing those users will be a pain, what if one doesn't play ball or someone accidentally deletes it? It's your data and integrity is important. You have a simple MySQL db and you write some nodejs code that does the basic data updates.