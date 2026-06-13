const API_URL =
"https://script.google.com/macros/s/AKfycbx_7IcjH61WK90ffxDRmrLA0YUGVy2Ra6ioTY4FK7MpDUS7odGcRFIH-8QRz4Bdk-Rf7w/exec";

async function cariKK(){

    const kk =
    document.getElementById("kk").value;

    const response =
    await fetch(
        API_URL +
        "?action=getAnggotaKK&kk=" +
        kk
    );

    const data =
    await response.json();

    let html = `
        <h3>Jumlah Anggota : ${data.jumlah}</h3>

        <table border="1" cellpadding="5">
            <tr>
                <th>NIK</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Status Hubungan</th>
            </tr>
    `;

    data.anggota.forEach(item => {

        html += `
            <tr>
                <td>${item.nik}</td>
                <td>${item.nama}</td>
                <td>${item.jk}</td>
                <td>${item.status_hubungan}</td>
            </tr>
        `;

    });

    html += "</table>";

    document.getElementById("hasil").innerHTML = html;

}
