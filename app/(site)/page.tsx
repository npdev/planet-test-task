import {getCTA, getHero, getSections} from '@/sanity/sanity-utils'
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import Section from '@/components/Section'


export default async function Home() {
  const sections = await getSections()
  const hero = await getHero()
  const cta = await getCTA()
  console.log(hero)
  return (
    <div>
      <Hero header={hero.header} text={hero.text} images={hero.images} />
      {sections.sections.map((section) => (
        <Section key={section._type} type={section._type} section={section}>{section._type}</Section>
      ))}
      <CTA leftLink={cta.leftLink} rightLink={cta.rightLink} imageLeft={cta.imageLeft} imageRight={cta.imageRight} />
    </div>
  )
}
