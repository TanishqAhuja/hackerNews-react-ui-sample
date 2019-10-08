import React from 'react';
import { Link } from 'react-router-dom';

class Story extends React.Component {
    state = {
        score: this.props.story['score'],
        style: {
            "textDecoration": "none",
            "color": "black",
        }
    }

    upVotes = (e) => {
        this.setState({ score: this.state.score + 1 });
    };

    downVotes = (e) => {
        this.setState({ score: this.state.score - 1 });
    };

    render() {
        const commentsUrl = `/comments/${this.props.story['item_id']}`;
        return (
            <div className="d-flex justify-content-between card-body" key={this.props.story['item_id']}>
                <button className="border-0 p-0 bg-white text-success" onClick={this.upVotes}>▲</button>
                <button className="border-0 ml-1 p-0 bg-white text-danger" onClick={this.downVotes}>▼</button>
                <span className="mr-auto ml-3 text-warning">{this.state.score}</span>
                <span className="mr-auto"><a style={this.state.style} href={this.props.story['url']}>{this.props.story['title']}</a></span>
                <button className="text-info p-0 bg-white border-0"><Link to={commentsUrl}>{this.props.story['kids'].length}  comments</Link></button>
            </div >
        );
    }
}

export default Story;
