import React, { Component } from 'react'
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';

export class Home extends Component {
	render() {
		return (
			<div>
				<HomeLayout>
					<Categories categories={this.props.data.categories}/>
				</HomeLayout>
			</div>
		)
	}
}

export default Home
