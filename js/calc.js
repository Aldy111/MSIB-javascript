//tugas membuat function hitung dengan kondisi switch dimana nilai yang di input harus berupa angka

function hitung(tombol) {//berikan parameter untuk menyimpan nilai/value yang di switch
    let frm = document.getElementById('calcForm');
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);

    switch (tombol) {
        case 'btn_tambah' :
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap Masukan angka!!");
            }
            else {
                var total = a1 + a2 ;
                frm.hasil.value = total;
            }
            break;
        case 'btn_kurang' : 
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap Masukan angka!!");
            }
            else {
                var total = a1 - a2 ;
                frm.hasil.value = total;
            }
            break;
        case 'btn_kali' :
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap Masukan angka!!");
            }
            else {
                var total = a1 * a2 ;
                frm.hasil.value = total;
            }
            break;
        case 'btn_bagi' :
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap Masukan angka!!");
            }
            else {
                var total = a1 / a2 ;
                frm.hasil.value = total;
            }
            break;
        case 'btn_pangkat' :
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap Masukan angka!!");
            }
            else {
                var total = Math.pow(a1,a2);
                frm.hasil.value = total;
            }
            break;
        default :
            break;
    }
}