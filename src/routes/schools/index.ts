import { endpoint, register_endpoint } from '../../endpoint';

const get = endpoint({
  method: 'GET',
  async handler() {
    return {
      message: 'ok',
    };
  },
});

register_endpoint({
  pattern: '/schools',
  methods: {
    GET: get,
  },
});
