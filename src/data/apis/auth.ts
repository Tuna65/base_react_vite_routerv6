import { AxiosResponse } from "axios";
import { restClient } from "../restClient";
import { DataResponse, ErrorCodeResponse } from "./../../types/http-client";
import { IStudent } from "../../models/user";

export const basePath = `/api/auth` as const;

export const authApis = {
  async login(payload: {
    username: string;
    password: string;
  }): Promise<DataResponse<any>> {
    try {
      const res: AxiosResponse<{ data: IStudent } & ErrorCodeResponse> =
        await restClient.post(`${basePath}/login`, payload);
      if (res.data.code) throw Error(res.data.message);
      const { data } = res;
      return {
        data,
        status: true,
        message: "",
      };
    } catch (error: any) {
      const { message, status } = error || {};

      return Promise.reject({ status: false, message: message });
    }
  },

  async getUser(id: any): Promise<DataResponse<any>> {
    try {
      const res: AxiosResponse<{ data: IStudent } & ErrorCodeResponse> =
        await restClient.get(`/api/user/${id}`);
      if (res.data.code) throw Error(res.data.message);
      const { data } = res;
      return {
        data,
        status: true,
        message: "",
      };
    } catch (error: any) {
      const { message, status } = error || {};

      return Promise.reject({ status: false, message: message });
    }
  },
};
