# preferences where one can select a range of rooms for a preference maximize the number of preferences satisfied
param n_people;
param n_rooms;
param n_preferences;

set PEOPLE := {1..n_people};
set PREFERENCES := {1..n_preferences};
set LINKS within (PEOPLE cross PREFERENCES);
set ROOMS := {1..n_rooms};

param preference_lower{LINKS} >= 1, <= n_rooms;
param preference_upper{LINKS} >= 1, <= n_rooms;
param weights{LINKS} >= 0;

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
    sum{p in PEOPLE, pr in PREFERENCES} satisfied[p, pr]*weights[p,pr]
;