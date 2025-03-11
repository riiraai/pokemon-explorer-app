import styled from 'styled-components';

const FormGroup = styled.div`
	margin-bottom: 1rem;
`;

const Label = styled.label`
	display: block;
	color: #4b5563;
	font-size: 0.875rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
`;

const Input = styled.input`
	width: 100%;
	padding: 0.75rem;
	border: 1px solid #d1d5db;
	border-radius: 0.375rem;
	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px #ef4444;
	}
`;

export default function TextField({
	name,
	type,
	value,
	onChange,
	required,
	label,
	placeholder,
}: {
	name: string;
	type?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	label?: string;
	placeholder?: string;
}) {
	if (label) {
		return (
			<FormGroup>
				<Label htmlFor={name}>{label}</Label>
				<Input
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					required={required}
					placeholder={placeholder}
				/>
			</FormGroup>
		);
	}

	return (
		<Input
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			required={required}
			placeholder={placeholder}
		/>
	);
}
