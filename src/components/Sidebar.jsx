import { useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

import videoDualIcon from "/video-dual-icon.png";
import howItWorksIcon from "/how-it-works-icon.svg";
import consentVideoIcon from "/consent-video-icon.svg";
import uploadFootageIcon from "/upload-footage-icon.svg";
import aiSparkleIcon from "/ai-sparkle.svg";

const firstSidebarOptions = [
  { name: "How It Works", icon: howItWorksIcon, path: "/how-it-works" },
  { name: "Consent Video", icon: consentVideoIcon, path: "/" },
  { name: "Upload Footage", icon: uploadFootageIcon, path: "/" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  return (
    <div className="bg-[#261148] w-[315px] min-h-screen p-5 border-r-4 border-[#0000001A] relative">
      <img src={videoDualIcon} className="w-[214px] h-[44px]" />

      {/* Vertical line connecting icons */}
      {location.pathname === "/how-it-works" && (
        <div className="absolute top-[120px] left-[35px] w-[4px] h-[150px] bg-[#9413E6]"></div>
      )}

      <div className="mt-8 flex flex-col gap-10">
        {location.pathname === "/how-it-works" ? (
          firstSidebarOptions.map((option, index) => {
            const isActive = location.pathname === option.path;

            return (
              <div
                key={index}
                className="flex justify-start items-center gap-4 relative"
                onClick={() => navigate(option.path)}
              >
                {/* Icon container with conditional styling */}
                <div
                  className={`flex justify-center items-center rounded w-[34px] h-[34px] ${
                    isActive ? "bg-[#9413E6]" : "bg-[#5e466d]"
                  }`}
                >
                  <img
                    src={option.icon}
                    className={isActive ? "filter invert" : ""}
                  />
                </div>

                {/* Active text styling */}
                <p
                  className={`font-medium text-base cursor-pointer ${
                    isActive ? "text-white" : "text-neutral-600"
                  }`}
                >
                  {option.name}
                </p>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-start text-white gap-6">
            <div className="flex justify-start items-center gap-3">
              <img src={aiSparkleIcon} />
              <p className="text-sm font-medium">Ai Video Creator</p>
              <MdKeyboardArrowDown />
            </div>

            <div className="flex justify-center items-center gap-2 pl-7">
              <div className="rounded-full bg-[#D9D9D9] w-[11px] h-[11px]"></div>
              <p className="text-sm font-medium">Avatar</p>
            </div>

            <p className="text-sm font-medium pl-7">Voices</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
