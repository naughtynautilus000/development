import { toSiteUrl } from '../util'

const PlayerCard = ({player, handleFavoritesChange, favorite}) => {
  const {name, team, starter, position, appearances, all_nba_teams, image} = player

  return (
    <li className="player">
      <div>
        <img className="player-img" src={image} alt={name} />
      </div>
      <div className="content">
        <div>
          <h2>{name}, {position.toUpperCase()}</h2>
          <h3>{starter ? "starter" : "reserve"} on team {team}</h3>
        </div>
        <div>
          <h4>All-Star Appearances<span>{appearances}</span></h4>
          <h4>All-NBA Teams<span>{all_nba_teams}</span></h4>
        </div>
        <button className={favorite ? "favorite" : ""} onClick={() => handleFavoritesChange(player)}>
          <img src={toSiteUrl(favorite ? "images/star.png" : "images/star_outline.png")} alt="star" />
          <span>{favorite ? "Remove Player from Favorites" : "Add Player to Favorites"}</span>
        </button>
      </div>
    </li>
  )
}

export default PlayerCard
