import { object, string } from "superstruct"
import { endpoint, register_endpoint } from "../../endpoint"
import { SchoolsSchame } from "../../database/schema";

const PARAMS = object({
  school_id: string(),
})

const get = endpoint({
  method: "GET",
  params: PARAMS,
  async handler(o) {
    return {
      mesage: 'ok 1234'
    }
  }
});

const post = endpoint({
  method: "POST",
  params: PARAMS,
  body: SchoolsSchame,
  async handler(o) {
    return {
      mesage: 'ok'
    }
  }
});

register_endpoint({
  pattern: "/schools/:school_id",
  methods: {
    GET: get,
    POST: post,
  }
})

