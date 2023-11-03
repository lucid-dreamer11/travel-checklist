import { Component } from "react";
export class Travel extends Component {
    state = {
        userInput:"",
        travelList: []
    }
    takeItem (e) {
        this.setState({userInput:e});
        // console.log(e);
    }
    addItem (input) {
        if (input === ''){
            alert ("Need to add item")
        } else {
        let travelArray = this.state.travelList;
        travelArray.push(input);
        this.setState({travelList: travelArray, userInput: ""})
    }}
    deleteItem () {
        let travelArray = this.state.travelList;
        travelArray=[];
        this.setState({travelList:travelArray})
    }
    crossedItem (event) {
        const li = event.target;
        li.classList.toggle('completed')
    }
    onFormSubmit (e) {
        e.preventDefault();
    }
    render () {
        return (
        <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input
                    type="text"
                    placeholder="Remember to take..."
                    onChange={(e)=> {this.takeItem(e.target.value)}}
                    value={this.state.userInput}
                />
            </div>
            <div className="container">
            <button className="btn add" onClick={()=>this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.travelList.map((item, index)=>(
                    <li onClick={this.crossedItem} key={index}>{item}</li>
                ))}
            </ul>
            <div className="container">
            <button className="btn delete" onClick={()=> this.deleteItem()}>Delete</button>
            </div>
            </form>
        </div>
        )
    }
}