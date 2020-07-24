//月雨量に応じたメッシュの着色
function style_tsukiuryo_01(feature) {
    var uryo = feature.properties['G02_002'];//月雨量をuryoにセット
    if (uryo >= 0.000000 && uryo < 500.000000 ) {
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
    if (uryo >= 500.000000 && uryo < 1000.000000 ) {
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
    if (uryo >= 1000.000000 && uryo < 1500.000000 ) {
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
    if (uryo >= 1500.000000 && uryo < 2000.000000 ) {
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
    if (uryo >= 2000.000000 && uryo < 2500.000000 ) {
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
    if (uryo >= 2500.000000 && uryo < 3000.000000 ) {
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
    if (uryo >= 3000.000000 && uryo < 3500.000000 ) {
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
    if (uryo >= 3500.000000 && uryo < 4000.000000 ) {
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
    if (uryo >= 4000.000000 && uryo < 4500.000000 ) {
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
    if (uryo >= 4500.000000){
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
//ポップアップ部分の設定
function pop_tsukiuryo_01(feature, layer) {
    var num = (feature.properties['G02_002'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});98
}