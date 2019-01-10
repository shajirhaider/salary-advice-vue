import axios from 'axios';
import { url } from "@/utils/urls";

export const client = {

    async onPost(app_url, payload) {
        var config = {
            responseType: 'arraybuffer' 
        };
        return await axios.create().post(url.baseUrl + app_url,payload,config);
    },
}