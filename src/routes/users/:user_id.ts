import { defaults } from 'lodash';
import { object, string } from 'superstruct';

import { SchoolsSchame } from '../../database/schema';
import { endpoint, register_endpoint } from '../../endpoint';

const PARAMS = object({
  user_id: string(),
});

const get = endpoint({
  method: 'GET',
  params: PARAMS,
  async handler() {
    return {
      mesage: 'ok 1234',
    };
  },
});

const post = endpoint({
  method: 'POST',
  params: PARAMS,
  body:   defaults(SchoolsSchame, {
    id: () => '7777',
  }),
  async handler({ params, body }) {
    console.log(params, body);
    return {
      mesage: 'ok',
    };
  },
});

register_endpoint({
  pattern: '/users/:user_id',
  methods: {
    GET:  get,
    POST: post,
  },
});

