export interface Article {
  id: number;
  date: Date;
  slug: string;
  type: string;
  link: string;
  title: Title;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  apple_news_notices: any[];
  jetpack_featured_media_url: string;
  parsely: Parsely;
  shortlink: string;
  parselyMeta: ParselyMeta;
  rapidData: RapidData;
  premiumContent: boolean;
  premiumCutoffPercent: number;
  featured: boolean;
  subtitle: string;
  editorialContentProvider: string;
  tc_cb_mapping: any[];
  associatedEvent: null;
  event: null;
  authors: number[];
  hide_featured_image: boolean;
  canonical_url: string;
  primary_category: PrimaryCategory;
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  replies: Author[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  authors: Author[];
  "https://techcrunch.com/edit": About[];
  author: Author[];
  "wp:featuredmedia": Author[];
  "wp:attachment": About[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Parsely {
  version: string;
  meta: any[];
  rendered: string;
}

export interface ParselyMeta {
  "parsely-title": string;
  "parsely-link": string;
  "parsely-type": string;
  "parsely-pub-date": Date;
  "parsely-image-url": string;
  "parsely-author": string[];
  "parsely-section": string;
  "parsely-tags": string;
  "parsely-metadata": string;
}

export interface PrimaryCategory {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
}

export interface RapidData {
  pt: string;
  pct: string;
}

export interface Title {
  rendered: string;
}
