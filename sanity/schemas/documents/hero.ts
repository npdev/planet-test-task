const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ]
}

export default hero
