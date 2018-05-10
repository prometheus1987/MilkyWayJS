import { JsonProperty } from "json-object-mapper";

export class SearchQueryResponse {
  @JsonProperty({name: 'collection'})
  collection: Collection;

  constructor() {
    this.collection = void 0;
  }
}

export class Collection extends SearchQueryResponse {
  @JsonProperty({name: 'items'})
  items: Items;

  constructor() {
    super();
    this.items = void 0;
  }
}

export class Items extends Collection {
  @JsonProperty({name: 'data'})
  data: Data;
  @JsonProperty({name: 'links'})
  links: Links;

  constructor() {
    super();
    this.data = void 0;
    this.links = void 0;
  }
}

export class Data extends Items {
  @JsonProperty({name: 'description'})
  description: string;
  @JsonProperty({name: 'title'})
  title: string;
  @JsonProperty({name: 'media_type'})
  type: string;

  constructor() {
    super();
    this.description = undefined;
    this.title = undefined;
    this.type = undefined;
  }
}

export class Links extends Items {
  @JsonProperty({name: 'href'})
  link: string;

  constructor() {
    super();
    this.link = undefined;
  }
}
