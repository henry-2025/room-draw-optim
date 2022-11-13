# basic binary preferences - a set of people with one room preference choose
# rooms to maximize the number of satisfied 

param n_people;
param n_rooms;

set PEOPLE := {1..n_people};
set ROOMS := {1..n_rooms};

param preferences{PEOPLE} >= 1;

var satisfied{PEOPLE} integer binary;
var assignment{PEOPLE, ROOMS} integer binary;
var room_number{PEOPLE} >= 1 integer;


subject to PreferenceSatisfied {p in PEOPLE}:
    satisfied[p] = assignment[p, preferences[p]]
;

subject to NoOverlaps {r in ROOMS}:
    sum{p in PEOPLE} assignment[p,r] = 1
;

subject to AssignmentNumber {p in PEOPLE}:
    sum{r in ROOMS}r*assignment[p,r] = room_number[p];
;

maximize Objective:
    sum{p in PEOPLE} satisfied[p];
;