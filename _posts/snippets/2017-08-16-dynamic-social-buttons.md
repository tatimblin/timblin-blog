---
title: Dynamic Social Share Buttons
layout: post
date: 2017-08-16 12:49:03 -0400
categories: snippets
type: JS

selectedImg: http://image.vsco.co/1/598e18239281e41834989/5992e2f2cfab713a5fa6debf/vsco_081517.jpg
selectedUrl: http://vsco.co/tristimb/media/5992e2f2cfab713a5fa6debf
---

### Purpose

Regardless of whether or not people actually use social share buttons ([they don't](https://www.moovweb.com/anyone-use-social-sharing-buttons-mobile/)), having them is still commonplace on any live site. Being able to share dynamic page content in a click, theoretically aids users in sharing your content. Here is a short snippet on getting that information from the browser, and converting it into a usable link for three major social media sites.

### Some Basic Triggers

Starting off we need the button markup, which you're free to write however you please. All that's necessary is the id's on the wrapping of your button/element. I'm gonna keep everything as plain as possible for demo purposes, but feel free to style up the content any way you wish.

{% highlight html %}
<a id="tweetShare" href="#" target="_blank">
	Twitter
</a>
<a id="fbShare" href="#" target="_blank">
	Facebook
</a>
<a id="linkedShare" href="" target="_blank">
	Linkedin
</a>
{% endhighlight %}

Note that being an anchor tag is not necessary.

### Include The Script

This script I put together by taking the URL of my desired outcome (available on each sites dev pages), and swapping out the information I wanted to be dynamic with variables.

- https://twitter.com/share?url=__URL__&text=__TWEET__&source=__HANDLE__&related=__HANDLE__
- http://www.facebook.com/share.php?u=__URL__
- https://www.linkedin.com/shareArticle?mini=true&url=__URL__&title=__TITLE__&summary=__META__

Coming up with this in the end. All you need to do for your own use is swap out my @handle in the twitter link.

{% highlight js %}
var twitter = document.getElementById('tweetShare');
var facebook = document.getElementById('fbShare');
var linkedin = document.getElementById('linkedShare');
var title = document.title;
var url = window.location;

twitter.addEventListener('click',function(event){
    event.preventDefault();

    window.open("https://twitter.com/share?url="+encodeURIComponent(url)+"&text="+encodeURIComponent(title)+"&source=tristantimblin&related=tristantimblin");
},false);

facebook.addEventListener('click',function(event){
    event.preventDefault();

    window.open("http://www.facebook.com/share.php?u="+encodeURIComponent(url));
},false);
linkedin.addEventListener('click',function(event){
    event.preventDefault();

    window.open("https://www.linkedin.com/shareArticle?mini=true&url="+url+"&title="+encodeURIComponent(title)+"&summary="+encodeURIComponent(title));
},false);
{% endhighlight %}

### Usage

Your buttons will now be linked to share pertanent information about the current page. Great for blogs letting you automatically pull in a post excerpt or featured image, however there's a good chance you may not want this running on every page.

I first made this for use with a wordpress site, where I wanted only posts to have these buttons. A quick solution to checking for this was the following...

{% highlight js %}
if ($("body").hasClass("single-post")) {
  // this is jQuery btw
  // snippet here
}
{% endhighlight %}
