const API_URL =
"https://script.google.com/macros/s/AKfycbx_7IcjH61WK90ffxDRmrLA0YUGVy2Ra6ioTY4FK7MpDUS7odGcRFIH-8QRz4Bdk-Rf7w/exec";

async function cariNik(){

    const nik =
    document.getElementById("nik").value;

    const response =
    await fetch(
        API_URL +
        "?action=cariNik&nik=" +
        nik
    );

    const data =
    await response.json();

    if(data.status){

        document.getElementById("hasil").innerHTML = `
            <h3>${data.data[2]}</h3>
            <p>NIK : ${data.data[0]}</p>
            <p>Jenis Kelamin : ${data.data[3]}</p>
            <p>Alamat : ${data.data[12]}</p>
        `;

    }else{

        document.getElementById("hasil").innerHTML =
        data.pesan;

    }

}
