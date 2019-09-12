import React from 'react';
import { connect } from 'react-redux';
import { ToDo, fetchToDos } from '../actions';
import { StoreState } from '../reducers';

interface Props {
	toDos: ToDo[],
	
	fetchToDos(): any,
}

class AppView extends React.Component<Props> {
	onButtonClick = (): void => {
		this.props.fetchToDos();
	};
	
	renderList = (): JSX.Element[] => this.props.toDos.map((toDo) => <div key={ toDo.id }>{ toDo.title }</div>);
	
	render() {
		return (
			<div>
				<button onClick={ this.onButtonClick }>Fetch ToDos</button>
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
	{ fetchToDos }
)(AppView);
