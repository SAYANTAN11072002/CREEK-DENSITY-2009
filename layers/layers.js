var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_LINE_DENSITY_2009_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LINE_DENSITY_2009<br />\
    <img src="styles/legend/LINE_DENSITY_2009_1_0.png" /> 0.0000<br />\
    <img src="styles/legend/LINE_DENSITY_2009_1_1.png" /> 147.5797<br />\
    <img src="styles/legend/LINE_DENSITY_2009_1_2.png" /> 318.7198<br />\
    <img src="styles/legend/LINE_DENSITY_2009_1_3.png" /> 1157.7390<br />\
    <img src="styles/legend/LINE_DENSITY_2009_1_4.png" /> 4186.7057<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LINE_DENSITY_2009_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [9813609.472618, 2456169.264777, 9918806.112984, 2538369.800575]
        })
    });
var format_HIGH_DENSE_CREEK_2009_2 = new ol.format.GeoJSON();
var features_HIGH_DENSE_CREEK_2009_2 = format_HIGH_DENSE_CREEK_2009_2.readFeatures(json_HIGH_DENSE_CREEK_2009_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIGH_DENSE_CREEK_2009_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIGH_DENSE_CREEK_2009_2.addFeatures(features_HIGH_DENSE_CREEK_2009_2);
var lyr_HIGH_DENSE_CREEK_2009_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIGH_DENSE_CREEK_2009_2, 
                style: style_HIGH_DENSE_CREEK_2009_2,
                popuplayertitle: 'HIGH_DENSE_CREEK_2009',
                interactive: true,
                title: '<img src="styles/legend/HIGH_DENSE_CREEK_2009_2.png" /> HIGH_DENSE_CREEK_2009'
            });
var format_LOW_DENSE_CREEK_2009_3 = new ol.format.GeoJSON();
var features_LOW_DENSE_CREEK_2009_3 = format_LOW_DENSE_CREEK_2009_3.readFeatures(json_LOW_DENSE_CREEK_2009_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOW_DENSE_CREEK_2009_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOW_DENSE_CREEK_2009_3.addFeatures(features_LOW_DENSE_CREEK_2009_3);
var lyr_LOW_DENSE_CREEK_2009_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOW_DENSE_CREEK_2009_3, 
                style: style_LOW_DENSE_CREEK_2009_3,
                popuplayertitle: 'LOW_DENSE_CREEK_2009',
                interactive: true,
                title: '<img src="styles/legend/LOW_DENSE_CREEK_2009_3.png" /> LOW_DENSE_CREEK_2009'
            });
var format_MODERATE_DENSE_CREEK_2009_4 = new ol.format.GeoJSON();
var features_MODERATE_DENSE_CREEK_2009_4 = format_MODERATE_DENSE_CREEK_2009_4.readFeatures(json_MODERATE_DENSE_CREEK_2009_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MODERATE_DENSE_CREEK_2009_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MODERATE_DENSE_CREEK_2009_4.addFeatures(features_MODERATE_DENSE_CREEK_2009_4);
var lyr_MODERATE_DENSE_CREEK_2009_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MODERATE_DENSE_CREEK_2009_4, 
                style: style_MODERATE_DENSE_CREEK_2009_4,
                popuplayertitle: 'MODERATE_DENSE_CREEK_2009',
                interactive: true,
                title: '<img src="styles/legend/MODERATE_DENSE_CREEK_2009_4.png" /> MODERATE_DENSE_CREEK_2009'
            });
