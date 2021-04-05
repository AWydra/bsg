export const formatAuthData = (data) => ({
  token: data.AuthorizationToken.Token,
  expires: data.AuthorizationToken.TokenExpires,
  username: data.User.UserName,
});

export const formatVideosData = (data) => {
  const entities = data.Entities;
  const formatedEntities = entities.map((item) => ({
    id: item.Id,
    title: item.Title,
    year: item.Year,
    image: item.Images[0] ? item.Images[0].Url : null,
  }));

  return formatedEntities;
};

export const formatVideoData = (data) => ({
  title: data.Title,
  description: data.Description,
  url: data.ContentUrl,
});

export default { formatAuthData, formatVideosData, formatVideoData };
