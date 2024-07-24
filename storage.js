class Storage{
     static addFilmToStorage(newFilm){

        let films=this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
        
        }
        
        static getFilmsFromStorage(){
            let film;
            if(localStorage.getItem('films')===null){
                film=[];
            } 
            else{
                film=JSON.parse(localStorage.getItem('films'))
            }
            return film;
        }
        static deleteFilmFromStorage(filmTitle){
            let films=this.getFilmsFromStorage();
        
            films.forEach(function (film, index) {
        
                if(film.title===filmTitle){
                    films.splice(index,1);//Arayden o indexi silme işlemi 
                }
        
            });
            localStorage.setItem("films",JSON.stringify(films));
        }
        static clearAllFilmsFromStorage(){
        
        
            localStorage.removeItem("films");
        }
}
