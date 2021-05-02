import React from 'react';
import './App.css';
import Play from './Play'

class App extends React.Component{

	state = {
		audioContext: null,
		audioElement: null,
		track: process.env.PUBLIC_URL + 'data/track1.opus',
		playing: false,
	}

	componentDidMount() {
		const AudioContextClass = window.AudioContext || window.webkitAudioContext;
		const audioContext = new AudioContextClass();
		this.setState({audioContext: audioContext});

		const audioElement = document.querySelector('audio');
		this.setState({audioElement: audioElement});

		const track = audioContext.createMediaElementSource(audioElement);
		track.connect(audioContext.destination);

		audioContext.resume();
	}

	playClickHandler = (event) => {
		if(this.state.playing === false) {
			this.state.audioElement.play();
			this.setState({playing: true});
		}
		else {
			this.state.audioElement.pause();
			this.setState({playing: false});
		}
	}

	render() {
		console.log(this.state);

		return (
			<div className="App">
				<header className="App-header">
					<audio src={this.state.track} />
					<Play playing={this.state.playing} playClickHandler={this.playClickHandler} />
				</header>
			</div>
		);
	}
}

export default App;
