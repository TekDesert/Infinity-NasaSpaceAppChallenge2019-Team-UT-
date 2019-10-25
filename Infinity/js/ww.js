

var lastLayerName = "";
  
$( window ).on( "load", function() {
        $(".preloader").fadeOut(1000);
    });

  //---------------------------- NASA WORLD WIND PART ---------------------------//.

         var wwd = new WorldWind.WorldWindow("canvasOne");
    window.addEventListener("load", eventWindowLoaded, false);

    // Define the event listener to initialize Web WorldWind.
    function eventWindowLoaded() {
        // Create a WorldWindow for the canvas.
 

        // Add some image layers to the WorldWindow's globe.
        wwd.addLayer(new WorldWind.BMNGOneImageLayer());
        wwd.addLayer(new WorldWind.BMNGLandsatLayer());
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        
       
        
        // Listen for mouse clicks.

/* CLICK 
var clickRecognizer = new WorldWind.ClickRecognizer(wwd, 
    function(recognizer) {
        if (event.defaultPrevented) {
    return; // return without doing anything
}
else{
    alert("You Clicked");
}      
});
*/



// Add WMS imagery


/*MODEL 3D
var modelLayer = new WorldWind.RenderableLayer();
wwd.addLayer(modelLayer);


var position = new WorldWind.Position(10.0, -125.0, 800000.0);
var config = {dirPath: WorldWind.configuration.baseUrl + 'examples/collada_models/duck/'};

var colladaLoader = new WorldWind.ColladaLoader(position, config);
colladaLoader.load("duck.dae", function (colladaModel) {
    colladaModel.scale = 9000;
    modelLayer.addRenderable(colladaModel);
});
*/



// Update the display on load and on resize.
wwd.navigator.range = (($(window).width())/0.0000738); // MATHEMATICAL RELATIONSHIP FOR THE GLOBE TO ALWAYS FIT THE SCREEN (The widow's with has to always makeup for 7.38% of the eye scale)
    }

/* AUtomatic resizing on hold
$( window ).resize(function() {

  	wwd.navigator.range = (($(window).width())/0.0000738);
  wwd.redraw();  

});
*/


  //---------------------------- NASA WORLD WIND PART ABOVE ---------------------------//.



jQuery(document).ready(function($){
	//open/close lateral filter
	$('.cd-filter-trigger').on('click', function(){
		triggerFilter(true);
		$('.stars').animate({width:"80%"},300);
		/* Make device width = 9.38% of eye scale to make it fit better the screen */
		

		
	});
	$('.cd-filter .cd-close').on('click', function(){
		triggerFilter(false);
		$('.stars').animate({width:"100%"},200);
		/* Make device RETURN TO width = 7.38% of eye scale to make it fit better the screen */
		

	});

	function triggerFilter($bool) {
		var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
		elementsToTrigger.each(function(){
			$(this).toggleClass('filter-is-visible', $bool);
		});
	}

	//mobile version - detect click event on filters tab
	var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
		filter_tab_placeholder_default_value = 'Select',
		filter_tab_placeholder_text = filter_tab_placeholder.text();
	
	
	//close filter dropdown inside lateral .cd-filter 
	$('.cd-filter-block h4').on('click', function(){
		$(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
	})
});








function createLayerCheckBox(xmlDom, layerName) {
	    var wms = new WorldWind.WmsCapabilities(xmlDom);
	    var wmsLayerCapabilities = wms.getNamedLayer(layerName);
	    var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
	    var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
		wwd.addLayer(wmsLayer);
		lastLayerName = wmsLayer;
};

/*---------------------------------------- ATMOSPHERE CLICK EVENTS -------------------------------------*/
var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
$('#ATcheckbox1').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox1").prop("checked", true);


	
	var layerName = "MODAL2_M_AER_OD";

	//var layer = createLayer(xmlDom);

	var logError = function (jqXhr, text, exception) {
	    console.log("There was a failure retrieving the capabilities document: " +
	        text +
	    " exception: " + exception);
	};

	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
})

$('#ATcheckbox2').on('click',function(){

	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox2").prop("checked", true);

	var layerName = "MODAL2_M_AER_RA";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
})

