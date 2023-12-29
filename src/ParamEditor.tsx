import { ChangeEvent, Component } from 'react';

interface Param {
	id: number;
	name: string;
	type: string;
}
interface ParamValue {
	paramId: number;
	value: string;
}
interface Model {
	paramValues: ParamValue[];
	colors?: Colors[];
}
interface Props {
	params: Param[];
	model: Model;
}
interface Colors {
	name: string;
}
interface State {
	model: Model;
}

export class ParamEditor extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		const { model } = props;
		this.state = { model };
		this.getModel = this.getModel.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	public getModel(): Model {
		return this.state.model;
	}
	private handleChange(e: ChangeEvent<HTMLInputElement>) {
		this.setState((state, props) => {
			const values = state.model.paramValues?.map((item, index) => {
				if (item.paramId === Number(e.target.name)) return { ...item, value: e.target.value } as ParamValue;
				return item;
			});
			return { model: { ...state.model, paramValues: values } };
		});
	}

	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '24px', width: 'fit-content' }}>
				{this.props.params?.map((item) => {
					const value = this.state?.model?.paramValues?.find((param) => param.paramId === item.id)?.value;
					return (
						<label
							key={item.id}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								gap: '16px',
								fontSize: '20px',
								fontWeight: 500,
								width: '100%',
							}}>
							<span style={{ width: '50%' }}>{item.name}</span>
							<input
								value={value}
								name={String(item.id)}
								type={item.type}
								onChange={this.handleChange}
								style={{
									fontSize: '16px',
									fontWeight: 500,
									width: '50%',
								}}
							/>
						</label>
					);
				})}
			</div>
		);
	}
}

export default ParamEditor;
