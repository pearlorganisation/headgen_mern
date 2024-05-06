import React from "react";

const BlogCards = ({ data , datingPage}) => {
  return (
    <div className="flex flex-row justify-between">
      {data?.map((item, idx) => (
        <div key={`blogCard${idx}`} className={`flex flex-col justify-evenly items-center w-[32%] bg-gradient-to-b  ${datingPage ? 'from-[#c4325eab] to-[#e60045c2]' : 'from-[#1a1e43] to-[#1b2bbb].'} rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}>
          <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
            <img src={item?.imgPath} className="w-full rounded-xl" />
          </div>
          <div className={`h-[50%] flex flex-col ${item?.btnLink ? 'justify-between': ''}  gap-4 items-center`}>
            {item?.title?.length > 0 && (
          <div className="px-2 text-center font-bold text-[#F1F1F1] text-[18px] xl:text-[20px]">
              {item?.title}
            </div>
            )}
            <div className="px-2 text-center text-[#F1F1F1] text-[16px] xl:text-[18px]">
              {item?.content}
            </div>
            {item?.btnLink && (
              <div className="w-2/3">
                <button className="hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]">
                  Learn More
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
