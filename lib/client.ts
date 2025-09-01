import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2025-09-01',
    // useCdn: true,
})

const builder = imageUrlBuilder(client)

// Function to build image URL
export const urlFor = (source: SanityImageSource) => builder.image(source)
