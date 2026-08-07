function cikisYap() {

    let cevap = confirm("Çıkış yapmak istediğinize emin misiniz?");

    if (cevap) {

        localStorage.removeItem("giris");

        window.location.href = "index.html";

    }

}