
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directionElement = document.querySelector("#direction");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");






eventListener();

function eventListener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        //Sayfaya yüklendiğinde localStorage'dan verileri al ve göster
        const films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);

    });
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener('click',clearAllFilms);

}
function addFilm(e) {

    const title = titleElement.value;
    const direction = directionElement.value;
    const url = urlElement.value;

    if (title === "" || direction === "" || url === "") {
        //hata
        UI.displayMessages("Tüm Alanları Doldurun !!!", "danger");


    } else {
        //Yeni Film
        const newFilm = new Film(title, direction, url);



        UI.addFilmToUI(newFilm);//arayüze film ekleme
        Storage.addFilmToStorage(newFilm);//storage a film ekleme
        UI.displayMessages("Film Başarıyla Eklendi...", "success")
    }

    UI.clearInput(titleElement, directionElement, urlElement);

    e.preventDefault();
}
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        //Filmin adını alıyoruz aşağıda parent elemene gidip onun kardeşinden sonraki kardeşini alıyoruz bu yolla
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme İşlemi Başarılı...", "success");


    }
}

function clearAllFilms(){
if(confirm("Tüm Filimleri Silmek İstediğinize Emin misiniz?")){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}
}
