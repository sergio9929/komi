const jsonPath = "data.json";
document.addEventListener("DOMContentLoaded", function (event) {
    llenarcomics();
});

function llenarcomics() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", jsonPath, true);
    rawFile.responseType = "text";
    // rawFile.overrideMimeType("text/html; charset=UTF-8");
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4 && rawFile.status === 200 || rawFile.status == 0) {
            var a = JSON.parse(rawFile.response);
            var contenido = "";
            var genero_color = ["light", "info", "primary", "danger", "orange", "purple", "pink", "warning", "success"];
            for (let i = 0; i < a.length; i++) {
                contenido += '<div class="card border-0 bg-none px-2 mb-4 mx-auto">'
                    + '<div class="card light overflow-hidden h-100" style="width: 19rem;">'
                    + '<img class="card-img-top mx-5" src="' + a[i].imagen + '" alt="Card image cap">'
                    + '<div class="card-body">'
                    + '<h5 class="card-title">' + a[i].nombre + '</h5>'
                    + '<p class="card-text">' + a[i].titulo + '</p>'
                    + '<p class="text-muted small text-right">#' + a[i].num + '</p>'
                    + '</div>'
                    + '<div class="card-footer dark2 d-flex justify-content-between align-items-center">'
                    + '<small class="text-muted">Likes: ';
                contenido += parseInt(a[i].num_likes) >= 1000 ? Math.round(parseInt(a[i].num_likes) / 100) / 10 + "k" : a[i].num_likes;
                contenido += '</small>'
                    + '<div class="row m-0 align-items-center">'
                    + '<p class="small mb-0 mr-3 text-capitalize text-' + genero_color[a[i].genero.id] + '">' + a[i].genero.nombre + '</p>'
                    + '<a href="#" class="btn rounded-circle mas text-light dark4"><svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>more</title><path class="cls-1" d="M24,13.71H13.68V24H10.29V13.71H0V10.29H10.29V0h3.39V10.29H24Z" transform="translate(0)"/></svg></a>'
                    + '</div>'
                    + '</div>'
                    + '<img src="' + a[i].imagen + '" alt="" class="imagen h-100 w-100">'
                    + '</div>'
                    + '</div>';
                document.getElementById("comics").innerHTML = contenido;
            }
        }
    }
    rawFile.send(null);
}