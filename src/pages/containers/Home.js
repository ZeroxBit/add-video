import React, { Component } from 'react'
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../components/Related';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';

export class Home extends Component {

	state = {
		modalVisible: false
	}

	handleCloseModal =()=>{
		this.setState({modalVisible : false})
	}

	handleOpenModal = () => {
		this.setState({
			modalVisible:true
		})
	}

	render() {
		return (
			<HomeLayout>
				<Related />
				<Categories 
					categories={this.props.data.categories}
					handleOpenModal = {this.handleOpenModal}
				/>
				{
					this.state.modalVisible &&
						<ModalContainer>
							<Modal
								handleClose={this.handleCloseModal}
							>
								<h1>Modalll</h1>
							</Modal>
						</ModalContainer>
				}
			</HomeLayout>
		)
	}
}

export default Home
