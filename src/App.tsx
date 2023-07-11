import React from 'react';
import './App.scss';


function App() {
    return (
        <div className="panels" id="panelContainer">
            <div className="panel one" id="panel_1">
                <div className="clip">
                    <div className="video_clip">
                        <iframe
                            title="watch"
                            src="https://player.vimeo.com/video/468155263?&api=1&controls=0&background=1&autoplay=1&loop=1&mute=1"
                            allow="autoplay;"></iframe>
                    </div>
                </div>
            </div>

            <div className="panel two" id="panel_2">
                <div className="clip">
                    <img src="https://source.unsplash.com/800x600?ocean" alt=""/>
                </div>
            </div>

            <div className="panel three" id="panel_3">
                <div className="clip">
                    <img src="https://source.unsplash.com/800x600?river" alt=""/>
                </div>
            </div>

            <div className="panel four" id="panel_4">
                <div className="clip">
                    <img src="https://source.unsplash.com/800x600?waterfall" alt=""/>
                </div>
            </div>

        </div>
    );
}

export default App;
