// TEMPORARY DATA
const users = [
  { id: 1, name: 'John', img: '' },
  { id: 2, name: 'Jane', img: '' }
]

const posts = [
  { id: 1, title: 'Post 1', body: '......', userId: 1 },
  { id: 2, title: 'Post 2', body: '......', userId: 1 },
  { id: 3, title: 'Post 3', body: '......', userId: 2 },
  { id: 4, title: 'Post 4', body: '......', userId: 2 }
]

export const getPosts = async () => {
  //   try {
  //     connectToDb()
  //     const posts = await Post.find()
  //     return posts
  //   } catch (err) {
  //     console.log(err)
  //     throw new Error('Failed to fetch posts!')
  //   }
  return posts
}

export const getUser = async (id: number) => {
  console.log(id)
  return users[1]
  // noStore();
  // try {
  //   connectToDb();
  //   const user = await User.findById(id);
  //   return user;
  // } catch (err) {
  //   console.log(err);
  //   throw new Error("Failed to fetch user!");
  // }
}
