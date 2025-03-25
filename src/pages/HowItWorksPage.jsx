import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";
import okayPicture from "/okay-picture.webp";
import notOkayPicture from "/not-okay-picture.webp";
import requirementsPicture from "/requirements-picture.webp";

const HowItWorksPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(2);

  const handleContinue = () => {
    if (currentPage === 3) {
      navigate("/write-script");
    } else if (currentPage < 5) {
      setCurrentPage((prev) => prev + 1);
    } else null;
  };

  return (
    <PageWrapper>
      <div className="px-6 py-4">
        <p
          className="text-[#8C8C8C] text-xs font-medium cursor-pointer"
          onClick={() => setCurrentPage(2)}
        >
          Back
        </p>

        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="font-semibold text-[32px]">How it works</h1>

          <p className="text-[#8C8C8C] text-sm">
            Understand how to build your clone
          </p>

          {currentPage === 2 && (
            <>
              <div className="flex justify-center items-center gap-3 mt-5">
                <img src={okayPicture} className="w-[270px] h-[322px]" />
                <img src={notOkayPicture} className="w-[270px] h-[322px]" />
              </div>

              <div className="bg-[#140926] px-20 py-[10px] rounded-[16px] mt-5">
                <h3 className="border-b border-[#F1F1F11A] py-[10px] text-center text-base font-bold">
                  Don't move your arms or your head
                </h3>
                <p className="text-[#8C8C8C] font-light text-xs text-center pt-3">
                  Stay still, don't turn or twist your body. Don't put your
                  hands over your face.
                </p>
              </div>
            </>
          )}

          {currentPage === 3 && (
            <>
              <div className="flex justify-center items-center gap-3 mt-5">
                <img
                  src={requirementsPicture}
                  className="w-[500px] h-[300px]"
                />
              </div>

              <div className="bg-[#140926] px-20 py-[10px] rounded-[16px] mt-5 max-w-[550px]">
                <h3 className="border-b border-[#F1F1F11A] py-[10px] text-center text-base font-bold">
                  Have a good video and audio quality{" "}
                </h3>
                <p className="text-[#8C8C8C] font-light text-xs text-center pt-3">
                  It's your training video that make your results stand out.
                  Ensure high-quality footage with good lighting and clear sound
                </p>
              </div>
            </>
          )}

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-5">
            {[1, 2, 3, 4, 5].map((page) => (
              <div
                key={page}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  currentPage === page ? "bg-[#9413E6] w-6" : "bg-[#4A4A4A] w-2"
                }`}
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </div>

          {/* Continue Button (Hidden on last page) */}
          {currentPage < 5 && (
            <button
              className="mt-6 px-6 py-2 bg-[#9413E6] text-white rounded-md text-sm font-medium cursor-pointer"
              onClick={handleContinue}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default HowItWorksPage;
