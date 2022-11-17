# macro groups: scenario in which we want to have multiple entities grouped in
# the same region, creating an additional objective.
param n_people;
param n_rooms;
param n_preferences;
param n_macro_groups;

set PEOPLE := {1..n_people};
set PREFERENCES := {1..n_preferences};
set ROOMS := {1..n_rooms};
set MACRO_GROUPS := {1..n_macro_groups};

param preference_lower{PEOPLE,PREFERENCES} >= 1, <= n_rooms;
param preference_upper{PEOPLE,PREFERENCES} >= 1, <= n_rooms;
param weights{PREFERENCES} >= 0;

var satisfied{PEOPLE, PREFERENCES} integer binary;
var assignment{PEOPLE, ROOMS} integer binary;
var room_number{PEOPLE} integer >= 1, <= n_rooms;

subject to NoOverlaps {r in ROOMS}:
    sum{p in PEOPLE} assignment[p,r] = 1
;

subject to PreferenceSatisfied{p in PEOPLE, pr in PREFERENCES}:
    satisfied[p,pr] = sum{r in preference_lower[p,pr]..preference_upper[p,pr]}assignment[p,r]
;

subject to AssignmentNumber {p in PEOPLE}:
    sum{r in ROOMS}r*assignment[p,r] = room_number[p];
;

maximize Objective:
    sum{p in PEOPLE, pr in PREFERENCES} satisfied[p, pr]*weights[pr]
;