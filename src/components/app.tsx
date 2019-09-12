import React from 'react';
import { connect } from 'react-redux';
import { ToDo, fetchToDos, deleteToDo } from '../actions';
import { StoreState } from '../reducers';

interface Props {
	toDos: ToDo[],
	
	fetchToDos: () => void,
	deleteToDo: typeof deleteToDo,
}

interface State {
	isLoading: boolean,
}

class AppView extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		
		this.state = {
			isLoading: false
		};
	}
	
	componentDidUpdate(prevProps: Props): void {
		if(!prevProps.toDos.length && this.props.toDos.length) {
			this.setState({isLoading: false})
		}
	}
	
	onButtonClick = (): void => {
		this.props.fetchToDos();
		
		this.setState({isLoading: true});
	};
	
	onTodoClick = (id: number): void => {
		this.props.deleteToDo(id);
	};
	
	renderList = (): JSX.Element[] => this.props.toDos.map((toDo) => {
		const {id, title} = toDo;
		
		return <div key={ id } onClick={() => this.onTodoClick(id)}>{ title }<hr/></div>
	});
	
	render() {
		return (
			<div>
				<button onClick={ this.onButtonClick }>Fetch ToDos</button>
				{ this.state.isLoading && 'LOADING'}
				{ this.renderList() }
			</div>
		);
	}
}

const mapStateToProps = ({ toDos }: StoreState): { toDos: ToDo[] } => ({
	toDos,
});

export const App = connect(
	mapStateToProps,
	{ fetchToDos, deleteToDo }
)(AppView);
