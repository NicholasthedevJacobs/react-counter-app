import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0, 
        tags: []
    };

    handleIncrement(){
        console.log('Increment Clicked');
    }

    renderTags() {
        if (this.state.tags.length === 0) return 'There are no tags!';

        return <ul>
            { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
        </ul>;
    }

    render(){
        return (
        <div>
            <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={this.handleIncrement} 
                className= 'btn btn-secondary btn-sm'
            >
                Increment
            </button>
            { this.state.tags.length === 0 && 'Please create a new tag!' }
            { this.renderTags() }
        </div>
        );
    }

    getBadgeClasses() {
        // here I added "badge- which will append warning or primary"
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;