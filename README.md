<h2>API Documentation</h2>

<h3>Backend Deployment:</h3>
https://rayfoodiefun.herokuapp.com/

<h3>Backend Frameworks:</h3>


<h3>Routes:</h3>

<h4>Authentication routes:</h4>

> **/api/auth**

| Method | Endpoint| Description | Requirements |
|:--------:|:-------:|:--------------------------:|:-----------------------------:|
| POST | /register | Registers a new User | username, password, email, location |
| POST | /login | Signs in a User | username, password |

<h4>User Routes:</h4>

> **/api/users**

| Method | Endpoint| Description | Requirements |
|:-----:|:-----:|:-----:|:-----:|
| GET | /:id/restaurants | Gets all Restaurants created by User |  |
| PUT | /:id | Updates an User |  |
| DELETE | /:id| Deletes an User |  |

<h4>Restaurant Routes:</h4>

> **/api/restaurants**

| Method | Endpoint| Description | Requirements | Optional |
|:-----:|:-----:|:-----:|:-----:| :-----: |
| POST | / | Adds a new restaurant | name, cuisine, location, foodie_id | img, hours, review |
| PUT | /:id | Updates an Restaurant |  |
| DELETE | /:id| Deletes an Restaurant |  |

<h4>Review Routes: </h4>

> **/api/reviews**

| Method | Endpoint| Description | Requirements | Optional |
|:-----:|:-----:|:-----:|:-----:| :-----: |
| POST | / | Adds a new review | menu_item, rating, review, foodie_id, restaurant_id | img, price, cuisine |
| PUT | /:id | Updates an review |  |
| DELETE | /:id| Deletes an review |  |

<h4>Restaurant Ratings</h4>

> **/api/ratings**

| Method | Endpoint| Description | Requirements | Optional |
|:-----:|:-----:|:-----:|:-----:| :-----: |
| POST | / | Adds a new rating |  restaurant_id | food_rating, drinks_rating, decor_rating, service_rating, cleaniness_rating, vibe |
| PUT | /:id | Updates an rating |  |
| DELETE | /:id| Deletes an rating |  |

