# Project Components

Live application: <http://michaelb167.github.io/plantr-front-end/index.html>

Back end repository: <https://github.com/MichaelB167/plantr-api>

## App Explanation


## Technologies Used

This app was created using the following:

Front End: Ember.js, HTMLbars, CSS/SASS, Bootstrap

Back End: Ruby on Rails

## Approach Taken

I closely followed the suggested steps outlined in the project repository.  More
specifically, I started by mapping out my wireframes and entity relationship
diagram to determine how my web app could best recieve and render data.  I could
have attached a gym name attribute to my climbs table but decided to make a
separate table for gyms, mostly because climb difficulties vary wildly by
gym/location but also because I wanted to challenge myself and better
understand the nuances of working with nested routes.  Ulimately I decided that
building models/migrations with one-to-many relationships users/gyms,
users/climbs, and gyms/climbs made the most sense given the aforementioned
considerations and the user stories I developed.

Prior to working on the front end I ensured that I had curl scripts working for
all required CRUD actions.  This helped me not only ensure that my back end was
functioning as desired but also better understand how to diagnose problems that
arose while working in the front end.

I used a combination of JavaScript, jQuery and AJAX to interact with the server
and render user data in the browser.  To provide security for the user, I
required that all interactions be authenticated and that the user would only be
able to interact with data that they provided.

I knew I wanted to have a feature that displayed personalized training
suggestions since as a user myself I've been unable to find a climbing-specific
app that provides such a service and to me it's one of the more interesting
potential applications of the data.  However, I reminded myself to table that
feature until the core requirements for the app's functionality were met.

In an effort to maintain modularity in my code I limited index files to
containing requirements rather than code as well as created separate directories
for files such as AJAX requests and event handlers.  To backup and track my
project, I made frequent and descriptive commits to my project repository.

## Unsolved Problems

1.  Climbs don't currently save or display with a gym ID attached. I didn't
realize that my routes weren't nested for a while and have now fixed
almost everything to function with nested routes other than patch but didn't
get it quite ready to demo.
1.  Container divs for each climb need to be responsive; if a note is too long
it causes problems with the display.
1.  Completing the bonus training feature (the most common hold among among the
users' falls is displayed).  I briefly considered displaying the results of a
SQL query for that data but as far as I know queries cannot be user dynamic and
I wasn't sure how to update the user ID filter in each users' query.  I can get
all climbs and return the most common string of an array but need to convert
the JSON into an array of climbing hold strings to operate on that array.

## User Stories

1.  As a user, I want to be able to sign up and sign in so that I have a unique
account.
1.  As a user, I want to be able to input plants with various attributes so I know how many plants I have at any given time and have an easy way of checking their distribution.
1.  As a user, I want know when I planted plants and approximately when I can expect to be able to harvest the edible ones.
1.  As a user, I want to see a brief weather forecast for my location so I know whether I need to water the plants in the next few days or not.
1.  As a user, I want to be able to harvest plants when they're ready so I can use them in recipes.
1.  As a user, I want to see a brief list of recipes based on what plants I have harvested recently.  
1.  As a user, I want to be able to change my password to and have all my transactions secured to maintain the security of my account and data.

## Wireframes/Database Structure

Wireframes: <http://i.imgur.com/cOQQOVP.jpg>

Entity Relationships Diagram: <http://i.imgur.com/WZYh63M.jpg>
