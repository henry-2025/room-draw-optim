# basic multiple preferences - a set of people with multiple preference choose
# rooms to maximize the number of satisfied 

param n_people;
param n_rooms;
param n_preferences;

set PEOPLE := {1..n_people};
set ROOMS := {1..n_rooms};
set PREFERENCES := {1..n_preferences};

param preferences{PEOPLE, PREFERENCES} >= 1;
param weights{PREFERENCES} >= 0;

var satisfied{PEOPLE, PREFERENCES} integer binary;
var assignment{PEOPLE, ROOMS} integer binary;
var room_number{PEOPLE} >= 1 integer;


subject to PreferenceSatisfied {p in PEOPLE, pr in PREFERENCES}:
    satisfied[p,pr] = assignment[p, preferences[p,pr]]
;

subject to NoOverlaps {r in ROOMS}:
    sum{p in PEOPLE} assignment[p,r] = 1
;

subject to AssignmentNumber {p in PEOPLE}:
    sum{r in ROOMS}r*assignment[p,r] = room_number[p];
;

maximize Objective:
    sum{p in PEOPLE, pr in PREFERENCES} satisfied[p, pr]*weights[pr];
;