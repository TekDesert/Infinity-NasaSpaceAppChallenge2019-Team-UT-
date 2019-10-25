

var objects = [];
var nucleus;
var nucleusx;
var electron1;
var electron2;
var electron1x;
var renderer;
var scene;
var camera;
var clock;



function init(){
	
	// Create a three.js scene
	scene = new THREE.Scene();
	
	// Add a camera so that we can see our 3D objects.
	// By moving our camera's z positioning, we can increase or decrease zoom.
	var aspectRatio = window.innerWidth / window.innerHeight;
	camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
	camera.position.z = 350;
	scene.add(camera);

	// *** objects ***
	// Nucleus
	//                                  radius
	//                                    | width segments
	//                                    |    | height segments
	//                                    |    |   |
	//                                    v    v   v
	var shape = new THREE.SphereGeometry(50, 20, 20);
	var cover = new THREE.MeshNormalMaterial();
	var nucleus = new THREE.Mesh(shape, cover);
	scene.add(nucleus);
	nucleus.position.set(0,0,0);
	objects.push( nucleus );

	var nucleusx = new THREE.Mesh(shape, cover);
	scene.add(nucleusx);
	nucleusx.position.set(200,-0,0);
	objects.push( nucleusx );

	// Electron 1
	var electronShape = new THREE.SphereGeometry(10, 20, 20);
	electron1 = new THREE.Mesh(electronShape, cover);
	nucleus.add(electron1);
	// When we add our electron geometry to the nucleus, we can statically position objects. 
	// If the objects are dynamically moving, this has no effect.
	//                        x, y, z
	electron1.position.set(-150,150,0);

	// Electron 2
	electron2 = new THREE.Mesh(electronShape, cover);
	nucleus.add(electron2);
	electron2.position.set(150,150,0);

	// Electron 1
	var electronShapex = new THREE.SphereGeometry(10, 20, 20);
	electron1x = new THREE.Mesh(electronShape, cover);
	nucleusx.add(electron1x);
	// When we add our electron geometry to the nucleus, we can statically position objects. 
	// If the objects are dynamically moving, this has no effect.
	//                        x, y, z
	electron1x.position.set(-150,150,0);

	// *** renderer ***
	// A canvas renderer will generate the image, drawing our models on the screen.
	renderer = new THREE.WebGLRenderer();

	// This places the CanvasRenderer onto the body element in our HTML.
	canvas = document.getElementById("canvas");
	renderer.setSize(window.innerWidth , window.innerHeight);
	canvas.appendChild( renderer.domElement );


	// *** animation ***
	// Animate motion using a clock timer.
	clock = new THREE.Clock();

	//Drag and Drop

	var controls = new THREE.DragControls( objects, camera, renderer.domElement );
	controls.addEventListener( 'dragstart', dragStartCallback );
	controls.addEventListener( 'dragend', dragendCallback );
	
}

	
function dragStartCallback(event) {
	
}
 
function dragendCallback(event) {
	
}

//Collision
function collision()
{
  var originPoint = paddle.position.clone();
	
	for (var vertexIndex = 0; vertexIndex < paddle.geometry.vertices.length; vertexIndex++)
	{	
    		
		var ray = new THREE.Raycaster( paddle.position, paddle.geometry.vertices[vertexIndex] );
		var collisionResults = ray.intersectObjects( collidableMeshList );
		if ( collisionResults.length > 0)  
		{
      console.log("true");
      hit = true;
     }
  } 
}

// This function will handle animation of our atom
function animate() {
  requestAnimationFrame(animate);

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

  
  
}

// Run the animation.
//collision();
//init();
//animate();
