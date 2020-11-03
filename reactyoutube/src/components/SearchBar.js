import React from "react";
import '../CSS/SearchBar.css'

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
        console.log(event)
        console.log("---------- state value -------- ", this.state.term);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit (this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search:</label>
                        <input type="text"
                               value={this.state.term}
                               onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;
