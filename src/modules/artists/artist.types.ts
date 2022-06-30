export interface Artist {
  _id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bandsIds: string[];
  instruments: string[];
}

interface ArtistAdditionalInfo {
  middleName?: string;
  birthDate?: string;
  birthPlace?: string;
  bandsIds?: string[];
  instruments?: string[];
}

export interface CreateArtistInput extends ArtistAdditionalInfo {
  firstName: string;
  secondName: string;
  country: string;
}

export interface UpdateArtistInput extends ArtistAdditionalInfo {
  id: string;
  firstName?: string;
  secondName?: string;
  country?: string;
}

export interface ResponseArtist extends ArtistAdditionalInfo {
  _id: string;
  firstName: string;
  secondName: string;
  country: string;
  bandsIds: string[];
  instruments: string[];
}
