export interface Favorite {
  _id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}

export interface FavoriteInput {
  id: string;
  type: "bands" | "genres" | "artists" | "tracks";
}
