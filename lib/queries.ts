export const POSTS_QUERY = `*[_type == "post-pb-vip-group"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{
       name, 
       image {
        asset->{
          url
        }
      }
      },
    publishedAt,
    description,
    mainImage {
       alt,
      asset->{
        url
       
      }
    }
  }`

export const POSTS_QUERY_MOST_RECENT = `*[_type == "post-pb-vip-group"] | order(publishedAt desc) [0...6] {
    _id,
    title,
    slug,
    author->{
       name, 
       image {
        asset->{
          url
        }
      }
      },
    publishedAt,
    description,
    mainImage {
       alt,
      asset->{
        url
       
      }
    }
  }`

export const POST_QUERY_CURRENT = `{
    "currentPost": *[_type == "post-pb-vip-group" && slug.current == $slug][0] {
      title,
      body,
      author->{
       name, 
       image {
        asset->{
          url
        }
      }
      },
      description,
      publishedAt,
      mainImage {
        alt,
        asset->{
          url
        }
      }
    },
    "otherBlogs": *[_type == "post-mega" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      _id,
      title,
      description,
      slug,
      publishedAt,
      mainImage {
        alt,
        asset->{
          url
        }
      }
    }
  }`
