import { WAT_API_URI, DRINK_ENDPOINT } from './constants';
import axios from 'axios';

class watAPI {
    static async searchUntappd(query) {
        const encodedQuery = encodeURIComponent(query);
        const res = await axios.get(`${WAT_API_URI}${DRINK_ENDPOINT}search?q=${encodedQuery}`);
        return res.data;
    }

    // static async searchWATDatabase(query) {
    //     const encodedQuery = encodeURIComponent(query);
    // }
}

export default watAPI;