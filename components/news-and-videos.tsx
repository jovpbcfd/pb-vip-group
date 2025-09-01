'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { POSTS_QUERY_MOST_RECENT, POSTS_QUERY } from '@/lib/queries'
import { api } from '@/lib/api'
import type { Post } from '@/types/post'

type QUERIES = {
    POST: typeof POSTS_QUERY_MOST_RECENT | typeof POSTS_QUERY
}

export default function NewsAndVideos() {
    const [posts, setPosts] = useState([])
    const [selected, setSelected] = useState('RECENT')
    const [query, setQuery] = useState<QUERIES>({ POST: POSTS_QUERY_MOST_RECENT })

    useEffect(() => {
        const GET_DATA = async () => {
            const data = await api(query.POST)
            setPosts(data)
        }

        GET_DATA()
    }, [query])

    const handle = (TYPE: string) => {
        setSelected(TYPE)
        if (TYPE === 'RECENT') {
            setQuery({ POST: POSTS_QUERY_MOST_RECENT })
        } else {
            setQuery({ POST: POSTS_QUERY })
        }
    }

    return (
        <div className="w-full max-w-[1230px] mx-auto p-2">
            <div className="text-center">
                <h2
                    className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                font-[800] text-xl uppercase md:text-[32px]
                "
                >
                    Latest articles
                </h2>
            </div>
            <div className="text-white text-center mt-5 md:mt-10">
                <div className="flex items-center justify-center border border-[#8C95FF] bg-[linear-gradient(90deg,#404AC6_0%,#2A3181_47%,#11186B_100%)] max-w-[600px] mx-auto rounded-md overflow-hidden">
                    <button
                        className={`text-xl md:text-2xl uppercase font-bold w-full max-w-[300px] py-2 md:py-5 cursor-pointer transition-all duration-300 ease-in-out
          ${
              selected === 'RECENT'
                  ? 'bg-white text-[#11186B] scale-105 shadow-lg' // active style
                  : 'text-white hover:bg-white/20 hover:scale-105 active:scale-95'
          }`}
                        onClick={() => handle('RECENT')}
                    >
                        Recent
                    </button>

                    <button
                        className={`text-xl md:text-2xl uppercase font-bold w-full max-w-[300px] py-2 md:py-5 cursor-pointer transition-all duration-300 ease-in-out
          ${
              selected === 'ALL'
                  ? 'bg-white text-[#11186B] scale-105 shadow-lg' // active style
                  : 'text-white hover:bg-white/20 hover:scale-105 active:scale-95'
          }`}
                        onClick={() => handle('ALL')}
                    >
                        All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 md:mt-10">
                    {posts.length <= 0 ? (
                        <>
                            <p className="text-gray-500">------NO BLOG POST AVAILABLE!--------</p>
                        </>
                    ) : (
                        <>
                            {posts.map((post: Post) => (
                                <Link
                                    href={`/blogs/${post?.slug?.current}`}
                                    key={post?._id}
                                    className="border border-[#8C95FF] bg-[linear-gradient(90deg,#404AC6_0%,#2A3181_47%,#11186B_100%)]"
                                >
                                    <li className="list-none">
                                        <figure className="">
                                            <Image
                                                src={post?.mainImage?.asset?.url}
                                                alt={post?.title}
                                                width={400} // Fallback dimensions
                                                height={400}
                                                quality={100} // Maximum quality
                                                priority={false} // Preload if above the fold
                                                loading="lazy"
                                                className=""
                                                sizes="(max-width: 500px) 400px, (max-width: 768px) 600px(max-width: 1200px) 50vw, 400px"
                                            />
                                        </figure>

                                        <div className="px-2 py-3">
                                            <h2 className="text-xl font-bold text-left mb-2">
                                                {post?.title}
                                            </h2>

                                            <p className="text-white text-justify">
                                                {post.description}
                                            </p>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
