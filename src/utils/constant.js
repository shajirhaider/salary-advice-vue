import moment from 'moment'

export const constant = {
    uuid() {
        return moment().format("YYYYMMDDHHmmss");
    },
    getRequest(url, body) {
        var request = {
            header: {
                login: "user",
                requestTime: moment().toISOString()
            },
            body: {},
        };
        if (body != null)
            request['body'] = body;
        return request;
    }

}