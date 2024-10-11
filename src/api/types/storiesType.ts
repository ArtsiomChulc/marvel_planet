export interface Thumbnail {
  path: string | null;
  extension: string | null;
}

// Тип для элементов комиксов, серий и событий
export interface ItemReference {
  resourceURI: string;
  name: string;
}

// Тип для коллекций комиксов, серий, событий, персонажей и создателей
export interface Collection<T> {
  available: number;
  returned: number;
  collectionURI: string;
  items: T[];
}

// Тип для персонажей и создателей с ролью
export interface CharacterReference extends ItemReference {
  role: string;
}

// Тип для предметов
export interface Item {
  id: number;
  title: string; // Заменено с name на title
  description: string;
  resourceURI: string;
  type: string; // Новый тип
  modified: Date;
  thumbnail: Thumbnail | null; // Используем тип для изображения
  comics: Collection<ItemReference>; // Ссылка на комиксы
  series: Collection<ItemReference>; // Ссылка на серии
  events: Collection<ItemReference>; // Ссылка на события
  characters: Collection<CharacterReference>; // Ссылка на персонажей
  creators: Collection<CharacterReference>; // Ссылка на создателей
  originalissue: ItemReference; // Ссылка на оригинальный выпуск
}

// Основной тип ответа
export interface ApiResponseStories {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Item[]; // Используем тип Item
  };
  etag: string;
}

// Начальное состояние для Redux
export interface InitialStateStoriesI {
  data: ApiResponseStories; // Обновленный тип для данных
  loading: boolean;
  error: string | null;
}