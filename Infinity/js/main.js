

  
$( window ).on( "load", function() {
        $(".preloader").fadeOut(1000);
    });

 


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


/* AstroBoy PT.1 Speech */
var text="<br>Hello I'm AstroBoy ! I will be your guide in your wonderful journey Trought Infinity."
$("#astro_txt").append(text);

var speech = 0;
$(".next").click(function(){
	if (speech==0) {
		text="On the top left part of your website you can find the game menu where your goals,achievements,and info are listed";
		/* Clear text only from div, not the icon with it */
		$('#astro_txt').contents().filter(function(){
		    return this.nodeType === 3;
		}).remove();
		$('#astro_txt').css({'margin-top':'-32px'}); /* Adjust AstroyBoy's Position */
	    $("#astro_txt").append(text);
	    $("#game_menu").append("  <i class='fas fa-arrow-left' style='color:red;font-size:22px;'></i>");
	    speech++;
	}
	else{
		$("#game_menu").empty();
		$("#game_menu").append("Game Menu");
		$('#astro_txt').css({'margin-top':'0px'});
		text="Enough Talk, Let's have some fun ! Click on the start button the Launch yourself trought Infinity !";
		$("#astro_txt").empty();
		$("#astro_txt").append(text);
	}
	
})

/* PT.1 Build Up */
$( "svg" ).click(function() {

	/*  Screen Prep */
	$(".d1").fadeOut(1000);
	$(".container").animate({'padding-top' : 0},2000);
	$("#astro_container").fadeOut(3000);
	$('#PT1').addClass('game-active');

	 /* ACHIEVEMENT UNLOCKED */
	$('#AC1').removeClass('fas fa-question');
    $('#AC1').addClass('fas fa-trophy');
	$("#AC1").css({'color':'orange'});
	$("#AC1").append(" <i class='fas fa-check' style='color:green'></i>");

	/* Progress Bar */
	$(".progress-steps-connector").animate({width:"7%"},2000);
	
	/* Container and Video Insertion */
	$( "body" ).append( "<div style='position: absolute;height: 70px;width: 300px;top:80;left:80%;' id='notif_main'><div class='container_noti'><div class='rectangle'><div class='notification-text'><span>&nbsp;&nbsp;New Achievement Unlocked ! <i class='fas fa-trophy' style='color:orange'></i></span></div></div></div></div>" );
	$("#notif_main").fadeOut(10000);

	$( ".container" ).append( "<div style='height:100%;width:100%;' id='Phase1'> </div>" );


	$( "#Phase1" ).append( "<video id='Phase1V' width='100%' height='100%' autoplay><source src='vid/bb_txt.mp4' type='video/mp4'>Your browser does not support the video tag.</video>" );

	/* When video 1 ends */
    $('#Phase1V').on('ended',function(){
      $(".progress-steps-connector").animate({width:"12%"},2000);
      $("#Phase1V").fadeOut(1000);
      $("#Phase1").append("<div style='display:inline-block; width:100%; height:100%'><div id='canvas' class='main'></div>");

      /* Game Insertion */
	  init();
	  animate();

	  /* Astro Boy Text */
      $("#astro_container").fadeIn(3000);
      $("#astro_txt").empty();
      $("#astro_txt").append("<i class='fas fa-arrow-circle-right next' style='color:red'></i> <br>I'm Back! Wow you've made it trought the Big Bang ! Let's have some fun and see how where created the first elements now ");
      $(".next").click(function(){
      	$("#astro_txt").empty();

      	/* PHASE 2 */
      	$('#astro_txt').css({'margin-top':'-32px'}); /* Adjust AstroyBoy's Position */
		$("#astro_txt").append("<p style='color:red;'>Helium</p> and <p style='color:blue;'>hydrogen</p> where the first atoms after the big bang drag and drop an atom onto the other the witness their awsome reaction! If you're done <h1 id='temp' style='color:blue;cursor:pointer;'> Click Here ! </h1>")


		/* ACHIEVEMENT UNLOCKED WHEN ATOMS COLLIDE */
		$('#AC2').removeClass('fas fa-question');
	    $('#AC2').addClass('fas fa-trophy');
		$("#AC2").css({'color':'orange'});
		$("#AC2").append(" <i class='fas fa-check' style='color:green'></i>");
		$("#notif_main").fadeIn(1000);
		$("#notif_main").fadeOut(10000);

		$("#temp").click(function(){
			$('#astro_txt').css({'margin-top':'0px'}); /* Adjust AstroyBoy's Position */

			/* Game Progress */
			$(".progress-steps-connector").animate({width:"27%"},2000)
			$('#PT1').removeClass('game-active');
			$('#PT1').addClass('game-completed');
			$('#PT2').addClass('game-active');

			/* AstroBoy Text */
			$("#astro_txt").empty();
			$("#astro_txt").append("Well done ! now Let's see how our solar system was created");

			$(".container").empty();
			$(".container").append("<div style='height:100%;width:100%;' id='Phase2'></div>");

			/* Phase 2 Video */
			$("#Phase2").append("<video id='Phase2V' width='100%' height='100%' autoplay><source src='vid/solarsys_txt.mp4' type='video/mp4'>Your browser does not support the video tag.</video>");
			$("#astro_container").fadeOut(5000);

			/* Game Progress */
			$(".progress-steps-connector").animate({width:"31%"},2000);

			/* ACHIEVEMENT UNLOCKED */
			$('#AC3').removeClass('fas fa-question');
		    $('#AC3').addClass('fas fa-trophy');
			$("#AC3").css({'color':'orange'});
			$("#AC3").append(" <i class='fas fa-check' style='color:green'></i>");
			$("#notif_main").fadeIn(1000);
			$("#notif_main").fadeOut(10000);

			/* When video 2 ends */
			$('#Phase2V').on('ended',function(){
				$("#Phase2V").fadeOut(3000);
				$(".progress-steps-connector").animate({width:"37%"},2000);
				$("body").addClass("opening hide-UI view-2D zoom-large data-close controls-close");
				$("#Phase2").append("<div id='navbar'> <a id='toggle-data' href='#data'><i class='icon-data'></i>Data</a> <a id='toggle-controls' href='#controls'><i class='icon-controls'></i>Controls</a> </div> <div id='data'> <a class='sun' title='sun' href='#sunspeed'>Sun</a> <a class='mercury' title='mercury' href='#mercuryspeed'>Mercury</a> <a class='venus' title='venus' href='#venusspeed'>Venus</a> <a class='earth active' title='earth' href='#earthspeed'>Earth</a> <a class='mars' title='mars' href='#marsspeed'>Mars</a> <a class='jupiter' title='jupiter' href='#jupiterspeed'>Jupiter</a> <a class='saturn' title='saturn' href='#saturnspeed'>Saturn</a> <a class='uranus' title='uranus' href='#uranusspeed'>Uranus</a> <a class='neptune' title='neptune' href='#neptunespeed'>Neptune</a> </div> <div id='controls'> <label class='set-view'> <input type='checkbox'> </label> <label class='set-zoom'> <input type='checkbox'> </label> <label> <input type='radio' class='set-speed' name='scale' checked> <span>Speed</span> </label> <label> <input type='radio' class='set-size' name='scale'> <span>Size</span> </label> <label> <input type='radio' class='set-distance' name='scale'> <span>Distance</span> </label> </div> <div id='universe' class='scale-stretched'> <div id='galaxy'> <div id='solar-system' class='earth'> <div id='mercury' class='orbit'> <div class='pos'> <div class='planet'> <dl class='infos'> <dt>Mercury</dt> <dd><span></span></dd> </dl> </div> </div> </div> <div id='venus' class='orbit'> <div class='pos'> <div class='planet'> <dl class='infos'> <dt>Venus</dt> <dd><span></span></dd> </dl> </div> </div> </div> <div id='earth' class='orbit'> <div class='pos'> <div class='orbit'> <div class='pos'> </div> </div> <div class='planet'> <dl class='infos'> <dt>Earth</dt> <dd><span></span></dd> </dl> </div> </div> </div> <div id='mars' class='orbit'> <div class='pos'> <div class='planet'> <dl class='infos'> <dt>Mars</dt> <dd><span></span></dd> </dl> </div> </div> </div> <div id='jupiter' class='orbit'> <div class='pos'> <div class='planet'> <dl class='infos'> <dt>Jupiter</dt> <dd><span></span></dd> </dl> </div> </div> </div> <div id='saturn' class='orbit'> <div class='pos'> <div class='planet'> <div class='ring'></div> <dl class='infos'> <dt>Saturn</dt> <dd><span></span></dd> </dl> </div> </div> </div> <div id='uranus' class='orbit'> <div class='pos'> <div class='planet'> <dl class='infos'> <dt>Uranus</dt> <dd><span></span></dd> </dl> </div> </div> </div> <div id='neptune' class='orbit'> <div class='pos'> <div class='planet'> <dl class='infos'> <dt>Neptune</dt> <dd><span></span></dd> </dl> </div> </div> </div> <div id='sun'> <dl class='infos'> <dt>Sun</dt> <dd><span></span></dd> </dl> </div> </div> </div> </div> <script src='js/prefixfree.min.js'></script> <script src='js/scripts.min.js'></script>");
				/* SOLAR SYSTEM JS */
				  var body = $("body"),
				      universe = $("#universe"),
				      solarsys = $("#solar-system");

				  var init = function() {
				    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
				      $(this).removeClass('hide-UI').addClass("set-speed");
				      $(this).dequeue();
				    });
				  };

				  var setView = function(view) { universe.removeClass().addClass(view); };

				  $("#toggle-data").click(function(e) {
				    body.toggleClass("data-open data-close");
				    e.preventDefault();
				  });

				  $("#toggle-controls").click(function(e) {
				    body.toggleClass("controls-open controls-close");
				    e.preventDefault();
				  });

				  $("#data a").click(function(e) {
				    var ref = $(this).attr("class");
				    solarsys.removeClass().addClass(ref);
				    $(this).parent().find('a').removeClass('active');
				    $(this).addClass('active');
				    e.preventDefault();
				  });
				  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
				  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
				  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
				  $(".set-size").click(function() { setView("scale-s set-size"); });
				  $(".set-distance").click(function() { setView("scale-d set-distance"); });
				  init();

				  /* END OF SOLAR SYSTEM JS */

				  /* AstroBoy Text */
				  $("#astro_txt").empty();
				  $("#astro_txt").append("Welcome To our Beautifull Solar System ! If you're done exploring <h1 id='clear_phase2' style='color:blue;cursor:pointer;'> Click Here ! </h1>");
				  $(".next").click(function(){
				  	$("#astro_txt").empty();
				  	$("#astro_txt").append("When you're done exploring, let me know by clicking this  Next Phase</button> to advance to the next step !")
				  	
				  })
				  
				  $(".progress-steps-connector").animate({width:"42%"},2000);
				  $("#astro_container").fadeIn(5000);

				  /*  Phase 3 Start */
				  $("#clear_phase2").click(function(){

				  	$("#astro_container").fadeOut(2000);

				  	/* Game Progress */
					$(".progress-steps-connector").animate({width:"57%"},2000)
					$('#PT2').removeClass('game-active');
					$('#PT2').addClass('game-completed');
					$('#PT3').addClass('game-active');

					/* Add video */
				  	$(".container").empty();
				  	$(".container").append("<div style='height:100%;with:100%;' id='Phase3'></div>");
				  	$("#Phase3").append("<video  id='Phase3V' width='100%' height='100%' autoplay><source src='vid/moonEarth_txt.mp4' type='video/mp4'>Your browser does not support the video tag.</video>");

				  	/* ACHIEVEMENT UNLOCKED */
					$('#AC4').removeClass('fas fa-question');
				    $('#AC4').addClass('fas fa-trophy');
					$("#AC4").css({'color':'orange'});
					$("#AC4").append(" <i class='fas fa-check' style='color:green'></i>");
					$("#notif_main").fadeIn(1000);
					$("#notif_main").fadeOut(10000);

					$('#Phase3V').on('ended',function(){
						$("#Phase3V").fadeOut(3000);
						$(".progress-steps-connector").animate({width:"63%"},2000);
						$("#Phase3").append(" <div id='collage' style='margin-top: 5%;'> <div id='playPanel' style='padding:5px;display:none;'>'' <h3 id='imgTitle'></h3> <hr /> <div style='display:inline-block; margin:auto; width:95%; vertical-align:top;'> <ul id='sortable' class='sortable'></ul> <div id='actualImageBox'> <div id='stepBox'> <div>Steps:</div><div class='stepCount'>0</div> </div> <div id='timeBox'> Time Taken: <span id='timerPanel'></span> secs </div> <img id='actualImage' /> <div>Re-arrange to create a picture like this.</div> <p id='levelPanel'> <input type='radio' name='level' id='easy' checked='checked' value='3' /> <label for='easy'>Easy</label> <input type='radio' name='level' id='medium' value='4' /> <label for='medium'>Medium</label> <input type='radio' name='level' id='hard' value='5' /> <label for='hard'>Hard</label> </p> <div> <button id='btnRule' type='button' class='btn' onclick='rules();'>Rules</button> <button id='newPhoto' type='button' class='btn'>Another Photo</button> </div> </div> </div> </div> <div id='gameOver' style='display:none;'> <div style='background-color: green; padding: 5px 10px 20px 10px; text-align: center;color: white '> <h2 style='text-align:center'>Game Over!!</h2> Congratulations!! <br /> You have completed this picture. <br /> Steps: <span class='stepCount'>0</span> steps. <br /> Time Taken: <span class='timeCount'>0</span> seconds<br /> <div><button id='end_but'>Go To the Ending Phase</button> </div> </div> </div> <style type='text/css'> #collage hr{ border:none; border-top:2px solid #f5f2f2; height:1px; } #collage #playPanel { background-color:#c2defc; padding:10px 0px; margin: 10px auto; max-width:800px; width:95%; } #collage #actualImageBox { display: inline-block; font-size:0.8em; margin: 10px 10px; vertical-align: top; width:280px; } #collage #stepBox, #collage #timeBox { display:inline-block; width:48%; } #collage #stepBox div { background-color:#c2defc; display:inline-block; padding:1px 4px; margin: 0px auto; max-width:800px; } #collage img#actualImage{ border:2px solid #a46; height:280px; width:280px; } #collage #sortable { border:2px solid #a46; list-style-type: none; display: inline-block; margin: 10px; padding: 0; width: 404px;height:400px;} #collage #sortable li { background-size: 400% 400%; border: none; cursor: pointer; margin: 0; padding: 0; float: left; width: 100px; height: 100px; } #collage button { background-color:#f5f2f2; border:1px solid #cce; display: inline; font-size: 14px; height: auto; width: auto; padding: 3px 8px; } </style> </div>");
						$("#astro_container").fadeIn(2000);
						$("#astro_txt").empty();
						$("#astro_txt").append("Houston, We have a Problem ! It seems like Mission control needs us to solve the puzzle in order to continue our journey !")
						
						
						/* Puzzle Javascript */

						var images = [
		                { src: 'https://www.nasa.gov/sites/default/files/thumbnails/image/edu_distance_to_the_moon.png' },
		                { src: 'img/Earth_Moon.jpg', title: 'Early Earth and Theia Collison' },
		                { src: 'img/earth.jpg', title: 'Earth' },
		                { src: 'img/sun.jpg', title: 'Sun' },
		                { src: 'img/bb.jpg', title: 'Big Bang' }
		            ];
		            var timerFunction;

					var imagePuzzle = {
					    stepCount: 0,
					    startTime: new Date().getTime(),
					    startGame: function (images, gridSize) {
					        this.setImage(images, gridSize);
					        $('#playPanel').show();
					        $('#sortable').randomize();
					        this.enableSwapping('#sortable li');
					        this.stepCount = 0;
					        this.startTime = new Date().getTime();
					        this.tick();
					    },
					    tick: function () {
					        var now = new Date().getTime();
					        var elapsedTime = parseInt((now - imagePuzzle.startTime) / 1000, 10);
					        $('#timerPanel').text(elapsedTime);
					        timerFunction = setTimeout(imagePuzzle.tick, 1000);
					    },
					    enableSwapping: function (elem) {
					        $(elem).draggable({
					            snap: '#droppable',
					            snapMode: 'outer',
					            revert: 'invalid',
					            helper: 'clone'
					        });
					        $(elem).droppable({
					            drop: function (event, ui) {
					                var $dragElem = $(ui.draggable).clone().replaceAll(this);
					                $(this).replaceAll(ui.draggable);

					                currentList = $('#sortable > li').map(function (i, el) { return $(el).attr('data-value'); });
					                if (isSorted(currentList)){
					                	$('#actualImageBox').empty().html($('#gameOver').html());

					                	/* Ending Phase When Puzzle Is completed */
						                $("#end_but").click(function(){
						                	$("#astro_txt").empty();
											$("#astro_txt").append("Well done ! Let's finish our journey with this Beautifull recap video")
						
											$("#astro_container").fadeOut(5000);

										  	/* Game Progress */
											$(".progress-steps-connector").animate({width:"75%"},2000)
											$('#PT3').removeClass('game-active');
											$('#PT3').addClass('game-completed');
											$('#PTE').addClass('game-active');

											/* Achievement */
											$('#AC5').removeClass('fas fa-question');
										    $('#AC5').addClass('fas fa-trophy');
											$("#AC5").css({'color':'orange'});
											$("#AC5").append(" <i class='fas fa-check' style='color:green'></i>");
											$("#notif_main").fadeIn(1000);
											$("#notif_main").fadeOut(10000);

											$( ".container" ).empty();
											$( ".container" ).append( "<div style='height:100%;width:100%;' id='End'> </div>" );
											$("#End").append("<video id='End_vid' width='100%' height='100%' autoplay><source src='vid/life.mp4' type='video/mp4'>Your browser does not support the video tag.</video>")

											$('#End_vid').on('ended',function(){
												$("#astro_container").fadeIn(2000);
												$("#astro_txt").empty();
												$("#astro_txt").append("Congratulations, you just completed your journey trought Infinity ! You can play with our globe and add N.E.O filters to it ! Mission Control, Signing Off, good luck !")
												

												$("#End").empty();
												$("#End").append("<canvas id='canvasOne' style='width: 100%;height: 100%;'>Your browser does not support HTML5 Canvas.</canvas><script type='text/javascript'> var wwd = new WorldWind.WorldWindow('canvasOne'); wwd.addLayer(new WorldWind.BMNGOneImageLayer()); wwd.addLayer(new WorldWind.BMNGLandsatLayer()); wwd.addLayer(new WorldWind.ViewControlsLayer(wwd)); wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));wwd.navigator.range = (($(window).width())/0.0000738); </script>");
												$("form").append("<div class='cd-filter-block'><h4>Atmosphere Maps <i class='fas fa-globe-europe' style='color: blue;font-size: 15px;margin-left: 15px;'></i></h4><ul class='cd-filter-content cd-filters list'><li><input class='filter' data-filter='.check1' type='checkbox' id='ATcheckbox1'> <label class='checkbox-label' for='checkbox1'>Aerosol Optical Thickness </label></li><li><input class='filter' data-filter='.check2' type='checkbox' id='ATcheckbox2'><label class='checkbox-label' for='checkbox2'>Aerosol Particle Radius</label></li><li><input class='filter' data-filter='.check3' type='checkbox' id='ATcheckbox3'><label class='checkbox-label' for='checkbox3'>Carbon Monoxide</label></li><li><input class='filter' data-filter='.check4' type='checkbox' id='ATcheckbox4'><label class='checkbox-label' for='checkbox4'>Cloud Fraction</label></li><li><input class='filter' data-filter='.check5' type='checkbox' id='ATcheckbox5'><label class='checkbox-label' for='checkbox5'>Cloud Optical Thickness</label></li><li><input class='filter' data-filter='.check6' type='checkbox' id='ATcheckbox6'><label class='checkbox-label' for='checkbox6'>Cloud Particle Radius</label></li><li><input class='filter' data-filter='.check7' type='checkbox' id='ATcheckbox7'><label class='checkbox-label' for='checkbox7'>Cloud Water Content</label></li><li><input class='filter' data-filter='.check8' type='checkbox' id='ATcheckbox8'><label class='checkbox-label' for='checkbox8'>False Color (MODIS)</label></li><li><input class='filter' data-filter='.check9' type='checkbox' id='ATcheckbox9'><label class='checkbox-label' for='checkbox9'>Nitrogen Dioxide</label></li><li><input class='filter' data-filter='.check10' type='checkbox' id='ATcheckbox10'><label class='checkbox-label' for='checkbox10'>Ozone</label></li><li><input class='filter' data-filter='.check11' type='checkbox' id='ATcheckbox11'><label class='checkbox-label' for='checkbox11'>Rainfall</label></li><li><input class='filter' data-filter='.check12' type='checkbox' id='ATcheckbox12'><label class='checkbox-label' for='checkbox12'>True Color (MODIS)</label></li><li><input class='filter' data-filter='.check13' type='checkbox' id='ATcheckbox13'><label class='checkbox-label' for='checkbox13'>True Color (VIIRS)</label></li><li><input class='filter' data-filter='.check14' type='checkbox' id='ATcheckbox14'><label class='checkbox-label' for='checkbox14'>Water Vapor </label></li></ul> <!-- cd-filter-content --></div> <!-- cd-filter-block --><div class='cd-filter-block'><h4>Energy Maps <i class='fas fa-atom' style='color: orange;font-size: 15px;margin-left: 15px;'></i></h4><ul class='cd-filter-content cd-filters list'><li><input class='filter' data-filter='.Echeck1' type='checkbox' id='Echeckbox1'> <label class='checkbox-label' for='Echeckbox1'>Albedo </label></li><li><input class='filter' data-filter='.Echeck2' type='checkbox' id='Echeckbox2'><label class='checkbox-label' for='Echeckbox2'>Avg Land Surface Temperature [Day]</label></li><li><input class='filter' data-filter='.Echeck3' type='checkbox' id='Echeckbox3'><label class='checkbox-label' for='Echeckbox3'>Avg Land Surface Temperature [Night]</label></li><li><input class='filter' data-filter='.Echeck4' type='checkbox' id='Echeckbox4'><label class='checkbox-label' for='Echeckbox4'>Avg Sea Surface Temperature (AVHRR)</label></li><li><input class='filter' data-filter='.Echeck5' type='checkbox' id='Echeckbox5'><label class='checkbox-label' for='Echeckbox5'>Global Temperature Anomaly</label></li><li><input class='filter' data-filter='.Echeck6' type='checkbox' id='Echeckbox6'><label class='checkbox-label' for='Echeckbox6'>Land Surface Temperature Anomaly [Day]</label></li><li><input class='filter' data-filter='.Echeck7' type='checkbox' id='Echeckbox7'><label class='checkbox-label' for='Echeckbox7'>Land Surface Temp Anomaly [Night]</label></li><li><input class='filter' data-filter='.Echeck8' type='checkbox' id='Echeckbox8'><label class='checkbox-label' for='Echeckbox8'>Land Surface Temperature [Day]</label></li><li><input class='filter' data-filter='.Echeck9' type='checkbox' id='Echeckbox9'><label class='checkbox-label' for='Echeckbox9'>Land Surface Temperature [Night]</label></li><li><input class='filter' data-filter='.Echeck10' type='checkbox' id='Echeckbox10'><label class='checkbox-label' for='Echeckbox10'>Net Radiation</label></li><li><input class='filter' data-filter='.Echeck11' type='checkbox' id='Echeckbox11'><label class='checkbox-label' for='Echeckbox11'>Outgoing Longwave Radiation</label></li><li><input class='filter' data-filter='.Echeck12' type='checkbox' id='Echeckbox12'><label class='checkbox-label' for='Echeckbox12'>Reflected Shortwave Radiation </label></li><li><input class='filter' data-filter='.Echeck13' type='checkbox' id='Echeckbox13'><label class='checkbox-label' for='Echeckbox13'>Sea Surface Temperature (AVHRR)</label></li><li><input class='filter' data-filter='.Echeck14' type='checkbox' id='Echeckbox14'><label class='checkbox-label' for='Echeckbox14'>Sea Surface Temperature (MWOI)</label></li><li><input class='filter' data-filter='.Echeck15' type='checkbox' id='Echeckbox15'><label class='checkbox-label' for='Echeckbox15'>Sea Surface Temperature (MODIS)</label></li><li><input class='filter' data-filter='.Echeck16' type='checkbox' id='Echeckbox16'><label class='checkbox-label' for='Echeckbox16'>Sea Surface Temp Anomaly (AMSR-E)</label></li><li><input class='filter' data-filter='.Echeck17' type='checkbox' id='Echeckbox17'><label class='checkbox-label' for='Echeckbox17'>Solar Insolation</label></li><li><input class='filter' data-filter='.Echeck18' type='checkbox' id='Echeckbox18'><label class='checkbox-label' for='Echeckbox18'>UV Index</label></li></ul> <!-- cd-filter-content --></div> <!-- cd-filter-block --><div class='cd-filter-block'><h4>Land Maps <i class='fas fa-mountain' style='color: brown;font-size: 15px;margin-left: 15px;'></i></h4><ul class='cd-filter-content cd-filters list'><li><input class='filter' data-filter='.Lcheck1' type='checkbox' id='Lcheckbox1'> <label class='checkbox-label' for='Lcheckbox1'>Active Fires </label> </li><li><input class='filter' data-filter='.Lcheck2' type='checkbox' id='Lcheckbox2'><label class='checkbox-label' for='Lcheckbox2'>Albedo</label></li><li><input class='filter' data-filter='.Lcheck4' type='checkbox' id='Lcheckbox4'><label class='checkbox-label' for='Lcheckbox4'>Avg Land Surface Temperature [Day]</label></li><li><input class='filter' data-filter='.Lcheck5' type='checkbox' id='Lcheckbox5'><label class='checkbox-label' for='Lcheckbox5'>Avg Land Surface Temperature [Night]</label></li><li><input class='filter' data-filter='.Lcheck6' type='checkbox' id='Lcheckbox6'><label class='checkbox-label' for='Lcheckbox6'>Blue Marble: Next Generation</label></li><li><input class='filter' data-filter='.Lcheck7' type='checkbox' id='Lcheckbox7'><label class='checkbox-label' for='Lcheckbox7'>False Color (MODIS)</label></li><li><input class='filter' data-filter='.Lcheck8' type='checkbox' id='Lcheckbox8'><label class='checkbox-label' for='Lcheckbox8'>Global Temperature Anomaly</label></li><li><input class='filter' data-filter='.Lcheck9' type='checkbox' id='Lcheckbox9'><label class='checkbox-label' for='Lcheckbox9'>Greenland / Antarctica Elevation</label></li><li><input class='filter' data-filter='.Lcheck10' type='checkbox' id='Lcheckbox10'><label class='checkbox-label' for='Lcheckbox10'>Land Cover Classification</label></li><li><input class='filter' data-filter='.Lcheck11' type='checkbox' id='Lcheckbox11'><label class='checkbox-label' for='Lcheckbox11'>Land Surface Temperature Anomaly [Day]</label></li><li><input class='filter' data-filter='.Lcheck12' type='checkbox' id='Lcheckbox12'><label class='checkbox-label' for='Lcheckbox12'>Land Surface Temp Anomaly [Night]</label></li><li><input class='filter' data-filter='.Lcheck13' type='checkbox' id='Lcheckbox13'><label class='checkbox-label' for='Lcheckbox13'>Land Surface Temperature [Day]</label></li><li><input class='filter' data-filter='.Lcheck14' type='checkbox' id='Lcheckbox14'><label class='checkbox-label' for='Lcheckbox14'>Land Surface Temperature [Night]</label></li><li><input class='filter' data-filter='.Lcheck15' type='checkbox' id='Lcheckbox15'><label class='checkbox-label' for='Lcheckbox15'>Leaf Area Index</label></li><li><input class='filter' data-filter='.Lcheck16' type='checkbox' id='Lcheckbox16'><label class='checkbox-label' for='Lcheckbox16'>Net Primary Productivity</label></li><li><input class='filter' data-filter='.Lcheck17' type='checkbox' id='Lcheckbox17'><label class='checkbox-label' for='Lcheckbox17'>Permafrost</label></li><li><input class='filter' data-filter='.Lcheck18' type='checkbox' id='Lcheckbox18'><label class='checkbox-label' for='Lcheckbox18'>Northern Hemisphere Sea,Ice & Snow</label></li><li><input class='filter' data-filter='.Lcheck19' type='checkbox' id='Lcheckbox19'><label class='checkbox-label' for='Lcheckbox19'>Global Sea Ice CONCN & Snow Extent </label></li><li><input class='filter' data-filter='.Lcheck20' type='checkbox' id='Lcheckbox20'><label class='checkbox-label' for='Lcheckbox20'>Snow Cover</label></li><li><input class='filter' data-filter='.Lcheck21' type='checkbox' id='Lcheckbox21'><label class='checkbox-label' for='Lcheckbox21'>Snow Water Equivalent</label></li><li><input class='filter' data-filter='.Lcheck22' type='checkbox' id='Lcheckbox22'><label class='checkbox-label' for='Lcheckbox22'>Topography</label></li><li><input class='filter' data-filter='.Lcheck23' type='checkbox' id='Lcheckbox23'><label class='checkbox-label' for='Lcheckbox23'>True Color (MODIS)</label></li><li><input class='filter' data-filter='.Lcheck24' type='checkbox' id='Lcheckbox24'><label class='checkbox-label' for='Lcheckbox24'>True Color (VIIRS)</label></li><li><input class='filter' data-filter='.Lcheck25' type='checkbox' id='Lcheckbox25'><label class='checkbox-label' for='Lcheckbox25'>Vegetation Index (NDVI)</label></li><li><input class='filter' data-filter='.Lcheck3' type='checkbox' id='Lcheckbox3'><label class='checkbox-label' for='Lcheckbox3'>Water Equivalent Anomaly</label></li></ul> <!-- cd-filter-content --></div> <!-- cd-filter-block --><div class='cd-filter-block'><h4>Life Maps <i class='fas fa-paw' style='color: green;font-size: 15px;margin-left: 15px;'></i></h4><ul class='cd-filter-content cd-filters list'><li><input class='filter' data-filter='.Lfcheck1' type='checkbox' id='Lfcheckbox1'> <label class='checkbox-label' for='Lfcheckbox1'>Chlorophyll Concentration</label> </li><li><input class='filter' data-filter='.Lfcheck2' type='checkbox' id='Lfcheckbox2'><label class='checkbox-label' for='Lfcheckbox2'>Land Cover Classification</label></li><li><input class='filter' data-filter='.Lfcheck3' type='checkbox' id='Lfcheckbox3'><label class='checkbox-label' for='Lfcheckbox3'>Leaf Area Index</label></li><li><input class='filter' data-filter='.Lfcheck4' type='checkbox' id='Lfcheckbox4'><label class='checkbox-label' for='Lfcheckbox4'>Net Primary Productivity</label></li><li><input class='filter' data-filter='.Lfcheck5' type='checkbox' id='Lfcheckbox5'><label class='checkbox-label' for='Lfcheckbox5'>Population</label></li><li><input class='filter' data-filter='.Lfcheck6' type='checkbox' id='Lfcheckbox6'><label class='checkbox-label' for='Lfcheckbox6'>Vegetation Index (NDVI)</label></li></ul> <!-- cd-filter-content --></div> <!-- cd-filter-block --><div class='cd-filter-block'><h4>Ocean Maps <i class='fas fa-water' style='color: blue;font-size: 15px;margin-left: 15px;'></i></h4><ul class='cd-filter-content cd-filters list'><li><input class='filter' data-filter='.Ocheck1' type='checkbox' id='Ocheckbox1'> <label class='checkbox-label' for='Ocheckbox1'>Avg Sea Surface Temperature (AVHRR)</label> </li><li><input class='filter' data-filter='.Ocheck2' type='checkbox' id='Ocheckbox2'><label class='checkbox-label' for='Ocheckbox2'>Bathymetry</label></li><li><input class='filter' data-filter='.Ocheck3' type='checkbox' id='Ocheckbox3'><label class='checkbox-label' for='Ocheckbox3'>Blue Marble: Next Generation</label></li><li><input class='filter' data-filter='Ocheck4' type='checkbox' id='Ocheckbox4'><label class='checkbox-label' for='Ocheckbox4'>Chlorophyll Concentration</label></li><li><input class='filter' data-filter='.Ocheck5' type='checkbox' id='Ocheckbox5'><label class='checkbox-label' for='Ocheckbox5'>Northern Hemisphere Sea,Ice & Snow</label></li><li><input class='filter' data-filter='.Ocheck6' type='checkbox' id='Ocheckbox6'><label class='checkbox-label' for='Ocheckbox6'>Global Sea Ice CONCN & Snow Extent</label></li><li><input class='filter' data-filter='.Ocheck7' type='checkbox' id='Ocheckbox7'><label class='checkbox-label' for='Ocheckbox7'>Sea Surface Salinity</label></li><li><input class='filter' data-filter='.Ocheck8' type='checkbox' id='Ocheckbox8'><label class='checkbox-label' for='Ocheckbox8'>Sea Surface Temperature (AVHRR)</label></li><li><input class='filter' data-filter='.Ocheck9' type='checkbox' id='Ocheckbox9'><label class='checkbox-label' for='Ocheckbox9'>Sea Surface Temperature (MWOI)</label></li><li><input class='filter' data-filter='.Ocheck10' type='checkbox' id='Ocheckbox10'><label class='checkbox-label' for='Ocheckbox10'>Sea Surface Temperature (MODIS)</label></li><li><input class='filter' data-filter='.Ocheck11' type='checkbox' id='Ocheckbox11'><label class='checkbox-label' for='Ocheckbox11'>Sea Surface Temp Anomaly (AMSR-E)</label></li></ul> <!-- cd-filter-content --></div> <!-- cd-filter-block -->")
												$("#astro_container").fadeOut(20000);
												/* Nasa World Wind API Introduction */
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
											});



										})
					                }
					                    
					                else {
					                    var now = new Date().getTime();
					                    imagePuzzle.stepCount++;
					                    $('.stepCount').text(imagePuzzle.stepCount);
					                    $('.timeCount').text(parseInt((now - imagePuzzle.startTime) / 1000, 10));
					                }

					                imagePuzzle.enableSwapping(this);
					                imagePuzzle.enableSwapping($dragElem);
					            }
					        });
					    },

					    setImage: function (images, gridSize) {
					        console.log(gridSize);
					        gridSize = gridSize || 4; 
					        console.log(gridSize);
					        var percentage = 100 / (gridSize - 1);
					        var image = images[Math.floor(Math.random() * images.length)];
					        $('#imgTitle').html(image.title);
					        $('#actualImage').attr('src', image.src);
					        $('#sortable').empty();
					        for (var i = 0; i < gridSize * gridSize; i++) {
					            var xpos = (percentage * (i % gridSize)) + '%';
					            var ypos = (percentage * Math.floor(i / gridSize)) + '%';
					            var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
					                'background-image': 'url(' + image.src + ')',
					                'background-size': (gridSize * 100) + '%',
					                'background-position': xpos + ' ' + ypos,
					                'width': 400 / gridSize,
					                'height': 400 / gridSize
					            });
					            $('#sortable').append(li);
					        }
					        $('#sortable').randomize();
					    }
					};

					function isSorted(arr) {
					    for (var i = 0; i < arr.length - 1; i++) {
					        if (arr[i] != i)
					            return false;
					    }
					    return true;
					}
					$.fn.randomize = function (selector) {
					    var $elems = selector ? $(this).find(selector) : $(this).children(),
					        $parents = $elems.parent();

					    $parents.each(function () {
					        $(this).children(selector).sort(function () {
					            return Math.round(Math.random()) - 0.5;
					        }).remove().appendTo(this);
					    });
					    return this;
					};
					            $(function () {
					                var gridSize = $('#levelPanel :radio:checked').val();
					                imagePuzzle.startGame(images, gridSize);
					                $('#newPhoto').click(function () {
					                    var gridSize = $('#levelPanel :radio:checked').val();  // Take the updated gridSize from UI.
					                    imagePuzzle.startGame(images, gridSize);
					                });

					                $('#levelPanel :radio').change(function (e) {
					                    var gridSize = $(this).val();
					                    imagePuzzle.startGame(images, gridSize);
					                });
					            });
					            function rules() {
					                alert('Re arrange the image parts in a way that it correctly forms the picture. \nThe no. of steps taken will be counted.');
					            }
					            var timerFunction;

					    /* End Puzzle Javascript */
						$(".progress-steps-connector").animate({width:"68%"},2000);



						});

				  })

				});
			});
		})
      })
    });




