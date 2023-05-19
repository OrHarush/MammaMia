const url = 'https://graphql.anilist.co';

const options = (query: string, variables) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query,
    variables,
  }),
});

const handleResponse = (response) => {
  return response.json().then((json) => {
    return response.ok ? json : Promise.reject(json);
  });
};

const handleError = (error) => {
  console.log(error);
};

const getAllQuery = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title { 
        english
        romaji
      }
      coverImage { 
        large
      }
      description
    }
  }
}
`;

const getAllVariables = {
  page: 1,
  perPage: 100,
};

export const getAllAnime = (parseData: (data) => void) => {
  fetch(url, options(getAllQuery, getAllVariables)).then(handleResponse).then(parseData).catch(handleError);
};

const getQuery = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title { 
        english
        romaji
      }
    coverImage { 
      large
    }
    description
    status
    type
    bannerImage
    genres
    averageScore
    episodes
    rankings {
      rank
      year
    }
  }
}
`;

const getVariables = (id: string) => ({ id });

export const getAnime = (id: string, parseData: (data) => void) => {
  fetch(url, options(getQuery, getVariables(id)))
    .then(handleResponse)
    .then(parseData)
    .catch(handleError);
};
