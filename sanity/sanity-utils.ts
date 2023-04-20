import { groq } from 'next-sanity'
import { Sections } from '@/types/Section'
import { Hero } from '@/types/Hero'
import client from './sanity-client'
import {CTA} from '@/types/CTA';

export async function getSections(): Promise<Sections> {
  return client.fetch(
    groq`*[_id == "contentSections"][0]{
      sections
    }`
  )
}

export async function getHero(): Promise<Hero> {
  return client.fetch(
    groq`*[_type == "hero"][0]{
      _id,
      _createAt,
      header,
      text,
      images
    }`
  )
}

export async function getCTA(): Promise<CTA> {
  return client.fetch(
    groq`*[_type == "cta"][0]{
      leftLink,
      rightLink,
      imageLeft,
      imageRight
    }`
  )
}
