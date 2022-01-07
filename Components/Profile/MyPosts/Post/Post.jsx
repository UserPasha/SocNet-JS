import c from "./Post.module.css"

function Post(props) {
    return (
        <div className={c.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
                alt="avatar"/>
            {props.title}
            <div>
                <span>
                {props.likes}
                 </span>
            </div>
        </div>
    )
}

export default Post;