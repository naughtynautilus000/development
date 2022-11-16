import players from '../assets/player-data.json'
import PlayerCard from './PlayerCard'
import { sortByAllNbaTeams, sortByPopularity, sortByAppearances, toSiteUrl } from '../util'

players.forEach(player => {
  player.image = toSiteUrl(player.image)
})

const PlayerList = ({ filters, sortParameter, favorites, handleFavoritesChange }) => {

  const filteredPlayers = players.filter((player) => {
    if (filters.team === "team-lebron") {
      if (player.team !== "LeBron") return false
    }

    if (filters.team === "team-durant") {
      if (player.team !== "Durant") return false
    }

    if (filters.starterReserve === "starters") {
      if (!player.starter) return false
    }

    if (filters.starterReserve === "reserves") {
      if (player.starter) return false
    }

    if (filters.position === "guards") {
      if (player.position !== "g") return false
    }

    if (filters.position === "forwards") {
      if (player.position !== "f") return false
    }

    if (filters.position === "centers") {
      if (player.position !== "c") return false
    }

    if (filters.firstTimeAllStars) {
      if (player.appearances !== 1) return false
    }

    if (filters.favorites) {
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
          handleFavoritesChange={handleFavoritesChange} />)}
    </ul>
  )
}

export default PlayerList
