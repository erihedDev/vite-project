import React, { useEffect } from 'react'
import './index.css'

import $ from 'jquery'

import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function Model() {
    useEffect(() => {
        const scene = new THREE.Scene()

        let width = $("#model").parent().width()
        let height = width

        const camera = new THREE.PerspectiveCamera(
            50,
            width / height,
            1,
            1000,
        )

        camera.position.z = 96

        const canvas = document.getElementById('model')
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
        })

        renderer.setSize(width, height)
        renderer.setClearColor( 0xffffff, 0);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        ambientLight.castShadow = true
        scene.add(ambientLight)

        const spotLight = new THREE.SpotLight(0xffffff, 1)
        spotLight.castShadow = true
        spotLight.position.set(0, 64, 32)
        scene.add(spotLight)

        const loader = new GLTFLoader()

        let model

        loader.load('models/voxelcat.glb', function (gltf) {
            gltf.scene.scale.set( 30, 30, 30 )
            gltf.scene.rotation.x = (Math.PI / 180) * 15
            model = gltf
            scene.add(gltf.scene)
        }, undefined, function (error) {
            console.error(error)
        }
        )

        const controls = new OrbitControls( camera, renderer.domElement );
        controls.enableZoom = false;

        const animate = () => {
            if (model) {
                model.scene.rotation.y += 0.005
            }

            if ($("#model").parent().width() !== width) {
                width = $("#model").parent().width()
                height = width
                renderer.setSize(width, height)
            }

            camera.width = width
            camera.height = height

            controls.update()
            renderer.render(scene, camera)
            window.requestAnimationFrame(animate)
        }
        animate()

    })

    return (
        <div className='aspect-square max-w-[500px]'>
            <canvas id='model'/>
        </div>
    )
}

export default Model