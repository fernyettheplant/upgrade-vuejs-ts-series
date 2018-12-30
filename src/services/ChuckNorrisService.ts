import IChuckNorrisService from '@/services/interfaces/IChuckNorrisService'
import { injectable } from 'inversify'
import 'reflect-metadata'
import axios, { AxiosResponse } from 'axios'
import ChuckApiResponse from '@/models/ChuckApiResponse'

@injectable()
class ChuckNorrisService implements IChuckNorrisService  {
  async getJoke (): Promise<string> {
    const { data }: AxiosResponse<ChuckApiResponse> = await axios.get('/api/chuck')
    return data.joke
  }

}

export default ChuckNorrisService
