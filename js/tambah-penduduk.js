const API_URL =
"https://script.google.com/macros/s/AKfycbx_7IcjH61WK90ffxDRmrLA0YUGVy2Ra6ioTY4FK7MpDUS7odGcRFIH-8QRz4Bdk-Rf7w/exec";
async function ambilDataKK(){

    alert("fungsi ambilDataKK jalan");
    
    const noKK =
    document.getElementById("no_kk").value;

    const response =
    await fetch(
        API_URL +
        "?action=getKK&no_kk=" +
        noKK
    );

    const hasil =
    await response.json();

    if(!hasil.status){
        return;
    }

    document.getElementById("alamat").value =
    hasil.data.alamat;

    document.getElementById("rt").value =
    hasil.data.rt;

    document.getElementById("rw").value =
    hasil.data.rw;

    document.getElementById("dusun").value =
    hasil.data.dusun;

    document.getElementById("desa").value =
    hasil.data.desa;

    document.getElementById("kecamatan").value =
    hasil.data.kecamatan;

    document.getElementById("kabupaten").value =
    hasil.data.kabupaten;

    document.getElementById("no_hp").value =
    hasil.data.no_hp;

}

async function simpanPenduduk(){

    const payload = {

    nik: document.getElementById("nik").value,
    no_kk: document.getElementById("no_kk").value,
    nama: document.getElementById("nama").value,
    jk: document.getElementById("jk").value,

    tempat_lahir:
    document.getElementById("tempat_lahir").value,

    tanggal_lahir:
    document.getElementById("tanggal_lahir").value,

    agama:
    document.getElementById("agama").value,

    pendidikan:
    document.getElementById("pendidikan").value,

    pekerjaan:
    document.getElementById("pekerjaan").value,

    status_kawin:
    document.getElementById("status_kawin").value,

    status_hubungan:
    document.getElementById("status_hubungan").value,

    kewarganegaraan:
    document.getElementById("kewarganegaraan").value,

    alamat:
    document.getElementById("alamat").value,

    rt:
    document.getElementById("rt").value,

    rw:
    document.getElementById("rw").value,

    dusun:
    document.getElementById("dusun").value,

    desa:
    document.getElementById("desa").value,

    kecamatan:
    document.getElementById("kecamatan").value,

    kabupaten:
    document.getElementById("kabupaten").value,

    status_penduduk:
    document.getElementById("status_penduduk").value,

    no_hp:
    document.getElementById("no_hp").value,

    bpjs:
    document.getElementById("bpjs").value,

    koordinat_rumah:
    document.getElementById("koordinat_rumah").value,

    foto_rumah:
    document.getElementById("foto_rumah").value

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

    document.querySelectorAll("input").forEach(
        input => input.value = ""
    );

    document.getElementById("jk").selectedIndex = 0;
    document.getElementById("agama").selectedIndex = 0;
    document.getElementById("status_kawin").selectedIndex = 0;
    document.getElementById("status_hubungan").selectedIndex = 0;
    document.getElementById("kewarganegaraan").selectedIndex = 0;
    document.getElementById("status_penduduk").selectedIndex = 0;

    document.getElementById("nik").focus();
}

}
