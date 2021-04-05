import axios from 'axios';

const baseUrl = 'https://thebetter.bsgroup.eu/';
let source = axios.CancelToken.source();

export const logIn = async () => {
  try {
    const response = await axios.post(`${baseUrl}Authorization/SignIn`, '{}', {
      headers: {
        'Content-Type': 'application/json',
      },
      cancelToken: source.token,
    });
    return response.data;
  } catch (err) {
    throw new Error(JSON.stringify(err.response));
  }
};

export const getVideos = async (id, token) => {
  const data = `{"MediaListId": ${id},"IncludeCategories": false,"IncludeImages": true,"IncludeMedia": false,"PageNumber": 1,"PageSize": 99}`;
  try {
    const response = await axios.post(`${baseUrl}Media/GetMediaList`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cancelToken: source.token,
    });
    return response.data;
  } catch (err) {
    throw new Error(JSON.stringify(err.response));
  }
};

export const getVideoData = async (id, token) => {
  const data = `{"MediaId":${id},"StreamType":"TRIAL"}`;
  try {
    const response = await axios.post(`${baseUrl}Media/GetMediaPlayInfo`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      cancelToken: source.token,
    });
    return response.data;
  } catch (err) {
    throw new Error(JSON.stringify(err.response));
  }
};

const cancel = () => {
  source.cancel();
  source = axios.CancelToken.source();
};

export default {
  logIn,
  getVideos,
  getVideoData,
  cancel,
};
