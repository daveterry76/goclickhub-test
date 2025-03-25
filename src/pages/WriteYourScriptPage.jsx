import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";
import Modal from "../components/Modal";

import manExplainingPicture from "/man-explaining-picture.svg";
import textCircleIcon from "/text-circle.svg";
import micIcon from "/mic-icon.svg";
import micWhiteIcon from "/mic-white-icon.svg";
import pencilIcon from "/pencil-icon.svg";
import scissorsIcon from "/scissors-icon.svg";
import recordVoiceIcon from "/record-voice-icon.svg";

const WriteYourScriptPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="px-6 py-4">
        <p
          className="text-[#8C8C8C] text-xs font-medium cursor-pointer"
          onClick={() => navigate("/how-it-works")}
        >
          Back
        </p>

        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="font-semibold text-[32px]">Write your script</h1>

          <div className="flex justify-around items-center gap-3 my-3">
            <p className="text-[#CF36E9] text-[10.95px]">
              Don’t Know what to write?
            </p>

            <button className="bg-[#CF36E9] rounded py-[5px] px-5 text-xs">
              Generate
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 h-full">
            <div className="rounded-lg">
              <img src={manExplainingPicture} />
            </div>

            <div className="bg-[#140926] flex flex-col gap-3 rounded-lg p-5 h-full w-[300px]">
              <div className="rounded-[60px] py-1 px-2 flex justify-around items-center gap-2 bg-[#261148] w-[188px]">
                <div className="rounded-[60px] p-[10px] bg-[#140926] flex items-center gap-3 w-[90px] cursor-pointer">
                  <img src={textCircleIcon} className="w-4 h-4" />
                  <p className="text-xs">Text</p>
                </div>
                <div
                  className="rounded-[60px] p-[10px] flex items-center gap-3 w-[90px] cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img src={micIcon} className="w-4 h-4" />
                  <p className="text-xs text-[#595A5B]">Audio</p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-2">
                <img src={pencilIcon} className="w-4 h-4" />
                <p className="font-bold text-xs">Enter Text</p>
              </div>

              <textarea
                rows={4}
                className="rounded-[4px] p-[5px] bg-[#261148] resize-none placeholder:text-xs"
                placeholder="Write a short to medium length sentence, Separated by lines breaks for new ideas (They will become new Shots)"
              />

              <div className="flex justify-start items-center gap-2">
                <img src={scissorsIcon} className="w-6 h-6" />
                <p className="font-bold text-xs">Script Splitting</p>
              </div>

              <p className="text-[#8C8C8C] text-[10px] font-light">
                If you pick "Short", we'll cut down your script for a dynamic
                editing (3-5 seconds cuts). If you pick "Long", we'll do 12-15
                second segments with less cuts.
              </p>

              <div className="rounded-xl py-1 px-2 flex justify-around items-center gap-2 bg-[#9413E6] w-[188px]">
                <div className="rounded-lg p-[10px] bg-[#140926] flex justify-center items-center gap-3 w-[90px]">
                  <p className="text-xs">Short</p>
                </div>
                <div className="rounded-lg p-[10px] flex justify-center items-center gap-3 w-[90px]">
                  <p className="text-xs">Long</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[686px] bg-gray-200 rounded-full h-1 overflow-hidden my-4">
            <div
              className="h-full text-white text-center flex items-center justify-center"
              style={{ width: "70%", backgroundColor: "#CF36E9" }}
            ></div>
          </div>

          <p className="text-[#8C8C8C] font-light text-[10px] mb-4">
            Complete the step by
          </p>

          <button
            onClick={() => navigate("/choose-options")}
            className="mt-6 px-[78.22px] py-[5px] text-[9.39px] font-bold bg-[#9413E6] text-white rounded-[3.83px] cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <img src={micWhiteIcon} className="w-5 h-5" />
            <h4 className="text-base font-semibold">Record Audio</h4>
          </div>

          <p className="text-xs">Make sure you're in a quiet environment.</p>

          <div className="my-3 rounded-[50px] bg-[#261148] py-[35.21px] px-[12.68px] w-[100px] h-[100px] text-center cursor-pointer">
            START
          </div>

          <img src={recordVoiceIcon} />

          <div className="flex justify-center items-center gap-2">
            <div className="bg-[#FF2929] rounded-full w-[15px] h-[15px]"></div>
            <p className="text-xl">00:00</p>
          </div>

          <p className="mt-10 text-xs">
            Make sure you're in a quiet environment.
          </p>
        </div>
      </Modal>
    </PageWrapper>
  );
};

export default WriteYourScriptPage;
