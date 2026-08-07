let kaydetButonu = document.getElementById("kaydetBtn");
let mesajAlani = document.getElementById("mesaj");

kaydetButonu.addEventListener("click", function () {
    let yeniKayit = {
        tarih: document.getElementById("tarih").value,
        paragraf: document.getElementById("paragraf").value,
        paragrafSure: document.getElementById("paragrafSure").value,
        matematik: document.getElementById("matematik").value,
        kitap: document.getElementById("kitap").value,
        proje: document.getElementById("proje").value,
        toplamSure: document.getElementById("toplamSure").value
    };

    let kayitlar = JSON.parse(localStorage.getItem("kayitlar")) || [];
    kayitlar.push(yeniKayit);
    localStorage.setItem("kayitlar", JSON.stringify(kayitlar));

    mesajAlani.textContent = "Kayıt başarıyla kaydedildi.";

    document.getElementById("tarih").value = "";
    document.getElementById("paragraf").value = "";
    document.getElementById("paragrafSure").value = "";
    document.getElementById("matematik").value = "";
    document.getElementById("kitap").value = "";
    document.getElementById("proje").value = "";
    document.getElementById("toplamSure").value = "";
});