const sectionText = {
  name: 'sectionText',
  title: 'Text',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'array',
      of: [{type: 'block'}]
    },
  ]
}

export default sectionText
