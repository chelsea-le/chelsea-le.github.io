// Video component -- show a youtube iframe
import React from 'react';

var Project = React.createClass({
    render() {
        return(
            <div>
                <div className="card col s3 xs-2">
                    <div className="card-image">
                        <img src={this.props.img} />
                    </div>
                    <div className="card-content">
                        {/* <p {this.props.title}</p>
                        <p {this.props.description}</p>
                        <p {this.props.skills}</p>
                        <p {this.props.date}</p>
                        <p {this.props.contributers}</p> */}
                    </div>
                </div>
            </div>
        )
    }
});

export default Project;
