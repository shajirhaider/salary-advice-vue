import axios from 'axios';
import { url } from "@/utils/urls";

export const client = {

    async onPost(app_url, payload) {
        let config = {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        };
        return await axios.create().post(url.baseUrl + app_url, payload, config);
    },
}