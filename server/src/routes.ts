import express, { request, response } from 'express'

import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsControllers'

const classControllers = new ClassesController()
const connectionsController = new ConnectionsController()

const routes = express.Router()


routes.post('/classes', classControllers.create )
routes.get('/classes', classControllers.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes