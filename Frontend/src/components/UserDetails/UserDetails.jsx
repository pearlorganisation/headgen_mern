import { useEffect, useState } from "react";
import { IoManSharp, IoWoman } from "react-icons/io5";

const UserDetails = ({ userData, setUserData, errors, type }) => {
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const genderSelections = [
    {
      name: "Male",
      svg: (
        <>
          <IoManSharp size={22} />
        </>
      ),
    },
    {
      name: "Female",
      svg: (
        <>
          <IoWoman size={22} />
        </>
      ),
    },
  ];

  useEffect(() => {
    setEmail(() => {
      return userData?.email
    })
    setGender(() => {
      return userData?.gender?.length > 0 ? userData?.gender : 'Male'
    })
  }, [])

  useEffect(() => {
    const updatedUserData = { ...userData };
    updatedUserData.email = email;
    updatedUserData.gender = gender?.length > 0 ? gender : 'Male';
    setUserData(updatedUserData);
  }, [email, gender]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  w-full ">
        <div className="flex flex-col items-center gap-4 w-full relative ">
          <label
            htmlFor="email"
            className="text-center text-lg sm:text-2xl text-white"
          >
            Enter your Email:
          </label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 text-center bg-[#f1f1f1]  text-[#131313] text-sm sm:text-xl px-2 py-1 h-[32px] rounded-lg  shadow-[0_0_0_1px_#5d5b68] focus:shadow-[0_0_0_1px_#1d2838]"
          />
          {errors?.email && (
            <div className="text-red-400 text-sm mt-2 text-center bg-red-900/20 border border-red-400/30 rounded-lg p-3 max-w-md mx-auto">
              {errors.email}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full">
          <label
            htmlFor="gender"
            className="text-center text-lg sm:text-2xl text-white"
          >
            What's your gender?
          </label>
          <div className="flex gap-2 justify-center">
            {genderSelections &&
              genderSelections?.map((item, idx) => (
                <div
                  onClick={() => {
                    setGender(item?.name);
                  }}
                  key={`gender${idx}`}
                  className={`bg-[#f1f1f1]  text-[#131313] ${userData?.gender === item?.name
                    ? `${type === "Dating"
                      ? " !bg-[#1d2838] text-[#F1F1F1] rounded-lg shadow-[0_0_0_2px_#E23A6D]"
                      : "!bg-[#1d2838] text-[#F1F1F1] rounded-lg shadow-[0_0_0_2px_#224cc2]"
                    } `
                    : "bg-[#f1f1f1]"
                    }  ${type === "Dating"
                      ? "hover:bg-[#E23A6D] hover:text-[#f1f1f1]"
                      : "hover:bg-[#355cc9] hover:text-[#f1f1f1]"
                    }  rounded-lg w-full md:w-1/3 transition duration-500 text-base font-semibold cursor-pointer flex justify-center gap-2 px-2 py-1 h-[32px]`}
                >
                  <span className="flex flex-col justify-center">
                    {item?.svg}
                  </span>
                  <span>{item?.name}</span>
                </div>
              ))}
          </div>
          {errors?.gender && (
            <div className="text-red-400 text-sm mt-2 text-center bg-red-900/20 border border-red-400/30 rounded-lg p-3 max-w-md mx-auto">
              {errors.gender}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetails;
