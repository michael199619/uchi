import {makeAutoObservable} from 'mobx'
import {PersonDataFormat, StaffQuery, StaffResponse} from '../types/staff'
import axios from 'axios'
class StaffTurnover {
    staffTurnover = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetch(params: StaffQuery): Promise<PersonDataFormat[]>{
        const response: StaffResponse = await axios.get('/api/staff', {
            params
        })
        return response.staff
    }
}

export default new StaffTurnover()