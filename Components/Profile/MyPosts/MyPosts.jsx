import c from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
    return (

        <div>
            Posts
            <div>
                New Post
            </div>
            <div>
                <Post title="yo!" likes="20 likes"/>
                <Post title="hey!" likes="15 likes"/>
            </div>
        </div>

    )
}

export default MyPosts;