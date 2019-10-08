import React from 'react';
import Story from './Story';
import stories from './hn_data/stories.json';

class Stories extends React.Component {
    state = {
        stories,
    };


    displayStories = () => {

        return this.state.stories.map((story) => (
            <Story story={story} />
        ));
    };

    render() {
        return (
            <div className="stories card-body p-0">
                {this.displayStories()}
            </div>
        );
    };

};

export default Stories;