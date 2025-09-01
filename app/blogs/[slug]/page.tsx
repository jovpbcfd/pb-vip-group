import { client } from '@/lib/client'
import { apiBySlug } from '@/lib/api'
import BlogBody from '../_components/blog-post'

export async function generateStaticParams() {
    const query = '*[_type == $type]{ slug }'
    const params = { type: 'post-mega' }

    const posts = await client.fetch(query, params)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return posts.map((post: { slug: any }) => ({
        slug: post.slug.current,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const blog = await apiBySlug(slug)
    const currentPost = blog?.data?.currentPost ?? {}

    return {
        title: currentPost.title || 'Blog',
        description: currentPost.description || '',
        robots: {
            index: false, // noindex
            follow: false, // nofollow
        },
        openGraph: {
            title: currentPost.title || 'Blog',
            description: currentPost.description || '',
            url: `${process.env.APP_DOMAIN}/blogs/${slug}`,
            images: currentPost.mainImage.asset.url,
        },
        twitter: {
            card: 'summary_large_image',
            title: currentPost.title || 'Blog',
            description: currentPost.description || '',
            images: currentPost.mainImage.asset.url,
        },
        alternates: {
            cannonical: `${process.env.APP_DOMAIN}/blogs/${slug}`,
        },
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const blog = await apiBySlug(slug)

    const { currentPost } = blog?.data

    return (
        <article className="w-full max-w-[1230px] mx-auto">
            <BlogBody data={currentPost} />
        </article>
    )
}
