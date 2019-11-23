import React from "react";


class SearchBar extends React.Component {
  state = {
    term: ''
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.whenIPressEnter(this.state.term)
  }


  render() {
    return (
      <div className="container ui form" style={{ paddingTop: '15px' }}>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <h1><label style={{color: 'white'}}>
              Type In A Video
              </label></h1>
            <input value={this.state.term} type="text" onChange={this.onInputChange}/>
          </div>
        </form>
      </div>

    );
  }
}

export default SearchBar;