var format_VERY_HIGH_DENSE_CREEK_2009_5 = new ol.format.GeoJSON();
var features_VERY_HIGH_DENSE_CREEK_2009_5 = format_VERY_HIGH_DENSE_CREEK_2009_5.readFeatures(json_VERY_HIGH_DENSE_CREEK_2009_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VERY_HIGH_DENSE_CREEK_2009_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERY_HIGH_DENSE_CREEK_2009_5.addFeatures(features_VERY_HIGH_DENSE_CREEK_2009_5);
var lyr_VERY_HIGH_DENSE_CREEK_2009_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VERY_HIGH_DENSE_CREEK_2009_5, 
                style: style_VERY_HIGH_DENSE_CREEK_2009_5,
                popuplayertitle: 'VERY_HIGH_DENSE_CREEK_2009',
                interactive: true,
                title: '<img src="styles/legend/VERY_HIGH_DENSE_CREEK_2009_5.png" /> VERY_HIGH_DENSE_CREEK_2009'
            });
var format_VERY_LOW_DENSE_CREEK_2009_6 = new ol.format.GeoJSON();
var features_VERY_LOW_DENSE_CREEK_2009_6 = format_VERY_LOW_DENSE_CREEK_2009_6.readFeatures(json_VERY_LOW_DENSE_CREEK_2009_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VERY_LOW_DENSE_CREEK_2009_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERY_LOW_DENSE_CREEK_2009_6.addFeatures(features_VERY_LOW_DENSE_CREEK_2009_6);
var lyr_VERY_LOW_DENSE_CREEK_2009_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VERY_LOW_DENSE_CREEK_2009_6, 
                style: style_VERY_LOW_DENSE_CREEK_2009_6,
                popuplayertitle: 'VERY_LOW_DENSE_CREEK_2009',
                interactive: true,
                title: '<img src="styles/legend/VERY_LOW_DENSE_CREEK_2009_6.png" /> VERY_LOW_DENSE_CREEK_2009'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_LINE_DENSITY_2009_1.setVisible(true);lyr_HIGH_DENSE_CREEK_2009_2.setVisible(true);lyr_LOW_DENSE_CREEK_2009_3.setVisible(true);lyr_MODERATE_DENSE_CREEK_2009_4.setVisible(true);lyr_VERY_HIGH_DENSE_CREEK_2009_5.setVisible(true);lyr_VERY_LOW_DENSE_CREEK_2009_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_LINE_DENSITY_2009_1,lyr_HIGH_DENSE_CREEK_2009_2,lyr_LOW_DENSE_CREEK_2009_3,lyr_MODERATE_DENSE_CREEK_2009_4,lyr_VERY_HIGH_DENSE_CREEK_2009_5,lyr_VERY_LOW_DENSE_CREEK_2009_6];
lyr_HIGH_DENSE_CREEK_2009_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA': 'AREA', });
lyr_LOW_DENSE_CREEK_2009_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA': 'AREA', });
lyr_MODERATE_DENSE_CREEK_2009_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA': 'AREA', });
lyr_VERY_HIGH_DENSE_CREEK_2009_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA': 'AREA', });
lyr_VERY_LOW_DENSE_CREEK_2009_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA': 'AREA', });
lyr_HIGH_DENSE_CREEK_2009_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA': 'TextEdit', });
lyr_LOW_DENSE_CREEK_2009_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA': 'TextEdit', });
lyr_MODERATE_DENSE_CREEK_2009_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA': 'TextEdit', });
lyr_VERY_HIGH_DENSE_CREEK_2009_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA': 'TextEdit', });
lyr_VERY_LOW_DENSE_CREEK_2009_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA': 'TextEdit', });
lyr_HIGH_DENSE_CREEK_2009_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'AREA': 'inline label - visible with data', });
lyr_LOW_DENSE_CREEK_2009_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'AREA': 'inline label - visible with data', });
lyr_MODERATE_DENSE_CREEK_2009_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'AREA': 'inline label - visible with data', });
lyr_VERY_HIGH_DENSE_CREEK_2009_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'AREA': 'inline label - visible with data', });
lyr_VERY_LOW_DENSE_CREEK_2009_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'gridcode': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'AREA': 'inline label - visible with data', });
lyr_VERY_LOW_DENSE_CREEK_2009_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});