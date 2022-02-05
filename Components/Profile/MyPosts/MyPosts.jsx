import c from "./MyPosts.module.css"
import Post from "./Post/Post";


// const postData = [
//     {id: 1, title: "yo!", likes: "20 likes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"},
//     {id: 1, title: "hey!", likes: "30 likes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUhrgutc0KGdPsVqtYabKuqq0m4NDoutU-g&usqp=CAU"}
//
// ]
/*let postElement = postData.map(el =>  <Post title={el.title} likes={el.likes} img={el.img}/>)*/

function MyPosts(props) {
    let postElement = props.posts.map(el =>  <Post key={el.id} title={el.title} likes={el.likes} img={el.img}/>)
    return (

        <div className={c.postWrapper}>

            <div>
                New Post
            </div>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>ADD</button>
            </div>
            <div className={c.posts}>
                Posts
                {postElement}

            </div>
        </div>

    )
}

export default MyPosts;