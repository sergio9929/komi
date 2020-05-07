const jsonPath = "http://localhost:8080//Komikilandia/comic";
document.addEventListener("DOMContentLoaded", function (event) {
    llenarcomics();
    // asd();
});

function llenarcomics() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", jsonPath + "s", true);
    rawFile.responseType = "text";
    // rawFile.overrideMimeType("text/html; charset=UTF-8");
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4 && rawFile.status === 200 || rawFile.status == 0) {
            var a = JSON.parse(rawFile.response);
            var contenido = "";
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
                    + '<div class="row m-0 align-items-center">';
                switch (a[i].genero.id) {
                    case 1:
                        contenido += '<p class="small mb-0 mr-3 text-capitalize text-info">' + a[i].genero.nombre + '</p>';
                        break;
                    case 2:
                        contenido += '<p class="small mb-0 mr-3 text-capitalize text-primary">' + a[i].genero.nombre + '</p>';
                        break;
                    case 3:
                        contenido += '<p class="small mb-0 mr-3 text-capitalize text-danger">' + a[i].genero.nombre + '</p>';
                        break;
                    case 4:
                        contenido += '<p class="small mb-0 mr-3 text-capitalize text-orange">' + a[i].genero.nombre + '</p>';
                        break;
                    case 5:
                        contenido += '<p class="small mb-0 mr-3 text-capitalize text-purple">' + a[i].genero.nombre + '</p>';
                        break;
                    case 6:
                        contenido += '<p class="small mb-0 mr-3 text-capitalize text-pink">' + a[i].genero.nombre + '</p>';
                        break;
                    case 7:
                        contenido += '<p class="small mb-0 mr-3 text-capitalize text-warning">' + a[i].genero.nombre + '</p>';
                        break;
                    case 8:
                        contenido += '<p class="small mb-0 mr-3 text-capitalize text-success">' + a[i].genero.nombre + '</p>';
                        break;
                    default:
                        // contenido += '<p class="small mb-0 mr-3 text-capitalize text-light">' + a[i].genero.nombre + '</p>';
                        break;
                }
                contenido += '<a href="#" class="btn rounded-circle puntos text-light dark4"><svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>more</title><path class="cls-1" d="M24,13.71H13.68V24H10.29V13.71H0V10.29H10.29V0h3.39V10.29H24Z" transform="translate(0)"/></svg></a>'
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

function asd() {
    $.ajax({
        url: jsonPath + "s",
        type: "GET",
        success: (a) => {
            for (let i = a.length - 1; i > 0; i--) {
                console.log(a[i])
                document.getElementById("comics").innerHTML += '<div class="col">'
                    + '<div class="card mb-5 mx-auto" style="width: 18rem;">'
                    + '<img class="card-img-top" src="' + a[i].imagen + '" alt="Card image cap">'
                    + '<div class="card-body">'
                    + '<h5 class="card-title">' + a[i].nombre + '</h5>'
                    + '<p class="card-text">' + a[i].titulo + '</p>'
                    + '<a href="#" class="btn btn-primary">Más información</a>'
                    + '</div>'
                    + '<div class="card-footer">'
                    + '<small class="text-muted">Likes: ' + a[i].num_likes + '</small>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
            }
        },
        error: (e) => {
            alert(e)
        }
    })
}
