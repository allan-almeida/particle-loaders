import React from 'react'
import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material )

class BrandLoader extends React.Component {
  animate = () => {
    requestAnimationFrame(this.animate)
    renderer.render(scene, camera)
  }

  componentDidMount () {
    renderer.setSize( 800,600 );
    renderer.setClearColor( 0xffffff, 0);
    this.anchor.appendChild( renderer.domElement );
    scene.add(cube)
    camera.position.z = 5
    this.animate()
  }

  render () {
    return (
      <div ref={(anchor) => { this.anchor = anchor }}></div>
    )
  }
}

export default BrandLoader