//import { createServer, IncomingMessage, ServerResponse } from 'http'
//import chalk from 'chalk'
//
//export namespace Server {
//    const { host, port } = Config.server
//
//    const onListen = (): void => {
//        console.info('[server] running', `@ http://${host}:${port}/`)
//    }
//
//    const onClose = (): void => {
//        console.info(`[server] stopped`)
//    }
//
//    const onError = (error: Error): void => {
//        console.error('[server] errored', error.message)
//    }
//
//    export const create = async (app: (req: IncomingMessage, res: ServerResponse) => void) =>
//        createServer(app)
//            .listen(port, onListen)
//            .on('close', onClose)
//            .on('error', onError)
//}
