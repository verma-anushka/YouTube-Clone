import React from 'react';

class SearchBar extends React.Component {

    state = { query: '' };

    onInputChange = (e) => {
        this.setState( {query : e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onQuerySubmit(this.state.query);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.query} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;