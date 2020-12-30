import { endpoint, register_endpoint } from "../endpoint";

export const get = endpoint({
    method: "GET",
    async handler() {
        return {
            message: 'ok'
        }
    }
})

register_endpoint({
    pattern: '/',
    methods: {
        GET: get
    }
})