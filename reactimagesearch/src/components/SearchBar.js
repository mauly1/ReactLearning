import React from "react";

class SearchBar extends React.Component {
    /*  // first way to handel this is undefined issue.
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
*/
    state = {term: ''};

    /*onInputChange(event) {
        console.log("EVENET value --------> ", event.target.value);
    }*/

  /*  onFormSubmit(event) {
        event.preventDefault();
        console.log('state value of term: ', this.state.term);
    }*/
    // second way to handel this is undefined issue.
    onFormSubmit =(event)=>{
        event.preventDefault();
        this.props.onUserDataSubmit(this.state.term);
        console.log('state value of term: ', this.state.term);
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Image: </label>
                        {/*<input type="text" onChange={(event)=>this.state({term:event.target.value})}/>*/}
                        {/*       <input type="text" value={this.state.term}
                               onChange={(event => this.setState({term: event.target.value}))}/>*/}
                        <input type="text"
                               value={this.state.term}
                               onChange={(event => this.setState({term: event.target.value}))}/>

                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;
