//気温に応じたメッシュの着色
function style_heikinkion_00(temp) {
    if (temp >= -200.000000 && temp <= -50.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(0,32,128)',
        }
    }
    if (temp >= -50.000000 && temp <= 0.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(0,65,255)',
        }
    }
    if (temp >= 0.000000 && temp <= 50.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(0,150,255)',
        }
    }
    if (temp >= 50.000000 && temp <= 100.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(185,235,255)',
        }
    }
    if (temp >= 100.000000 && temp <= 150.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(255,255,240)',
        }
    }
    if (temp >= 150.000000 && temp <= 200.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(255,255,150)',
        }
    }
    if (temp >= 200.000000 && temp <= 250.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(250,245,0)',
        }
    }
    if (temp >= 250.000000 && temp <= 300.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(255,153,0)',
        }
    }
    if (temp >= 300.000000 && temp <= 350.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(255,40,0)',
        }
    }
    if (temp >= 350.000000 && temp <= 400.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgb(0,0,0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgb(180,0,104)',
        }
    }
}