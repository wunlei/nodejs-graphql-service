export interface Track {
  _id: string;
  title: string;
  albumId: string;
  artistsIds: string[];
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

interface TrackAdditionalInfo {
  albumId?: string;
  artistsIds?: string[];
  bandsIds?: string[];
  genresIds?: string[];
  duration?: number;
  released?: number;
}

export interface CreateTrackInput extends TrackAdditionalInfo {
  title: string;
}

export interface UpdateTrackInput extends TrackAdditionalInfo {
  id: string;
  title?: string;
}

export interface ResponseTrack extends TrackAdditionalInfo {
  _id: string;
  title: string;
  artistsIds: string[];
  bandsIds: string[];
  genresIds: string[];
}
