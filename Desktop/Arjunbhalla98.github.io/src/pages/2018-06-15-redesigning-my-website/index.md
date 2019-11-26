---
title: Redesigning my Website
date: "2018-06-15T13:54:32.169Z"
---

Before I made the first iteration of my website, my programming and design
skills were sub-par. I had hardly any knowledge of JavaScript, or
the basics of design principles, and my coding skills were fairly minimal. The last
iteration was entirely hard coded HTML and CSS (with some minimal Javascript for animations),
without the use of any pre-existing libraries. I think it turned out quite well!

Fast forward 6 months, and I'm interning in Texas and have a lot of ideas floating
around in my head for summer projects. One of them incorporated web design, and while it hasn't always been 
my favourite area of CS, it's certainly interesting and something I know I need to improve at.
So, I started picking up React.js after work. After doing some smaller projects, I thought that a good test for if I was able to use React effectively would be if I could redesign my website to look simpler, cleaner, and sleeker than before.

*** 

## The Design Process

After searching around for a number of libraries that I could use to build my new site,
I found two - Gatsby and Bootstrap. Bootstrap, of course, is the framework that everyone knows
and loves. However, I find that a lot of the bootstrap websites look kind of similar and somewhat
trite at this point. Gatsby on the other hand, has a lot of things going for it - it's crazy fast,
has a host of great plugins, and is built with React's component based architecture in mind. After
doing a few tutorials and playing around with it, I was sold.

I wasn't sure about exactly how I wanted it to look, so I played around with a couple of different designs
with the 3 principles of minimalism, utility, and sleekness in mind, until I settled on the current one. As I 
was looking around for ideas, I realised that the blog-style site really appealed to me, because it meant I could
keep a central record of all my achievments, reflect on my experiences, and share my thoughts on each topic with
anyone who's interested. I'll probably still play around with the colours and minor layout changes, but for now I'm pretty happy with it! 

***

## Challenges

There were quite a few challenges I ran into over the course of building this website, and I certainly learned
from them:

### General Gatsby/ React hierarchy & architecture

This for me, especially not coming from a web development background, was the first hurdle I had to overcome.
The problem was less the component based development, which for me modelled OOP pretty well, but more the structure
of how Gatsby and react programs were laid out. For example, the layouts and templates being a standard part of the
framework was new for me. I remember spending a long time going through each file and being really confused as to
where the "child()" component came from that was passed to the layout. I overcame this (and the other similar minor problems)
by trial-and-error, as well as an extensive reading and understanding of the Gatsby framework on their website.

### GraphQL Integration & Usage

This one was quite a pain. There were a couple of GraphQL queries that existed in the starter blog I used, but I needed more
in order to display the images (like the image at the top of this blog). This was made more difficult because I didn't really
know anything about Query languages, or in depth about REST. As a result, of course, lots more googling and reading about REST,
GraphQL, and how they were related ensued. After this, I did a quick tutorial (I learn the best when I really get into a small
guided project and tinker around with different things) and figured out how to dynamically pull images by combining my knowledge from
all these places.

***
## What I learned from this project 

- React.js
- Gatsby
- GraphQL
- REST





