# basic multiple preferences - a set of people with multiple preference choose
# rooms to maximize the number of satisfied 

param n_people;
param n_roomsets;

set PEOPLE := {1..n_people};
set ROOMSETS := {1..n_roomsets};
set LINKS within (PEOPLE cross ROOMSETS);

param utility{PEOPLE, ROOMSETS} >= 0;
param capacity{ROOMSETS} >= 0;

var assignment{(i, j) in LINKS} integer binary;

maximize Utility:
    sum{(i, j) in LINKS} utility[i, j]*assignment[i, j];

# the number of people in a room must be under the capacity
subject to Capacity {k in ROOMSETS}:
	sum{(i, k) in LINKS} assignment[i, k] <= capacity[k];
	
# each person must be assigned to exactly one room
subject to Person {j in PEOPLE}:
	sum{(j, k) in LINKS} assignment[j, k] = 1;
