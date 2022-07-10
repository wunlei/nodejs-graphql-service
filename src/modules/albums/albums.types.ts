export interface Album {
  _id: string;
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
  image: string;
}

interface AlbumAdditionalInfo {
  released?: number;
  image?: string;
  artistsIds?: string[];
  bandsIds?: string[];
  trackIds?: string[];
  genresIds?: string[];
}

export interface UpdateAlbumInput extends AlbumAdditionalInfo {
  id: string;
  name?: string;
}

export interface ResponseAlbum extends AlbumAdditionalInfo {
  _id: string;
  name: string;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
}

export interface CreateAlbumInput extends AlbumAdditionalInfo {
  name: string;
}
