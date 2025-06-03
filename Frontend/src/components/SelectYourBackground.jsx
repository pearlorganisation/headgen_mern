import { useEffect, useState } from "react"

const SelectYourBackground = ({ userData, setUserData, errors, type }) => {
    const [selectedBackground, setSelectedBackground] = useState([])

    const backgroundOptions = [
        {
            id: "outdoor-park",
            name: "Outdoor Park",
            image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568278/1._OUTDOOR_PARK_ln1xau.webp",
        },
        {
            id: "indoor-office",
            name: "Indoor Office",
            image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568296/INDOOR_OFFICE_xogft5.webp",
        },
        {
            id: "studio-grey",
            name: "Studio Grey",
            image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568298/STUDIO_GREY__C_yyygmn.webp",
        },
        {
            id: "studio-white",
            name: "Studio White",
            image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568299/STUDIO_WHITE_ycva1c.webp",
        },
        {
            id: "black-white",
            name: "Black & White",
            image: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1744568297/BLACK_N_WHITE_iqnnuq.webp",
        },
    ];


    useEffect(() => {
        if (selectedBackground && userData) {
            const updatedUserData = { ...userData }
            updatedUserData.background = selectedBackground
            setUserData(updatedUserData)
        }
    }, [selectedBackground, setUserData])


    useEffect(() => {
        if (userData?.background) {
            setSelectedBackground(userData?.background)
        }
    }, [])


    const handleBackgroundSelect = (backgroundId) => {
        let arr = [...selectedBackground]
        if (arr.includes(backgroundId)) {
            const idx = arr.findIndex((e) => e === backgroundId)
            if (idx >= 0) {
                arr.splice(idx, 1)
            }
            setSelectedBackground(arr)
        } else if (arr.length < 3) {
            arr.push(backgroundId)
            setSelectedBackground(arr)
        }


    }

    return (
        <div className="flex flex-col w-full p-8">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-white text-4xl font-semibold">Select your Background</h2>
            </div>

            {/* Background Cards */}
            <div className="flex justify-center items-start gap-8 flex-wrap max-w-6xl mx-auto">
                {backgroundOptions.map((option) => (
                    <div
                        key={option.id}
                        className="flex flex-col items-center cursor-pointer group"
                        onClick={() => handleBackgroundSelect(option.id)}
                    >
                        {/* Image Card */}
                        <div
                            className={`relative rounded-lg overflow-hidden border-3 transition-all duration-300 hover:scale-105 ${selectedBackground.includes(option.id)
                                ? "shadow-[0_0_0_2px_#224cc2] scale-105"
                                : "border-blue-600/70 hover:border-blue-400/90"
                                }`}
                        >
                            <img src={option.image || "/placeholder.svg"} alt={option.name} className="w-36 h-48 object-cover" />
                            {/* Overlay for selected state */}
                            {selectedBackground.includes(option.id) && <div className="absolute inset-0 bg-blue-400/10 pointer-events-none" />}
                        </div>

                        {/* Label */}
                        <div
                            className={`text-[#131313] mt-4 ${selectedBackground.includes(option.id)
                                ? "!bg-[#1d2838] text-[#F1F1F1] rounded-lg shadow-[0_0_0_2px_#224cc2]"
                                : "bg-[#f1f1f1]"
                                } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-full pl-2  transition duration-500 text-[12px] lg:text-[14px] font-semibold cursor-pointer flex justify-center gap-2 relative`}
                        >
                            {option.name}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center text-sm mt-6 my-5">
                Choose One, Two or up-to Three Backgrounds - Your images will feature a blend of the selected Backgrounds.
            </div>

            {/* Error Message */}
            {errors?.background && (
                <div className="text-red-400 text-sm mt-2 text-center bg-red-900/20 border border-red-400/30 rounded-lg p-3 max-w-md mx-auto">
                    {errors.background}
                </div>
            )}
        </div>
    )
}

export default SelectYourBackground
