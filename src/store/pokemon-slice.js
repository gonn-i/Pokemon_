import { createSlice } from '@reduxjs/toolkit';

// 포켓몬 정보를 담을 배열
const initialPokemonData = {
  pokemons: [],
};

// 포켓몬 정보 관리 slice 생성
const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: initialPokemonData,
  reducers: {
    fillList(state, action) {
      const newPokemons = action.payload.pokemons;

      console.log(newPokemons);
      newPokemons.forEach((newPokemon) => {
        state.pokemons.push({
          id: newPokemon.data.id,
          weight: newPokemon.data.weight,
          height: newPokemon.data.height,
          default_name: newPokemon.data.forms,
          types: newPokemon.data.types,
          stats: newPokemon.data.stats,
        });
      });
    },
  },
});

// 리듀서 자동 생성
export const pokemonReducer = pokemonSlice.reducer;

// 액션 생성자 자동 생성
export const pokemonActions = pokemonSlice.actions;
