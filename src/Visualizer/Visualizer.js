import React, {useEffect} from 'react';
import Canvas from './Canvas';
import songFile from '../assets/testAudioFile.m4a'

const Visualizer = () => {
        const audioElement = new Audio(songFile)    
    return (
        <>
            <Canvas audioElement = {audioElement}/>
        </>
    )

} 

export default Visualizer;