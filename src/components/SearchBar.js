import React, { Component } from 'react'


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {query: ""}
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(evt) {
        const newQuery = evt.target.value
        this.setState({
            query: newQuery
        })
    }
    onFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state.query);
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>image search</label>
                            <input type="text" onChange={this.onInputChange} value={this.state.query} placeholder={'search...'}></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;