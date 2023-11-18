import axios from "axios";
import {INews} from "./news.interface";
import {GET_ALL_NEWS} from "./news.consts";

export const NewsService = {
    async getAll(pagination: string): Promise<INews>  {
        const response = await axios.get(GET_ALL_NEWS + `/${pagination}`)
        return response.data
    }
}