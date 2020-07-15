import axios from 'axios';

const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const fecthCharactersRequest = () => {
  return {
    type: FETCH_CHARACTERS_REQUEST,
  };
};

export const fecthCharactersSuccess = (characters) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const fecthCharactersError = (error) => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error,
  };
};

export function fetchCharacters() {
  return (dispatch) => {
    console.log('ENTRO A FETCH CHARACTERS!!');
    dispatch(fecthCharactersRequest());
    console.log('DESPUES DEL LOADING');
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        const characters = res.data.results;
        console.log(characters);
        dispatch(fecthCharactersSuccess(characters));
      })
      .catch((err) => console.log(err));
  };
}
