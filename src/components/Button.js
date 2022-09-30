const Button = (props) => {
	return (
		<button onClick={props.clicked} className='btn btn-primary'>
			{props.text}
		</button>
	);
};

export default Button;
