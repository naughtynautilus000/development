import './styles/app.css';
import './styles/header.css';
import './styles/menu.css';
import './styles/players.css';
import { useState } from 'react';
import PlayerList from './components/PlayerList';
import CheckBox from './components/Checkbox';
import SortOption from './components/SortOption';
import { toSiteUrl } from './util';
import FilterOption from './components/FilterOption';

const filterDefaults = {
  team: "",
  starterReserve: "",
  position: "",
  firstTimeAllStars: false,
  favorites: false
}

function App() {
  const [filters, setFilters] = useState(filterDefaults)
  const [sortParameter, setSortParameter] = useState("popularity")
  const [favorites, setFavorites] = useState([])

  const handleFiltersOptionChange = (name, value) => {
    switch (name) {
      case "team":
        setFilters({...filters, team: value})
        break
      case "starter-reserve":
        setFilters({...filters, starterReserve: value})
        break
      case "position":
        setFilters({...filters, position: value})
        break
      case "first-time-all-stars":
        setFilters({...filters, firstTimeAllStars: !filters.firstTimeAllStars})
        break
      case "favorites":
        setFilters({...filters, favorites: !filters.favorites})
        break
      default:
    }
  }

  const handleFavoritesChange = (player) => {
    if (favorites.some(p => p.name === player.name)) {
      setFavorites(favorites.filter(p => p.name !== player.name))
    } else {
      setFavorites(favorites.concat(player))
    }
  }

  const handleSortChange = (value) => {
    sortParameter !== value && setSortParameter(value)
  }

  const handleReset = () => {
    setFavorites([])
    setSortParameter("popularity")
    setFilters(filterDefaults)
  }

  return (
    <div className="App">
      <header>
        <img id='basketball' src={toSiteUrl("images/basketball.png")} alt="basketball" />
        <h1>2022 NBA <br /> All-Stars</h1>
        <img id='nba' src={toSiteUrl("images/nba.png")} alt="nba" />
      </header>
      <main>
        <menu>
          <div>
            <h2>Sort By</h2>
            <fieldset>
              <SortOption 
                selection={sortParameter}
                label="Popularity"
                onClick={handleSortChange} />
              <SortOption
                selection={sortParameter}
                label="All-Star Appearances"
                onClick={handleSortChange} />
              <SortOption
                selection={sortParameter}
                label="All-NBA Teams"
                onClick={handleSortChange} />
            </fieldset>
          </div>
          <div>
            <h2>Filter By</h2>
            <div>
              <fieldset>
                <legend>Team</legend>
                <FilterOption
                  name="team"
                  label="Team LeBron"
                  selection={filters.team}
                  onClick={handleFiltersOptionChange} />
                <FilterOption
                  name="team"
                  label="Team Durant"
                  selection={filters.team}
                  onClick={handleFiltersOptionChange} />
              </fieldset>
              <fieldset>
                <legend>Starter/Reserve</legend>
                <FilterOption
                  name="starter-reserve"
                  label="Starters"
                  selection={filters.starterReserve}
                  onClick={handleFiltersOptionChange} />
                <FilterOption
                  name="starter-reserve"
                  label="Reserves"
                  selection={filters.starterReserve}
                  onClick={handleFiltersOptionChange} />
              </fieldset>
              <fieldset>
                <legend>Position</legend>
                <FilterOption
                  name="position"
                  label="Guards"
                  selection={filters.position}
                  onClick={handleFiltersOptionChange} />
                <FilterOption
                  name="position"
                  label="Forwards"
                  selection={filters.position}
                  onClick={handleFiltersOptionChange} />
                <FilterOption
                  name="position"
                  label="Centers"
                  selection={filters.position}
                  onClick={handleFiltersOptionChange} />
              </fieldset>
              <fieldset>
                <legend>Other</legend>
                <CheckBox
                  checked={filters.firstTimeAllStars}
                  label={'First-time All-Stars'}
                  onClick={handleFiltersOptionChange}/>
                <CheckBox
                  checked={filters.favorites}
                  label={'Favorites'}
                  onClick={handleFiltersOptionChange}/>
              </fieldset>
            </div>
          </div>
          <button id='reset' onClick={() => handleReset()}>Reset</button>
        </menu>
        <PlayerList
          favorites={favorites}
          handleFavoritesChange={handleFavoritesChange}
          filters={filters}
          sortParameter={sortParameter}
        />
      </main>
    </div>
  );
}

export default App;
