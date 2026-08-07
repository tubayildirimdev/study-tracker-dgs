let copAlani = document.getElementById("copAlani");
let copuBosaltBtn = document.getElementById("copuBosaltBtn");

function copuGoster() {
    let copKutusu = JSON.parse(localStorage.getItem("copKutusu")) || [];

    copAlani.innerHTML = "";

    if (copKutusu.length === 0) {
        copAlani.innerHTML = "<p>Çöp kutusu boş.</p>";
        return;
    }

    copKutusu.forEach(function(kayit, index) {
        copAlani.innerHTML +=
            "<div class='kayit-karti'>" +
            "<strong>Tarih:</strong> " + (kayit.tarih || "") + "<br>" +
            "<strong>Paragraf:</strong> " + (kayit.paragraf || "") + "<br>" +
            "<strong>Paragraf Süresi:</strong> " + (kayit.paragrafSure || "") + "<br>" +
            "<strong>Matematik:</strong> " + (kayit.matematik || "") + "<br>" +
            "<strong>Kitap:</strong> " + (kayit.kitap || "") + "<br>" +
            "<strong>Proje:</strong> " + (kayit.proje || "") + "<br>" +
            "<strong>Toplam Süre:</strong> " + (kayit.toplamSure || "") + "<br><br>" +
            "<button onclick='geriYukle(" + index + ")'>GERİ YÜKLE</button>" +
            "<button onclick='kaliciSil(" + index + ")'>KALICI SİL</button>" +
            "</div>";
    });
}

function geriYukle(index) {
    let copKutusu = JSON.parse(localStorage.getItem("copKutusu")) || [];
    let kayitlar = JSON.parse(localStorage.getItem("kayitlar")) || [];

    let geriGelenKayit = copKutusu.splice(index, 1)[0];
    kayitlar.push(geriGelenKayit);

    localStorage.setItem("kayitlar", JSON.stringify(kayitlar));
    localStorage.setItem("copKutusu", JSON.stringify(copKutusu));

    copuGoster();
}

function kaliciSil(index) {
    let copKutusu = JSON.parse(localStorage.getItem("copKutusu")) || [];

    copKutusu.splice(index, 1);
    localStorage.setItem("copKutusu", JSON.stringify(copKutusu));

    copuGoster();
}

copuBosaltBtn.addEventListener("click", function () {
    localStorage.removeItem("copKutusu");
    copuGoster();
});

copuGoster();