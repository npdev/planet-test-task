import { createClient } from 'next-sanity'
import clientConfig from '@/sanity/config/client-config';

export default createClient(clientConfig)
