document.addEventListener("DOMContentLoaded", function() {
   const buttons = document.querySelectorAll(".tab-bth");
   const contents = document.querySelectorAll(".tab.content");

   buttons.forEach(button => {
    button.addEventListener("click", function () {
        //Usuwamy aktywne klasy
        buttons.forEach(bth => bth.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"))

        //Dodajemy aktywny klas wybrnej karcie
        this.classList.add("active");
        document.getElementById(this.dataset.tab).classList.add("active");
    });
   });
});