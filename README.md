# Pokémon Search and Bookmark App
This is a Pokémon search and bookmark application that allows users to search for Pokémon, view details about them, and bookmark their favorite Pokémon for future reference. The application makes use of the Pokémon API to fetch data about the Pokémon.

## Features
1.Search Page: Allows users to search for Pokémon by name. On hitting the search button, an API call is made to the search endpoint. The page displays a loading indicator while the API call is in progress and stops when the API call is successful or throws an error. Error messages are displayed if there is an error.

2.Listing Page: Displays all the Pokémon returned by the API in a grid format. The page includes images of the Pokémon and their titles. The listing page is infinite scrollable, loading more Pokémon as the user scrolls. Users can filter the results by abilities, characteristics, group, habitat, location, species, etc.

3.Details Page: Opens up when a user taps on a Pokémon on the listing screen. The page displays all the details retrieved from the API in a properly formatted design. Users can bookmark a Pokémon by tapping on the bookmark icon. Bookmarked Pokémon are saved as favorites on the device. Bookmarked Pokémon are indicated with a pre-filled bookmark icon, and tapping on the same icon removes it from bookmarks.

4.Bookmarks Screen: Shows all the user's bookmarked Pokémon. This data is stored locally on the device. Users can remove a Pokémon from bookmarks.

## Technologies Used
1.React.js: JavaScript library for building user interfaces

2.Pokémon API: Provides Pokémon data for the application

## Home Page
![image](https://github.com/soniadiwedi/pokeapi/assets/112754761/9d79e6fe-ea88-400a-8d8c-f64a08263cdc)

## Details Page 
![image](https://github.com/soniadiwedi/pokeapi/assets/112754761/5e6bda6d-5057-4293-8491-7086ef12aabb)

## Bookmark Page
![image](https://github.com/soniadiwedi/pokeapi/assets/112754761/8676a1b7-0448-455c-b9da-f44de746ce19)
