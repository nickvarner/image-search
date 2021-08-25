import React, { Component } from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList';


class App extends Component {
  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.state = { images: [] }
  }
  async onSearchSubmit(query) {
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: {query},
    })
    this.setState({
      images: response.data.results
    })
  }
  render() {
    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
