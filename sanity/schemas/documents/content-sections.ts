const contentSections = {
  name: 'contentSections',
  title: 'Content Sections',
  type: 'document',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          title: 'Cards',
          type: 'sectionCards'
        },
        {type: 'sectionText'},
        {type: 'sectionImage'},
      ]
    },
  ]
}

export default contentSections
