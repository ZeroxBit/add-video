import React, { Component } from 'react'
import HomeLayout from '../components/HomeLayout';
import Categories from '../../categories/components/Categories';
import Related from '../components/Related';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../errors/containers/HandleError'
import VideoPlayer from '../../player/container/VideoPlayer';

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
			<HandleError>
				<HomeLayout>
					<Related />
					<VideoPlayer 
						autoplay 
					/>
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
			</HandleError>
		)
	}
}

export default Home
