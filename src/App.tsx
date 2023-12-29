import ParamEditor from './ParamEditor';
import './App.css';

function App() {
	const model = new ParamEditor({
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
	}).getModel();
	return (
		<div className="App">
			<ParamEditor
				params={[
					{ id: 1, name: 'Назначение', type: 'text' },
					{ id: 2, name: 'Длина', type: 'text' },
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
