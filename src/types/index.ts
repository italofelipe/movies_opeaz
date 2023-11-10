export interface Movie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Director: string;
  Genre: string;
  imdbRating: string;
  imdbID: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Title: string;
  Type: string;
  userPersonalRating: string;
  Year: string;
  Response?: string; // in case of 404
  Error?: string; // in case of 404
}
