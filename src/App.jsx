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

  const handleFilterChange = (e, value) => {
    e.target.checked ? 
      setFilters(filters.concat(value)) :
      setFilters(filters.filter(f => f !== value))
  }

  const handleSortChange = (value) => {
    sortParameter !== value && setSortParameter(value)
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
                defaultChecked
                label="Popularity"
                onClick={handleSortChange} />
              <RadioButton
                label="All-Star Appearances"
                onClick={handleSortChange} />
              <RadioButton
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
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Team Durant'}
                  onClick={handleFilterChange}/>
              </fieldset>
              <fieldset>
                <legend>Starter/Reserve</legend>
                <CheckBox
                  label={'Starters'}
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Reserves'}
                  onClick={handleFilterChange}/>
              </fieldset>
              <fieldset>
                <legend>Position</legend>
                <CheckBox
                  label={'Guards'}
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Forwards'}
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Centers'}
                  onClick={handleFilterChange}/>
              </fieldset>
              <fieldset>
                <legend>Other</legend>
                <CheckBox
                  label={'First-time All-Stars'}
                  onClick={handleFilterChange}/>
                <CheckBox
                  label={'Favorites'}
                  onClick={handleFilterChange}/>
              </fieldset>
            </div>
          </div>
        </menu>
        <PlayerList
          filters={filters}
          sortParameter={sortParameter}
        />
      </main>
    </div>
  );
}

export default App;
