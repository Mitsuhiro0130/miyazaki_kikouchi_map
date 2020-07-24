//ポップアップ部分の設定
//1月
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
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//2月
function pop_tsukiuryo_02(feature, layer) {
    var num = (feature.properties['G02_003'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//3月
function pop_tsukiuryo_03(feature, layer) {
    var num = (feature.properties['G02_004'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//4月
function pop_tsukiuryo_04(feature, layer) {
    var num = (feature.properties['G02_005'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//5月
function pop_tsukiuryo_05(feature, layer) {
    var num = (feature.properties['G02_006'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//6月
function pop_tsukiuryo_06(feature, layer) {
    var num = (feature.properties['G02_007'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//7月
function pop_tsukiuryo_07(feature, layer) {
    var num = (feature.properties['G02_008'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//8月
function pop_tsukiuryo_08(feature, layer) {
    var num = (feature.properties['G02_009'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//9月
function pop_tsukiuryo_09(feature, layer) {
    var num = (feature.properties['G02_010'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//10月
function pop_tsukiuryo_10(feature, layer) {
    var num = (feature.properties['G02_011'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//11月
function pop_tsukiuryo_11(feature, layer) {
    var num = (feature.properties['G02_012'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}
//12月
function pop_tsukiuryo_12(feature, layer) {
    var num = (feature.properties['G02_013'])/10;//0.1mm単位で表示
    var popupContent = '<table>\
                        <thead><tr><th>場所</th><th>月雨量（mm）</th></thead>\
                        <tbody>\
                        <tr>\
                        <td>' + (feature.properties['N03_004'] !== null ? Autolinker.link(String(feature.properties['N03_004'])) : '') + '</td>\
                        <td>' + (num) + '</td>\
                        </tr>\
                        </tbody>\
                        </table>';
                        layer.bindPopup(popupContent, {maxHeight: 400});
}