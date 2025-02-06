var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1 = new ol.format.GeoJSON();
var features_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1 = format_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1.readFeatures(json_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1.addFeatures(features_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1);
var lyr_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1, 
                style: style_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1,
                popuplayertitle: 'KotawaringinTimur — RBI50K_KOTAWARINGIN TIMUR_KUGI50.gdb/a00000051.gdbtable',
                interactive: true,
    title: 'KotawaringinTimur — RBI50K_KOTAWARINGIN TIMUR_KUGI50.gdb/a00000051.gdbtable<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_0.png" />  <br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_1.png" /> Babirah<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_2.png" /> Baligau<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_3.png" /> Basawang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_4.png" /> Batuagung<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_5.png" /> Batubango<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_6.png" /> Bukitindah<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_7.png" /> Bumi Hutani Lestari<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_8.png" /> Bumihutanilestari<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_9.png" /> Buntutleleng<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_10.png" /> Camp Karyawan PT BUM 04<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_11.png" /> Camp Karyawan PT BUM 06<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_12.png" /> Campagamulia<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_13.png" /> Campakamulia Barat<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_14.png" /> Danau Asem<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_15.png" /> Danau Baampah<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_16.png" /> Danau Bakong<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_17.png" /> Danau Bakung<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_18.png" /> Danau Batu<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_19.png" /> Danau Bendera<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_20.png" /> Danau Burung<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_21.png" /> Danau Centang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_22.png" /> Danau Danahen<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_23.png" /> Danau Gunting<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_24.png" /> Danau Halaban<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_25.png" /> Danau Haur<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_26.png" /> Danau Hiram<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_27.png" /> Danau Kubur<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_28.png" /> Danau Kujang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_29.png" /> Danau Lawangkatok<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_30.png" /> Danau Lento<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_31.png" /> Danau Medan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_32.png" /> Danau Nanjian<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_33.png" /> Danau Negara<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_34.png" /> Danau Pamalasan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_35.png" /> Danau Panjang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_36.png" /> Danau Pelacar<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_37.png" /> Danau Pematakan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_38.png" /> Danau Pemisah<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_39.png" /> Danau Rasau<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_40.png" /> Danau Rungun<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_41.png" /> Danau Sampiding<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_42.png" /> Danau Sandung<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_43.png" /> Danau Sarai<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_44.png" /> Danau Sembuluh<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_45.png" /> Divisi Dua<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_46.png" /> Divisi Satu<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_47.png" /> Gunungagung<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_48.png" /> Hantipan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_49.png" /> Jabuk<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_50.png" /> Kalampan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_51.png" /> Kalanaman<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_52.png" /> Kalang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_53.png" /> Karyamakmurbahagia<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_54.png" /> Kempeng<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_55.png" /> Keragaan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_56.png" /> Km 38<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_57.png" /> Kulukkeleng<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_58.png" /> Kuluktelawang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_59.png" /> Luwukowan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_60.png" /> Luwuksampun<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_61.png" /> Mekarsari<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_62.png" /> Merah<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_63.png" /> Mulyaagung<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_64.png" /> Pantaiharapan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_65.png" /> Panyahuan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_66.png" /> Pelabuhan Udara Perintis Haji Asan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_67.png" /> Pendatagaring Lama<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_68.png" /> Pundu<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_69.png" /> Ranganburih<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_70.png" /> Ranganranjing<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_71.png" /> Rangansurai<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_72.png" /> Ranguntangko<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_73.png" /> Rantausuang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_74.png" /> Satiruk<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_75.png" /> Satirukkecil<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_76.png" /> Sei Hampalit<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_77.png" /> Sei Katingan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_78.png" /> Serambut Kecil<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_79.png" /> Sungai Babirah<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_80.png" /> Sungai Bakau<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_81.png" /> Sungai Bangkirai<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_82.png" /> Sungai Bangkriyan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_83.png" /> Sungai Batubalu<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_84.png" /> Sungai Batun<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_85.png" /> Sungai Bemban<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_86.png" /> Sungai Bubut<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_87.png" /> Sungai Cemeti<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_88.png" /> Sungai Cempaga<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_89.png" /> Sungai Cempagabuang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_90.png" /> Sungai Hanau<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_91.png" /> Sungai Hanaut<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_92.png" /> Sungai Hantipan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_93.png" /> Sungai Hiran<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_94.png" /> Sungai Ijum<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_95.png" /> Sungai Jemaras<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_96.png" /> Sungai Kalampan Besar<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_97.png" /> Sungai Kalanaman<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_98.png" /> Sungai Kalang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_99.png" /> Sungai Kalapcabang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_100.png" /> Sungai Kalappaseban<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_101.png" /> Sungai Kawanbatu<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_102.png" /> Sungai Kempeng<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_103.png" /> Sungai Kuayan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_104.png" /> Sungai Kuin<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_105.png" /> Sungai Lampuyang Besar<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_106.png" /> Sungai Langgana<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_107.png" /> Sungai Lemiring<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_108.png" /> Sungai Mahop<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_109.png" /> Sungai Mantobar<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_110.png" /> Sungai Mawar<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_111.png" /> Sungai Mentaya<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_112.png" /> Sungai Pamuatan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_113.png" /> Sungai Pandaran<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_114.png" /> Sungai Panyahuan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_115.png" /> Sungai Patai<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_116.png" /> Sungai Pinangtunggal<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_117.png" /> Sungai Pukun<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_118.png" /> Sungai Rinjau<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_119.png" /> Sungai Sampit<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_120.png" /> Sungai Sanamang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_121.png" /> Sungai Sapihan Besar<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_122.png" /> Sungai Sebungsu<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_123.png" /> Sungai Seranau<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_124.png" /> Sungai Seranggas<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_125.png" /> Sungai Seruyan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_126.png" /> Sungai Simpangburung<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_127.png" /> Sungai Subang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_128.png" /> Sungai Tamplaan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_129.png" /> Sungai Tarantang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_130.png" /> Sungai Tualan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_131.png" /> Sungaiubar<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_132.png" /> Tanjungjorong<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_133.png" /> Terantang Hilir<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_134.png" /> Terantang Hulu<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_135.png" /> Tewah<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_136.png" /> Tinduk<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_137.png" /> Tumangsanak<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_138.png" /> Tumbangbajanei<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_139.png" /> Tumbangbanban<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_140.png" /> Tumbangboley<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_141.png" /> Tumbangdakei<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_142.png" /> Tumbanghiran Baru<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_143.png" /> Tumbanghiran Lama<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_144.png" /> Tumbangkalang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_145.png" /> Tumbanglabaning<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_146.png" /> Tumbanglambi<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_147.png" /> Tumbangmaya<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_148.png" /> Tumbangngahan<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_149.png" /> Tumbangpahanei<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_150.png" /> Tumbangpaku<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_151.png" /> Tumbangramei<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_152.png" /> Tumbangsepayang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_153.png" /> Tumbangtelawang<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_154.png" /> Ujungcemeti<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_155.png" /> Ujungpandaran<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_156.png" /> Waringinagung<br />\
    <img src="styles/legend/KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1_157.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1];
lyr_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_KotawaringinTimurRBI50K_KOTAWARINGINTIMUR_KUGI50gdba00000051gdbtable_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});