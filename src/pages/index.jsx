import { useState } from 'react';
import Head from 'next/head';
import Bio from '../components/Bio';
import Nav from '../components/Nav';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { useAuth } from '../hooks/useAuth';
import { getAllPosts, createPost } from '../lib/posts';
import styles from '../styles/Home.module.scss';

export default function Home({ posts: defaultPosts }) {
  const [posts, updatePosts] = useState(defaultPosts);
  const { user } = useAuth();

  const postsSorted = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const handleOnSubmit = async (data, e) => {
    e.preventDefault();

    await createPost(data);

    const posts = await getAllPosts();
    updatePosts(posts);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />

        {/* <h1 className={styles.title}>Next Posts App</h1> */}
        <Bio
          headshot="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          name="Paul Coffman Jr."
          tagline="Web Developer"
          role="Full stack engineer, Web Designer"
        />

        <ul className={styles.posts}>
          {postsSorted.map((post) => {
            const { id, content, date } = post;

            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  }).format(new Date(date))}
                />
              </li>
            );
          })}
        </ul>

        {user && <PostForm onSubmit={handleOnSubmit} />}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
