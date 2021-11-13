import { Link } from 'react-router-dom';
import { useLocation } from "react-router";
import Card from '../component/UI/Card'
const Detail = () => {
  const location = useLocation()
  console.log(location.state)
  return (
    <section className="detail">
      <div className="header">
        <div className="title-wrapper">
          <h1 className="title">Detail Transaksi</h1>
        </div>
      </div>
      <div className="bar">
        <p className="text">ID TRANSAKSI : {location.state.id}</p>
        <div className={`badge ${location.state.status.toLowerCase()}`}>{location.state.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}</div>
      </div>
      <Card>
        <div className="card-body detail">
          <i className="icon-folder far fa-folder-open"></i>
          <div className="card-info">
            <div className="card-field">
              <p className="title">PENGIRIM</p>
              <p className="text">{location.state.sender}</p>
            </div>
            <div className="card-field">
              <p className="title">PENERIMA</p>
              <p className="text">{location.state.receiver}</p>
              <p className="text">{location.state.accountNumber}</p>
              <p className="text">{location.state.name}</p>
            </div>
            <div className="card-field">
              <p className="title">NOMINAL</p>
              <p className="text">{location.state.amout}</p>
              <p className="text">Kode Unik: {location.state.unique_code}</p>              
            </div>
            <div className="card-field">
              <p className="title">CATATAN</p>
              <p className="text">{location.state.remark}</p>           
            </div>
            <div className="card-field">
              <p className="title">WAKTU DIBUAT</p>              
              <p className="text">{location.state.created_date}</p>              
            </div>
          </div>
        </div>
      </Card>
      <Link to="/">
        <button className="button">Kembali</button>
      </Link>
    </section>
  );
}

export default Detail;