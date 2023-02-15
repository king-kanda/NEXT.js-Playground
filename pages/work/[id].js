export const getStaticPaths = async () => {

    try{

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        const paths = data.map(post => {
            return {
                params: { id: post.id.toString() }
            }
        })
        return {
            paths,
            fallback: false
        };


    }
    catch(err){
        console.error(err);
        

    }

}


export const getStaticProps = async (context) => {

    const id = context.params.id;
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
        const data = await res.json();
        return {
            props: { post: data }
        };
    }
    catch(err){
        console.error(err);
        return {
            props: { post: [] }
        };
    }

}

const Post = ({post}) => {
    return (
        <>
            <h1 className="bg-orange-500 text-black p-6"> Personalized Page for each blog post...</h1>
            <div className="bg-gray-500 p-6">
                <h1 className="bg-orange-500 text-black p-6"> {post.title}</h1>
                <p className="bg-sky-900 text-white p-9">{post.body}</p>
            </div>
        </>
    );
}

export default Post;