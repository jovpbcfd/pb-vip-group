import { client } from '@/lib/client'
import { POST_QUERY_CURRENT } from '@/lib/queries'

export async function api(query: string) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 50000)

    try {
        const result = await client.fetch(query, undefined, { signal: controller.signal })
        console.log('Successfully fetched data:')
        return result
    } catch (error) {
        console.error(`Error fetching data with query "${query}":`, error)
        return [] // Default to an empty array
    } finally {
        clearTimeout(timeoutId)
    }
}

export async function apiBySlug(slug: string) {
    try {
        const blog = await client.fetch(POST_QUERY_CURRENT, { slug })

        return { success: true, data: blog }
    } catch (error) {
        console.error(`Error fetching post data for slug "${slug}":`, error)
        return { success: false, data: null }
    }
}
