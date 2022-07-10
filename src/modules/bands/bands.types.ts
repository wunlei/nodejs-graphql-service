export interface Band {
  _id: string;
  name: string;
  origin: string;
  members: Member[];
  website: string;
  genresIds: string[];
}

export interface Member {
  artist: string;
  instrument: string;
  years: string[];
}

interface BandAdditionalInfo {
  origin?: string;
  members?: Member[];
  website?: string;
  genresIds?: string[];
}

export interface CreateBandInput extends BandAdditionalInfo {
  name: string;
}

export interface UpdateBandInput extends BandAdditionalInfo {
  id: string;
  name?: string;
}

export interface ResponseBand extends BandAdditionalInfo {
  _id: string;
  name: string;
  members: Member[];
  genresIds: string[];
}
