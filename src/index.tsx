import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
	color?: string;
}

interface State {
	counter: number;
}

class App extends React.Component<Props, State> {
	// constructor(props: Props) {
	// 	super(props);
	//
	// 	this.state = {
	// 		counter: 0,
	// 	}
	// }
	
	state = {
		counter: 0
	};
	
	onIncrementButtonClick = (): void => {
		this.setState({ counter: this.state.counter + 1 })
	};
	
	onDecrementButtonClick = (): void => {
		this.setState((prevState) => ({ counter: prevState.counter - 1 }))
	};
	
	
	render() {
		return (
			<div>
				<button onClick={this.onIncrementButtonClick}>Increment</button>
				<button onClick={this.onDecrementButtonClick}>Decrement</button>
				{this.state.counter}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
