# HNG STAGE 2 TASK

# HOW TO RUN!!!
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# HNG STAGE 2 TASK

# Objective
- A movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. It consumes data from the TMDB API.

# Requirements

1. User Interface:
Thse user interface is responsive and visually appealing. Here's the link to the design I'm expected to replicate: https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0
- The top 10 movies on the homepage is listed.
- They should be displayed in a grid layout with their movie posters.
- The Card component should display the movie title and release date.
- card - [data-testid: movie-card]
-movie poster - [data-testid: movie-poster]
-movie title - [data-testid: movie-title]
-movie release date - [data-testid: movie-release-date]

2. Movie Search:
I hava Implemented a search feature that allows users to search for movies by title, Display search results, including movie posters, titles, and release dates.
-Show a loading indicator while fetching search results.

3. Movie Details:
When i go to to /movies/:id route (where :id is the id), I should see the movie details page.
I should see
title - [data-testid: movie-title]
release date (in UTC) - [data-testid: movie-release-date]
runtime (in minutes) - [data-testid: movie-runtime]
overview - [data-testid: movie-overview]

# API Integration:
I used TMDB API to fetch movie data.

# API endpoints:
-Fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}

# Error Handling:
Implement error handling to display meaningful error messages to users in case of API failures or other issues.
# Submission:
-Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
-Provide clear instructions on how to run your project locally in your README.md file.
-Ensure that the code is well-documented and organized.

PS: You MUST use react or  Next js
Submit your task through the designated submission form.

PPS: THE API MIGHT NOT RETURN ALL THE INFO ON THE SECOND PAGE OF THE DESIGN, ADD THE ESSENTIAL ONES THAT ARE LISTEN ABOVE. THE SIDEBAR DOESN'T NEED TO BE FUNCTIONAL.
YOU MAY USE ANY CSS FRAMEWORK/LIBRARY OF YOUR CHOICE