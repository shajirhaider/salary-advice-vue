import moment from 'moment'

export const constant = {
    uuid() {
        return moment().format("YYYYMMDDHHmmss");
    },
    getRequest(url, body) {
        var request = {
            head: {
                "login": "Admin",
                "request-time":"yyyy-mm-ddThh:mm:ss"
            },
            body: {},
        };
        if (body != null)
            request['body'] = body;
        return request;
    }

}