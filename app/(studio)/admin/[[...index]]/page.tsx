'use client'

import {NextStudio} from 'next-sanity/studio'
import config from '@/sanity.config'

// issue https://github.com/vercel/next.js/issues/48447
const AdminPage = () => {
  return <NextStudio config={config} />
}

export default AdminPage
