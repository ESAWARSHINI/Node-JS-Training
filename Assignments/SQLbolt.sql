-- LESSON 1
SELECT title FROM movies;
SELECT director FROM movies;
SELECT title ,director FROM movies;
SELECT title , year FROM movies;
SELECT * FROM movies;

 -- LESSON 2
 SELECT * FROM movies where id=6;
SELECT * FROM movies where year between 2000 and 2010;
SELECT * FROM movies where year not between 2000 and 2010;
SELECT * FROM movies where id<6;

-- LESSON 3
SELECT * FROM movies where title like "toy story%";
SELECT * FROM movies where director like "john lasseter";
SELECT * FROM movies where director not like "john lasseter";
SELECT * FROM movies where title like "wall-%";

-- LESSON 4
SELECT distinct director FROM movies order by director asc;
SELECT * FROM movies order by year desc limit 4;
select * from movies order by title limit 5;
select * from movies order by title limit 5 offset 5;

-- LESSON 5
SELECT * FROM north_american_cities where country like "canada";
SELECT * FROM north_american_cities where country like "United States" order by latitude desc;
SELECT * FROM north_american_cities where longitude<(select longitude from north_american_cities where city like "chicago") order by longitude desc ;
select city from north_american_cities where country like "mexico" order by population desc limit 2
select city from north_american_cities where country like "united states" order by population desc limit 2 offset 2

-- LESSON 6
SELECT * FROM movies inner join boxoffice on id=movie_id;
SELECT * FROM movies inner join boxoffice on id=movie_id where international_sales >domestic_sales;
SELECT * FROM movies inner join boxoffice on id=movie_id order by rating desc;

-- LESSON 7
SELECT distinct building_name FROM employees inner join buildings on building_name=building;
select * from buildings
select distinct building_name,role  from buildings left join employees on building_name=building;

-- LESSON 8
SELECT * FROM employees where building is null;
select building_name from buildings left join employees on building_name=building where building is null

 -- LESSON 9
SELECT title,(domestic_sales+international_sales)/1000000 as combined_sales
FROM movies 
inner join boxoffice on id=movie_id;


SELECT title,rating*10
FROM movies 
inner join boxoffice on id=movie_id;

SELECT * 
FROM movies where year%2 = 0;

-- LESSON 10
SELECT max(years_employed) FROM employees;

select role,avg(years_employed) as avg_years from employees group by role

select building ,sum(years_employed) as total_year from employees group by building

-- LESSON 11
SELECT count(role) as no_of_artist FROM employees where role like "artist";
select role,count(role) as no_of_employees from employees group by role;
select role ,sum(years_employed) from employees group by role having role like "engineer";

-- LESSON 12
SELECT director , count(title) FROM movies group by director;
select director,sum(domestic_sales)+sum(international_sales) as total_sales 
from movies inner join boxoffice on id=movie_id group by director

-- LESSON 13
insert into movies values(10,"Toy Story 4","Jhon Lasseter",1999,85);
insert into boxoffice values(10,8.7,340000000,270000000);

-- LESSON 14
update movies set director="Jhon Lasseter" where title="A Bug's Life";
update movies set year=1999 where title="Toy Story 2";
update  movies set title="Toy Story 3",director="Lee Unkrich" where title="Toy Story 8"