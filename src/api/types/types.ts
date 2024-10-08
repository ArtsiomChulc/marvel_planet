interface Url {
  type: string;
  url: string;
}

// Тип для элемента "thumbnail"
interface Thumbnail {
  path: string;
  extension: string;
}

// Тип для элемента "comics"
interface ComicItem {
  resourceURI: string;
  name: string;
}

interface Comics {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicItem[];
}

// Тип для элемента "stories"
interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface Stories {
  available: number;
  returned: number;
  collectionURI: string;
  items: StoryItem[];
}

// Тип для элемента "events"
interface EventItem {
  resourceURI: string;
  name: string;
}

interface Events {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventItem[];
}

// Тип для элемента "series"
interface SeriesItem {
  resourceURI: string;
  name: string;
}

interface Series {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesItem[];
}

// Основной тип для результата
export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail;
  comics: Comics;
  stories: Stories;
  events: Events;
  series: Series;
}

// Тип для основного ответа
export interface ApiResponse {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

// Начальное состояние
export interface InitialStateI {
  data: ApiResponse;
  loading: boolean;
  error: string | null;
}
