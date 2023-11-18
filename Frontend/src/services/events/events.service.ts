import axios from "axios";
import {GET_ALL_EVENTS, GET_EVENT_BY_ID} from "./events.consts";
import {IEventItem, IEvents} from "./events.interface";

export const EventsService = {
    async getAll(): Promise<IEvents>  {
        const response = await axios.get(GET_ALL_EVENTS)
        return response.data
    },
    async getById(id: number): Promise<IEventItem> {
        const response = await axios.get(GET_EVENT_BY_ID)
        return response.data
    }
}