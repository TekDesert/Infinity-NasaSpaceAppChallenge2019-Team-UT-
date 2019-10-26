

var objects = [];
var nucleus;
var nucleusAtom;
var nucleusx;
var nucleusxAtom;
var nucleusB;
var nucleusxB;
var electron1;
var electron2;
var electron1x;
var renderer;
var scene;
var camera;
var clock;
var animationFrame;
var numberCollision = 0;
var isReaction = false;
var atomBondGeometry = new THREE.Geometry();
var textFont;



function init(){
	
	// Create a three.js scene
	scene = new THREE.Scene();
	
	// Add a camera so that we can see our 3D objects.
	// By moving our camera's z positioning, we can increase or decrease zoom.
	var aspectRatio = window.innerWidth / window.innerHeight;
	camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
	camera.position.z = 350;
	scene.add(camera);

	// spotlight
	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(200, 400, 300);
	scene.add(spotLight);


	// *** objects ***
	// Nucleus
	//                                  radius
	//                                    | width segments
	//                                    |    | height segments
	//                                    |    |   |
	//                                    v    v   v
	var shape = new THREE.SphereGeometry(50, 20, 20);
	var cover1 = new THREE.MeshPhongMaterial({ color: 0xff0000, side: THREE.DoubleSide, emissive: 0xff0000});
	nucleus = new THREE.Mesh(shape, cover1);
	scene.add(nucleus);
	nucleus.position.set(-200,0,0);
	objects.push( nucleus );

	var cover2 = new THREE.MeshPhongMaterial({color: 0x0000ff, side: THREE.DoubleSide, emissive: 0x0000ff});
	nucleusx = new THREE.Mesh(shape, cover2);
	scene.add(nucleusx);
	nucleusx.position.set(50,-0,0);
	objects.push( nucleusx );

	
	// Electron 1
	var electronShape = new THREE.SphereGeometry(10, 20, 20);
	electron1 = new THREE.Mesh(electronShape, cover1);
	nucleus.add(electron1);
	// When we add our electron geometry to the nucleus, we can statically position objects. 
	// If the objects are dynamically moving, this has no effect.
	//                        x, y, z
	electron1.position.set(-150,150,0);

	// Electron 2
	electron2 = new THREE.Mesh(electronShape, cover1);
	nucleus.add(electron2);
	electron2.position.set(150,150,0);

	// Electron 1
	var electronShapex = new THREE.SphereGeometry(10, 20, 20);
	electron1x = new THREE.Mesh(electronShape, cover2);
	nucleusx.add(electron1x);
	// When we add our electron geometry to the nucleus, we can statically position objects. 
	// If the objects are dynamically moving, this has no effect.
	//                        x, y, z
	electron1x.position.set(-150,150,0);

	
	
	// *** renderer ***
	// A canvas renderer will generate the image, drawing our models on the screen.
	renderer = new THREE.WebGLRenderer({antialias: true });

	// This places the CanvasRenderer onto the body element in our HTML.
	canvas = document.getElementById("canvas");
	console.log(canvas);
	renderer.setSize(window.innerWidth , window.innerHeight);
	canvas.appendChild( renderer.domElement );


	// *** animation ***
	// Animate motion using a clock timer.
	clock = new THREE.Clock();

	//Drag and Drop

	var controls = new THREE.DragControls( objects, camera, renderer.domElement );
	controls.addEventListener( 'dragstart', dragStartCallback );
	controls.addEventListener( 'dragend', dragendCallback );
	
	nucleusAtom = nucleus.clone();
	
	nucleusAtom = removeElectrons(nucleusAtom);
	
	nucleusxAtom = nucleusx.clone();
	
	nucleusxAtom = removeElectrons(nucleusxAtom);
	
	nucleusB = new THREE.Box3().setFromObject(nucleusAtom);

	nucleusxB = new THREE.Box3().setFromObject(nucleusxAtom);
	
		
	var loader = new THREE.FontLoader();

	loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
	
	textFont = font;
	
	var geometry1 = new THREE.TextGeometry( 'Helium', {
		font: font,
		size: 18,
		height: 1,
		curveSegments: 5,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 1,
		bevelOffset: 0,
		bevelSegments: 1
	} );
		
	
  var textReactionMaterial = new THREE.MeshPhongMaterial( 
    { color: 0xffffff }
  );
  
  var textMaterial1 = new THREE.MeshPhongMaterial( 
    { color: 0xff0000 }
  );
	
	var mesh = new THREE.Mesh(geometry1, textMaterial1);


	nucleus.add(mesh);
	

	mesh.position.set(50, 50, 50);
	
	
	var geometry2 = new THREE.TextGeometry( 'Hydrogene', {
		font: font,
		size: 18,
		height: 1,
		curveSegments: 5,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 1,
		bevelOffset: 0,
		bevelSegments: 1
		} );
		
	var textMaterial2 = new THREE.MeshPhongMaterial( 
		{ color: 0x0000ff}
	);
		
	var mesh = new THREE.Mesh(geometry2, textMaterial2);

	nucleusx.add(mesh);
	mesh.position.set(50, 50, 50);
		
	} );
	
}

	
function dragStartCallback(event) {
	
}
 
