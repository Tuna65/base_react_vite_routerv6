export type authStates = {
  token: string;
  account: any;
  isAuthenticated: boolean;
};

const initialState = {
  token: null,
  account: null,
  isAuthenticated: false,
};

const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case "AUTH_LOGIN":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default auth;
