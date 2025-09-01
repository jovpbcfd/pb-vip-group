import Image from 'next/image'
import Link from 'next/link'
import { client, urlFor } from '@/lib/client'
import { getFormattedDate } from '@/lib/utils'
import type { Post } from '@/types/post'
import { POSTS_QUERY } from '@/lib/queries'

function PostList({ post }: { post: Post }) {
    return (
        <Link
            key={post._id}
            href={`/blogs/${post.slug.current}`}
            className="flex flex-col items-center gap-[24px] md:flex-row mx-[20px] blog-list-divider"
        >
            <div className="relative w-[280px] h-[175px] rounded-md bg-gray-50 flex items-center justify-center md:w-[220px] md:h-[135px]">
                <Image
                    alt={post.title}
                    src={urlFor(post?.mainImage).width(280).height(175).url()}
                    width={280}
                    height={170}
                    loading="eager"
                    className="absolute h-full w-full object-cover rounded-md"
                />
            </div>
            <div className="w-full md:w-[50%]">
                <p className="font-bold text-white md:text-xl">{post.title}</p>
                <p className="text-[1rem] mt-[6px] leading-tight">{post.description}</p>

                <div className="text-sm text-white/70 mt-4">
                    <span>By </span>
                    <span>{post.author.name} </span>
                    <span> — </span>
                    <span>{getFormattedDate(post.publishedAt)} </span>
                </div>
            </div>
        </Link>
    )
}

export default async function Page() {
    // data
    const posts = await client.fetch(POSTS_QUERY)

    return (
        <section className="py-[2rem] mt-[2rem]">
            <div className="max-w-7xl mx-auto">
                {posts?.length === 0 ? (
                    <p>No blog post available</p>
                ) : (
                    <ul className="flex flex-col gap-10">
                        {posts.map((post: Post, index: number) => {
                            return (
                                <li key={index}>
                                    <PostList post={post} key={index} />
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </section>
    )
}
