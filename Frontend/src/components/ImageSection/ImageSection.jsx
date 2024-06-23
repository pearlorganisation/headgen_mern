import React, { useRef, useState } from "react";
import DragAndDrop from "./DragAndDrop/DragAndDrop";
import ImgCropT from "./CropTool/ImgCropT";

const ImageSection = ({ files, setFiles, fileErrorMsg, setFileErrorMsg, maxUploads = 4 }) => {
 
  const [selectedImage, setSelectedImage] = useState(null);
  const imgCropRef = useRef(null)
  const correctData = [
    {
      imgPath:
        "https://drive.google.com/thumbnail?id=1nfrI2WDu8twZpC7aVabpjcc7AMIo-Nzd&sz=s600",
      content: (
        <>
          👁️ <strong>Eye Contact:</strong> You should be looking directly at the
          camera.
        </>
      ),
    },
    {
      imgPath:
        "https://drive.google.com/thumbnail?id=1BJp8cEzqRdIMNWgBABGxbpetPnfQYRQD&sz=s600",
      content: (
        <>
          🆕 <strong> Recent:</strong> Photos taken recently, ideally within the
          past six months.
        </>
      ),
    },
    {
      imgPath:
        "https://drive.google.com/thumbnail?id=1v1hAjOQNl8E4yFD5SYvldddUOGVRzLTm&sz=s600",
      content: (
        <>
          ☀️ <strong> Clear:</strong> Plain background, Very important Head Straight and no Head tilt, Good lighting , head to waist shot, standing against a plain white or grey background really helps!
        </>
      ),
    },
  ];

  const incorrectData = [
    {
      imgPath:
        "https://drive.google.com/thumbnail?id=1hAjK3Ppw-TRGkWUGtsBQ-iiSFgAD9FmE&sz=s600",
      content: (
        <>
          🧢 <strong>No Accessories:</strong> (e.g. Hats, backpacks, sunglasses, earrings, nose rings, headphones, excess makeup, scarfs, chains, necklaces, glasses etc. ).
        </>
      ),
    },
    {
      imgPath:
        "https://drive.google.com/thumbnail?id=1G83HIuGLB0G4OB7pjqzPuozqDBAB4Oqx&sz=s600",
      content: (
        <>
          👙 <strong>No Group Photos or Revealing Clothes:</strong> (eg. Group Images with 2 or more, tank tops, shirtless, bikins. ).
        </>
      ),
    },
    {
      imgPath:
        "https://drive.google.com/thumbnail?id=1sotdvngPxuOmi29ibr5v7kswMzy-5sr5&sz=s600",
      content: (
        <>
          🥴 <strong> No Goofy Faces:</strong>No unusual expressions like closed eyes, duck faces, tongue out, peace sign, very important to keep head straight and no head tilt , no half faces .
        </>
      ),
    },
  ];

  const deleteFile = (file) => {
    setFiles((currentSelection) => {
      const newSelection = currentSelection.slice();
      const fileIndex = currentSelection.indexOf(file);
      if (selectedImage === file) {
        setSelectedImage(null);
      }
      newSelection.splice(fileIndex, 1);
      return newSelection;
    });
  };

  const updateFile = (oldFile, newFile) => {
    setFiles((currentSelection) => {
      const newSelection = currentSelection.slice();
      const fileIndex = currentSelection.indexOf(oldFile);
      newSelection[fileIndex] = newFile;
      // setSelectedImage(newFile);
      setSelectedImage(null);
      return newSelection;
    });
  };
  

  return (
    <div className="flex w-full h-full max-h-[700px] justify-center">
      <DragAndDrop
        files={files}
        setFiles={setFiles}
        maxUploads={maxUploads}
        setSelectedImage={setSelectedImage}
        deleteFile={deleteFile}
        fileErrorMsg={fileErrorMsg}
        setFileErrorMsg={setFileErrorMsg}
        imgCropRef={imgCropRef}
        type="freeHeadshot"
      />

      <div className="w-[60%] relative max-h-full overflow-auto px-4 flex flex-col gap-2"  ref={imgCropRef}>
        {selectedImage && (
          <>
            <div>
              {selectedImage && (
                <div className="relative w-full">
                  <ImgCropT
                 
                    selectedImage={selectedImage}
                    updateFile={updateFile}
                  />
                </div>
              )}
            </div>
          </>
        )}

        <div className="w-full h-fit bg-[#ecfff1] text-black rounded-md flex flex-col gap-2 p-4">
          <div className="text-[18px]">✅ PHOTO REQUIREMENTS</div>
          <div className="w-full flex gap-2 p-4">
            {correctData &&
              correctData?.map((item, idx) => (
                <div className="flex flex-col  rounded-2xl w-[32%]  max-w-[200px]">
                  <img
                    src={item?.imgPath}
                    className="w-full h-[180px] rounded-2xl"
                  />
                  <span className="text-justified text-[14px] text-[#131313] leading-relaxed p-1">
                    {item?.content}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full h-fit bg-[#ffecec] text-black rounded-md flex flex-col gap-2 p-4">
          <div className="text-[18px]">❌ PHOTO RESTRICTIONS</div>
          <div className="w-full flex gap-2 p-4">
            {incorrectData &&
              incorrectData?.map((item, idx) => (
                <div className="flex flex-col  rounded-2xl w-[32%]  max-w-[200px]">
                  <img
                    src={item?.imgPath}
                    className="w-full h-[180px] rounded-2xl"
                  />
                  <span className="text-justified text-[14px] text-[#131313] leading-relaxed p-1">
                    {item?.content}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* {croppedImage && <img src={croppedImage} />} */}
    </div>
  );
};

export default ImageSection;
