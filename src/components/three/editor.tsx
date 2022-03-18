import React from "react";
import { Canvas } from "react-three-fiber";

function CanvasThree(prop) {
    return(
        <div>
        <Canvas>
            mesh
            <boxBufferGeometry attach={'geometry'} />
        </Canvas>
        </div>
    );
}

export {CanvasThree};