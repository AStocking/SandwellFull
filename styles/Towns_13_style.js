var size = 0;
var placement = 'point';

var style_Towns_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "28.6px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Town") !== null) {
        labelText = String(feature.get("Town"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,223,138,1.0)', lineDash: [12.616,6.308], lineCap: 'butt', lineJoin: 'miter', width: 6.308}),fill: new ol.style.Fill({color: 'rgba(213,180,60,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
