//気温に応じたメッシュの着色
function style_heikinkion_05(feature) {
    var temp = feature.properties['G02_029'];//平均気温をtempにセット
    if (temp >= -200.000000 && temp <= -50.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(0,32,128,1.0)',
        }
    }
    if (temp >= -50.000000 && temp <= 0.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(0,65,255,1.0)',
        }
    }
    if (temp >= 0.000000 && temp <= 50.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(0,150,255,1.0)',
        }
    }
    if (temp >= 50.000000 && temp <= 100.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(185,235,255,1.0)',
        }
    }
    if (temp >= 100.000000 && temp <= 150.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(255,255,240,1.0)',
        }
    }
    if (temp >= 150.000000 && temp <= 200.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(255,255,150,1.0)',
        }
    }
    if (temp >= 200.000000 && temp <= 250.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(250,245,0,1.0)',
        }
    }
    if (temp >= 250.000000 && temp <= 300.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(255,153,0,1.0)',
        }
    }
    if (temp >= 300.000000 && temp <= 350.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1, 
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(255,40,0,1.0)',
        }
    }
    if (temp >= 350.000000 && temp <= 400.000000 ) {
        return {
            pane: 'pane_miyazakikikouchi_0',
            opacity: 0.2,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1, 
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(180,0,104,1.0)',
        }
    }
}
//ポップアップ部分の設定
function pop_heikinkion_05(feature, layer) {
    var num = Math.round( feature.properties['G02_029']*0.1 );//１℃単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>平均気温（℃）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});98
}