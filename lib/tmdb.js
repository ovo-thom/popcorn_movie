const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovieById(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Erreur lors du fetch du film ${movieId}`);
  }
  const data = await res.json();
  // console.log(data);
  return data;
}

export async function fetchPopularMovies(page = 1) {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Erreur lors du fetch des films populaires");
  }

  const data = await res.json();
  // console.log(data);
  return data;
}

export async function fetchMovieGenres() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Erreur lors du fetch des genres de films");
  }

  const data = await res.json();
  // console.log(data);

  return data;
}

export function generateYears() {
  const currentYear = new Date().getFullYear();
  const startYear = 1990;
  const years = [];

  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }
  return years;
}

export async function fetchDiscoverMovies(filters = {}) {
  // Construire l'URL avec les paramètres de base
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "fr-FR",
    include_adult: "false",
    include_video: "false",
    page: filters.page || 1,
  });

  // Ajouter les filtres conditionnellement
  if (filters.genre) params.append("with_genres", filters.genre);
  if (filters.year) params.append("primary_release_year", filters.year);
  if (filters.sortBy) params.append("sort_by", filters.sortBy);

  const url = `${BASE_URL}/discover/movie?${params.toString()}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Erreur lors du fetch des films découverts");
  }

  const data = await res.json();
  return data;
}

export async function fetchNowPlayingMovie(page = 1) {
  const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=fr-FR&page=${page}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Erreur lors du fetch des films populaires");
  }

  const data = await res.json();
  // console.log(data);
  return data;
}