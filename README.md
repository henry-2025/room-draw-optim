# HMC Room Draw Optimization
## Problem
*Abstract from writeup*: "Room draw at Harvey Mudd College is the annual process in which returning students select their dorms for the coming academic year. The process requires large amounts of interpersonal communication to plan  draw strategies between groups who want to live with one another. An in-person "mock draw" session, which lasts several hours, ensures people's expectations and preferences are made public to other participants in the process. Finally, the real draw round is held to determine final room assignments. The process is time intensive and it can also be stressful to those who have less social influence in the period of pre-draw communication. There are also inevitable, but unforeseen changes that happen during the real draw round that have cascading effects throughout the rest of the process. As political and frustrating as room draw might seem, it is inherently an optimization problem where agents (the participants) adjust their preferences until an equilibrium is reached. 

Participants almost always have an implicit list of preferences before entering the draw. These include but are not limited to residence hall, room number, and the members of nearby rooms. All of this knowledge is accessible through communication but with the number of participants in the draw, it is impossible for every agent to act with full knowledge. Therefore, the equilibrium of draw cannot be a global optimum.
    
In this project, our goal is to automate the selection procedure into a single-round assignment where everyone's preferences are taken into account. Our objective is to maximize the satisfaction of preferences, potentially subject to some weighting by seniority.

A concluding note should say that there is no current widespread agreement on moving to an optimization system for room draw. Many students revel in the opportunity to be political about their room assignments. The goal of this project was mostly experimental and its actual implementation is more of a second thought"

## Optimization Model
The optimization model does fundamentally alter the room draw process, but attempts to do so in a way that does not alter aspects of the process that would reduce the amount of information that a participant can provide about their preferences. For example, one common practice in room draw is for participants to select dorms that are in close proximity to one another. Their preference may not depend so much on *who* is placed in their general vicinity. Thus, a model whose preferences depend entirely on assignment location is not sufficient.

The optimized room draw process falls into three stages:

1. Roommate matching: with some exception, most roommates generally choose to live together before they select a dorm to live in. This means that we can divide our assignment into immutable roommate assignments of singles, double, triples, etc.
2. Individual preferences: each immutable matching selects a set of preferences that describe where it wants to room by location 
3. Group preferences: immutable matchings can submit additional preference forms that group them together into suite-like units 
4. Mixed-integer Linear program: the program that optimizes assignments under the utilities that are assigned in steps 1-3

A mixed-integer linear program solver is generally able to solve this type of problem with the size of the Mudd student body. Empirically, solves take around 2-5 minutes to reach global optima. They converge to a MIP gap of less than 0.5% faster than this (within 1 minute), meaning the model can conceivably be applied to larger assignment populations.

## Improvements
Further analysis of these numbers can be found in the writeup.
Cumulative utility comparisons alone show significant improvements over a simulated greedy draw process. Summary statistics of this comparison over several trials are shown below. 

![Preference Satisfaction Comparison](/writeup/res/preference_satisfaction_comparison.png)

## Writeup
Much of the above is a summary of information that can be found in the writeup paper that my team did for this class. It more thoroughly describes the optimization model, implementation, and the improvement metrics over standard room draw. You can view it by running the following:
```{sh}
cd writeup
latexmk -pdf main.tex
<pdf_viewer_command> main.pdf
```