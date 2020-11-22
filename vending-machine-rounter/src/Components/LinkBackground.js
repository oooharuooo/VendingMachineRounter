import React from 'react';
import "./LinkBackground.css";

class LinkBackground extends React.Component {
    render() {
        return (
            <div className="link-background">
                {this.props.children}
            </div>
        )
    }
}

export default LinkBackground
