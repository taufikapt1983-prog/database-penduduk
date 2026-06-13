const API_URL =
"https://script.google.com/macros/s/AKfycbx_7IcjH61WK90ffxDRmrLA0YUGVy2Ra6ioTY4FK7MpDUS7odGcRFIH-8QRz4Bdk-Rf7w/exec";

async function simpanPenduduk(){

    const payload = {

        nik :
        document.getElementById("nik").value,

        no_kk :
        document.getElementById("no_kk").value,

        nama :
        document.getElementById("nama").value,

        jk :
        document.getElementById("jk").value,

        tempat_lahir:"",
        tanggal_lahir:"",
        agama:"",
        pendidikan:"",
        pekerjaan:"",
        status_kawin:"",
        status_hubungan:"",
        kewarganegaraan:"WNI",
        alamat:"",
        rt:"",
        rw:"",
        dusun:"",
        desa:"",
        kecamatan:"",
        kabupaten:"",
        no_hp:"",
        bpjs:"",
        koordinat_rumah:""

    };

    const response = await fetch(

        API_URL +
        "?action=tambahPenduduk",

        {
            method:"POST",
            body:JSON.stringify(payload)
        }

    );

    const data =
    await response.json();

    document.getElementById("hasil")
    .innerHTML =
    data.pesan;

    if(data.status){

    document.getElementById("nik").value = "";
    document.getElementById("no_kk").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("jk").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("rt").value = "";
    document.getElementById("rw").value = "";
    document.getElementById("dusun").value = "";
    document.getElementById("desa").value = "";
    document.getElementById("kecamatan").value = "";
    document.getElementById("kabupaten").value = "";
    document.getElementById("no_hp").value = "";

    document.getElementById("no_kk").focus();

}