function dragendCallback(event) {
	
}

//Collision
function atomCollision()
{

	var collision = nucleusB.intersectsBox(nucleusxB);
	
	return collision;
	
 
}

// This function will handle animation of our atom
function animate() {
	
	animationFrame = requestAnimationFrame(animate);
	
	atomBondGeometry.verticesNeedUpdate = true;
  
	nucleusAtom = nucleus.clone();
	
	nucleusAtom = removeElectrons(nucleusAtom);

	nucleusxAtom = nucleusx.clone();
	
	nucleusxAtom = removeElectrons(nucleusxAtom);
  
  nucleusB.setFromObject(nucleusAtom);
  nucleusxB.setFromObject(nucleusxAtom);

  // This gives us a running timer for our orbiting electrons.
  var t = clock.getElapsedTime();

  // Display what the camera sees onto the browser screen.
  renderer.render(scene, camera);
  
  // orbit from bottom right to top left
  //
  //                            movement speed
  //                               |
  //                               |  orbit distance
  //                               |      |
  //                               v      v
  
  electron1.position.x = Math.sin(5*t) * -150;
  electron1.position.y = Math.sin(5*t) * 150;
  electron1.position.z = Math.cos(5*t) * 150;

  // orbit from top right to bottom left
  electron2.position.x = Math.cos(5*t) * 150;
  electron2.position.y = Math.cos(5*t) * 150;
  electron2.position.z = Math.sin(5*t) * 150;

  // Offset from our timer so the electrons don't smash into each other.
  var tOffset = 1.5 + clock.getElapsedTime();

  // orbit from the bottom to the top
  electron1x.position.x = Math.sin(5*tOffset) * 0;
  electron1x.position.y = Math.sin(5*tOffset) * 150;
  electron1x.position.z = Math.cos(5*tOffset) * 150;
  
  
  var collision  = atomCollision();
  
  if(collision && isReaction == false){
	  
	  numberCollision += 1;
	  
	  //updateNumberReaction(numberCollision);
	  
	  console.log(numberCollision);
  }
  
  if(numberCollision > 8 && isReaction == false){

  	/* ACHIEVEMENT UNLOCKED WHEN ATOMS COLLIDE */
	$('#AC2').removeClass('fas fa-question');
    $('#AC2').addClass('fas fa-trophy');
	$("#AC2").css({'color':'orange'});
	$("#AC2").append(" <i class='fas fa-check' style='color:green'></i>");
	$("#notif_main").fadeIn(1000);
	$("#notif_main").fadeOut(10000);
	
	$("#Phase1").fadeOut(1000);
	$("#Phase1").fadeIn(1000, function(){
		
		atomBondGeometry.dynamic = true;
		atomBondGeometry.vertices.push(nucleus.position);
		atomBondGeometry.vertices.push(nucleusx.position);
		atomBondGeometry.verticesNeedUpdate = true;
		

		var material = new THREE.LineBasicMaterial({ color: 0x70fdf2, linewidth: 5 });
		var line = new THREE.Line( atomBondGeometry, material );
		

		scene.add(line);
		
		nucleus.position.set(-200,0,0);
		
		nucleusx.position.set(50,-0,0);
		
		var successGeometry = new THREE.TextGeometry( 'Congratulation ! You have created : Helium Hydride', {
			font: textFont,
			size: 18,
			height: 1,
			curveSegments: 5,
			bevelEnabled: true,
			bevelThickness: 1,
			bevelSize: 1,
			bevelOffset: 0,
			bevelSegments: 1
		} );
		
		var textReactionMaterial = new THREE.MeshPhongMaterial( 
			{ color: 0x00cc00 }
		);
		
		success = new THREE.Mesh(successGeometry, textReactionMaterial);
		
		success.position.set(-320, -150, 50);
		
		scene.add(success);
	
	});
	
	
	
	isReaction = true;

  }
  
  
}

function removeElectrons(atom){
	

	for (var i = atom.children.length - 1; i >= 0; i--) {
		atom.remove(atom.children[i]);
	}
	
	return atom;


}


// Run the animation.
//collision();
//init();
//animate();
