import Head from 'next/head';
import Image from 'next/image';
import Bio from '../components/Bio';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { useAuth } from '../hooks/useAuth';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const { user, login } = useAuth();

  console.log(user);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        <button onClick={() => login()}>Login</button>
      </p>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Next Posts App</h1> */}
        <Bio
          headshot="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          name="Paul Coffman Jr."
          tagline="Web Developer"
          role="Full stack engineer, Web Designer"
        />

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
