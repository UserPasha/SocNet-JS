import React from 'react';

class ProfileStatus extends React.Component {
    // const [mode, setMode] = useState(false)
    // const [status, setStatus] = useState("")
    //
    // const StatusSaver = (e) =>{
    //     setStatus(e.currentTarget.value)
    //     setMode(false)
    // }
    // const StatusChanger =()=>{
    //     setMode(true)
    // }
    state = {
        editMode: false,
        title: "yoooo!"
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>
                            {this.props.status}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={this.deActivateEditMode.bind(this)}
                               value={this.props.status}
                        />
                        <button>Save status</button>
                    </div>

                }
            </div>
        );
    }


};

export default ProfileStatus;