-- USER RELATED QUERIES

CREATE TABLE IF NOT EXISTS users (
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(52) NOT NULL,
	user_email VARCHAR(256) UNIQUE NOT NULL,
	user_password VARCHAR(128) NOT NULL
);

-- DIET RELATED QUERIES

CREATE TABLE IF NOT EXISTS diets_goal (
	diet_goal_id SERIAL PRIMARY KEY,
	goal_carbohydrate INTEGER,
	goal_protein INTEGER,
	goal_fat INTEGER,
	goal_fiber INTEGER,
	goal_water INTEGER
);

CREATE TABLE IF NOT EXISTS diets (
    user_id INTEGER REFERENCES users(user_id),
	diet_id SERIAL PRIMARY KEY,
	diet_goal_id INTEGER REFERENCES diets_goal(diet_goal_id),
	diet_name VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS meals (
	diet_id INTEGER REFERENCES diets(diet_id),
	meals_id SERIAL PRIMARY KEY,
	meal_name VARCHAR(64),
	meal_time TIMESTAMP
);

CREATE TABLE IF NOT EXISTS foods (
	food_id SERIAL PRIMARY KEY,
	food_name VARCHAR(64),
	food_carbohydrate INTEGER,
	food_protein INTEGER,
	food_fat INTEGER,
	food_fiber INTEGER
);

CREATE TABLE IF NOT EXISTS meals_with_foods (
	meal_id INTEGER REFERENCES meals(meals_id),
	food_id INTEGER REFERENCES foods(food_id),
	meal_with_food_id SERIAL PRIMARY KEY,
	quantity_per_gram INTEGER
);

-- WORKOUT RELATED QUERIES

CREATE TABLE IF NOT EXISTS exercises (
	exercise_id SERIAL PRIMARY KEY,
	exercise_name VARCHAR(64),
	exercise_description TEXT,
	exercise_muscle_group VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS sets (
	exercise_id INTEGER REFERENCES exercises(exercise_id),
	set_id SERIAL PRIMARY KEY,
	set_load INTEGER,
	set_repetitions INTEGER,
	set_rest_time INTEGER
);

CREATE TABLE IF NOT EXISTS exercises_with_sets(
	exercise_id INTEGER REFERENCES exercises(exercise_id),
	set_id INTEGER REFERENCES sets(set_id),
	exercise_with_set_id SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS especific_workouts (
	exercise_with_set_id INTEGER REFERENCES exercises_with_sets(exercise_with_set_id),
	especific_workout_id SERIAL PRIMARY KEY,
	especific_workout_day VARCHAR(16),
	especific_workout_muscle_group VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS global_workouts(
	user_id INTEGER REFERENCES users(user_id),
	especific_workout INTEGER REFERENCES especific_workouts(especific_workout_id),
	global_workout_id SERIAL PRIMARY KEY,
	global_workout_name VARCHAR(64),
	global_workout_tags VARCHAR(128)
)