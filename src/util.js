export const sortByPopularity = (p1, p2) => {
  return p1.popularity_rank - p2.popularity_rank
}

export const sortByAppearances = (p1, p2) => {
  return p2.appearances - p1.appearances
}

export const sortByAllNbaTeams = (p1, p2) => {
  return p2.all_nba_teams - p1.all_nba_teams
}

export const toSiteUrl = (relativePath) => {
  return process.env.PUBLIC_URL + "/" + relativePath;
}
