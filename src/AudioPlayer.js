import React, { useState, useRef, useEffect } from 'react'


const AudioPlayer = ({tracks}) => {
    //States to manage playment
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    //Destructure so I don't go crazy
    const { title, artist, audioSource } = tracks[trackIndex]

    //Refs to handle creation of Audio elements
    const audioRef = useRef(new Audio(audioSource))
    const intervalRef = useRef();
    const isReady = useRef(false);

    //Destructure to grab track length
    const {duration} = audioRef.current;

    //Value to determine track progress
    const playedPercentage = duration ? `${(trackProgress/duration) * 100}%` : "0%"

    //? Need function to handle play pause
    const onPlayPause = () => {}
    //? Need function to handle track skipping
    const nextTrack = () => {}
    //? Need function to handle scrubbiung
    const prevTrack = () => {}
    
    return (
        <div className='player'>
            <div className='trackInfo'>
                <h3 className='trackTitle'>{title}</h3>
                <h4 className='trackArtist'>{artist}</h4>
            </div>
        </div>
    );
}
export default AudioPlayer