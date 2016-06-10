# Project Components

Live application: <http://michaelb167.github.io/plantr-front-end>

Back end repository: <https://github.com/MichaelB167/plantr-api>

Pitch Deck: <https://docs.google.com/document/d/1I-jTpDiaUUIt8V5JgRB8qn65R3aENQFKmpfld1lOEUM/edit?usp=sharing>

Wireframes: <http://i.imgur.com/cOQQOVP.jpg>

Entity Relationships Diagram: <http://i.imgur.com/WZYh63M.jpg>

Screenshot:

<img src="http://i.imgur.com/M3WriEW.jpg">

## App Explanation

I've always been interested in the idea of self-sustainability to reduce our collective ecological footprint.  To that point I decided to make a gardening web-app so users (including myself) can easily track/care for plants in their garden, harvest plants when they are ready to eat, and eventually find recipes using those plants.

Upon signing up, users are automatically signed in and directed to a landing page.  Either by using the navbar or clicking through the index doorway, they can add plants with category, name, quantity and care note attributes.  They can also specify the date they were planted to get the number of days since planting, the date they can be potentially harvested to get the number of days until then, and their zip code if they want a brief weather forecast to know whether or not they need to water in the next few days.

After adding a plant, users can add more or view their plants by category along with the above mentioned attributes.  If they need to update information for any of the attributes they can do so, or delete the plant if it dies or they mistakenly entered it.  Once it is ready to harvest, they can click harvest to send it to their harvested plants page.  Later in development users will be able to search for recipes based on the plants they've harvested recently, but that feature isn't fully renderable in the browser yet.

## Technologies Used

This app was created using the following:

Front End: Ember.js, HTMLbars, CSS/SASS, Bootstrap

Back End: Ruby on Rails

## Approach Taken

Coming up with a project idea that would best harness the power of ember and
still be viable given our limited amount of time was a length process for me.
Eventually I settled on this concept because the core of the app's
functionality builds on projects we've worked on in class and thus was
definitely doable, but it allowed the inclusion of several challenging
features that I could apply myself to if I finished the base requirements early
or pursue after the course's conclusion.

Before the project period began, I re-read many of the ember docs to get a
better grasp on how components are structured and find some helpful tools.
I then started by mapping out my wireframes and entity
relationship diagram to determine how my web app could best recieve and render
data.  Having a one-to-many relationship between users and plants made the most
sense in my opinion, since that was the essence of my app and I felt other
models would be extraneous.

Prior to working on the front end I ensured that I had curl scripts working for
all required CRUD actions.  This helped me not only ensure that my back end was
functioning as desired but also better understand how to diagnose problems that
arose while working in the front end.

I used a combination of Ember.js and HTMLbars to interact with the server
and render user data in the browser.  To provide security for the user, I
required that all interactions be authenticated and that the user would only be
able to interact with data that they provided.

Initially, I was struggling to successfully pass data through nested components.
Ember truth helpers enabled me to not only precisely filter the data I rendered
in each template by creating up to five 'if'/'unless' parameters for each plant
category, but also nest the edit fields within the same templates.

My main reach goal for the project was to use a 3rd party recipe API to
display recipe suggestions based on plants users have recently harvested.  I
had used 3rd party API's before such as Stripe and QPX express but the one I
chose, Food2Fork, had more sparse documentation.  I had also never used one with
Rails or Ember, so again reading docs was crucial.  Ultimately I was able to
make requests through my API and render JSON in the console but I didnt' have
enough time to get the data to render in the browser and correctly pass search
terms through Ember.  I think I was close though, and I look forward to
completing that feature in the near future.

In an effort to maintain modularity in my code I limited index files to
containing requirements rather than code as well as created separate directories
for files such as AJAX requests and event handlers.  To backup and track my
project, I made frequent and descriptive commits to my project repository.

## Dependencies Installation

1.  Ember truth helper- `ember install ember-truth-helpers`
1.  Ember moment helper- `ember install ember-moment`

## User Stories

1.  As a user, I want to be able to sign up and sign in so that I have a unique
account.
1.  As a user, I want to be able to input plants with various attributes so I know how many plants I have at any given time and have an easy way of checking their distribution.
1.  As a user, I want know when I planted plants and approximately when I can expect to be able to harvest the edible ones.
1.  As a user, I want to see a brief weather forecast for my location so I know whether I need to water the plants in the next few days or not.
1.  As a user, I want to be able to harvest plants when they're ready so I can use them in recipes.
1.  As a user, I want to see a brief list of recipes based on what plants I have harvested recently.
1.  As a user, I want to be able to change my password to and have all my transactions authenticated to maintain the security of my account and data.

## Unsolved Problems

1.  Rendering the correct data from Food2Fork API recipe searches in the browser.  I can successfully route searches through my API but am still working through understanding the nuances of Ember files structures as they pertain to routing 3rd party API calls.  I think I'm close to getting it though.
1.  Prevent the harvest button from showing up for annuals and perennials when viewing all plants.
1.  I would like to generally refine the CSS and learn some more tricks for using it with HTMLbars.
1.  I haven't had time to start these yet but I want to sort plants by expected harvest date and render flickr images of each plant next to its information.
1.  Hurdle- generally navigating through Ember and staying patient when I got lost in sending data up/down the file tree.  Rereading the docs a lot and working through problems with classmates helped a ton in that respect.
