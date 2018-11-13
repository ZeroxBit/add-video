import React, { Component } from 'react'
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../components/Related';
import ModalContainer from '../../widgets/containers/ModalContainer';

export class Home extends Component {
	render() {
		return (
			<div>
				<HomeLayout>
					<Related />
					<Categories categories={this.props.data.categories}/>
					<ModalContainer>
						<h1>Modal llll</h1>
					</ModalContainer>
				</HomeLayout>
			</div>
		)
	}
}

export default Home
