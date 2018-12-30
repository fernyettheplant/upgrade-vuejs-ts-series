import { Container } from 'inversify'
import 'reflect-metadata'
import SERVICE_IDENTIFIER from './identifiers'
import IChuckNorrisService from '../services/interfaces/IChuckNorrisService'
import ChuckNorrisService from '../services/ChuckNorrisService'

const container: Container = new Container()

container.bind<IChuckNorrisService>(SERVICE_IDENTIFIER.CHUCK_NORRIS_SERVICE).to(ChuckNorrisService)

export default container
