# Development

## Link to Deployed Website

`https://naughtynautilus000.github.io/development`

## Goal and Value of the Application

The goal of the application is to aggregate all of the 2022 NBA All-Stars along
with some of their statistics so that the user can more easily see the career
breakdowns of each 2022 NBA All-Star.

## Usability Principles Considered

1. _Visibility of System Status_: Users are able to see which sort parameter and filters they have
   selected and how those selections affect the displayed list of players in real time

2. _Aesthetic and Minimalist Design_: There is very little text on the screen, and the text that
   is there gives very clear indications about what different numbers mean or how different inputs
   will affect the player list ("Sort By" & "Filter By" headers, legends for each fieldset, labels
   for the numbers on each _PlayerCard_, etc.)

3. _Recognition rather than Recall_: The entirety of the application is on one page. Therefore, the
   user does not have to remember previous actions. Additionally, the menu stays in a fixed position
   as the user scrolls through the player list, so the user will never need to recall their current
   selections when scrolling through the list.

## Organization of Components

There are 5 components that makes up this App:

1. _App.jsx_: This component is the wrapper for the entire application, this component contains the
   header, menu and player list for the application

2. _RadioButton.jsx_: This component represents one radio button option among the different sort
   options in this application. The RadioButtons are contained in the `<menu>` HTML element.

3. _Checkbox.jsx_: Like the RadioButton component, this element represents a single checkbox option
   among the multiple filter options in the `<menu>` HTML element.

4. _PlayerList.jsx_: This component contains the list of players, rendered as _PlayerCard_
   components, as well as the business logic for sorting and filtering that list depending on the
   user's selections on the menu.

5. _PlayerCard.jsx_: This component displays the information pertaining to one player in the player
   list contained in PlayerList.jsx.

## How Data is Updated and Passed Down Through Components

There is one external data file (player-data.json) which is an array of objects that each contain
the data for a single NBA All-Star. This json data in this file is imported in the _PlayerList_
component as each object( player) in the array is passed as a prop to a _PlayerCard_ component which
renders the data for each player to the screen.

There are 3 state variables (all declared using the `useState` hook) used in this App:

1. `_filters_` (contained in _App_): This variable is a list of strings where each item in the
   list represents one field by which to filter the player list. Strings are added and removed from
   this field when the user selects checkboxes from the menu. To achieve this, we pass a handler
   function as a prop to every _Checkbox_ component which calls `setFilter`. This handler runs when
   a checkbox is selected or unselected, triggering the variable update. `filters` is passed as a
   prop to the _PlayerList_. Then, inside _PlayerList_, we filter the list of players depending on
   the strings contained in `filters`.

2. `_sortParameter_` (contained in _App_): This variable is a single string which represents the
   field by which to sort the players (popularity, all-star game appearances, or all-NBA teams). We
   change the `sortParameter` by passing a handler function, which calls `setSortParameter`, as a
   prop to each _RadioButton_ component. This handler runs when a radio button is clicked,
   triggering the variable update. `sortParameter` is passed as a prop to _PlayerList_. Then,
   inside _PlayerList_, we sort the list of players by the `sortParameter`.

3. `_favorites_` (contained in _PlayerList_): This variable is a list that contains all of the user's
   favorited players. To favorite a player, the user clicks the "add player to favorites" button
   found on each _PlayerCard_. To unfavorite a player, the user clicks the "remove player from
   favorites" button found the _PlayerCards_ that have already been favorited. Achieve this
   behavior, we pass a handler function as a prop to each _PlayerCard_ which calls `setFavorites` to
   either add or remove the corresponding player from the favorites list. The `favorites` variable
   itself is used in the filtering function to only show the user's favorited players when the
   favorites checkbox is checked.
   
## Other Notes

### JSON Data

I sourced the information in the player-data.json file myself. To collect all of the information
contained in this file I used the following links and websites:

- [The 2022 NBA All-Star roster](https://www.nba.com/allstar/2022/all-star-roster) for the list
  of players and their number of all-star appearances.
- [StatMuse](https://www.statmuse.com/) for the images of each player.
- [Basketball Reference](https://www.basketball-reference.com/) for the number of All-NBA teams
  each player was selected for.

