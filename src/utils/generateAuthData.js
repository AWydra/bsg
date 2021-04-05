// @ts-nocheck
export const initialData = {
  username: '',
  token: '',
  expires: '',
};

const generateAuthData = (data) => {
  if (!data) return initialData;
  const now = new Date();
  const expires = new Date(data.expires);
  return expires - now > 0 ? data : initialData;
};

export default generateAuthData;
