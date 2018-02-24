---
title: Infinite Scrolling Ticker
layout: post
date: 2018-01-23 03:49:03 -0400
categories: snippets
type: CSS

selectedImg: http://image-aws-us-west-2.vsco.co/7668e6/41834989/59f0c8c22372e64e47434cc2/vsco59f0c8ca6edaa.jpg
selectedUrl: http://vsco.co/tristimb/media/59f0c8c22372e64e47434cc2
---

### Found Effect

I've seen a few sliding tickers used on small sites over the past year. The effect has grown on me, as an effective tool to presenting a very short amount of material. Looking for an opportunity to use it, I recently got to incorporate the effect into a super basic [landing page](http://labs.timblin.co/symphonyxr/) that just repeats a project name.

Because I only needed to repeat through static text, I did not worry about a solution for dynamic content. While looking into how to do make the ticker however, I found [this article](https://themetry.com/scrolling-news-ticker/). The article shows you how to build a ticker into wordpress using dynamic content from the loop.


<p data-height="265" data-theme-id="0" data-slug-hash="rpgOBw" data-default-tab="css,result" data-user="tatimblin" data-embed-version="2" data-pen-title="rpgOBw" class="codepen">See the Pen <a href="https://codepen.io/tatimblin/pen/rpgOBw/">rpgOBw</a> by Tris Timb (<a href="https://codepen.io/tatimblin">@tatimblin</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Usage 

Intended to be used full width and for messages to be relatively short. Here is the quick setup:

{% highlight html %}
<div class="title">
	<h1>Tristan Timblin • Tristan Timblin</h1>
</div>
{% endhighlight %}

{% highlight css %}
h1 {
    font-size: 20vw;
}

.title {
    position: absolute;
    width: 100%;
    top: 20vh; right:0;
    overflow: hidden;
    pointer-events: none;
    h1 {
        white-space: nowrap;
        opacity: 0.85;
        line-height: 60vh;
        animation: marquee 10s linear infinite; 
    }
    z-index: 10;
}

@keyframes marquee {
    0%   { transform: translate(0%, 0); }
    100% { transform: translate(-141.5vw, 0); }
}
{% endhighlight %}

Noticing all of the viewport measurements in this, you can see my solution for responsive design. Because the type is more for design than content, setting sizes this way ensures it will look the same on all screens.

### Adjustments

Asuming you don't want my name scrolling by, your message is going to be a different length. Unfortunately to do this you need a keen eye and likely a very random number. To smoothen it out you will have to edit the -141.5vw in the keyframe 100% position. In my use I've found to the 0.5% to be accurate enough.

Letting the animation loop through, watch for the text to jump. If your text animation is ending and pulling the repeated word forwards, then you are going to short of a distance, try raising the number. This means that if when the animation ends it jumps backwards a bit your distance is too long, and needs shortening. Having your browser as wide as possible helps see the timing discrepancies easier.

### Conclusion

Hopefully having to edit the animation distance wasn't too lame. I have the basic use on Codepen, [here](https://codepen.io/tatimblin/pen/rpgOBw). As well as the landing page I used the animation for [here](http://labs.timblin.co/symphonyxr/).


