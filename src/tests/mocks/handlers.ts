import { HttpResponse, http } from "msw"

export const handlers = [
  http.get("https://api.themoviedb.org/3/:media/:movieId/credits", () => {
    return HttpResponse.json({
      cast: [
        {
          id: 1,
          original_name: "name 1",
          profile_path: "path 1",
          character: "character 1",
        },
        {
          id: 2,
          original_name: "name 1",
          profile_path: "path 2",
          character: "character 2",
        },
      ],
    })
  }),

  http.get("https://api.themoviedb.org/3/genre/movie/list", () => {
    return HttpResponse.json({
      genres: [
        {
          id: 1,
          name: "genre 1",
        },
        {
          id: 2,
          name: "genre 2",
        },
      ],
    })
  }),

  http.get("https://api.themoviedb.org/3/:type/movie", () => {
    return HttpResponse.json({
      results: [
        {
          backdrop_path: "path 1",
          genre_ids: [1],
          id: 1,
          original_title: "title 1",
          overview: "overview 1",
          popularity: 1,
          poster_path: "path 1",
          release_date: "date 1",
          title: "title 1",
          video: false,
          vote_average: 1,
          vote_count: 1,
        },
      ],
    })
  }),

  http.get("https://api.themoviedb.org/3/movie/popular", () => {
    return HttpResponse.json({
      results: [
        {
          backdrop_path: "path 1",
          genre_ids: [1],
          id: 1,
          original_title: "title 1",
          overview: "overview 1",
          popularity: 1,
          poster_path: "path 1",
          release_date: "date 1",
          title: "title 1",
          video: false,
          vote_average: 1,
          vote_count: 1,
        },
      ],
    })
  }),

  http.get("https://api.themoviedb.org/3/movie/upcoming", () => {
    console.log()
    return HttpResponse.json({
      results: [
        {
          backdrop_path: "path 1",
          genre_ids: [1],
          id: 1,
          original_title: "title 1",
          overview: "overview 1",
          popularity: 1,
          poster_path: "path 1",
          release_date: "date 1",
          title: "title 1",
          video: false,
          vote_average: 1,
          vote_count: 1,
        },
      ],
    })
  }),

  http.get("https://api.themoviedb.org/3/movie/:movieId", () => {
    return HttpResponse.json({
      backdrop_path: "path 1",
      budget: 1,
      genres: [
        {
          id: 1,
          name: "name 1",
        },
      ],
      id: 1,
      origin_country: ["country 1"],
      original_title: "title 1",
      overview: "overview 1",
      poster_path: "path 1",
      release_date: "date 1",
      revenue: 1,
      runtime: 1,
      title: "title 1",
      video: true,
      vote_average: 1,
    })
  }),

  http.get("https://api.themoviedb.org/3/:type/tv", () => {
    return HttpResponse.json({
      results: [
        {
          backdrop_path: "path 1",
          first_air_date: "date 1",
          genre_ids: [1],
          id: 1,
          name: "name 1",
          original_name: "name 1",
          overview: "overview 1",
          poster_path: "path 1",
          vote_average: 1,
        },
      ],
    })
  }),

  http.get("https://api.themoviedb.org/3/tv/:seriesId", () => {
    return HttpResponse.json({
      backdrop_path: "string",
      episode_run_time: [1],
      first_air_date: "string",
      genres: [{ id: 1, name: "string" }],
      id: 1,
      in_production: true,
      name: "string",
      networks: [
        {
          id: 1,
          logo_path: "string",
          name: "string",
          origin_country: "string",
        },
      ],
      number_of_seasons: 1,
      origin_country: ["string"],
      original_name: "string",
      overview: "string",
      poster_path: "string",
      vote_average: 1,
    })
  }),

  http.get("https://api.themoviedb.org/3/movie/1/videos", () => {
    return HttpResponse.json({
      results: [
        {
          name: "name 1",
          key: "key 1",
          site: "YouTube",
          size: 1,
          type: "Trailer",
          official: true,
          published_at: "string",
          id: "string",
        },
      ],
    })
  }),
]
