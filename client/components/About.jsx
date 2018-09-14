import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Asset from './Asset.jsx';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      images: []
    }

    this.fetchData = this.fetchData.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/api/description', {
      params: this.state.query
    })
    .then(data => {
      // console.log('fetch', data.data.images);
      // var items = data.data[0].images;
      var items = data.data.images;

      this.setState({ images: items }, () => {
        // console.log(this.state);
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        {
          this.state.images.map((image, index) => (
            <Asset 
              image={image}
              key={index}
            />
          ))
        }
      </div>
    );
  }
};

export default About;