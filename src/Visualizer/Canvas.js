import React from 'react';
import { useEffect } from 'react';
import songFile from '../assets/testAudioFile.m4a'

function Canvas(props) {
    const audioElementBuilder = () => {
        const audioElement = new Audio(songFile)
        return audioElement
    }
return (
    <>
        {audioElementBuilder()}
    </>
)
}

export default Canvas;