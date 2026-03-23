var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_OM_1 = new ol.format.GeoJSON();
var features_OM_1 = format_OM_1.readFeatures(json_OM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OM_1.addFeatures(features_OM_1);
var lyr_OM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OM_1, 
                style: style_OM_1,
                popuplayertitle: 'Княжівський OM копия',
                interactive: true,
    title: 'Княжівський OM копия<br />\
    <img src="styles/legend/OM_1_0.png" /> 6 - 8<br />\
    <img src="styles/legend/OM_1_1.png" /> 8 - 8<br />\
    <img src="styles/legend/OM_1_2.png" /> 8 - 9<br />\
    <img src="styles/legend/OM_1_3.png" /> 9 - 9<br />\
    <img src="styles/legend/OM_1_4.png" /> 9 - 10<br />\
    <img src="styles/legend/OM_1_5.png" /> 10 - 11<br />\
    <img src="styles/legend/OM_1_6.png" /> 11 - 12<br />\
    <img src="styles/legend/OM_1_7.png" /> 12 - 13<br />\
    <img src="styles/legend/OM_1_8.png" /> 13 - 15<br />\
    <img src="styles/legend/OM_1_9.png" /> 15 - 17<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_OM_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OM_1];
lyr_OM_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Field': 'Field', 'Obj__Id': 'Obj__Id', 'Sample_ID': 'Sample_ID', 'pH_H2O__un': 'pH_H2O__un', 'Soil_OM___': 'Soil_OM___', 'Cond_mS_': 'Cond_mS_', 'NO3_N_ppm_': 'NO3_N_ppm_', 'SO4_S_ppm_': 'SO4_S_ppm_', 'Soil_K_ppm': 'Soil_K_ppm', 'Soil_CA_pp': 'Soil_CA_pp', 'Soil_MG_pp': 'Soil_MG_pp', 'Soil_NA_pp': 'Soil_NA_pp', 'EKO_meq_10': 'EKO_meq_10', 'Soil_ZN_pp': 'Soil_ZN_pp', 'Soil_MN_pp': 'Soil_MN_pp', 'Soil_CU_pp': 'Soil_CU_pp', 'Soil_FE_pp': 'Soil_FE_pp', 'Soil_B_ppm': 'Soil_B_ppm', 'Soil_MO_pp': 'Soil_MO_pp', '________': '________', 'Rec_N_kg_h': 'Rec_N_kg_h', 'Rec_P2O5_k': 'Rec_P2O5_k', 'Rec_K2O_kg': 'Rec_K2O_kg', 'Rec_MG_kg_': 'Rec_MG_kg_', 'Rec_Zn_kg_': 'Rec_Zn_kg_', 'Rec_Mn_kg_': 'Rec_Mn_kg_', 'Rec_CU_kg_': 'Rec_CU_kg_', 'Rec_B_kg_h': 'Rec_B_kg_h', 'Rec_S_kg_h': 'Rec_S_kg_h', 'Rec_FE_kg_': 'Rec_FE_kg_', 'Rec_Lime_t': 'Rec_Lime_t', '_____t_ha_': '_____t_ha_', 'Cond_mS__1': 'Cond_mS__1', 'Obj__Id_1': 'Obj__Id_1', 'layer': 'layer', 'path': 'path', });
lyr_OM_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Field': 'TextEdit', 'Obj__Id': 'TextEdit', 'Sample_ID': 'TextEdit', 'pH_H2O__un': 'TextEdit', 'Soil_OM___': 'TextEdit', 'Cond_mS_': 'TextEdit', 'NO3_N_ppm_': 'TextEdit', 'SO4_S_ppm_': 'TextEdit', 'Soil_K_ppm': 'TextEdit', 'Soil_CA_pp': 'TextEdit', 'Soil_MG_pp': 'TextEdit', 'Soil_NA_pp': 'TextEdit', 'EKO_meq_10': 'TextEdit', 'Soil_ZN_pp': 'TextEdit', 'Soil_MN_pp': 'TextEdit', 'Soil_CU_pp': 'TextEdit', 'Soil_FE_pp': 'TextEdit', 'Soil_B_ppm': 'TextEdit', 'Soil_MO_pp': 'TextEdit', '________': 'TextEdit', 'Rec_N_kg_h': 'TextEdit', 'Rec_P2O5_k': 'TextEdit', 'Rec_K2O_kg': 'TextEdit', 'Rec_MG_kg_': 'TextEdit', 'Rec_Zn_kg_': 'TextEdit', 'Rec_Mn_kg_': 'TextEdit', 'Rec_CU_kg_': 'TextEdit', 'Rec_B_kg_h': 'TextEdit', 'Rec_S_kg_h': 'TextEdit', 'Rec_FE_kg_': 'TextEdit', 'Rec_Lime_t': 'TextEdit', '_____t_ha_': 'TextEdit', 'Cond_mS__1': 'TextEdit', 'Obj__Id_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_OM_1.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Field': 'hidden field', 'Obj__Id': 'hidden field', 'Sample_ID': 'hidden field', 'pH_H2O__un': 'hidden field', 'Soil_OM___': 'inline label - visible with data', 'Cond_mS_': 'hidden field', 'NO3_N_ppm_': 'hidden field', 'SO4_S_ppm_': 'hidden field', 'Soil_K_ppm': 'hidden field', 'Soil_CA_pp': 'hidden field', 'Soil_MG_pp': 'hidden field', 'Soil_NA_pp': 'hidden field', 'EKO_meq_10': 'hidden field', 'Soil_ZN_pp': 'hidden field', 'Soil_MN_pp': 'hidden field', 'Soil_CU_pp': 'hidden field', 'Soil_FE_pp': 'hidden field', 'Soil_B_ppm': 'hidden field', 'Soil_MO_pp': 'hidden field', '________': 'hidden field', 'Rec_N_kg_h': 'hidden field', 'Rec_P2O5_k': 'hidden field', 'Rec_K2O_kg': 'hidden field', 'Rec_MG_kg_': 'hidden field', 'Rec_Zn_kg_': 'hidden field', 'Rec_Mn_kg_': 'hidden field', 'Rec_CU_kg_': 'hidden field', 'Rec_B_kg_h': 'hidden field', 'Rec_S_kg_h': 'hidden field', 'Rec_FE_kg_': 'hidden field', 'Rec_Lime_t': 'hidden field', '_____t_ha_': 'hidden field', 'Cond_mS__1': 'hidden field', 'Obj__Id_1': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_OM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});