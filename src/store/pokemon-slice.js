import { createSlice } from '@reduxjs/toolkit';

const initialPokemonData = {
  pokemons: [],
  detail: [],
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: initialPokemonData,
  reducers: {
    fillList(state, action) {
      const newPokemons = action.payload.pokemons;

      newPokemons.forEach((newPokemon) => {
        state.pokemons.push({
          id: newPokemon.data.id,
          default_name: newPokemon.data.forms[0].name,
          types: newPokemon.data.types,
          img: newPokemon.data.sprites,
        });
      });
    },

    searchById(state, action) {
      const pokemon = action.payload.pokemon;

      state.detail = {
        id: pokemon.data.id,
        weight: pokemon.data.weight,
        height: pokemon.data.height,
        default_name: pokemon.data.forms[0].name,
        types: pokemon.data.types,
        stats: pokemon.data.stats,
        img: pokemon.data.sprites,
      };
    },
  },
});

// 리듀서 자동 생성
export const pokemonReducer = pokemonSlice.reducer;

// 액션 생성자 자동 생성
export const pokemonActions = pokemonSlice.actions;
