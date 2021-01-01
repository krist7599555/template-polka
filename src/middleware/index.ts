import { Middleware } from 'polka';

/** Polka middleware to wait all @param promises to resolve before sand to next handler */
export function wait_promise_to_resolve(...promises: Promise<any>[]): Middleware {
    return async (req, res, next) => {
        await Promise.all(promises);
        next();
    };
}
