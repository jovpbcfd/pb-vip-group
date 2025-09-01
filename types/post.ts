export type Post = {
    _id: string
    title: string
    publishedAt: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mainImage: any
    author: {
        name: string
        image: {
            asset: {
                url: string
            }
        }
    }
    slug: {
        current: string
    }
    description: string
}
