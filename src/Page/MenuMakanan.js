import React,{Component} from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component{
	constructor(props){
		super(props)
		this.state={
			jumlah:0


		}

		this.pilihPesanan = this.pilihPesanan.bind(this);
		this.nasiPadang = this.nasiPadang.bind(this);
		this.sate = this.sate.bind(this);
		this.soto = this.soto.bind(this);
		this.uduk = this.uduk.bind(this);
		this.kuning = this.kuning.bind(this);
		this.batal = this.batal.bind(this);

	}

	pilihPesanan(value,e){
		this.setState({[value]:e.target.value , tampil:true});
	}

	nasiPadang(){
		this.setState({
			pesan:"Nasi Padang",
			jumlah : this.state.jumlah+1,
			tampil : true
		})
	}

	sate(){
		this.setState({
			pesan:"Sate Kambing",
			jumlah : this.state.jumlah+1,
			tampil : true
		})
	}

	soto(){
		this.setState({
			pesan:"Soto Lamongan",
			jumlah : this.state.jumlah+1,
			tampil : true
		})
	}

	uduk(){
		this.setState({
			pesan:"Nasi Uduk",
			jumlah : this.state.jumlah+1,
			tampil : true
		})
	}

	kuning(){
		this.setState({
			pesan:"Nasi Kuning",
			jumlah : this.state.jumlah+1,
			tampil : true
		})
	}

	batal(){
		 Array.from(document.querySelectorAll("input","select")).forEach(
		    input => (input.value = ""),
		    select=> (select.placeHolder = "Pilih Makanan")
		  );
				this.setState({
			pesan:" ",
			jumlah: 0,
			tampil: false
		})
	}

render(){
	return(
		<div>
			<h3>Daftar Makanan Yang Kami Sediakan</h3>
			<center>
			<table>
				<tbody>
					<tr>

						<td>
							<ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
							<center>
								<button onClick={this.nasiPadang}>Pesan Sekarang</button>
							</center>
						</td>

						<td>
							<ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
							<center>
								<button onClick={this.sate}>Pesan Sekarang</button>
							</center>
						</td>

						<td>
							<ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
							<center>
								<button onClick={this.soto}>Pesan Sekarang</button>
							</center>
						</td>

						<td>
							<ListMakanan gambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
							<center>
								<button onClick={this.uduk}>Pesan Sekarang</button>
							</center>
						</td>

						<td>
							<ListMakanan gambar="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"/>
							<center>
								<button onClick={this.kuning}>Pesan Sekarang</button>
							</center>
						</td>

					</tr>
				</tbody>
			</table>
			</center>
				<br/>

				
			      <select onChange={(e)=>this.pilihPesanan("pesan",e)}>
			      	<option value=" ">Pilih Makanan Yang Anda Inginkan</option>
			        <option value="Nasi Padang">Nasi Padang</option>
			        <option value="Sate Kambing">Sate Kambing</option>
			        <option value="Soto Lamongan">Soto Lamongan</option>
			        <option value="Nasi Uduk">Nasi Uduk</option>
			        <option value="Nasi Kuning">Nasi Kuning</option>
			      </select>
			    

				<input
					type="number"
					placeholder="Jumlah Pesanan"
					onChange={(e)=>this.pilihPesanan("jumlah",e)}
				/>

				<button onClick={(e)=>this.batal(e)}>Batalkan Semua Pesanan</button>
				{this.state.tampil === true ? (
					<div>
						<h3>Pesanan Anda : {this.state.pesan}</h3>
						<h4>Jumlah Pesanan : {this.state.jumlah}</h4>
					</div>
				):(
				<h1>
					<center>Anda Belum Memesan</center>
				</h1>
				)
				}
			
		</div>
		)
}

}
export default MenuMakanan;