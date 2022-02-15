import React, { useRef, useEffect } from 'react';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/SceneView';

import esriConfig from '@arcgis/core/config.js';

import '../../App.css';

esriConfig.assetsPath = './assets';

esriConfig.apiKey = "";

function ArcGIS({ modalClose }) {
    const mapDiv = useRef(null);
    let date = new Date();


    useEffect(() => {  
        if (mapDiv.current) {
            const map = new ArcGISMap({
                //basemap: 'dark-gray-vector',
                basemap: 'dark-gray-vector',
                ground: 'world-elevation'
            });

            const view = new MapView({
                map,
                container: mapDiv.current,
                //center: [-93.616, 41.589],
                zoom: 16,
                camera: {
                    position: [-93.616, 41.589, 32000],
                    //tilt: 60,
                    heading: 0
                },
                environment: {
                    starsEnabled: true,
                    atmosphereEnabled: true,
                    lighting: {
                        date: date,
                        directShadowsEnabled: true
                    }
                }
            });   
        }
    }, []);

    return (
        <div className='esriMap' ref={mapDiv}></div> 
    )
}

export default ArcGIS;