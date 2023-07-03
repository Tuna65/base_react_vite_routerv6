import { RootStateOrAny } from "react-redux";

export const authAccountSelector = (state: RootStateOrAny) =>
  state.auth.account;
export const authIsAuthenSelector = (state: RootStateOrAny) =>
  state.auth.isAuthenticated;
