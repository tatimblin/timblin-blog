---
title: Different In / Out CSS Transitions
layout: post
date: 2017-01-00 22:49:03 -0400
categories: snippets
type: CSS
---

#### Introduction

Starting off these posts with a real easy one. I came across this a bit ago while making a css logo animate on hover. Some elements needed as much as a three second delay, but on mouse out this delay was unbearably slow I needed a solution to changing these timings.

You’re gonna laugh I wrote about something so simple, but this did not come to me as a possibility for the longest time, and I couldn’t find anyone explaining this either.

#### Setup Transition

So here’s the trick you have your typical transition on hover.

{% highlight css %}
.element {
    transform: translate(0, 40px);
    transition: transform 400ms ease-in-out 1s;
    &:hover {
        transform: translate(0, 0);
    }
}
{% endhighlight %}

#### Hover Property

Then on the hover you take whatever value you’d like the ‘in’ hover and set it specifically there. (The first delay becomes the ‘out’ value.)

{% highlight css %}
.element {
    transform: translate(0, 40px);
    transition: transform 400ms ease-in-out 0s;
    &:hover {
        transition-delay: 1s
        transform: translate(0, 0);
    }
}
{% endhighlight %}

Now why this is happening is just the basics of the :hover selector, when you hover over the element the properties specified in :hover become active, including in our case the ‘transition-delay: 1s’. Creating animated elements this way frees up a lot more possibilities for you. ‘In’ delays can be longer because you’re not sacrificing with a long ‘out’, you can have exciting timing function without making it weirdly just as excited to go back to its inactive state.

Theres a lot of possibilities to make more complex animations when you think about it in this way, and we’ll benefit from using separate in / out values in our work, [here](https://codepen.io/tatimblin/pen/mRyEbW) is the first thing I put together after realizing this.