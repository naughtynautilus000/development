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

2. _SortOption.jsx_: This component represents one way to sort the list of players. Each
   _SortOption_ is a wrapper for a radio button HTML component The _SortOptions_ are found in a
   `<fieldset>` HTML component located in the `<menu>` in _App.jsx_.

3. _Checkbox.jsx_: The checkbox component represents one option in a filtering `<fieldset>` where
   all the options in that `<fieldset>` **are not** mutually exclusive. _Checkbox_ components found
   in a `<fieldset>` HTML component in the `<menu>`

4. _FilterOption.jsx_: This component represents one option in a filtering `<fieldset>` where all
   the options in that `<fieldset>` **are** mutually exclusive. _FilterOption_ components are found
   in a `<fieldset>` HTML component in the `<menu>`.

5. _PlayerList.jsx_: This component contains the list of players, rendered as _PlayerCard_
   components, as well as the business logic for sorting and filtering that list depending on the
   user's selections on the menu.

6. _PlayerCard.jsx_: This component displays the information pertaining to one player in the player
   list contained in PlayerList.jsx.

## How Data is Updated and Passed Down Through Components

There is one external data file (player-data.json) which is an array of objects that each contain
the data for a single NBA All-Star. This json data in this file is imported in the _PlayerList_
component as each object( player) in the array is passed as a prop to a _PlayerCard_ component which
renders the data for each player to the screen.

There are 3 state variables (all declared using the `useState` hook) used in this App:

1. `filters` (declared in _App_): This variable is an object which represents the active filters
   by which to filter the list of players. The fields in this object are either a string or a
   boolean. The string fields represent a filter that belongs to a `<fieldset>` of mutually
   exclusive options (_FilterOption_ radio buttons). The boolean fields represent a filter that does
   not belong to a mutually exclusive group of options (_Checkbox_ components). To update the active
   filters, we pass the `setFilterOptionChange` handler function to each _FilterOption_ and
   _Checkbox_ component. This handler calls the `setFilters` function which updates the react state.

   `filters` is passed as a prop to the _PlayerList_. Then, inside _PlayerList_, we filter the list
   of players depending of the strings contained in `filters`. `filters` is also passed as a prop to
   each _Checkbox_ component. Within each _Checkbox_, `filters` is used to check whether or not the
   _Checkbox_ should be checked. That is, the `filters` variable controls the state of the
   _Checkbox_.

2. `_sortParameter_` (declared in _App_): This variable is a single string which represents the
   field by which to sort the players (popularity, all-star game appearances, or all-NBA teams). We
   change the `sortParameter` by passing a handler function, which calls `setSortParameter`, as a
   prop to each _SortOption_ component. This handler runs when a radio button is clicked,
   triggering the variable update. `sortParameter` is passed as a prop to _PlayerList_. Then,
   inside _PlayerList_, we sort the list of players by the `sortParameter`.

   `sortParameter` is also passed as a prop to each _SortOption_. In each _SortOption_,
   `sortParameter` is used to check if the _SortOption_ should be selected. That is, the
   `sortParameter` variable controls the state of each _SortOption_.

3. `_favorites_` (declared in _App_): This variable is a list that contains all of the user's
   favorited players. To favorite a player, the user clicks the "add player to favorites" button
   found on each _PlayerCard_. To unfavorite a player, the user clicks the "remove player from
   favorites" button found the _PlayerCards_ that have already been favorited. To achieve this
   behavior, we pass a handler function as a prop to each _PlayerCard_ which calls `setFavorites` to
   either add or remove the corresponding player from the favorites list. The `favorites` variable
   itself is used in the filtering function to only show the user's favorited players when the
   favorites checkbox is checked.

### The Aggregator

The two aggregated values are the average number of All-Star appearances and the average number of
All-NBA teams among the user's favorited players. To display these values, we use the `reduce`
array method to calculate the averages of each of the two values among the favorited players. We
then display these values in the header.

_NOTE: These aggregated values **are not** react state_. These values are instead derived from the
`favorites` state variable.

### Resetting the Application State

There is a reset button contained in the menu that resets the application to its original state (the
sort parameter is "popularity", no filters are selected, and there are no favorites.) We pass a
`handleReset` function as the onClick prop to the button, which sets the three state variables
mentioned above to the appropriate values. Because the state of each _FilterOption_, _Checkbox_, and
_SortOption_ is controlled by the passed down state variable, resetting the state variables also
resets the visual state of the application.

## Other Notes

### JSON Data

I sourced the information in the `player-data.json` file myself. To collect all of the information
contained in this file I used the following links and websites:

- [The 2022 NBA All-Star roster](https://www.nba.com/allstar/2022/all-star-roster) for the list
  of players and their number of all-star appearances.
- [StatMuse](https://www.statmuse.com/) for the images of each player.
- [Basketball Reference](https://www.basketball-reference.com/) for the number of All-NBA teams
  each player was selected for and for the number of All-Star votes each player received.
