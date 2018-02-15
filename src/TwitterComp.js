import React, { Component } from 'react';
import List from './List';
import axios from 'axios';

class TwitterComp extends React.Component {
  constructor(props) {
    super(props);
    	this.state = { value: '', tweet_data: [], pagination_flag: 0, pagination_id: ''};

    	this.handleChange = this.handleChange.bind(this);
    	this.newTimeStamp = this.newTimeStamp.bind(this);
    	this.loadMore = this.loadMore.bind(this);
	} 

	handleChange(event) {
		this.setState({value: event.target.value});
	}

  	newTimeStamp(event) {
  		var than = this;
		axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+this.state.value+"&type=video&videoCaption=closedCaption&key=AIzaSyCCQA7ANKi_Fbk0iRyXHqoRk7w4sqEO2BQ")
			.then(function (response) {
				console.log(response.data);
				if (response.data.nextPageToken == undefined)
					than.setState((prevState) => ({
						tweet_data: [...response.data.items]
					}));
				else 
					than.setState((prevState) => ({
						tweet_data: [...response.data.items],
						pagination_flag: 1,
						pagination_id: response.data.nextPageToken
					}));
			})
			.catch(function (error) {
				console.log(error);
			});
		}

	loadMore(event){
		var than = this;
		axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+this.state.value+"&type=video&pageToken="+this.state.pagination_id+"&videoCaption=closedCaption&key=AIzaSyCCQA7ANKi_Fbk0iRyXHqoRk7w4sqEO2BQ")
		.then(function (response) {
			console.log(response.data);
			if (response.data.nextPageToken == undefined)
				than.setState((prevState) => ({
					tweet_data: [...than.state.tweet_data, ...response.data.items],
					pagination_flag: 0,
					pagination_id: ''
				}));
			else 
				than.setState((prevState) => ({
					tweet_data: [...than.state.tweet_data, ...response.data.items],
					pagination_id: response.data.nextPageToken
				}));
		})
		.catch(function (error) {
			console.log(error);
		});
	}
		


  render() {
    return (
      <div>
        <div>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
              <input type="submit" value="Find Tweets" onClick={this.newTimeStamp}/>
         </div>
        <List numbers={this.state.tweet_data} />
        {this.state.pagination_flag > 0 && <button onClick={this.loadMore} value="2">Load More </button>}
        <h1>{/*this.state.pagination_flag*/}</h1>
      </div>
    );
  }
}

export default TwitterComp;