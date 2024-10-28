export interface Thumbnail {
  path: string | null;
  extension: string | null;
}

export interface ItemReference {
  resourceURI: string;
  name: string;
}

export interface Collection<T> {
  available: number;
  returned: number;
  collectionURI: string;
  items: T[];
}

export interface CharacterReference extends ItemReference {
  role: string;
}


export interface Item {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail: Thumbnail | null;
  comics: Collection<ItemReference>;
  series: Collection<ItemReference>;
  events: Collection<ItemReference>;
  characters: Collection<CharacterReference>;
  creators: Collection<CharacterReference>;
  originalissue: ItemReference;
}

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
    results: Item[];
  };
  etag: string;
}

export interface InitialStateStoriesI {
  data: ApiResponseStories;
  loading: boolean;
  error: string | null;
}