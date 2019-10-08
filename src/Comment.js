import React from 'react';

class Comment extends React.Component {
    state = {
        author: this.props.comment['by'],
    }


    render() {
        return (
            <div className="card-body m-1 blockquote border border-dark">
                <p>
                    {this.props.comment['text']}
                    <span className="float-right blockquote-footer">{this.state.author}</span>
                </p>
            </div>
        );
    }
}

export default Comment;