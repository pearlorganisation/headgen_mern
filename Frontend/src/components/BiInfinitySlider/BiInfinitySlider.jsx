import React, { useEffect } from "react";


const BiInfinitySlider = ({ imgData1, imgData2 }) => {
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
          {imgData1?.map((item) => (    
              <ul className="tag-list scroller__inner">
                <img src={item.path} className=""/>
              </ul>
          ))}
        </div>
      </div>
      <div class="scroller" data-direction="left" data-speed="slow">
        <div class="scroller__inner">
          {imgData2?.map((item) => (    
              <ul className="tag-list scroller__inner">
                <img src={item.path} className=""/>
              </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiInfinitySlider;
