import c from "./Post.module.css"

function Post(props) {
    return (
        <div className={c.postWrapper}>
            <div className={c.item}>
                <img
                    src={props.img}
                    alt="avatar"/>

                    <span>{props.title}</span>
                    <div>
                        <span>{props.likes}</span>
                    </div>

            </div>
        </div>
    )
}

export default Post;