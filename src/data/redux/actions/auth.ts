export const authLogin = (data: any) => {
  return {
    type: "AUTH_LOGIN",
    payload: data,
  };
};