$('#ATcheckbox3').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox3").prop("checked", true);
	
	
	var layerName = "MOP_CO_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#ATcheckbox4').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox4").prop("checked", true);
	
	
	var layerName = "MODAL2_M_CLD_FR";

	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#ATcheckbox5').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox5").prop("checked", true);
	
	
	var layerName = "MODAL2_M_CLD_OT";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#ATcheckbox6').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox6").prop("checked", true);
	
	
	var layerName = "MODAL2_M_CLD_RD";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#ATcheckbox7').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox7").prop("checked", true);
	
	
	var layerName = "MODAL2_M_CLD_WP";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#ATcheckbox8,#Lcheckbox7').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox8").prop("checked", true);
	$("#Lcheckbox7").prop("checked", true);
	
	
	
	var layerName = "MOD_721D_RR";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#ATcheckbox9').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox9").prop("checked", true);
	
	
	var layerName = "AURA_NO2_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#ATcheckbox10').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox10").prop("checked", true);
	
	
	var layerName = "AURA_OZONE_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#ATcheckbox11').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox11").prop("checked", true);
	
	
	var layerName = "TRMM_3B43M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#ATcheckbox12,#Lcheckbox23').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox12").prop("checked", true);
	$("#Lcheckbox23").prop("checked", true);
	
	var layerName = "MOD_143D_RR";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#ATcheckbox13,#Lcheckbox24').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox13").prop("checked", true);
	$("#Lcheckbox24").prop("checked", true);
	

	
	var layerName = "VIIRS_543D";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})
$('#ATcheckbox14').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#ATcheckbox14").prop("checked", true);

	
	var layerName = "MODAL2_M_SKY_WV";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

/*---------------------------------------- ENERGY CLICK EVENTS -------------------------------------*/

$('#Echeckbox1,#Lcheckbox2').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox1").prop("checked", true);
	$("#Lcheckbox2").prop("checked", true);

	
	var layerName = "MCD43C3_M_BSA";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox2,#Lcheckbox4').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox2").prop("checked", true);
	$("#Lcheckbox4").prop("checked", true);

	
	var layerName = "MOD_LSTD_CLIM_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
	
})

$('#Echeckbox3,#Lcheckbox5').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox3").prop("checked", true);
	$("#Lcheckbox5").prop("checked", true);

	
	var layerName = "MOD_LSTN_CLIM_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})


$('#Echeckbox4,#Ocheckbox1').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox4").prop("checked", true);
	$("#Ocheckbox1").prop("checked", true);

	
	var layerName = "AVHRR_CLIM_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 

})

$('#Echeckbox5,#Lcheckbox8').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox5").prop("checked", true);
	$("#Lcheckbox8").prop("checked", true);

	
	var layerName = "GISS_TA_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox6,#Lcheckbox11').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox6").prop("checked", true);
	$("#Lcheckbox11").prop("checked", true);

	
	var layerName = "MOD_LSTAD_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox7,#Lcheckbox12').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox7").prop("checked", true);
	$("#Lcheckbox12").prop("checked", true);
	
	var layerName = "MOD_LSTAN_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})


$('#Echeckbox8,#Lcheckbox13').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox8").prop("checked", true);
	$("#Lcheckbox13").prop("checked", true);


	
	var layerName = "MOD_LSTD_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox9,#Lcheckbox14').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox9").prop("checked", true);
	$("#Lcheckbox14").prop("checked", true);

	
	var layerName = "MOD_LSTN_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox10').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox10").prop("checked", true);

	
	var layerName = "CERES_NETFLUX_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox11').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox11").prop("checked", true);

	
	var layerName = "CERES_LWFLUX_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox12').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox12").prop("checked", true);

	
	var layerName = "CERES_SWFLUX_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox13,#Ocheckbox8').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox13").prop("checked", true);
	$("#Ocheckbox8").prop("checked", true);

	
	var layerName = "AVHRR_SST_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox14,#Ocheckbox9').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox14").prop("checked", true);
	$("#Ocheckbox9").prop("checked", true);

	
	var layerName = "MWOI_SST_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox15,#Ocheckbox10').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox15").prop("checked", true);
	$("#Ocheckbox10").prop("checked", true);

	
	var layerName = "MYD28M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox16,#Ocheckbox11').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox16").prop("checked", true);
	$("#Ocheckbox11").prop("checked", true);

	
	var layerName = "AMSRE_SSTAn_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox17').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox17").prop("checked", true);

	
	var layerName = "CERES_INSOL_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Echeckbox18').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Echeckbox18").prop("checked", true);

	
	var layerName = "AURA_UVI_CLIM_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

