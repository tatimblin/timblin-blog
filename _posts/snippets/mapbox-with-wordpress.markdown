---
title: Show Wordpress Posts On A Mapbox Map
layout: post
date: 
categories: snippets
type: Wordpress

selectedImg: http://image.vsco.co/1/598e18239281e41834989/5992e30acfab713a5fa6dec0/vsco_081517.jpg
selectedUrl: http://vsco.co/tristimb/media/5992e30acfab713a5fa6dec0
---

### Getting Started

This is going to be a little long of a snippet, but I think this is a unique use of both technologies, and worth sharing.

I was recently tasked with building an interactive map that highlighted a building developer's various properties. Users would be able to see the property locations, and click on them to provide relevant content. We (Cohere) were already building the site in Wordpress, and properties would need to be stored as a new custom post type. Mapbox was then also recommended to me by my coworker.

Before starting you should have a Wordpress environment running, and some familiarity of mapbox.com/.

### What Is Mapbox?

Mapbox provides customizable maps for developers, used by companies like Foursquare, Pinterest, Uber, and more. It was started out of the need for a higher level of control many online services needed and couldn't find in standards like google maps. Today it is extremely easy to register for a liscense and build your own maps for free.

You can find out more about Mapbox at their [website](https://www.mapbox.com/)

### Setup a Map

content-map.php, mapbox.scss, scripts.js

### Pull in Content

content-map-data.php, scripts.js

### Map Interaction

scripts.js, main.scss
