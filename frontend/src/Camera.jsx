import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import { postReport } from "./server";
import "./Camera.css";

const Camera = () => {
  const cameraRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const handleTake = useCallback(() => {
    const imageSrc = cameraRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [cameraRef]);

  const handleRetake = () => {
    setImgSrc(null);
  };
  const handlePic = () => {
    postReport(imgSrc);
    setImgSrc(null);
  };

  return (
    <div>
      {imgSrc ? (
        <div>
          <img src={imgSrc} alt="picture" />
          <button onClick={handleRetake}>Retake picture</button>
          <button onClick={handlePic}>Send Picture</button>
        </div>
      ) : (
        <div>
          <Webcam
            height={600}
            width={600}
            ref={cameraRef}
            screenshotFormat="image/png"
          />
          <button onClick={handleTake}>Take picture</button>
        </div>
      )}
    </div>
  );
};
export default Camera;
