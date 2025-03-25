import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";

import PageWrapper from "../components/PageWrapper";
import manExplainingPicture from "/man-explaining-picture.webp";
import videoReplayIcon from "/video-replay.svg";
import smartPhoneLandscapeIcon from "/smart-phone-landscape.svg";
import smartPhonePortraitIcon from "/smart-phone-portrait.svg";
import computerMediaIcon from "/computer-video.svg";
import subtitleIcon from "/subtitle.svg";

const intensityTypes = ["Low", "Medium", "High"];
const subtitleTypes = ["DYNAMIC", "PROFESSIONAL", "DOCUMENTARY"];

const ChooseOptionsPage = () => {
  const navigate = useNavigate();

  const [autoChecked, setAutoChecked] = useState(false);
  const [subtitlesChecked, setSubtitlesChecked] = useState(false);
  const [musicChecked, setMusicChecked] = useState(false);
  const [voiceChecked, setVoiceChecked] = useState(false);
  const [activeIntensityType, setActiveIntensityType] = useState("Medium");
  const [activeSubtitleType, setActiveSubtitleType] = useState("PROFESSIONAL");

  return (
    <PageWrapper>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <p
            className="text-[#8C8C8C] text-xs font-medium cursor-pointer"
            onClick={() => navigate("/write-script")}
          >
            Back
          </p>

          <p className="text-[#CF36E9] cursor-pointer text-xs font-medium">
            Skip to editor
          </p>
        </div>

        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="font-semibold text-[32px]">Choose Options</h1>

          <p className="text-[#8C8C8C] text-sm">
            Choose your settings, we'll handle the editing
          </p>

          <div className="flex justify-center items-center gap-4 h-full mt-5">
            <div className="rounded-lg self-start">
              <img src={manExplainingPicture} className="w-[300px] h-[300px]" />
            </div>

            <div className="flex flex-col justify-center items-center gap-2 w-[320px]">
              <div className="flex justify-between items-center bg-[#140926] p-[10px] rounded-[4px] w-full">
                <div className="flex justify-start items-center gap-4">
                  <img src={videoReplayIcon} />
                  <p className="text-xs font-bold">Video Format</p>
                </div>

                <div className="flex justify-end items-center">
                  <img src={smartPhoneLandscapeIcon} className="w-6 h-6" />
                  <img src={smartPhonePortraitIcon} className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col gap-2 bg-[#140926] p-5 rounded-[8px] w-full">
                <div className="flex justify-start items-center gap-3">
                  <img src={computerMediaIcon} className="w-5 h-5" />
                  <p className="text-xs font-bold">Media</p>
                </div>

                <p className="text-[10px] text-[#8C8C8C]">
                  Add images and videos that enhance your script
                </p>

                <div className="flex justify-between items-center my-3">
                  <p className="font-bold text-xs">Auto B-roll</p>

                  <Switch
                    onChange={(checked) => setAutoChecked(checked)}
                    checked={autoChecked}
                    offColor="#888"
                    onColor="#9413E6"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    handleDiameter={20}
                    height={24}
                    width={48}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold">Source</label>
                  <select className="bg-[#261148] px-3 py-[10px] rounded-[4px] text-xs font-bold">
                    <option>Image generation</option>
                    <option>Image generation</option>
                    <option>Image generation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold">Style</label>
                  <select className="bg-[#261148] px-3 py-[10px] rounded-[4px] text-xs font-bold">
                    <option>Auto</option>
                    <option>Auto</option>
                    <option>Auto</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-xs font-bold">Intensity</p>
                  <div className="flex justify-evenly items-center gap-2">
                    {intensityTypes.map((type) => (
                      <div
                        key={type}
                        className={`bg-[#261148] py-[10px] px-3 rounded cursor-pointer text-xs text-center font-bold w-[80px] ${
                          activeIntensityType === type
                            ? "border border-[#CF36E9]"
                            : ""
                        }`}
                        onClick={() => setActiveIntensityType(type)}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 bg-[#140926] p-5 rounded-[4px] w-full">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex justify-start items-center gap-2">
                      <img src={subtitleIcon} className="w-5 h-5" />
                      <p className="text-xs font-bold">Subtitles</p>
                    </div>

                    <p className="text-[#8C8C8C] text-[10px]">
                      Choose a voice to embody your speech
                    </p>
                  </div>

                  <Switch
                    onChange={(checked) => setSubtitlesChecked(checked)}
                    checked={subtitlesChecked}
                    offColor="#888"
                    onColor="#9413E6"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    handleDiameter={20}
                    height={24}
                    width={48}
                  />
                </div>

                <div className="flex justify-evenly items-center gap-2">
                  {subtitleTypes.map((type) => (
                    <div
                      key={type}
                      className={`px-3 py-[5px] bg-[#261148] rounded-[4px] cursor-pointer ${
                        type === "DYNAMIC"
                          ? "pacifico-regular text-[#FCE340] text-[10px]"
                          : ""
                      } ${
                        type === "PROFESSIONAL" ? "font-bold text-[10px]" : ""
                      } ${
                        type === "DOCUMENTARY"
                          ? "font-extrabold italic text-[8px]"
                          : ""
                      } ${
                        activeSubtitleType === type
                          ? "border border-[#CF36E9]"
                          : ""
                      }`}
                      onClick={() => setActiveSubtitleType(type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 bg-[#140926] p-5 rounded-[4px] w-full">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex justify-start items-center gap-2">
                      <img src={subtitleIcon} className="w-5 h-5" />
                      <p className="text-xs font-bold">Music</p>
                    </div>

                    <p className="text-[#8C8C8C] text-[10px]">
                      Add a background music to your video
                    </p>
                  </div>

                  <Switch
                    onChange={(checked) => setMusicChecked(checked)}
                    checked={musicChecked}
                    offColor="#888"
                    onColor="#9413E6"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    handleDiameter={20}
                    height={24}
                    width={48}
                  />
                </div>

                <select className="bg-[#261148] px-3 py-[10px] rounded-[4px] text-xs font-bold">
                  <option>None</option>
                  <option>Hip Hop</option>
                  <option>Reggae</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 bg-[#140926] p-5 rounded-[4px] w-full">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex justify-start items-center gap-2">
                      <img src={subtitleIcon} className="w-5 h-5" />
                      <p className="text-xs font-bold">Voice</p>
                    </div>

                    <p className="text-[#8C8C8C] text-[10px]">
                      Choose a voice to embody your script{" "}
                    </p>
                  </div>

                  <Switch
                    onChange={(checked) => setVoiceChecked(checked)}
                    checked={voiceChecked}
                    offColor="#888"
                    onColor="#9413E6"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    handleDiameter={20}
                    height={24}
                    width={48}
                  />
                </div>

                <select className="bg-[#261148] px-3 py-[10px] rounded-[4px] text-xs font-bold">
                  <option>None</option>
                  <option>Soprano</option>
                  <option>Tenor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ChooseOptionsPage;
