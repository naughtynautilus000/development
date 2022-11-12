import players from '../assets/player-data.json'
import PlayerCard from './PlayerCard'
import { useState } from 'react'
import { sortByAllNbaTeams, sortByPopularity, sortByAppearances, toSiteUrl } from '../util'

players.forEach(player => {
  player.image = toSiteUrl(player.image)
})

const PlayerList = ({ filters, sortParameter }) => {
  const [favorites, setFavorites] = useState([])
  const handleFavoriteChange = (player) => {
    if (favorites.some(p => p.name === player.name)) {
      setFavorites(favorites.filter(p => p.name !== player.name))
    } else {
      setFavorites(favorites.concat(player))
    }
  }


  const filteredPlayers = players.filter((player) => {
    if (filters.includes("team-lebron")) {
      if (player.team !== "LeBron") return false
    }

    if (filters.includes("team-durant")) {
      if (player.team !== "Durant") return false
    }

    if (filters.includes("starters")) {
      if (!player.starter) return false
    }

    if (filters.includes("reserves")) {
      if (player.starter) return false
    }

    if (filters.includes("guards")) {
      if (player.position !== "g") return false
    }

    if (filters.includes("forwards")) {
      if (player.position !== "f") return false
    }

    if (filters.includes("centers")) {
      if (player.position !== "c") return false
    }

    if (filters.includes("first-time-all-stars")) {
      if (player.appearances !== 1) return false
    }

    if (filters.includes("favorites")) {
      if (!favorites.some(p => p.name === player.name)) return false
    }

    return true
  })

  switch (sortParameter) {
    case "popularity":
      filteredPlayers.sort(sortByPopularity)
      break
      case "all-star-appearances":
      filteredPlayers.sort(sortByAppearances)
      break
      case "all-nba-teams":
      filteredPlayers.sort(sortByAllNbaTeams)
      break
    default:
  }

  return (
    <ul id="player-list">
      {filteredPlayers.map((p, i) => 
        <PlayerCard
          player={p}
          key={i}
          favorite={favorites.some(somePlayer => somePlayer.name === p.name)}
          handleFavoriteChange={handleFavoriteChange} />)}
    </ul>
  )
}

export default PlayerList
