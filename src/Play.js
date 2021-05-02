import React from 'react'

class Play extends React.Component {

	render() {
		console.log(this.props);
		var text = '';
		if(!this.props.playing){
			text = 'Play';
		}
		else {
			text = 'Pause';
		}
		
		return(
			<button onClick={ (event) => {
					this.props.playClickHandler();
			  }
			}>
			{text}
			</button>
		)
	}
}

export default Play;
