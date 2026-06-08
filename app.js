const API_URL = "https://script.google.com/macros/s/AKfycbx_7IcjH61WK90ffxDRmrLA0YUGVy2Ra6ioTY4FK7MpDUS7odGcRFIH-8QRz4Bdk-Rf7w/exec";

async function loadDashboard(){

    const response =
    await fetch(
        API_URL + "?action=dashboard"
    );

    const data =
    await response.json();

    document.getElementById("dashboard").innerHTML = `
        <p>Total Penduduk : ${data.total_penduduk}</p>
        <p>Total KK : ${data.total_kk}</p>
        <p>Laki-Laki : ${data.laki_laki}</p>
        <p>Perempuan : ${data.perempuan}</p>
    `;

}

loadDashboard();
