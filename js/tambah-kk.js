const API_URL = "URL_WEBAPP_ANDA";

async function simpanKK(){

    const payload = {

        no_kk : document.getElementById("no_kk").value,
        kepala_keluarga : document.getElementById("kepala_keluarga").value,
        alamat : document.getElementById("alamat").value,
        rt : document.getElementById("rt").value,
        rw : document.getElementById("rw").value,
        dusun : document.getElementById("dusun").value,
        desa : document.getElementById("desa").value,
        kecamatan : document.getElementById("kecamatan").value,
        kabupaten : document.getElementById("kabupaten").value,
        jumlah_anggota : 0,
        no_hp : document.getElementById("no_hp").value

    };

    const response = await fetch(
        API_URL + "?action=tambahKK",
        {
            method:"POST",
            body:JSON.stringify(payload)
        }
    );

    const data = await response.json();

    document.getElementById("hasil").innerHTML =
    data.pesan;

    if(data.status){

    document.getElementById("no_kk").value = "";
    document.getElementById("kepala_keluarga").value = "";
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
