# basic multiple preferences - a set of people with multiple preference choose
# rooms to maximize the number of satisfied 

param n_groups;
param n_roomsets;

set GROUPS := {1..n_groups};
set ROOMSETS := {1..n_roomsets};
set LINKS := {GROUPS cross ROOMSETS};

param utility{GROUPS, ROOMSETS} >= 0;
param groupsize{GROUPS} >= 0;
param capacity{ROOMSETS} >= 0;

var assignment{(i, j) in LINKS} integer binary;

maximize Utility:
    sum{(i, j) in LINKS} utility[i, j]*assignment[i, j];

# the number of people in a room must be under the capacity
subject to Capacity {k in ROOMSETS}:
	sum{(i, k) in LINKS} assignment[i, k]*groupsize[i] <= capacity[k];
	
# each group must be assigned to exactly one room
subject to Group {j in GROUPS}:
	sum{(j, k) in LINKS} assignment[j, k] <= 1;


# Draft for potentially changing the objective function into maximin: 
# var m >= 0;
# maximize Minimum:
# 	m;
# subject to MinimumDefinition {j in GROUPS, k in ROOMSETS}:
# 	m <= utility[i,j] + 10000*(1-assignment[i,j]);
