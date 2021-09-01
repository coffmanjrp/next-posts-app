import styles from './PostForm.module.scss';

const PostForm = () => {
  return (
    <form>
      <textarea className={styles.formContent}></textarea>
      <button className={styles.formBtn}>Add New Post</button>
    </form>
  );
};

export default PostForm;
