---
title: Click To Tweet
layout: post
date: 2018-02-27 03:49:03 -0400
categories: snippets
type: JS

selectedImg: http://image-aws-us-west-2.vsco.co/7668e6/41834989/59ff7bdfa29b1d141110ec92/1024x683/vsco59ff7be6d6ca8.jpg
selectedUrl: http://vsco.co/tristimb/media/59ff7bdfa29b1d141110ec92
---

### What is a click to tweet URL?

Twitter allows for content to be passed through a URL, allowing users to tweet something with [one click](https://twitter.com/share?url=http://labs.timblin.co/click-to-tweet/&text=I%20just%20tweeted%20by%20clicking!%20with&source=tristantimblin&related=tristantimblin). It's most popular on the twitter share buttons located on virtually every article on the internet. You can use these URL's to prompt users to tweet anything, but they're a little annoying to setup.

{% highlight html %}
    <a href="https://twitter.com/intent/tweet?text=Your%20tweet%20will%20probably%20look%20like%20this.&source=tristantimblin&related=tristantimblin" target=_blank">Tweet!</a>
{% endhighlight %}

A Tweet URL has three data types, involved in creating what they call an 'intent'.
* Text - The tweet
* URL - To include in the tweet
* Source/Related - After the user tweet's the tweet, they will be prompted to follow this user if not already.

### Generators

If you're planning on having this functionality scale, you may need to implement something to generate them dynamically. I wrote about how to build share links for Twitter, Facebook, and Linkedin live [here](http://timblin.co/snippets/dynamic-social-buttons/).
If you don't need to scale though, building a few using a generator is a breeze. The main one I found was [clicktotweet.com](https://clicktotweet.com/), but after using it I noticed some missing features I needed. Most notably being more control of including a URL, and access to the source.

### My own URL builder

Vue.js seemed like the perfect tool for building a small, easy to use url builder. I could enter in my tweet and set the other data types, to build my URL in real time. To use it yourself, replace my @handle with yours, type your tweet in the main box, then select the appropriate URL option. Test it by clicking 'tweet', and then get your URL by clicking 'copy'.

Try out [Tristan's Click To Tweet Builder](http://labs.timblin.co/click-to-tweet/)

Let me know what you think of it, tweet at me (@TristanTimblin). Take a look at the source code aswell on [Codepen](https://codepen.io/tatimblin/pen/rGjyWM).