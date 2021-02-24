import React, { Component } from "react";
import AddNew from './addNew';

class NewCounter extends Component {
    state = {
        countList: [],
        lastId: 0
    }

    handleCounter = () => {
        const { countList, lastId } = this.state;
        const nextId =  lastId+1

        this.setState({
            lastId: nextId,
            countList: [...countList, { value:0, id:nextId }]
        })
    }

    deleteCounter = listId => {
        const countList = this.state.countList.filter(list => list.id !== listId);

        this.setState({ 
            countList: countList
         });
    }

    renderCounter() {
        if (this.state.countList.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.countList.map(list => <li key={list.id}><AddNew onDelete={() => {this.deleteCounter(list.id)}}/></li>)}</ul>
    }

    render() {
        const { countList } = this.state;

        return (
            <div>
                <button onClick={this.handleCounter} className="btn btn-secondry btn-sm">Add New Counter</button>
                {!countList.length && "Please add a new counter!"}
                {this.renderCounter()}
            </div>
        );
    }
}

export default NewCounter;
