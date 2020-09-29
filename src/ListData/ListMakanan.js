import React, {Component} from 'react';

class ListMakanan extends Component{
	constructor(props){
		super(props)
		this.state={
			data:this.props.gambar
		}
	}

	render(){
		return(
			<div>
				<img src={this.state.data} alt="Product Makanan" width="150" height="75"/>
			</div>
			);
	}
}
export default ListMakanan;