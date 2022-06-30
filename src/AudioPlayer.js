import React, { useState, useRef, useEffect } from 'react'
import Controls from './Controls';


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

    //Control functionality
    const nextTrack = () => {
        if (trackIndex < tracks.length - 1){
            setTrackIndex(trackIndex+1)
        } else {
            setTrackIndex(0)
        }
    } 
    const prevTrack = () => {
        if (trackIndex - 1 < 0){
            setTrackIndex(tracks.length-1)
        } else {
            setTrackIndex(trackIndex-1)
        }
    }

    //Play Pause Functionality
    useEffect(()=>{
        if (isPlaying){
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    },[isPlaying])

    return (
        <div className='player'>
            <div className='trackInfo'>
                <h3 className='trackTitle'>{title}</h3>
                <h4 className='trackArtist'>{artist}</h4>
            </div>
            <Controls 
                isPlaying={isPlaying}
                onPrevClick={prevTrack}
                onNextClick={nextTrack}
                onPlayPauseClick={setIsPlaying}
            />
        </div>
    );
}
export default AudioPlayer