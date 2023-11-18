import axios from "axios";
import {IAchievements} from "./achiev.interface";
import {GET_ALL_ACHIEVEMENTS} from "./achiev.consts";

export const AchievementsService = {
    async getAll(): Promise<IAchievements>  {
        const response = await axios.get(GET_ALL_ACHIEVEMENTS)
        return response.data
    }
}