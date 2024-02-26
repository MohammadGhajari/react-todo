import React from "react";
import Page from "./components/Page";
import "./css/app.css";

const App: React.FC = () => {
    

    return (
        <div className="app">
            {/* add some style to background */}

            {Array.from({ length: 20 }, (_, i) => (
                <>
                {/* random lines */}
                    <div
                        style={{
                            position: 'absolute',
                            left: `${Math.floor(Math.random() * 100)}%`,
                            top: `${Math.floor(Math.random() * 100)}%`,
                            width: `${Math.floor(Math.random() * 8) + 2}rem`,
                            transform: `rotate(${Math.floor(Math.random() * 180)}deg)`,
                            height: `2px`,
                            background: `rgb(${Math.floor(
                                Math.random() * 255
                            )}, ${Math.floor(
                                Math.random() * 255
                            )}, ${Math.floor(Math.random() * 255)})`
                        }}
                        key={i}
                    ></div>
                    {/* random circles */}
                    <div
                        style={{
                            borderRadius: `100%`,
                            position: 'absolute',
                            left: `${Math.floor(Math.random() * 100)}%`,
                            top: `${Math.floor(Math.random() * 100)}%`,
                            width: `${Math.floor(Math.random() * 2) + 2}rem`,
                            aspectRatio: 1,
                            border: `solid 2px rgb(${Math.floor(
                                Math.random() * 255
                            )}, ${Math.floor(
                                Math.random() * 255
                            )}, ${Math.floor(Math.random() * 255)})`,
                        }}
                        className="bubble"
                        key={i + 21}
                    ></div>
                </>
            ))}
            
            <Page/>
        </div>
    );
};

export default App;
