import { useState } from 'react';
import { useParams } from 'react-router-dom';

const useProfile = (props) => {
	const [profile, setProfile] = useState({});
	const { id } = useParams();

	return [profile, setProfile, id];
};

export default useProfile;
