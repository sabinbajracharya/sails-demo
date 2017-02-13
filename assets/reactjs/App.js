import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      emojis: []
    }
  }

  loadEmojis(){
    io.socket.get('/api/v1/emoji/find', (data) => {
        let emojiList = data.map((emoji) => <li key={emoji.id} >{emoji.text}</li>);
        this.setState({
            emojis: emojiList
          }
        );
      });

    io.socket.on('emoji', (event) => {
      switch(event.verb){
        case 'created':
          let emoji = this.state.emojis;
          emoji.push(<li key={event.data.id}>{event.data.text}</li>);
          this.setState({
            emojis: emoji
          });
          break;
      }
    });

  }

  render() {
    if(this.state.emojis.length == 0){
      this.loadEmojis();
    }

    return (
      <div>
        "Livereload - Hello Sails from re - again - reagain - final - Monday (Today) and Tuesday (Tomorrow)"
        <div>
          <ul>{this.state.emojis}</ul>
        </div>
      </div>
    );
  }
}

export default App;
