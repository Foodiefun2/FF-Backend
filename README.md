<h2>API Documentation</h2>

<h3>Backend Deployment:</h3>
https://rayfoodiefun.herokuapp.com/

<h3>Backend Frameworks:</h3>


<h3>Routes:</h3>

<h4>Authentication routes:</h4>

> **/api/auth**

| Method | Endpoint| Description | Requirements |
|:--------:|:-------:|:--------------------------:|:-----------------------------:|
| POST | /register | Registers a new User | username(str), password(str), email(str), location(str) |
| POST | /login | Signs in a User | username(str), password(str) |

<h4>User Routes:</h4>

> **/api/users**

| Method | Endpoint| Description | Requirements |
|:-----:|:-----:|:-----:|:-----:|
| GET | / | Gets all users | |
| GET | /:id | Gets User with all info | |
| GET | /:id/restaurants | Gets all Restaurants created by User |  |
| GET | /:id/reviews | Get all reviews by User | |
| PUT | /:id | Updates an User |  |
| DELETE | /:id| Deletes an User |  |

<h4>Restaurant Routes:</h4>

> **/api/restaurants**

| Method | Endpoint| Description | Requirements | Optional |
|:-----:|:-----:|:-----:|:-----:| :-----: |
| GET | / | Gets all Restaurants | | |
| GET | /:id | Gets a Restaurant | | |
| GET | /:id/ratings | Gets all ratings for Restaurant | | |
| GET | /:id/reviews | Gets all reviews for Restaurant | | |
| POST | / | Adds a new restaurant | name(str), cuisine(str), location(int), foodie_id(int) | img(str), hours(int), review(str) |
| PUT | /:id | Updates an Restaurant |  |
| DELETE | /:id| Deletes an Restaurant |  |

<h4>Review Routes: </h4>

> **/api/reviews**

| Method | Endpoint| Description | Requirements | Optional |
|:-----:|:-----:|:-----:|:-----:| :-----: |
| POST | / | Adds a new review | menu_item(str), rating(int), review(str), foodie_id(int), restaurant_id(int) | img(str), price(int), cuisine(str) |
| PUT | /:id | Updates an review |  |
| DELETE | /:id| Deletes an review |  |

<h4>Restaurant Ratings</h4>

> **/api/ratings**

| Method | Endpoint| Description | Requirements | Optional |
|:-----:|:-----:|:-----:|:-----:| :-----: |
| POST | / | Adds a new rating |  restaurant_id(int) | food_rating(int), drinks_rating(int), decor_rating(int), service_rating(int), cleaniness_rating(int), vibe(str) |
| PUT | /:id | Updates an rating |  |
| DELETE | /:id| Deletes an rating |  |