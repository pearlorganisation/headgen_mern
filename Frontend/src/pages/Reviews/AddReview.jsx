import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StarRating from "../../components/StarRating/StarRating";
import { Toaster, toast } from "sonner";



const AddReview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [stars, setStars] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (isLoading) return;
    setIsLoading(true);
    const formData = new FormData();
    const { image } = data;
    if (image) {
      formData.append("image", image[0]);
    }
    formData.append("review", data.review);
    formData.append("title", data.title);
    formData.append("stars", data.stars);
    formData.append("name", data.name);
    formData.append("email", data.email);

    // api call here
    axios
      .post(`/reviews`, formData)
      .then((res) => {
        reset();
        setIsLoading(false);
        toast.success(res.data.message, {
          style: {
            background: "green",
            color: "white",
          },
        });
      })
      .catch((err) => {
        reset();
        setIsLoading(false);
        toast.error(err, {
          style: {
            background: "red",
            color: "white",
          },
        });
      });
  };

  return (
    <div className="min-h-screen grid place-items-center text-white">
      <Toaster />
      <section className="py-28 flex flex-col gap-10">
        <div className="container px-4 md:px-6">
          {!showReviewForm ? (
            <div className="mb-8 md:mb-10 lg:mb-12 text-center flex flex-col items-center gap-4">
              <h2 className="text-xl md:text-3xl font-bold">
                Get 20% Discount Coupon by sharing your experience
              </h2>
              <p className="mt-3 text-base md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                Thank you for being a customer of HeadGen AI! We'd love to hear
                about your experience. Please take a moment to share your
                thoughts with us.
              </p>
              <div
                className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full md:w-1/3 py-2  md:py-4 hover:shadow-[0_0_0_2px_#224cc2] cursor-pointer transition duration-500"
                onClick={() => setShowReviewForm(true)}
              >
                Get started
              </div>
            </div>
          ) : (
            <div className="mb-8 md:mb-10 lg:mb-12 text-center flex flex-col items-center gap-4">
              <h2 className="text-xl md:text-3xl font-bold">Add your review</h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-3 max-w-3xl mx-auto flex flex-col text-left items-center gap-4"
              >
                <div className="w-full">
                  <label
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="name"
                  >
                    Name:
                  </label>
                  <input
                    {...register("name", { required: true })}
                    id="name"
                    placeholder="name"
                    className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="email"
                  >
                    E-Mail:
                  </label>
                  <input
                    {...register("email", { required: true })}
                    id="email"
                    placeholder="E-Mail"
                    className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="title"
                  >
                    Title:
                  </label>
                  <input
                    {...register("title", { required: true })}
                    id="title"
                    placeholder="title"
                    className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="title"
                  >
                    Rating:
                  </label>
                  <StarRating />
                </div>
                <div className="w-full">
                  <label
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="review"
                  >
                    Review:
                  </label>
                  <textarea
                    {...register("review", { required: true })}
                    id="review"
                    className="w-full h-[200px] !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined resize-none"
                    placeholder="write a review of max 300 characters"
                    maxLength={300}
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Upload Image (optional)
                  </label>
                  <input
                    class="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                    {...register("image", { required: false })}
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 bg-gradient-to-r mt-2 active:scale-[0.98] transition-all from-[#02AFDC] to-[#2563EB] w-48 rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AddReview;
