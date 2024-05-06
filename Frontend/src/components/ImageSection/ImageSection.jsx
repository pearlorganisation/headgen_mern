import React, { useEffect, useRef, useState } from "react";

import useFileSelection from "../../hooks/useFileSelection";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import { Button, Card } from "antd";

const ImageSection = () => {
  const maxUploads = 4;
  const [selectedImage, setSelectedImage] = useState(null);
  const [addFile, removeFile] = useFileSelection();

  // react image crop here

  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);

  const correctData = [
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flooking_at_camera.71f1f9f0.jpeg&w=384&q=75",
      content: (
        <>
          👁️ <strong>Eye Contact:</strong> You should be looking directly at the
          camera.
        </>
      ),
    },
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftaken_recently.c5880900.jpeg&w=384&q=75",
      content: (
        <>
          🆕 <strong> Recent:</strong> Photos taken recently, ideally within the
          past six months.
        </>
      ),
    },
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclear.ad993087.jpeg&w=384&q=75",
      content: (
        <>
          ☀️ <strong> Clear:</strong> Good lighting and not too far or close to
          the camera.
        </>
      ),
    },
  ];

  const incorrectData = [
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faccessories.4e9558eb.png&w=384&q=75",
      content: (
        <>
          🧢 <strong>No Accessories:</strong> (e.g. hats, backpacks,
          headphones).
        </>
      ),
    },
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevealing.d2f1ddf4.jpeg&w=384&q=75",
      content: (
        <>
          👙 <strong>No Revealing Clothing:</strong> (e.g. tank tops, shirtless,
          bikinis).
        </>
      ),
    },
    {
      imgPath:
        "https://dashboard.aragon.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsilly_expression.7fcdef6c.png&w=384&q=75",
      content: (
        <>
          🥴 <strong> No Goofy Faces:</strong> No unusual expressions (e.g. duck
          faces, tongue out).
        </>
      ),
    },
  ];

  return (
    <div className="flex w-full h-full justify-center">
      <div className="bg-white rounded-lg overflow-auto">
        <Card
          className="w-[100%] h-[350px] !shadow-none !border-none !mb-2"
          // actions={[<Button type="primary">Submit</Button>]}
        >
          <DragAndDrop
            addFile={addFile}
            removeFile={removeFile}
            setSelectedImage={setSelectedImage}
            maxUploads={maxUploads}
          />
        </Card>
        <div className="px-6 text-sm">
          <h2 class="mb-2 text-lg font-semibold text-gray-900">
            Upload requirements:
          </h2>
          <ul class="max-w-md space-y-1 text-gray-700 list-disc list-inside">
            <li>Please upload 1-4 images.</li>
            <li>Accepted format .jpeg, .jpg or .heic</li>
            <li>Please ensure that your image is less than 2mb</li>
            <li>Please make sure only 1 person is in the image.</li>
            <li>
              Please ensure all your information is correct as you will not able
              to change this later.
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[60%] max-h-full overflow-auto px-4 flex flex-col gap-2">
        {selectedImage && (
          <>
            <div>
              {selectedImage && (
                <div className="absolute w-[500px] h-[500px]">
                  {/* react image crop here!! */}
                </div>
              )}
            </div>
          </>
        )}

        <div className="w-full h-fit bg-[#ecfff1] text-black rounded-md flex flex-col gap-2 p-4">
          <div className="text-[18px]">✅ PHOTO REQUIREMENTS</div>
          <div className="w-full flex h-[360px] gap-2 p-4">
            {correctData &&
              correctData?.map((item, idx) => (
                <div className="flex flex-col  rounded-2xl w-[32%] max-w-[200px]">
                  <img
                    src={item?.imgPath}
                    className="w-full h-2/3 rounded-2xl"
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
          <div className="w-full flex h-[360px] gap-2 p-4">
            {incorrectData &&
              incorrectData?.map((item, idx) => (
                <div className="flex flex-col  rounded-2xl w-[32%] max-w-[200px]">
                  <img
                    src={item?.imgPath}
                    className="w-full h-2/3 rounded-2xl"
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
