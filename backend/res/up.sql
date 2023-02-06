CREATE TABLE rooms(
    local_id VARCHAR(10),
    global_id INTEGER PRIMARY KEY,
    dorm_id INTEGER NOT NULL,
    floor INTEGER NOT NULL,
    capacity INTEGER NOT NULL,
    dsa INTEGER NOT NULL,
    suite INTEGER NOT NULL);
CREATE TABLE students(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR NOT NULL,
    year INT NOT NULL,
    group_id INT,
    room INT);
CREATE TABLE preferences(
    preference_id INT NOT NULL,
    group_id INT NOT NULL,
    preference_lower INT NOT NULL,
    preference_upper INT NOT NULL,
    weight FLOAT NOT NULL,
    CONSTRAINT pk_preferences PRIMARY KEY (preference_id, group_id));
CREATE TABLE dorms(
    dorm_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    dorm_name varchar);
CREATE TABLE stats(
    run INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    run_method VARCHAR(20) NOT NULL,
    util_improvement FLOAT NOT NULL,
    sat_improvement_prop FLOAT NOT NULL,
    pref_one_improvement INT NOT NULL,
    pref_two_improvement INT NOT NULL,
    pref_three_improvement INT NOT NULL,
    pref_four_improvement INT NOT NULL,
    pref_five_improvement INT NOT NULL,
    not_satisfied_change INT NOT NULL,
    pref_one_improvement_prop FLOAT NOT NULL,
    pref_two_improvement_prop FLOAT NOT NULL,
    pref_three_improvement_prop FLOAT NOT NULL,
    pref_four_improvement_prop FLOAT NOT NULL,
    pref_five_improvement_prop FLOAT NOT NULL,
    not_satisfied_change_prop FLOAT NOT NULL);