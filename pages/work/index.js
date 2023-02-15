import Link from "next/link";

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      props: { posts: data }
    };
  } catch (err) {
    console.error(err);
    return {
      props: { posts: [] }
    };
  }
};

const Index = ({ posts }) => {
  return (
    <>
      <h1>all posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <div className="bg-red-500 px-6">
          <Link href={'/work/'+post.id} className="bg-red-500 px-6" >{post.title}</Link>
          </div>
          <p className="bg-sky-900 text-white p-9">{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Index;
