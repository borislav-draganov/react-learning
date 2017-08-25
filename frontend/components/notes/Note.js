import * as React from "react";

export default class Note extends React.Component {
    render() {
        return (
            <div>
                <span>ID:</span> {this.props.data.id} <br />
                <span>Note:</span> {this.props.data.text}
            </div>
        )
    }
}