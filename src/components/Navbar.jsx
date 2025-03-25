import { MdOutlineArrowDropDown } from "react-icons/md";
import experimentsIcon from "/experiments-icon.png";
import analyticsIcon from "/analytics-icon.png";
import teamsIcon from "/teams-icon.png";
import recordScreenIcon from "/record-screen-icon.png";
import notificationIcon from "/notification-icon.svg";

const Navbar = () => {
  return (
    <div className="bg-[#31164D] py-[13px] px-[25px] flex justify-around items-center text-white">
      <div className="flex items-center gap-1">
        <img src={experimentsIcon} />
        <p className="text-[19.2px] text-white font-medium">Experiments</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={analyticsIcon} />
        <p className="text-[19.2px] text-white font-medium">Analytics</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={teamsIcon} />
        <p className="text-[19.2px] text-white font-medium">Teams</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={recordScreenIcon} />
        <p className="text-[19.2px] text-white font-medium">Record Screen</p>
      </div>

      <button className="border border-[#CF36E9] rounded-[18px] px-[10px] flex justify-center items-center">
        <p className="text-sm">Upload</p>
        <MdOutlineArrowDropDown />
      </button>

      <img src={notificationIcon} alt="notification icon" />

      <div className="flex justify-center items-center gap-1">
        <div className="flex flex-col items-end">
          <p className="text-[10px]">Welcome</p>
          <p className="text-[10px]">Administrator</p>
        </div>

        <div className="w-[37px] h-[37px] rounded-full bg-[#D9D9D9]"></div>

        <MdOutlineArrowDropDown />
      </div>
    </div>
  );
};

export default Navbar;
