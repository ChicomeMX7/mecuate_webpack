import React, { useRef, useState } from "react";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// const [isEditorOn, setEditorOn] = useState(false);
// let editorEngineActive = isEditorOn;
const markers = { origin: { x: 0, y: 0, z: 0, color: "crimson" } };
const board = [ [-23.604, -6.808], [-23.604, 6.863], [-23.604, 0.028], [-17.754, 17.047], [-17.754, 10.211], [-5.899, 23.883], [5.931, 23.883], [-11.819, 20.465], [-11.819, 13.629], [-17.754, -10.226], [-17.754, -17.061], [-5.899, -23.897], [5.931, -23.897], [-11.819, -20.479], [-11.819, -13.644], [-17.754, 3.445], [-17.754, -3.39], [-11.819, -6.808], [-11.819, 6.863], [-11.819, 0.028], [-5.899, 17.047], [-5.899, 10.211], [23.601, -6.808], [23.601, 6.863], [23.601, 0.028], [17.749, 17.047], [17.749, 10.211], [11.853, 20.465], [11.853, 13.629], [17.749, -10.226], [17.749, -17.061], [11.853, -20.479], [11.853, -13.644], [17.749, 3.445], [17.749, -3.39], [11.853, -6.808], [11.853, 6.863], [11.853, 0.028], [5.931, 17.047], [5.931, 10.211], [0.035, 20.465], [0.035, 13.629], [-5.899, -10.226], [-5.899, -17.061], [5.931, -10.226], [5.931, -17.061], [0.035, -20.479], [0.035, -13.644], [-5.899, 3.445], [-5.899, -3.39], [5.931, 3.445], [5.931, -3.39], [0.035, -6.808], [0.035, 6.863] /* [0.035,0.028]*/, ];
let INTERSECTED;
let raycaster;
let pointer = new THREE.Vector2();
const ROOT = document.getElementById("app_editor");
const app = {
	width: 380,
	height: 620,
	Winwidth: window.innerWidth,
	Winheight: window.innerHeight,
};
let renderer;
let scene;
let camera;
let controls;

const setLocationMarker = (
    cord: { x: number; y: number; z: number; color: string | null }, 
    name: string, 
    transp?: {alphaTest:number|string|any; opacity:number|string|any} | null
    ) => {
    const alpha = transp ? transp : {alphaTest :0, opacity: 1};
    const colorValue = cord.color ? cord.color : 'red';
    const assigMaterial = new THREE.MeshLambertMaterial(
        { color: colorValue, alphaTest: alpha.alphaTest, opacity: alpha.opacity, transparent: transp ? true : false }
        );
    const meshShape = new THREE.CylinderGeometry(3.9, 3.9, 2, 6);
    const polyMesh = new THREE.Mesh(meshShape, assigMaterial);
    polyMesh.name = name;
    polyMesh.position.x = cord.x;
    polyMesh.position.y = cord.y;
    polyMesh.position.z = cord.z;
    polyMesh.rotation.x = 0;
    polyMesh.rotation.y = Math.PI / 6;
    polyMesh.rotation.z = 0;
    polyMesh.scale.set(1, 1, 1);
    polyMesh.matrixAutoUpdate = false;
    polyMesh.updateMatrix();
    return polyMesh;
};

