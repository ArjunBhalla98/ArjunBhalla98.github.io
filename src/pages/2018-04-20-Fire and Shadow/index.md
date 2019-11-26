---
title: Fire & Shadow - My first video game!
date: "2018-04-20T10:23:19.169Z"
---

A few months ago, a friend of mine (Ryan Slama) and I sat down and decided to make a game, just for a fun little programming project. We spent a while ‘spitballing’, and, after shooting down a number of ideas, came up with our idea, that would be both challenging to create and provide good gameplay and replay value. The concept was, in essence, a tower defence/survival/RPG hybrid, top-down game. It proved to be a fun and interesting journey!

Check it out [here](https://github.com/Glitched/Fire-Shadow).



***

##Getting Started

Neither of us had ever develop a game before, so our first challenge was to choose which language to do it in. We chose to use Python, but Java, Javascript, and C were also proposed. In hindsight, it would have been better to do in Java or something more strictly geared towards OOP, because the code got unwieldy quickly. That night we went from about 10pm-4am, and got a decent amount accomplished. I focused more on the game mechanics and started reading up on PyGame and general good practices in game programming, and Ryan, being eminently better than me at design, did most of the character and graphic design, although I did do a few elements here and there, especially things related to the HUD. 

We planned to implement multiple character types/ classes, but decided to start with a Wizard for now. By the end of our session, we had basic character movement, HUD, terrain, and concept fairly set out. It was looking good!


***

##Progression of the game, and where it stands now

We never really sat down together after that for extended periods to work on it, but instead had a shared Git todo list, from which we’d both take tasks and separately implement them. My main ones included implementing major character mechanics, interaction with the board, collision/placement detection, some HUD elements, and tweaks to the enemy AI. Slowly, features like the basic Wizard attacks, placement of traps, towers, and other supplements to the player became implemented. We then started introducing gold as a separate metric to score, added basic enemies (which Ryan lovingly modelled after my LinkedIn picture), and a much needed development/debugging mode, which essentially rendered total map vision, invincibility, max gold, and a few other features that made debugging far easier. 

Slowly, more and more small features began getting added, and our todo list was constantly updating with completed tasks and new ideas. We had introduced different enemy types, a wave system with scaling difficulty, and more advanced pathfinding techniques. We had a relatively solid game! 

It was at this point that prelims, classwork, and other commitments and projects started to catch up to us. The game, while still technically in development (but of course, fun & fully playable), has had its development slow down considerably in recent months. It’s been an incredibly enjoyable project, opening up an entirely new section of computer science and introducing me to new libraries and skillsets. 

***

##Challenges

###Code structure and hierarchy

Overall, there was nothing really challenging of note about making the game itself – figuring out ways around problems were fairly simple and Ryan was great to work with, so we were always making solid progress. The challenging part, however, was organizing and documenting the code. Python, as awesome of a language as it is, does not naturally lend itself to organization and structure like Java, due to its mix of OOP and functional features. As a result, when the game grew rapidly we got caught with ‘spaghetti code’, with functions being strewn everywhere, over-reliance on global variables, and difficulties connecting parts of the code that we wrote independently (due to documentation issues). 

The first step is always realizing there’s a problem – so when we finally accepted it, we began by going through and changing functions to have clear and specific definitions, and reducing dependence on global variables by instead passing them as arguments. Finally, we split the code from our ~4 separate modules into 13.



***

##What I learned from this project

- Basic game design principles
- Code neatness, layout, and documentation
- Different facets of large projects, and the variety in skill required to successfully complete it



