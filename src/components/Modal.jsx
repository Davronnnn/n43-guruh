import React from 'react';

const Modal = ({ isModalActive, setIsModalActive }) => {
	const removeModal = (e) => {
		if (e.target.matches('.modal')) {
			setIsModalActive(false);
		}
	};

	return (
		<div
			className='modal mt-5'
			style={isModalActive ? { display: 'block' } : { display: 'none' }}
			tabIndex='-1'
			onClick={(e) => removeModal(e)}
			role='dialog'>
			<div className='modal-dialog' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Modal title</h5>
						<button
							onClick={() => setIsModalActive(false)}
							type='button'
							className='close'
							data-dismiss='modal'
							aria-label='Close'>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						<p>Modal body text goes here.</p>
					</div>
					<div className='modal-footer'>
						<button type='button' className='btn btn-primary'>
							Save changes
						</button>
						<button
							onClick={() => setIsModalActive(false)}
							type='button'
							className='btn btn-secondary'
							data-dismiss='modal'>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
