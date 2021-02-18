require(["esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/identity/OAuthInfo",
        "esri/identity/IdentityManager" //Need portal layer not public arcgis online
    ],
    function(
        Map,
        MapView,
        FeatureLayer,
        OAuthInfo,
        esriId
    ) {
        var oAuthInfo = new OAuthInfo({
                appId: "arxKMruq0IkRWQ2z",
                portalUrl: "https://cadgis.vsp.virginia.gov/portal"
        });
        esriId.registerOAuthInfos([oAuthInfo]);
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
            url: "https://cadgis.vsp.virginia.gov/hosting/rest/services/Hosted/VACounties/FeatureServer/0"
        });

        map.add(VACounties, 0);

    });
