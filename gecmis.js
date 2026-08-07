let gecmisAlani = document.getElementById("gecmisAlani");

function gecmisiGoster() {
    let kayitlar = JSON.parse(localStorage.getItem("kayitlar")) || [];

    gecmisAlani.innerHTML = "";

    if (kayitlar.length === 0) {
        gecmisAlani.innerHTML = "<p>Henüz kayıt yok.</p>";
        return;
    }

    kayitlar.forEach(function(kayit, index) {
        gecmisAlani.innerHTML +=
            "<div class='kayit-karti'>" +
            "<strong>Tarih:</strong> " + (kayit.tarih || "") + "<br>" +
            "<strong>Paragraf:</strong> " + (kayit.paragraf || "") + "<br>" +
            "<strong>Paragraf Süresi:</strong> " + (kayit.paragrafSure || "") + "<br>" +
            "<strong>Matematik:</strong> " + (kayit.matematik || "") + "<br>" +
            "<strong>Kitap:</strong> " + (kayit.kitap || "") + "<br>" +
            "<strong>Proje:</strong> " + (kayit.proje || "") + "<br>" +
            "<strong>Toplam Süre:</strong> " + (kayit.toplamSure || "") + "<br><br>" +
            "<button onclick='copeTasi(" + index + ")'>ÇÖP KUTUSUNA TAŞI</button>" +
            "</div>";
    });
}

function copeTasi(index) {
    let kayitlar = JSON.parse(localStorage.getItem("kayitlar")) || [];
    let copKutusu = JSON.parse(localStorage.getItem("copKutusu")) || [];

    let silinenKayit = kayitlar.splice(index, 1)[0];

    silinenKayit.silinmeTarihi = new Date().toLocaleString("tr-TR");

    copKutusu.push(silinenKayit);

    localStorage.setItem("kayitlar", JSON.stringify(kayitlar));
    localStorage.setItem("copKutusu", JSON.stringify(copKutusu));

    gecmisiGoster();
}

gecmisiGoster();