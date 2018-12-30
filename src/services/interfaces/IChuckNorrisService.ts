export default interface IChuckNorrisService {
  getJoke(): Promise<string>
}
