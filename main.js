require(["esri/Map",
        "esri/views/MapView",
        "esri/layers/Layer" //Need portal layer not public arcgis online
    ],
    function(
        Map,
        MapView,
        layer

    ) {

        // Create a basemap and set properties in map constructor. Try changing to various basemaps
        // streets, satellite, hybrid, topo, gray, dark-gray, oceans, national-geographic, terrain
        // osm, dark-gray-vector, gray-vector, streets-vector, topo-vector, streets-night-vector
        // streets-relief-vector, streets-navigation-vector

        var map = new Map({
            basemap: "streets-navigation-vector"
        });

        var view = new MapView({
            container: "viewDiv",
            map: map,
            zoom: 7.5,
            center: [-79, 38] // longitude, latitude
        });

        //add layer from enterprise portal??
        var VACounties = new FeatureLayer({
            url: "https://cadgis.vsp.virginia.gov/hosting/rest/services/Hosted/VACounties/FeatureServer/0?token=3gk7K3qWQhTlxxJdHmwOZHWw79HwjSvcKmchcumfV-37ihqMjkr7xiG6LOP46FI9xGbg1Hk2QL8cTRX4gt_JLTCg5yY0aziTyYzHnP8_TCOt2B3nigQN_cnd_ErGCP9ZymfxVbMeBFwyzqvPKvI7vT3FGXKS8CKXsHxDbtXwuyMk8b2TbQIbbdDyF637tpcIpIct82d5-WYtVbtlXt3wFOQqN1ddR1zDh1ZmFIKDEt1YXLuh_cNj5acOrx2MLxEm"
        });

        map.add(VACounties, 0);

    });