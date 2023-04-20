import type { Image } from 'sanity'

export type Hero = {
  _id: string,
  _createdAt: Date,
  header: string,
  text: string,
  images: Image[]
}
