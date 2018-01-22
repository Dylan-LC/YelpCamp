#YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image

[
{name:"Salman", image: www}
{name:"Salman", image: www}
{name:"Salman", image: www}
{name:"Salman", image: www}
{name:"Salman", image: www}
]


#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap


#Creating New campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form


#Style the campgrounds page
* Add a better header/footer
* Make the campgrounds displayed in a grid


#Style the Nav-bar and Form
* Add a nav-bar to all templates
* Style the new campground form


#Databases

##Intro to Databases
* What is a database?
    * A collection of information/data
    * Has an interface
* SQL(relational) vs. NoSQL(non-relational)


#Intro to MongoDB
* What is MongoDB
* Why are we using it?
* Let's Install it!


#Our First Mongo Commands
* mongod
* mongo
* help
* show dbs
* use
* insert
* find
* update({}, {$set: {}})
* remove


#Mongoose
* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose


#Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our router!


#Show Page
* Review the RESTful routes we've seen so farm
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template
