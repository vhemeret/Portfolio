import React from 'react'
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from '@react-three/drei'
import { Model } from './Model'

const ThreeModelViewer = () => {
    return (
        <div className=''>
            <Canvas>
                <mesh>
                    <Environment preset='studio'/>
                    <OrbitControls />
                    <Model />
                </mesh>
            </Canvas>
        </div>
    )
}

export default ThreeModelViewer