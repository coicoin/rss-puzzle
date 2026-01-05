import { Component } from 'src/components/component';

export type ElementOptions<T extends keyof HTMLElementTagNameMap> = {
  tag: T;
  classNames?: Array<string>;
  id?: string;
  attributes?: Record<string, string>;
  text?: string;
};

export type PageMetadata = {
  fullscreen?: boolean;
  header?: boolean;
  logout?: boolean;
};

export type Page = {
  page: () => Promise<Component>;
  meta: PageMetadata;
};

export type UserDetails = {
  firstName: string;
  surname: string;
};

export type Listener = {
  type: keyof HTMLElementEventMap;
  listener: (event: Event) => void;
};
