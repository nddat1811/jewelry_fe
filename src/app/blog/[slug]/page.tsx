import styles from './singlePost.module.css'
import { IPost } from '../page'
import { Suspense } from 'react'
import PostUser from '@/components/postUser/postUser'
export const generateMetadata = async ({ post }: { post: IPost }) => {
  return {
    title: post.title,
    description: post.body
  };
};
interface SinglePostPageProps {
  post: IPost
}
const SinglePostPage: React.FC<SinglePostPageProps> = ({ post }) => {
  // const { slug } = params;

  // // FETCH DATA WITH AN API
  // const post:IPost = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>{/* <Image src="{post.img}" alt="" fill className={styles.img} /> */}</div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>hi</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              hi
              {/* {post.createdAt.toString().slice(4, 16)} */}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {/* description
          {post.desc} */}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
