import { AxiosResponse } from "axios";
import { restClient } from "../restClient";
import { DataResponse, ErrorCodeResponse } from "./../../types/http-client";
import { IStudent } from "../../models/user";

export const basePath = `/api/user` as const;

export const userApi = {
  async getUser(payload: {
    query?: string;
    status?: string;
  }): Promise<DataResponse<any>> {
    try {
      const { query, status } = payload;
      const res: AxiosResponse<{ accounts: any } & ErrorCodeResponse> =
        await restClient.get(`${basePath}`, {
          params: {
            query,
            status,
          },
        });
      if (res.data.code) throw Error(res.data.message);
      const { data } = res;
      return {
        data: data.accounts,
        status: true,
        message: "",
      };
    } catch (error: any) {
      const { message, status } = error || {};

      return Promise.reject({ status: false, message: message });
    }
  },

  async getForm(payload?: { type?: string; query?: string }) {
    try {
      const res: AxiosResponse<{ data: any } & ErrorCodeResponse> =
        await restClient.get(`${basePath}`, {
          params: {
            type: payload?.type,
            query: payload?.query,
          },
        });
      if (res.data.code) throw Error(res.data.message);
      const { data } = res;
      return {
        data,
        status: true,
        message: "",
      };
    } catch (error) {}
  },

  async getStatistical() {
    try {
      const res: AxiosResponse<{ data: any } & ErrorCodeResponse> =
        await restClient.get(`${basePath}/statustical`);
      if (res.data.code) throw Error(res.data.message);
      const { data } = res;
      return {
        data,
        status: true,
        message: "",
      };
    } catch (error) {}
  },
};
