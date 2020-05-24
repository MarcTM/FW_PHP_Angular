ohanadogs.factory("ubication_map", ['$rootScope',
function ($rootScope) {
    var service = {};
    service.cargarmap = cargarmap;
    service.marcar = marcar;
    return service;

    function cargarmap(arrArguments, $rootScope, chip = '',latlong = '') {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        function showPosition(position){
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            if (latlong) {
                latlon = new google.maps.LatLng(latlong.lat, latlong.long);
                zoom=10
            }else{
                latlon = new google.maps.LatLng(lat, lon);
                zoom=15
            }
            mapholder = document.getElementById('map');

            var myOptions = {
                center: latlon, zoom: zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false
            };
            var map = new google.maps.Map(document.getElementById("map"), myOptions);
            //var marker = new google.maps.Marker({position: latlon, map: map, title: "You are here!"});

            $rootScope.map = map;
            if (chip) {
                for (var i = 0; i < arrArguments.length; i++) {
                    marcar(map, arrArguments[i], $rootScope,chip);
                }
            }else{
                for (var i = 0; i < arrArguments.length; i++) {
                    marcar(map, arrArguments[i], $rootScope);
                }  
            }
        }

        function showError(error){
            console.log(error)
            switch (error.code){
                case error.PERMISSION_DENIED:
                    $rootScope.demo = "Denegada la peticion de Geolocalización en el navegador.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    $rootScope.demo = "La información de la localización no esta disponible.";
                    break;
                case error.TIMEOUT:
                    $rootScope.demo = "El tiempo de petición ha expirado.";
                    break;
                case error.UNKNOWN_ERROR:
                    $rootScope.demo = "Ha ocurrido un error desconocido.";
                    break;
            }
        }
    }

    function marcar(map, ubi, $rootScope, chip = '') {
        var latlon = new google.maps.LatLng(ubi.lat, ubi.longit);
        var marker = new google.maps.Marker({position: latlon, map: map, title: ubi.name, animation: null});

        marker.set('id', ubi.chip);
        marker.set('latlon', latlon);

        var infowindow = new google.maps.InfoWindow({
            content: ' <img src="'+ubi.picture+'" height="150" width="250"/><h5>' + ubi.name + '</h5><span><b>Raza:</b> ' + ubi.breed + '</span><br/><span><b>Sexo:</b> ' + ubi.sex + '</span><br/><span><b>Ciudad:</b>' + ubi.city + '</span>'
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
        if (ubi.chip === chip) {
            infowindow.open(map, marker);
        }
        $rootScope.markers.push(marker);
    }

}]);