/*---------------------------------------- LAND CLICK EVENTS -------------------------------------*/

$('#Lcheckbox1').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox1").prop("checked", true);

	
	var layerName = "MOD14A1_M_FIRE";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})


$('#Lcheckbox6,#Ocheckbox3').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox6").prop("checked", true);
	$("#Ocheckbox3").prop("checked", true);

	
	var layerName = "BlueMarbleNG";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})



$('#Lcheckbox9').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox9").prop("checked", true);

	
	var layerName = "ICESAT_ELEV_G";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Lcheckbox10,#Lfcheckbox2').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox10").prop("checked", true);
	$("#Lfcheckbox2").prop("checked", true);
	
	var layerName = "MCD12C1_T1";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})


$('#Lcheckbox15,#Lfcheckbox3').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox15").prop("checked", true);
	$("#Lfcheckbox3").prop("checked", true);

	
	var layerName = "MOD15A2_M_LAI";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Lcheckbox16,#Lfcheckbox4').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox16").prop("checked", true);
	$("#Lfcheckbox4").prop("checked", true);

	
	var layerName = "MOD17A2_M_PSN";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Lcheckbox17').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox17").prop("checked", true);

	
	var layerName = "PermafrostNSIDC";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Lcheckbox18,#Ocheckbox5').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox18").prop("checked", true);
	$("#Ocheckbox5").prop("checked", true);

	
	var layerName = "SCSIE_W";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Lcheckbox19,#Ocheckbox6').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox19").prop("checked", true);
	$("#Ocheckbox6").prop("checked", true);


	
	var layerName = "NISE_D";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Lcheckbox20').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox20").prop("checked", true);

	
	var layerName = "MOD10C1_M_SNOW";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Lcheckbox21').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox21").prop("checked", true);

	
	var layerName = "SWE_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})


$('#Lcheckbox22').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox22").prop("checked", true);

	
	var layerName = "SRTM_RAMP2_TOPO";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})


$('#Lcheckbox25,#Lfcheckbox6').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox25").prop("checked", true);
	$("#Lfcheckbox6").prop("checked", true);

	
	var layerName = "MOD_NDVI_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Lcheckbox3').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lcheckbox3").prop("checked", true);

	
	var layerName = "GRACE_LWE_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

/*---------------------------------------- LIFE CLICK EVENTS -------------------------------------*/
$('#Lfcheckbox1,#Ocheckbox4').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lfcheckbox1").prop("checked", true);
	$("#Ocheckbox4").prop("checked", true);

	
	var layerName = "MY1DMM_CHLORA";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Lfcheckbox5').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Lfcheckbox5").prop("checked", true);

	
	var layerName = "SEDAC_POP";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})
/*---------------------------------------- OCEAN CLICK EVENTS -------------------------------------*/

$('#Ocheckbox2').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Ocheckbox2").prop("checked", true);

	
	var layerName = "GEBCO_BATHY";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})

$('#Ocheckbox7').on('click',function(){
	$('input:checkbox').removeAttr('checked');
	$("#Ocheckbox7").prop("checked", true);

	
	var layerName = "AQUARIUS_SSS_M";


	$.get(serviceAddress).done(function(data){createLayerCheckBox(data, layerName)});
	wwd.navigator.range +=1000;
	wwd.redraw(); 
	
})



$('input:checkbox').change(function() {
	
	wwd.removeLayer(lastLayerName);
  
})


