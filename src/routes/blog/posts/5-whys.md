---
title: 5 Whys, how to use it correctly?
date: 2020-12-29T18:30:00.000Z
---

5 Whys is one of the most simple and yet misunderstood techniques for root cause analysis. Let's see what it is, review some of the criticisms, and muse on how to we can use it to solve actual problems it is useful for.

<!-- more -->

## Intro

This article is most definitely going to be a part of a larger series on how we, software engineers, are misusing manufacturing practices, techniques and tools, and then complain that they are broken, unfit for purpose, or just wrong.

## TL; DR
The 5 whys in the original sense is an effective technique that should most definitely be used. Any shortly named heuristic that is then explained in 1-2 sentences is most likely going to miss the most fundamental reasons for its existence. Please don't use it to solve complex problems, but do apply it to finding problems in your CI/CD pipeline or finding some simple bugs.

## Why 5 Whys don't work
As ***THE*** tool for root cause analysis, 5 Whys is a rather discredited technique. Many very good articles and overviews have been written. [This one by John Allspaw](https://www.kitchensoap.com/2012/02/10/each-necessary-but-only-jointly-sufficient/), at least in my twitterverse, is quoted most; and sums it best with:

> for complex systems: there is no root cause.

Props also go to Mark Mulvey for writing one of the really [succinct breakdowns of the problem with 5 Whys](https://weeklysurf.substack.com/p/trouble-with-root-causes). That was in turn inspired by 5 Whys topping Swyx's list of [Naked emperors in Tech](https://www.swyx.io/naked-emperors/).

But the cherry on top is placed by Teruyuki Minoura, Toyota's own former managing director of global purchasing, [who described 5 Whys](https://en.wikipedia.org/wiki/Five_whys#Criticism) as being
>too basic a tool to analyze root causes to the depth that is needed to ensure that they are fixed.

## Why the criticism is misdirected

Because it's a straightforward simple tool, that is good *only* for a small set of simple causes.

**Complex systems are not within the scope of this tool.** It's just ***A*** tool for root cause analysis (RCA), and a simple one at that, for the exact reasons described in the section above.

Just to be clear, all these criticisms are valid, but it really should be directed towards how 5 Whys is 'marketed' or more importantly, interpreted. Seriously, google it to see what I mean. The first hit will come from Mind Tools [article](https://www.mindtools.com/pages/article/newTMC_5W.htm) that describes it as
> The method is remarkably simple: when a problem occurs, you drill down to its root cause by asking "Why?" five times.

and

> This simple technique, however, can often direct you quickly to the root cause of a problem.

Even worse, AWS's [Root Cause Analysis (RCA) page](https://wa.aws.amazon.com/wat.concept.rca.en.html) simply states

> Identify Root Causes: Use Five whys and Ishikawa diagrams

## Origins and present day

The birthplace of the technique is somewhere on the Toyota's shop floor, but it really took off after Taiichi Ohno, the father of Toyota Production System (TPS) wrote his book titled `TPS. Beyond Large-Scale Production`. He mentioned the technique _once_. Yep, didn't dedicate chapters to it and didn't even bother to warn anyone of misusing it. And based on Minoura's thoughts on the matter, I can guarantee, there was a lot of it even at Toyota.

Simple sounding techniques have a tendency to turn into holy wars about their true meaning (looking at you TDD and OOP).

Anyway, back to Taiichi Ohno's passage:

> Repeating why five times, [...], can help uncover the root problem and correct it. If this procedure were not carried through, one might simply replace the fuse or the pump shaft. In that case, the problem would recur within a few months.

Note, that the focus is on questioning the fault, rather than ignoring it. It's a guidance for manufacturing processes at an assembly line. Production is moving and ignoring a problem might never have any repercussions for you as a worker, while raising alarm risks a lot of delays and oftentimes jeopardizes your throughput dependant income too.

Ohno then goes to say:

> To tell the truth, the Toyota production system has been built on the practice and evolution of this scientific approach. By asking why five times and answering it each time, we can get to the real cause of the problem, which is often hidden behind more obvious symptoms.

So "dig deeper, don't stop at the first opportunity.", got it. And he then finishes with:

> In a production plant operation, data are highly regarded - but I consider facts to be even more important. When a problem arises, if our search for the cause is not thorough, the actions taken can be out of focus. This is why we repeatedly ask why. This is the scientific basis of the Toyota system.

That's it. It appears that his understanding of 5 Whys is that it's just a shorthand for 'be scientific in your approach to problem-solving'. He does not mention the technique in his book anymore. Why? Because it's insignificant compared to the much more important, structural, and cultural techniques in TPS, like [Jidoka](https://blog.toyota.co.uk/jidoka-toyota-production-system).

## What is it good for then?

It's a useful rule of thumb, to avoid sweeping problems under the rug. Flaky tests? Why? Flaky pipeline? Why?

It is a way to try to get to a set of countermeasures to prevent the defect OR be able to spot the defect so early as to absolutely minimize the cost (material, time, and other) of the defect to the manufacturing process.

And don't get hung up on the magic number 5. I bet it was called like that because, in Japanese, it sounded better than 4 whys or 7 whys  - a surprisingly common reason to do a lot of things in manufacturing.

Finding why you get that `undefined` error (Well, in about 50% of cases 😜), why CI failed, and even throw some API error codes at 5 Whys and it will help you out. Other than that, just use the technique to get yourself started and pick up something more advanced.

## The alternatives

There isn't a single technique that would work universally, but here are some that might help you (Yes, 5 Whys is one of them, so skipping it):

- [Ishikawa Fishbone diagram](https://www.6sigma.us/etc/what-is-ishikawa-fishbone-diagram/)
- [Current Reality Tree (CRT)](https://www.isixsigma.com/dictionary/current-reality-tree/)
- [The 8 Disciplines (8D)](https://asq.org/quality-resources/eight-disciplines-8d)
- [Correlation Matrix](https://www.six-sigma-material.com/Correlation-Matrix.html)
- [Failure Mode and Effects Analysis](https://www.six-sigma-material.com/FMEA.html)

[Feel free to PR this article](https://github.com/alanmynah/alanmynahdotcom/blob/main/src/routes/blog/posts/5-whys.md) with your favourite one.

## Closing thoughts

IMO, these misunderstandings stem from our (those working in the software industry) inability to transfer context. Manufacturing is geared towards repeatable, quantifiable, plannable processes. Software development, more often than not, isn't. Applying solutions to the wrong context produces unexpected results.

One thing you can take away from this article is this sassy quote for your internal slack.

```
Tired: 5 whys is rubbish and 'in complex systems, there is no root cause'

Wired: let's expand the RCA docs with more advanced 6-sigma techniques.
```