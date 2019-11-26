---
title: ChessKit - A chess playing Artifical Intelligence
date: "2018-05-21T22:40:49.169Z"
---

Chess is the quintessential example of an AI problem with an effectively infinite (10^{500}) state space, which naturally makes it an intriguing problem to study. In its simplest form, it is no more than a tree search optimisation problem. At its most complex, it evolves down a number of routes, including deep learning, reinforcement learning (RL), and even taking into consideration hardware optimisation. Of course, this made it perfect for an introductory AI project.

Check it out [here](https://github.com/ArjunBhalla98/Chess-AI).

***

##Getting Started

The first thing to do for this was to find a suitable UI and framework that we could use to actually play the game and link our engine to. We settled on [Arena](//www.playwitharena.com) for the GUI (for Windows), and the UCI (Universal Chess Interface) protocol for the engine-GUI communication. 

After that, we decided to use Python, as it is a language commonly associated with ML, and because there is already an incredible amount of support for UCI and chess engines already available in it. We used a library called [python-chess](//python-chess.readthedocs.io/), as it was incredibly powerful, yet straightforward.

***

##Building the AI itself

The first thing we did was to implement a basic state space search and link it, using the UCI protocol, to the GUI. It was nothing out of the ordinary, a simple minimax search. However, it quickly evolved to using Alpha-Beta pruning, because we decided to use a ground-up approach - we would optimise each stage before adding another layer of complexity. 

The next step was to add in some machine learning, as we already had an opening book and thus could not proceed in any other direction to make our engine better. The first attempt was to implement Monte Carlo (MC) RL in conjunction with Monte Carlo tree search. However, despite managing to implement this, we ran into the issue of time & efficiency - the MC method took far too long and had a far too marginal update to the evaluation function's weights. 

As a result, we decide to move to Temporal Difference (TD(0)) learning. Without going into too much detail, this method was a little less accurate and ran the risk of not converging to the optimal weights. On the other hand, it was much quicker and updated the weights in 'real time'. Of course, this was an introductory project, and we weren't attempting to beat StockFish or AlphaZero. Therefore, this type of learning was perfect. 

***

##Challenges

###Inter-group issues
Essentially, this was supposed to be a 4-person project, but 98% of all the work (including our final 10-page report for CS4701) went to 2 people (I was one of them, in case that wasn't abundantly obvious :) ). As a result, I had to adapt to changing circumstances, keep on top of deadlines, and attempt to manage half a group of unwilling friends. It was certainly a different leadership experience to which I am used to, but a challenge that was overcome by the end nonetheless. This was solved (eventually) by creating a fairly concrete plan & timeline, as well as constant follow ups/ check ins with messages and emails to ensure that we were on track.

###Machine Learning

As a beginner to the topic of AI itself, much less ML, this was tough to breach. We touched on it a bit in the AI class I was taking that semester (CS4700), but on a more abstract level. To implement, I had to read a number of articles and tutorials, as well as in depth in the provided textbook, in order to conceptually understand the different types of machine learning and their implementations (on a high level). Then, it was a process of iterative development in order to implement the algorithms in python itself.

###Evaluation Function

We had an evaluation function whose weights were solely based on piece positions relative to each other on the board. This, we later found, was not enough to accurately paint a picture of how good each position really was, because it could not take into account things like strategic positioning, likelihood of check (or importance of), number of possible moves, etc. We didn't end up changing this, but perhaps in future to avoid such a problem more planning would be required. 

***

##What I learned from this project

- Q-Learning
- Monte Carlo Methods (RL and Tree Search)
- Temporal Difference learning



