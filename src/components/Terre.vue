<template>
  <div>
    <canvas class="webgl"></canvas>
  </div>
</template>

<script>    
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default{
  mounted(){
      const cursor = {
        x: 0,
        y: 0
      }

      window.addEventListener('mousemove', (e) => {
        cursor.x = e.clientX / 400 - 0.5
        cursor.y = e.clientY / 400 - 0.5
      })
      /*const parameters = {
        color: 0x9f7de4,
        spin: () => {
          gsap.to(box.rotation, {
            y: box.rotation.y + 12,
            duration: 1
          })
        }
      }*/
      const loadingManager = new THREE.LoadingManager()
      const textureLoader = new THREE.TextureLoader(loadingManager)
      const colorTexture = textureLoader.load('./assets/daymap2.jpg')

      const canvas = document.querySelector('canvas.webgl')

      const renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true})
      renderer.setSize(400, 400)
      renderer.setPixelRatio(window.devicePixelRatio*2)

      const scene = new THREE.Scene()
      scene.background = null

      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
      camera.position.z = 9
      scene.add(camera)

      const mat = new THREE.MeshStandardMaterial({map: colorTexture})
      const earth = new THREE.Mesh(new THREE.SphereGeometry(3, 64, 32), mat)

      scene.add(earth)

      const orbit = new OrbitControls(camera, canvas)
      orbit.enableDamping = true
      orbit.enableZoom = false
      orbit.enablePan = false
      orbit.autoRotate = true

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      const point = new THREE.PointLight(0xffffff, 1)
      point.position.x = 0
      point.position.z = 7
      point.position.y = 0
      scene.add(ambientLight, point)

      /*const directionalLight = new THREE.HemisphereLight( 0xffffff, 0x080820, 0.7 )
    directionalLight.position.set(1,4,8)
    scene.add( directionalLight )

    window.addEventListener('dblclick', () => {
      const fullScreenElement = document.fullscreenElement || document.webkitFullscreenElement
      if (!fullScreenElement){
        canvas.requestFullscreen() ? canvas.requestFullscreen() : canvas.webkitRequestFullscreen()
      }else{
        document.exitFullscreen() ? document.exitFullscreen() : document.webkitExitFullscreen()

      }
    })





    const box = new THREE.Mesh(new THREE.IcosahedronGeometry(1,0), new THREE.MeshLambertMaterial({map: colorTexture}))
    scene.add(box)
    gui.add(box.rotation, 'x').min(-5).max(5).step(0.1).name("Position X")
    gui.add(box, 'visible').name("Visibilité")
    gui.addColor(parameters, 'color').name('Couleur').onChange(() => {
      box.material.color.set(parameters.color)
    })
    gui.add(parameters, 'spin')
    */
      const clock = new THREE.Clock()

      const tick = () => {
        /*earth.rotation.y = cursor.x * Math.PI
      earth.rotation.x = cursor.y * Math.PI
      camera.lookAt(earth.position)*/
        const elapsedTime = clock.getElapsedTime()

        orbit.update()
        renderer.render(scene, camera)
        window.requestAnimationFrame(tick)
      }

      tick()
}
}
</script>