import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const apiService = {
  createBot: async (requestBody: any) => {
    try {
      const axiosRes = await axios({
        method: "post",
        url: `${apiUrl}/create`,
        data: requestBody,
      });
      return axiosRes.data;
    } catch (e) {
      console.log("create bot error occurred", e);
    }
  },
  getAllBots: async () => {
    try {
      const axiosRes = await axios({
        method: "get",
        url: `${apiUrl}/all`,
      });
      return axiosRes.data;
    } catch (e) {
      console.log("get all bots error occurred", e);
    }
  },
  getSpecificBot: async (botId: number) => {
    try {
      const axiosRes = await axios({
        method: "get",
        url: `${apiUrl}/${botId}`,
      });
      return axiosRes.data;
    } catch (e) {
      console.log("get specific bot error occurred", e);
    }
  },
  updateBot: async (botId: number, requestBody: any) => {
    try {
      const axiosRes = await axios({
        method: "patch",
        url: `${apiUrl}/${botId}`,
        data: requestBody,
      });
      return axiosRes.data;
    } catch (e) {
      console.log("update bot error occurred", e);
    }
  },
  deleteBot: async (botId: number) => {
    try {
      const axiosRes = await axios({
        method: "delete",
        url: `${apiUrl}/${botId}`,
      });
      return axiosRes.data;
    } catch (e) {
      console.log("delete bot error occurred", e);
    }
  },
};
