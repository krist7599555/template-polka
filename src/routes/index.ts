import { endpoint, register_endpoint } from "../endpoint";

const get = endpoint({
  method: "GET",
  async handler() {
    return {
      message:  'wellcome to เรือจ้าง api',
      version:  '0.0.1',
      facebook: 'https://www.facebook.com/InsidetheSandbox',
      website:  null,
    };
  },
});

register_endpoint({
  pattern: '/',
  methods: {
    GET: get,
  },
});
