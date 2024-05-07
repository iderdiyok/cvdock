import { useMemo } from "react";
import calculateElementHeight from "utils/calculateElementHeight";

export function useContentHeight(resumeData) {
    debugger
    const personalInfoHeight = calculateElementHeight(
        document.querySelector(".education-and-job")
      );


      console.log({personalInfoHeight});
  return  ({
    
    // const educationHeight = calculateElementHeight(
    //   document.querySelector(".education")
    // );
    // const workExperienceHeight = calculateElementHeight(
    //   document.querySelector(".work-experience")
    // );
    // const skillsHeight = calculateElementHeight(
    //   document.querySelector(".skills")
    // );

    // const totalHeight =
    //   personalInfoHeight +
    //   educationHeight +
    //   workExperienceHeight +
    //   skillsHeight;
    // return { totalHeight, isOverflowing: totalHeight > 297 };
  });
}
