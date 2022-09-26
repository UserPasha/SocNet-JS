import React, {useState} from 'react';

export const ProfileStatusWithHooks = (props) => {
    const [mode, setMode] = useState(false)

    const [status, setStatus] = useState(props.status)


    const valueChanger = (e) => {

        setStatus(e.currentTarget.value)
    }
    const StatusSaver = () => {
        setMode(false)
        props.updateStatus(status)
    }


    const StatusChanger = () => {
        setMode(true)
    }
    React.useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return (
        <div>
            {mode ?
                (<div>
                    <input onChange={valueChanger}
                           autoFocus={true}
                        //onBlur={this.deActivateEditMode}
                           value={status}
                    />
                    <button onClick={StatusSaver}>Save status</button>
                </div>)
                : (
                    <div>
                        <span onDoubleClick={StatusChanger}>
                            {props.status || "----"}
                        </span>
                    </div>
                )

            }

        </div>
    );
}






