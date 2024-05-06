import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mb-4">
      <h6 className="mb-0">
        <button
          className="bg-gradient-to-r from-[#1b198d] via-[#1c1a9c] to-[#2522b8] text-[#F1F1F1] rounded-lg h-[58px] hover:from-[#15136d] hover:via-[#15137e] hover:to-[#17157c] relative flex items-center w-full p-4 text-left transition duration-300 cursor-pointer group"
          onClick={toggleAccordion}
        >
          <span>{question}</span>
          <IoIosAddCircleOutline size={32} className={`absolute right-4 transition duration-300 ${isOpen ? 'rotate-180' : ''} `  } />

        </button>
      </h6>
      <div
        className={`overflow-hidden ${isOpen ? 'max-h-full' : 'max-h-0'}`}
      >
        <div className="p-4 text-[16px] leading-relaxed bg-[#313235b9] text-[#F1F1F1]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqAccordian = () => {
  const faqItems = [
    {
      question: 'What results can I expect?',
      answer: "Our Engineers have crafted prompts for exceptional results. Based our testing, 90% of the Images generated are exceptional and will work wonderfully for you. The outcome depends on your input image quality. That’s why we ask you to carefully follow our instructions and upload just one selfie.Using generative AI for headshots is still a very new field, and we will continue updating the service to improve results."
    },
    {
      question: 'What do you do with our data?',
      answer: "Your uploaded photos are exclusively for generating your images and are deleted after 1 week. We don’t use your data to train AI. For early deletion, contact us at support@headgen.ai."
    },
    {
      question: 'Can I have a branded or custom style?',
      answer: "For custom styles and packages starting at €50, email us at support@headgen.in. Perfect for influencers, bumble profile pictures or anyone needing a headshot to match brand guidelines."
    },

    {
      question: 'Who are we?',
      answer: "Who are we? We are Ruark & Krasia"
    },

    {
      question: 'Can I get Free Headshots?',
      answer: "Share your photos on LinkedIn, Twitter, Instagram, or TikTok and tag/mention us! We will generate extra Images for you for free! Write to us with screenshots of uploaded content tagging us at support@headgen.in."
    },

    {
      question: 'Do you store our payment details?',
      answer: "Payment handled by Stripe. We do not store your payment details"
    }
  ];

  return (
    <div>
      {faqItems.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FaqAccordian;