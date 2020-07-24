//月雨量全体のメッシュの着色
function style_tsukiuryo_00(uryo0) {
    if (uryo0 >= 0.000000 && uryo0 < 500.000000 ) {
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
            fillColor: 'rgb(242,242,255)',
        }
    }
    if (uryo0 >= 500.000000 && uryo0 < 1000.000000 ) {
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
            fillColor: 'rgb(160,210,255)',
        }
    }
    if (uryo0 >= 1000.000000 && uryo0 < 1500.000000 ) {
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
            fillColor: 'rgb(33,140,255)',
        }
    }
    if (uryo0 >= 1500.000000 && uryo0 < 2000.000000 ) {
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
    if (uryo0 >= 2000.000000 && uryo0 < 2500.000000 ) {
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
            fillColor: 'rgb(250,250,150)',
        }
    }
    if (uryo0 >= 2500.000000 && uryo0 < 3000.000000 ) {
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
    if (uryo0 >= 3000.000000 && uryo0 < 3500.000000 ) {
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
            fillColor: 'rgb(255,200,0)',
        }
    }
    if (uryo0 >= 3500.000000 && uryo0 < 4000.000000 ) {
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
    if (uryo0 >= 4000.000000 && uryo0 < 4500.000000 ) {
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
    if (uryo0 >= 4500.000000) {
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