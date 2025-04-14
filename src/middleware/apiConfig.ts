import axios from "axios";
export const GetApi = async ({
    url,
    params = {},
}) => {
    try {
        const { data } = await axios.get(url, { params });
        return data;
    } catch (error) {

        throw error;
    }
};