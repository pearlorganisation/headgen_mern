import { useEffect, useState } from "react"

const SelectYourAttire = ({ userData, setUserData, errors, type }) => {
  const [selectedAttire, setSelectedAttire] = useState(userData?.attire || "")

  const attireOptions = [
    {
      id: "corporate-suit-tie",
      name: "Corporate Suit & Tie",
      image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568421/1_HeadGen_AI_SUIT_WITH_TIE_ykfnn0.webp",
      description: "Formal business attire with suit and tie",
    },
    {
      id: "suit-without-tie",
      name: "Suit without Tie",
      image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568422/2_HEADGEN_AI_SUIT_WITHOUT_TIE_p1l1dj.webp",
      description: "Business casual suit without tie",
    },
    {
      id: "doctor-medical",
      name: "Doctor/Medical",
      image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568423/3_HEADGEN_AI_DOCTOR_HEADSHOT_acqegz.webp",
      description: "Medical professional attire",
    },
    {
      id: "formal-shirt",
      name: "Formal Shirt",
      image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568439/Shirt_FORMAL_lzvjpf.webp",
      description: "Formal dress shirt",
    },
    {
      id: "semi-formal",
      name: "Semi Formal",
      image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568425/4_SEMI_FORMAL_ct9gk7.webp",
      description: "Semi-formal business attire",
    },
  ]

  useEffect(() => {
    const updatedUserData = { ...userData }
    updatedUserData.attire = selectedAttire
    setUserData(updatedUserData)
  }, [selectedAttire, userData, setUserData])

  const handleAttireSelect = (attireId) => {
    setSelectedAttire(attireId)
  }

  return (
    <div className="flex flex-col w-full p-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl font-semibold">Select your Attire</h2>
      </div>

      {/* Attire Cards */}
      <div className="flex justify-center items-start gap-8 flex-wrap max-w-6xl mx-auto">
        {attireOptions.map((option) => (
          <div
            key={option.id}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => handleAttireSelect(option.id)}
          >
            {/* Image Card */}
            <div
              className={`relative rounded-lg overflow-hidden border-3 transition-all duration-300 hover:scale-105 ${
                selectedAttire === option.id
                  ? "shadow-[0_0_0_2px_#224cc2] scale-105"
                  : "border-blue-600/70 hover:border-blue-400/90"
              }`}
            >
              <img src={option.image || "/placeholder.svg"} alt={option.name} className="w-36 h-48 object-cover" />
              {/* Overlay for selected state */}
              {selectedAttire === option.id && <div className="absolute inset-0 bg-blue-400/10 pointer-events-none" />}
            </div>

            {/* Label */}
            <div
              className={`bg-[#131313] text-[#f1f1f1] mt-4 ${
                selectedAttire === option.id
                  ? "!bg-[#1d2838] text-[#F1F1F1] rounded-lg shadow-[0_0_0_2px_#224cc2]"
                  : "bg-[#f1f1f1]"
              } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-full pl-2  transition duration-500 text-[12px] lg:text-[14px] font-semibold cursor-pointer flex justify-center gap-2 relative`}
            >
              {option.name}
            </div>
          </div>
        ))}
      </div>

      {/* Error Message */}
      {errors?.attire && (
        <div className="text-red-400 text-sm mt-8 text-center bg-red-900/20 border border-red-400/30 rounded-lg p-3 max-w-md mx-auto">
          {errors.attire}
        </div>
      )}
    </div>
  )
}

export default SelectYourAttire
