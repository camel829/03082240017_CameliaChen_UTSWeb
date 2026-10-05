// =========================================
// DATA HARGA WORKSHOP
// =========================================

// Nilai dasar biaya setiap workshop
const hargaWorkshop = {
    "Front-End Web": 75000,
    "UI/UX Design": 65000,
    "Cybersecurity Dasar": 85000
};


// =========================================
// MENGAMBIL ELEMENT HTML
// =========================================

const form = document.getElementById("registrationForm");

const errorMessage = document.getElementById("errorMessage");

const summaryCard = document.getElementById("summaryCard");
const emptySummary = document.getElementById("emptySummary");

const summaryName = document.getElementById("summaryName");
const summaryType = document.getElementById("summaryType");
const summaryWorkshop = document.getElementById("summaryWorkshop");
const summaryPrice = document.getElementById("summaryPrice");


// =========================================
// EVENT SUBMIT
// =========================================

form.addEventListener("submit", function (event) {

    // Mencegah halaman reload
    event.preventDefault();

    // Menghilangkan error sebelumnya
    errorMessage.classList.add("d-none");
    errorMessage.textContent = "";


    // =====================================
    // MENGAMBIL DATA FORM
    // =====================================

    const nama = document.getElementById("nama").value.trim();

    const email = document.getElementById("email").value.trim();

    const nohp = document.getElementById("nohp").value.trim();

    const tanggal = document.getElementById("tanggal").value;

    const sesi = document.getElementById("sesi").value;


    // Mendapatkan tipe peserta
    const tipePesertaElement =
        document.querySelector(
            'input[name="tipePeserta"]:checked'
        );

    const tipePeserta =
        tipePesertaElement
            ? tipePesertaElement.value
            : "";


    // Mendapatkan semua checkbox workshop
    const workshopElements =
        document.querySelectorAll(
            ".workshop-checkbox:checked"
        );


    // =====================================
    // VALIDASI
    // =====================================

    if (nama === "") {

        tampilkanError(
            "Nama lengkap wajib diisi."
        );

        return;
    }


    if (email === "") {

        tampilkanError(
            "Email wajib diisi."
        );

        return;
    }


    // Validasi sederhana email
    if (!email.includes("@")) {

        tampilkanError(
            "Format email tidak valid."
        );

        return;
    }


    // Validasi nomor HP
    if (!/^[0-9]{10,13}$/.test(nohp)) {

        tampilkanError(
            "Nomor HP harus berupa angka 10-13 digit."
        );

        return;
    }


    if (tanggal === "") {

        tampilkanError(
            "Tanggal hadir wajib dipilih."
        );

        return;
    }


    if (sesi === "") {

        tampilkanError(
            "Sesi workshop wajib dipilih."
        );

        return;
    }


    // Minimal satu workshop
    if (workshopElements.length === 0) {

        tampilkanError(
            "Pilih minimal satu workshop."
        );

        return;
    }


    // =====================================
    // MEMPROSES WORKSHOP
    // =====================================

    let totalBiaya = 0;

    let daftarWorkshop = [];


    // Perulangan untuk semua workshop
    workshopElements.forEach(function (workshop) {

        const namaWorkshop = workshop.value;

        daftarWorkshop.push(namaWorkshop);

        // Mengambil harga dari object
        totalBiaya += hargaWorkshop[namaWorkshop];

    });


    // =====================================
    // PERCABANGAN
    // =====================================

    // Peserta umum mendapatkan biaya tambahan
    // sebesar Rp10.000
    if (tipePeserta === "Umum") {

        totalBiaya += 10000;

    }


    // =====================================
    // MENAMPILKAN DATA KE DOM
    // =====================================

    summaryName.textContent = nama;

    summaryType.textContent = tipePeserta;


    // Menghapus daftar lama
    summaryWorkshop.innerHTML = "";


    // Perulangan menampilkan workshop
    daftarWorkshop.forEach(function (namaWorkshop) {

        const li = document.createElement("li");

        li.textContent = namaWorkshop;

        summaryWorkshop.appendChild(li);

    });


    // Menampilkan total harga
    summaryPrice.textContent =
        formatRupiah(totalBiaya);


    // Menampilkan ringkasan
    summaryCard.classList.remove("d-none");

    emptySummary.classList.add("d-none");


    // Scroll menuju ringkasan pada layar kecil
    if (window.innerWidth < 992) {

        summaryCard.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});


// =========================================
// FUNCTION MENAMPILKAN ERROR
// =========================================

function tampilkanError(pesan) {

    errorMessage.textContent = pesan;

    errorMessage.classList.remove("d-none");

    errorMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// =========================================
// FUNCTION FORMAT RUPIAH
// =========================================

function formatRupiah(angka) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }
    ).format(angka);

}
