class ChuckJoke {
  private _category!: string[]
  private _icon_url: string
  private _id: string
  private _url: string
  private _value: string

  constructor (category: string[], icon_url: string, id: string, url: string, value: string) {
    this._category = category
    this._icon_url = icon_url
    this._id = id
    this._url = url
    this._value = value
  }

  get category (): string[] {
    return this._category
  }

  set category (value: string[]) {
    this._category = value
  }

  get icon_url (): string {
    return this._icon_url
  }

  set icon_url (value: string) {
    this._icon_url = value
  }

  get id (): string {
    return this._id
  }

  set id (value: string) {
    this._id = value
  }

  get url (): string {
    return this._url
  }

  set url (value: string) {
    this._url = value
  }

  get value (): string {
    return this._value
  }

  set value (value: string) {
    this._value = value
  }
}

export default ChuckJoke
