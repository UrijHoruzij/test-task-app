import ParamEditor from './ParamEditor';
import './App.css';

function App() {
	console.log(
		new ParamEditor({
			params: [
				{ id: 1, name: 'Назначение', type: 'text' },
				{ id: 2, name: 'Длина', type: 'text' },
			],
			model: {
				paramValues: [
					{ paramId: 1, value: 'повседневное' },
					{ paramId: 2, value: 'макси' },
				],
			},
		}).getModel(),
	);
	return (
		<div className="App">
			<ParamEditor
				params={[
					{ id: 1, name: 'Назначение', type: 'text' },
					{ id: 2, name: 'Длина', type: 'text' },
					{ id: 3, name: 'Длина2', type: 'number' },
				]}
				model={{
					paramValues: [
						{ paramId: 1, value: 'повседневное' },
						{ paramId: 2, value: 'макси' },
					],
				}}
			/>
		</div>
	);
}

export default App;
