import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 8000,
});

// 요청에 대한 인터셉터 (에러 핸들링)
instance.interceptors.request.use(
  function (config) {
    // 요청 전달 전 수행
    return config;
  },
  function (error) {
    // 요청에 오류가 있는 경우
    return Promise.reject(error);
  }
);

// 응답에 대한 인터셉터 (에러 핸들링)
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  // 상태 코드가 2xx 범위를 벗어난 경우
  function (error) {
    if (error.response) {
      if (error.response.status === 404) {
        alert('데이터를 찾을 수 없습니다👀');
      } else if (error.response.status === 500) {
        alert('서버 오류입니다. 잠시 후 다시 시도해주세요🔄');
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
    //  응답이 없는 경우
    else if (error.request) {
      alert('서버로부터 응답이 없습니다. 네트워크 상태를 확인해주세요.');
    } else {
      alert('요청을 설정하는 중 오류가 발생했습니다.');
    }
    return Promise.reject(error);
  }
);

const getList = async (id) => {
  try {
    const res = await instance.get(`/${id}`);
    return res;
  } catch (error) {
    throw new Error('포켓몬 데이터 조회에 실패하였습니다');
  }
};

export { getList };
