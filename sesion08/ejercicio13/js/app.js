function mapGoogle() {
    // latitud y longuitud
    var coordenada = {
        lat: -11.1212614, 
        lng: -77.597215
    };

    // del objeto google.maps. accedemos a tu método Map()
    var mapa = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 15,
            center: coordenada
        }
    );

    // marcador google
    var clip = new google.maps.Marker({
        position: coordenada, 
        map: mapa
    });

}