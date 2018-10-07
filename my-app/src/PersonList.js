import React from 'react';
import { Link } from 'react-router-dom';
import PersonListData from './PersonList.json';

class Feed extends React.Component {
	constructor() {
		super();
		this.state = {
			data: PersonListData,
			placeholder: 'Search for something...'
		};
		this.filterUsers = event => {
			const data = PersonListData.filter(function(person) {
				return (
					person.Name.toLowerCase().search(
						event.target.value.toLowerCase()
					) !== -1
				);
			});
			this.setState({ data });
		};
	}

	render() {
		const { placeholder, data } = this.state;

		return (
			<React.Fragment>
				<input
					type="text"
					onChange={this.filterUsers}
					placeholder={placeholder}
				/>
				<nav className="profile-list">
					<ul>
						{data.map(function(person) {
							if (person.Name !== null) {
								return (
									<Link to="/profile" key={person.Name}>
										<li>{person.Name}</li>
									</Link>
								);
							}
						})}
					</ul>
				</nav>
			</React.Fragment>
		);
	}
}

export default Feed;
