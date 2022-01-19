import c from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (

        <div className={c.postWrapper}>
            Posts
            <div>
                New Post
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>ADD</button>
            </div>
            <div className={c.posts}>
                <Post title="yo!" likes="20 likes"/>
                <Post title="hey!" likes="15 likes"/>
            </div>
        </div>

    )
}

export default MyPosts;