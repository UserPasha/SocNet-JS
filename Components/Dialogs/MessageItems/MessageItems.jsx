import React from 'react';
import c from "./MessageItem.module.css"


/*const Message = (props) => {

    return <div className={c.message}>{props.message}</div>


}*/

/*const messagesData = [
    {message: "Hi!", id: "1"},
    {message: "Man!", id: "2"},
    {message: "Yo!", id: "3"},

]*/

// let MessageElements = messagesData.map(el => <Message message={el.message} id={el.id}/>)


function MessageItems(props) {
    return (
        <div>
            {props.message}
            {/*{MessageElements}*/}

        </div>
    );
}

export default MessageItems;