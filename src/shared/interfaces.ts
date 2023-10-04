export type Color = string;

export type IsLoading = boolean;

export interface Quote {
  text: string;
  author: string;
}

export type Quotes = Quote[];

export interface AppContextType {
  isLoading: IsLoading;
  color: Color;
  quote: Quote;
  getQuote: () => void;
}
