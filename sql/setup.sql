-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
Drop table if exists burgers;

CREATE table burgers (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  season INT NOT NULL,
  episode INT NOT NULL
);

INSERT INTO burgers (name, season, episode) VALUES
(
  'New Bacon-ings', 
  1, 
  1
),
(
  'Shake Your Honeymaker Burger - (Comes with Honey Mustard)',
  2,
  3
),
(
  'Beets Me Burger',
  3,
  3
),
(
  'A Leek of Their Own Burger',
  4,
  4
),
(
  'Blondes Have More Fun-gus Burger - Comes with mushrooms',
  5,
  7
),
(
  'It Takes Bun to Know Bun Burger (comes on a fancy bun)',
  6,
  8
),
(
  'Garlic Shandling Burger',
  7,
  10
),
(
  'The Shut Up and Swiss Me Burger',
  8,
  8
);