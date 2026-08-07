let girisBtn = document.getElementById("girisBtn");
let girisMesaj = document.getElementById("girisMesaj");

girisBtn.addEventListener("click", function () {
    let kullaniciAdi = document.getElementById("kullaniciAdi").value;
    let sifre = document.getElementById("sifre").value;

    if (kullaniciAdi === "admin" && sifre === "admin1234") {
        window.location.href = "anasayfa.html";
    } else {
        girisMesaj.textContent = "Kullanıcı adı veya şifre hatalı.";
    }
});