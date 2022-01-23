import c from "./MyPosts.module.css"
import Post from "./Post/Post";


// const postData = [
//     {id: 1, title: "yo!", likes: "20 likes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"},
//     {id: 1, title: "hey!", likes: "30 likes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUhrgutc0KGdPsVqtYabKuqq0m4NDoutU-g&usqp=CAU"}
//
// ]
/*let postElement = postData.map(el =>  <Post title={el.title} likes={el.likes} img={el.img}/>)*/

function MyPosts(props) {
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
                <Post title={props.title} likes={props.likes} img={props.img}/>
                {/*{postElement}*/}
                {/*<Post title={postData[0].title} likes={postData[0].likes} img={postData[0].img}/>
                <Post title={postData[1].title} likes={postData[1].likes} img={postData[1].img}/>*/}

            </div>
        </div>

    )
}

export default MyPosts;