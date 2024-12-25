const snowflakes = document.querySelector('.snowflakes');
for (let i = 0; i < 100; i++) {
    const flake = document.createElement('span');
    const size = Math.random() * 5 + 5;
    const left = Math.random() * 100;
    const duration = Math.random() * 3 + 3;

    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.left = `${left}%`;
    flake.style.animationDuration = `${duration}s`;

    snowflakes.appendChild(flake);
}



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.01; // Rotation for animation
    renderer.render(scene, camera);
}
animate();
