const hero = {
  _id: 'hero',
  name: 'hero',
  title: 'Hero',
  type: 'object',
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
