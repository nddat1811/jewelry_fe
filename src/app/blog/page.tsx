import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'
import type { Metadata } from 'next'

export interface IPost extends Post {
  createdAt: Date;
  img?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const metadata: Metadata = {
  title: 'Create Next App Blog Page',
  description: 'Blog Page description',
}

// FETCH DATA WITH AN API
const getData = async (): Promise<IPost[]> => {
  const res = await fetch('http://localhost:3000/api/blog', { next: { revalidate: 3600 } })

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json() // Assuming the API returns an array of posts
}

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts: IPost[] = await getData()

  // FETCH DATA WITHOUT AN API
  const posts: Post[]  = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map(post => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
