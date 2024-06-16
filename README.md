# MET CS601: Term Project
## Hunter Mayo
### About the Assignment
This term project utilizes the material covered during this course to create a professional web application.

In this project, I used Create-React-App to build a React application about myself and some of my interests. My app includes several static pages, including a landing Home page, an About Me page with biographical information, a Resume page detailing my professional experience, a Photo Gallery page, and a Contact page with my contact information.

Additionally, my project includes a "Pokedex" application, which builds on the concepts covered in Assignments 5 and 6. In the Pokedex, I've utilized React's component-based architecture to dynamically display components for the original 151 pokemon in the first generation of the video game. To do this, my Pokedex component utilizes the map method to process a json array and generate 151 Pokemon components. Each of these Pokemon components is clickable and links to a details page for that specific pokemon. This details page (implemented using the PokemonCard component) includes a photo and information about the pokemon that I dynamically pull from a 3rd-party API.

I've also included a "Stoic Wisdom" page, which uses the useState and useEffect hooks along with the Fetch API to pull a quote from a Stoic author and dynamically display it on the page. This quote is updated every time the page is reloaded.

I used React Router v6 to handle navigation between all of the pages in my project.

## Build Information
To run the application, navigate to the project directory and run:

### `npm i react-router-dom`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Hosting
A hosted version of my application can be found here: [https://hdm-cs601-term-project.netlify.app/]
