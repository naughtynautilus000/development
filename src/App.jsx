import './styles/app.css';
import './styles/header.css';
import './styles/menu.css';
import './styles/players.css';
import { useState } from 'react';
import PlayerList from './components/PlayerList';
import CheckBox from './components/Checkbox';
import RadioButton from './components/RadioButton';
import { toSiteUrl } from './util';

function App() {
  const [filters, setFilters] = useState([])
  const [sortParameter, setSortParameter] = useState("popularity")
  const [favorites, setFavorites] = useState([])

  const handleFavoritesChange = (player) => {
    if (favorites.some(p => p.name === player.name)) {
      setFavorites(favorites.filter(p => p.name !== player.name))
    } else {
      setFavorites(favorites.concat(player))
    }
  }

  const handleFilterChange = (e, value) => {
    e.target.checked ? 
      setFilters(filters.concat(value)) :
      setFilters(filters.filter(f => f !== value))
  }

  const handleSortChange = (value) => {
    sortParameter !== value && setSortParameter(value)
  }

  const handleReset = () => {
    setFavorites([])
    setSortParameter("popularity")
    setFilters([])
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
              <RadioButton 
                selection={sortParameter}
                label="Popularity"
                onClick={handleSortChange} />
              <RadioButton
                selection={sortParameter}
                label="All-Star Appearances"
                onClick={handleSortChange} />
              <RadioButton
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
                <CheckBox
                  label={'Team LeBron'}
                  filters={filters}
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Team Durant'}
                  filters={filters}
                  onClick={handleFilterChange}/>
              </fieldset>
              <fieldset>
                <legend>Starter/Reserve</legend>
                <CheckBox
                  label={'Starters'}
                  filters={filters}
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Reserves'}
                  filters={filters}
                  onClick={handleFilterChange}/>
              </fieldset>
              <fieldset>
                <legend>Position</legend>
                <CheckBox
                  label={'Guards'}
                  filters={filters}
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Forwards'}
                  filters={filters}
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Centers'}
                  filters={filters}
                  onClick={handleFilterChange}/>
              </fieldset>
              <fieldset>
                <legend>Other</legend>
                <CheckBox
                  label={'First-time All-Stars'}
                  filters={filters}
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Favorites'}
                  filters={filters}
                  onClick={handleFilterChange}/>
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
