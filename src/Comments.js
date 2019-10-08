import React from 'react';
import axios from 'axios';
import Comment from './Comment';

class Comments extends React.Component {

    state = {
        comments: [],
        storyId: this.props.match.params.id,
    };

    componentDidMount() {
        axios.get(`${process.env.PUBLIC_URL}/hn_data/${this.state.storyId}.json`)
            .then((res) => {
                this.setState({
                    comments: [...res.data],
                });
                return res.data;
            });
    };

    displayComments = () => {
        return this.state.comments.map((comment) => (
            <Comment comment={comment} />
        ));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const textArea = document.getElementById(`${this.state.storyId}`);
        const commentText = textArea.value;

        const comment = {
            "text": `${commentText}`,
            "by": 'CommentBuddy',
        }
        const comments = [...this.state.comments, comment];

        this.setState({
            comments: comments,
        });

        textArea.value = '';

    }


    render() {
        return (
            <div className="comments card-body p-0">
                {this.displayComments()}
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group border-dark card-body">
                        <textarea
                            className="form-control border-dark"
                            placeholder="Add New Comment"
                            required
                            id={this.state.storyId}
                        />
                        <span className="input-group-btn">
                            <button className="btn btn-dark h-100" type="submit">＋</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Comments;