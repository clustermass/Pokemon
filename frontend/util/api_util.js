
export const fetchAllPokemon = () => (
  $.ajax({
      method: 'GET',
      url: "http://localhost:3000/api/pokemon"
  })
);

export const fetchPokemon = (id) => (
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/pokemon/${id}`
  })
);
