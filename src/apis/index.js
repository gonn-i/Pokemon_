import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  timeout: 4000,
});

const getList = async () => {
  const res = await instance.get('/');
  if (!res.ok) {
    throw Error('데이터 조회에 실패했습니다');
  }
  return res.data.results;
};

export { getList };
