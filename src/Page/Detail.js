import { useLocation } from "react-router";
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
        id transksi : {location.state.id}
      </div>
      <div className="card">
        <div className="card-body">
        Pengirim: {location.state.sender}
          Penerima: {location.state.receiver}
          No Akun: {location.state.accountNumber}
          Nama: {location.state.name}
          Nominal: {location.state.amout}
          Kode Unik: {location.state.unique_code}
          Catatan: {location.state.remark}
          Waktu dibuat: {location.state.created_date}
        </div>
      </div>
    </section>
  );
}

export default Detail;