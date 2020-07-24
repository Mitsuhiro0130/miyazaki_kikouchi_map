//ポップアップ部分の設定
//1月
function pop_heikinkion_01(feature, layer) {
    var num = (feature.properties['G02_017'])/10;//0.1℃単位で表示
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
//2月
function pop_heikinkion_02(feature, layer) {
    var num = (feature.properties['G02_020'])/10;//0.1℃単位で表示
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
//3月
function pop_heikinkion_03(feature, layer) {
    var num = (feature.properties['G02_023'])/10;//0.1℃単位で表示
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
//4月
function pop_heikinkion_04(feature, layer) {
    var num = (feature.properties['G02_026'])/10;//0.1℃単位で表示
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
//5月
function pop_heikinkion_05(feature, layer) {
    var num = (feature.properties['G02_029'])/10;//0.1℃単位で表示
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
//6月
function pop_heikinkion_06(feature, layer) {
    var num = (feature.properties['G02_032'])/10;//0.1℃単位で表示
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
//7月
function pop_heikinkion_07(feature, layer) {
    var num = (feature.properties['G02_035'])/10;//0.1℃単位で表示
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
//8月
function pop_heikinkion_08(feature, layer) {
    var num = (feature.properties['G02_038'])/10;//0.1℃単位で表示
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
//9月
function pop_heikinkion_09(feature, layer) {
    var num = (feature.properties['G02_041'])/10;//0.1℃単位で表示
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
//10月
function pop_heikinkion_10(feature, layer) {
    var num = (feature.properties['G02_044'])/10;//0.1℃単位で表示
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
//11月
function pop_heikinkion_11(feature, layer) {
    var num = (feature.properties['G02_047'])/10;//0.1℃単位で表示
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
//12月
function pop_heikinkion_12(feature, layer) {
    var num = (feature.properties['G02_050'])/10;//0.1℃単位で表示
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