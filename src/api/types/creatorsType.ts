export interface IUriResource {
  resourceURI: string
  name: string
  type?: string
}

export interface IUrls {
  type: string
  url: string
}

export interface IThumbnail {
  path: string
  extension: string
}

export interface IChapters {
  available: number
  returned: number
  collectionURI: string
  "items": IUriResource[]
}

export interface IResults {
  id: number
  firstName: string
  middleName: string
  lastName: string
  suffix: string
  fullName: string
  modified: Date
  resourceURI: string
  urls: IUrls[]
  thumbnail: IThumbnail
  series: IChapters
  stories: IChapters
  comics: IChapters
  events: IChapters
}

export interface IData {
  offset: number
  limit: number
  total: number
  count: number
  results: IResults[]
}

export interface IResponseCreator {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: IData
  etag: string
}

export interface InitialStateCreator {
  data: IResponseCreator
  loading: boolean;
  error: string | null;
}