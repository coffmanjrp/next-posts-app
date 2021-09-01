import Head from 'next/head';
import Image from 'next/image';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next Posts App</h1>

        <ul className={styles.posts}>
          <li>
            <Post content="Hey, I'm a new post!" date="09/01/2021" />
          </li>
          <li>
            <Post
              content="I’m working in Figma trying to design a new website that shows all
              of my tweet"
              date="08/31/2021"
            />
          </li>
          <li>
            <Post
              content="I’m working in Figma trying to design a new website that shows all
              of my tweet"
              date="08/31/2021"
            />
          </li>
          <li>
            <Post
              content="I’m working in Figma trying to design a new website that shows all
              of my tweet"
              date="08/31/2021"
            />
          </li>
        </ul>

        <PostForm />
      </main>
    </div>
  );
}
