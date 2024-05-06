import React, { useEffect } from "react";
// import "./styles.css";

const InfinitySlider = ({ imgData }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div>
      <div class="scroller" data-direction="right" data-speed="slow">
        <div class="scroller__inner">
          {imgData?.map((item) => (    
              <ul className="tag-list scroller__inner">
                <img src={item.path} className="!h-[200px] rounded-2xl"/>
              </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfinitySlider;
