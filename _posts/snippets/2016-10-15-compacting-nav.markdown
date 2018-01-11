---
title: Compacting Navigation
layout: post
date: 2016-10-15 22:49:03 -0400
categories: snippets
type: CSS
selectedImg: http://image.vsco.co/1/598e18239281e41834989/598e19ba4cd322004dee7126/vsco_081117.jpg
selectedUrl: http://vsco.co/tristimb/media/598e19ba4cd322004dee7126
---

#### Background

A fairly common solution for a site or app to conserve its screen space, is a shrinking navigation on scroll. It allows for a large header to introduce users to your sites many sections, while still giving familiar users an uncluttered view of content. In many cases it's the best of both worlds, and why so many use it today.

#### Method

Similarly to every common web functionality out there, you can find a dozen ways to go about solving this. In researching how to first create this effect I found many solutions I was not happy with, others have accomplished this with either an unecessary amount of javascript, [two navs that swap out for eachother](http://stackoverflow.com/questions/29872418/make-navigation-bar-that-shrinks-when-scrolling-begins), or a [plugin](http://wicky.nillia.ms/headroom.js/).

Deciding to go about creating a new way to control navigation size for myself. I started looking into a CSS solution for my nav, as I knew I wanted it animated and am most familiar with web animation using CSS.

![](../../img/snippet/compacting-nav.gif)

Here's how I did it.

#### Solid Base

To start out I put together the HTML structure of the my entire header, this contains both a top notification area (.nav-memo) and then the actual navigation (.navigation).

{% highlight html %}
<header id="wrap" class="header">
    <div class="nav_wrap">
        <div class="nav-memo">

        </div>
        <nav class="navigation">
            <div class="nav-logo"></div>
            <div class="nav-link_wrap">
                <div class="nav-link">Item1</div>
                <div class="nav-link">Item2</div>
                <div class="nav-link">Item3</div>
            </div>
        </nav>
    </div>
</header>
{% endhighlight %}

It is important to understand a few important pieces in this structure, that we'll need later. Currently we have '.nav-memo' and '.navigation' in two wrappers ('.header' and '.nav_wrap') this lets us do a little trick on making the large and small navigations in one.

How this will ultimately work is by setting the outter wrapper to the expanded height (150px), and then having the inner wrapper be twice the desired shrunk height (100px). Once both wrappers have the same background color the two fall seamlessly into place. Both navigation sizes are then built into one.

#### Initial Styling

Right now our navigation looks nothing like it should, lets take care of the content layout now and get a better picture of how this will end up looking.

{% highlight css %}
nav {
    max-width:768px; height:100px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.nav-logo {
    width:100px; height:100px;
    background-color: #ccc;
}

.nav-link_wrap {
    width:50%;
    display:flex;
    justify-content:space-between;
}
 {% endhighlight %}
				
You can now see what resembles the final product.

#### Wrappers

Now getting into the vertical sizing at the navigations expanded state. Here it is important to set the values so that 'header' is the total height you want, and that the 'header' and '.nav-wrap' background-colors are the same.

Setting the '.nav-memo' height is not necessary unless you want the scroll > catch and shrink effect mine has. Where the user scrolls normally until '.nav-memo' is passed then triggers the shrinking.

{% highlight css %}
header {
    width:100%; height:150px;
    background-color: #146EB4;
}

.nav_wrap {
    width:100%; height:100px;
    background-color: #146EB4;
}

.nav-memo {
    width:100%; height:50px;
    background-color: #c66;
}
{% endhighlight %}

#### Simple Transition

Before we can trigger the navigation transition we need proper styling to transition to. Add a new class with position fixed as well as a top value if you are doing the delayed compacting, the value of that should be negative the '.nav-memo' height.

{% highlight css %}
.fixed-head {
    position:fixed;
    top:-50px;
}
{% endhighlight %}

Using jQuery we next grab the scroll value and check for it crossing the 50px threshold to trigger. When it is greater than 50 we add the fixed class created above.

{% highlight javascript %}
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".nav_wrap").addClass("fixed-head");
    } else {
        $(".nav_wrap").removeClass("fixed-head");
    }
});
{% endhighlight %}

#### Nav Compacting

The header now transitions to its smaller state, but the navigation does not. Shrink the navigation when it reaches the trigger by creating a new class and add/removing it in the JS like above.

{% highlight css %}
.navigation_fix {
    height:50px;
}
{% endhighlight %}

And the trigger...

{% highlight javascript %}
$(".navigation").addClass("navigation_fix");
{% endhighlight %}

Now we have the nav switching between states! But it jumps, which is not what we want, to make the transition between the staes smooth add a transition to 'nav' in your css. Be sure to mess with this value changing up the timings and adding a bezier may improve the feel here.

{% highlight css %}
transition:height 100ms linear;
{% endhighlight %}

#### Logo Shrinking

Assuming you also have a logo on the left side of your navigation bar I will lastly show you how to transition the logo to minimize with the rest of your header.

{% highlight css %}
.nav-logo {
    width:100px; height:100px;
    background-color: #ccc;

    transform:scale(1.2);
    transform-origin: 0 50%;
    transition:transform 300ms ease-in-out;
}

.nav-logo_fix {
    transform:scale(0.5);
}
{% endhighlight %}

We've added onto the '.nav-logo' styling, setting the scale (I made mine a little bigger than one so that it overhangs). as well as adjusting the origin this way when it shrinks it stays aligned with your sites content. Finally apply another transition to it, though do not set this one as fast as the links.

Finally just implement the last transitions into the trigger.

{% highlight javascript %}
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".nav_wrap").addClass("fixed-head");
        $(".nav-logo").addClass("nav-logo_fix");
        $(".navigation").addClass("navigation_fix");
    } else {
        $(".nav_wrap").removeClass("fixed-head");
        $(".nav-logo").removeClass("nav-logo_fix");
        $(".navigation").removeClass("navigation_fix");
    }
});
{% endhighlight %}

#### Conclusion

Getting through the site content, you can see how easy to implement this can be. For both the shrinking nav and notification area, as well as how easy it is to adapt to your needs. 

I hope you were able to make it through and understand what I did here, if you have any questions or suggestions be sure to let me know.