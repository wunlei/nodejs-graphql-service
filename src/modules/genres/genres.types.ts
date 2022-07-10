export interface Genre {
  _id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}

interface GenreAdditionalInfo {
  description?: string;
  country?: string;
  year?: string;
}

export interface CreateGenreInput extends GenreAdditionalInfo {
  name: string;
}

export interface UpdateGenreInput extends GenreAdditionalInfo {
  id: string;
  name?: string;
}

export interface ResponseGenre extends GenreAdditionalInfo {
  id: string;
  name: string;
}
