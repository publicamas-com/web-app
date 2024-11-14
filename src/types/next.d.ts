declare module 'next' {
  import { Metadata } from 'next';

  interface CustomMetadata extends Metadata{
    title: {
      template: string;
      default: string;
    };
    description: string;
  }
}