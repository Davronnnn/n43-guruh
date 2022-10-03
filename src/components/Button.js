const Button = (props) => {
	return (
		<button onClick={props.clickHandler} className='btn btn-primary'>
			{props.text}
		</button>
	);
};

export default Button;
