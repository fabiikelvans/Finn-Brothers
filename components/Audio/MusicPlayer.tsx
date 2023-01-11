import React, {useEffect, useState} from 'react';
import Equalizer from "./Equalizer/Equalizer";

const useAudio = (url : string) => {
    // audio hook useState
    const [audio] = useState(<audio/>);

    // is player on/off? the playing state will be toggled
    // with the useEffect hook trough setPlaying
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
        playing ? (audio.loop = true) : (audio.loop = false);
    }, [playing]);

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false));
        return () => {
            audio.removeEventListener("ended", () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

function MusicPlayer({ url }) {
    const [playing, toggle] = useAudio(url);

    return (
        <div>
            <div
                onClick={toggle}
                className={playing ? "musice playe" : "musice stope-0-2-3"}
            >
                <Equalizer />
            </div>
        </div>
    );
}

export default MusicPlayer;