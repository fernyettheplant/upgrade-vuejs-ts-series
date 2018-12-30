import axios, { AxiosResponse } from 'axios'
import { Application, Request, Response } from 'express'
import ChuckJoke from '../src/models/ChuckJoke'
import ChuckApiResponse from '../src/models/ChuckApiResponse'

const URL = 'https://api.chucknorris.io/jokes/random'

export default (app: Application) => {
  app.get(
    '/api/chuck',
    async (req: Request, res: Response): Promise<void> => {
      try {
        const { data }: AxiosResponse<ChuckJoke> = await axios.get(URL, {
          params: {
            category: 'dev'
          }
        })

        res.json(new ChuckApiResponse(data.value))
      } catch (error) {
        res.status(500).send({
          error: 'Something happened!'
        })
      }
    }
  )

  app.get('/test', (req, res) => {
    res.json({ test: 'success' })
  })
}
