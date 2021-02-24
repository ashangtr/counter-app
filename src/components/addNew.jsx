import React, { Component } from "react";


class AddNew extends Component {
    state = {
        count: 0
    }

    render() { 
        const reduceCount = () => {
            this.setState({ count: this.state.count - 1})
        }
    
        const increaseCount = () => {
            this.setState({ count: this.state.count + 1})
        }

        const { onDelete } = this.props;

        return (
            <div>
                <button onClick={reduceCount}>-</button>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={increaseCount}>+</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default AddNew;