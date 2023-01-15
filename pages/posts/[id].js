import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds(); // Contains the array of known paths returned by 
                                // "getAllPostIds()".
  return {
    paths,
    fallback: false,
  };
}

export default function Post() {
  return <Layout>...</Layout>;
}