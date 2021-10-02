import axios from 'axios'

export interface IFlatsState {
    type: string
    id: number
    attributes: {
        title: string
        rooms: number
        address: {
            city: string
            street: string
            house: string
            room: string
        }
        area: number
        unit: string
    }
    relationships: {
        type: string
        id: number
        attributes: {
            first_name: string
            last_name: string
            middle_name: string
        }
    }
    isLiked: boolean
}

export const flatsApi = {
    async fetchFlats(): Promise<IFlatsState[]> {
        const data = await axios.get('/flats').then(({ data }) => data)
        return data
    },
}