function init() {
	// IMPORTANT!!! const materialP = new THREE.MeshLambertMaterial({ color: "#4d4f5b", wireframe: false });
	// IMPORTANT!!! const pyrmd = new GLTFLoader().setPath("./src/resources/models/");
	const light = new THREE.DirectionalLight(0xffffff, 1);
	const helper = new THREE.DirectionalLightHelper(light, 15);
	const group = new THREE.Group();

	raycaster = new THREE.Raycaster();
	renderer = new THREE.WebGLRenderer({ antialias: true });
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(25, app.width / app.height, 15, 300);
	controls = new OrbitControls(camera, renderer.domElement);

	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor("black", 1);
	renderer.setSize(app.width, app.height);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	camera.position.set(6.29e-16, 63.0, 70.6);
	camera.rotation.x = -0.738;
	camera.rotation.y = 6.41e-18;
	camera.rotation.z = 5.84e-18;
	controls.target = new THREE.Vector3(0, -3, -2);
	controls.minDistance = 78;
	controls.maxDistance = 180;
	controls.maxPolarAngle = Math.PI / 2.12;
	controls.minAzimuthAngle = -Math.PI / 2.2;
	controls.maxAzimuthAngle = Math.PI / 2.2;
	controls.enableDamping = true;

	light.castShadow = true;
	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	light.shadow.camera.near = 10;
	light.shadow.camera.far = 100;
	light.position.set(0, 8, 0);

	let originMesh = setLocationMarker(markers.origin, "origin",null);

	group.receiveShadow = true;

	scene.add(new THREE.AmbientLight(0xbcbcbc));
	scene.add(helper);
	scene.add(light);
	scene.add(originMesh);
	scene.add(group);

	for (let _i = 0; _i < board.length; _i++) {
		const element = { x: board[_i][0], y: 0, z: board[_i][1], color: "skyblue" };
        let labelName = `checker_${ (_i + 1).toString() }`;
		let mesh1 = setLocationMarker( element , labelName, null/* { alphaTest: 0.08, opacity:0.15 } */);
		scene.add(mesh1);
	}

	// /* 	 pyrmd.load("pyramid.gltf", function (gltf) { gltf.scene.traverse(function (child) { if (child.isMesh) child.material = materialP; }); gltf.scene.scale.set(0.15, 0.3, 0.15); gltf.scene.position.set(7.4, 0.15, -11.9); gltf.scene.rotation.y = 380; scene.add(gltf.scene); }) fireMesh.load("scene.gltf", function (gltf) { gltf.scene.traverse(function (child) { if (child.isMesh) child.material = materialF; }); gltf.scene.scale.set(7, 7, 7); gltf.scene.position.set(-12.5, -0.4, -24); scene.add(gltf.scene); }); */

	// 	if (ROOT) ROOT.appendChild(renderer.domElement);
	// 	onWindowResize();
	// 	document.addEventListener("mousemove", onPointerMove);
	// 	window.addEventListener("resize", onWindowResize);
}

function onPointerMove(event) {
	let loc = ROOT ? ROOT.getBoundingClientRect() : { x: 0, y: 0 };
	pointer.x = ((event.clientX - loc.x) / app.width) * 2 - 1;
	pointer.y = (-(event.clientY - loc.y) / app.height) * 2 + 1;
}

function onWindowResize() {
	camera.aspect = app.width / app.height;
	camera.updateProjectionMatrix();
	renderer.setSize(app.width, app.height);
}

function animate() {
	requestAnimationFrame(animate);
	render();
}

function render() {
	raycaster.setFromCamera(pointer, camera);
	const intersects = raycaster.intersectObjects(scene.children);

	if (intersects.length > 0) {
		if (INTERSECTED != intersects[0].object) {
			if (INTERSECTED) {
				INTERSECTED.material.color.setHex("#ff8c00");
			}
			INTERSECTED = intersects[0].object;
			INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();

			if (intersects[0].object.name.includes("checker")) {
			}
		}
	} else {
		if (INTERSECTED) {
			INTERSECTED.material.color.setHex("#fa0000");
			INTERSECTED = null;
		}
	}
	controls.update();
	renderer.render(scene, camera);
}

// init();
// animate();

function CanvasThree({current}) {
	
	const callback = current.setSecond;
	const ttNULL = current.otherCall;

	return (
		<div>
			<span>text in ref is [{ttNULL}]</span>
			<div>editor goes here with value of [{current.val}][{current.second}]</div>
			<button onClick={callback}>Click to change</button>
			<div id="app_editor"></div>
		</div>
	);
}

export { CanvasThree };
