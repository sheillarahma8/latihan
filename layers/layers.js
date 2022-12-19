var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_perdagangan1_1 = new ol.format.GeoJSON();
var features_perdagangan1_1 = format_perdagangan1_1.readFeatures(json_perdagangan1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perdagangan1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perdagangan1_1.addFeatures(features_perdagangan1_1);
var lyr_perdagangan1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_perdagangan1_1, 
                style: style_perdagangan1_1,
                interactive: true,
                title: '<img src="styles/legend/perdagangan1_1.png" /> perdagangan1'
            });
var format_sekul1_2 = new ol.format.GeoJSON();
var features_sekul1_2 = format_sekul1_2.readFeatures(json_sekul1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekul1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekul1_2.addFeatures(features_sekul1_2);
var lyr_sekul1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sekul1_2, 
                style: style_sekul1_2,
                interactive: true,
                title: '<img src="styles/legend/sekul1_2.png" /> sekul1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_perdagangan1_1.setVisible(true);lyr_sekul1_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_perdagangan1_1,lyr_sekul1_2];
lyr_perdagangan1_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'brand': 'brand', 'amenity': 'amenity', 'addr:country': 'addr:country', 'smoking': 'smoking', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'height': 'height', 'shop': 'shop', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'access:roof': 'access:roof', 'name': 'name', });
lyr_sekul1_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'sport': 'sport', 'leisure': 'leisure', 'addr:housenumber': 'addr:housenumber', 'height': 'height', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'ground_floor:height': 'ground_floor:height', 'evacuation_center': 'evacuation_center', 'phone': 'phone', 'brand': 'brand', 'name': 'name', 'amenity': 'amenity', 'type': 'type', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_perdagangan1_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'brand': '', 'amenity': '', 'addr:country': '', 'smoking': '', 'addr:postcode': '', 'addr:city': '', 'height': '', 'shop': '', 'addr:street': '', 'addr:housenumber': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'access:roof': '', 'name': '', });
lyr_sekul1_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'sport': '', 'leisure': '', 'addr:housenumber': '', 'height': '', 'addr:street': '', 'addr:postcode': '', 'ground_floor:height': '', 'evacuation_center': '', 'phone': '', 'brand': '', 'name': '', 'amenity': '', 'type': '', 'school:type_idn': '', 'operator:type': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_perdagangan1_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'brand': 'no label', 'amenity': 'no label', 'addr:country': 'no label', 'smoking': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'height': 'no label', 'shop': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'access:roof': 'no label', 'name': 'no label', });
lyr_sekul1_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'sport': 'no label', 'leisure': 'no label', 'addr:housenumber': 'no label', 'height': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'ground_floor:height': 'no label', 'evacuation_center': 'no label', 'phone': 'no label', 'brand': 'no label', 'name': 'no label', 'amenity': 'no label', 'type': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_sekul1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});