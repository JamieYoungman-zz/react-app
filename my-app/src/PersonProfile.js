import React from 'react';
import profile from './PersonProfile.json';

function Profile() {
	return (
		<div className="profile">
			<ul key={1}>
				<li>{profile.title}</li>
				<li>{profile.firstName}</li>
				<li>{profile.middleName}</li>
				<li>{profile.lastName}</li>
				<li>{profile.dateOfBirth}</li>
				<li>{profile.sex}</li>
				<li>{profile.address1}</li>
				<li>{profile.address2}</li>
				<li>{profile.address3}</li>
				<li>{profile.town}</li>
				<li>{profile.postcode}</li>
			</ul>
		</div>
	);
}

export default Profile;
