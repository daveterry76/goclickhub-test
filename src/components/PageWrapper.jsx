import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ellipseOneIcon from "/ellipse-one.png";
import ellipseTwoIcon from "/ellipse-two.png";

const PageWrapper = ({ children }) => {
  return (
    <div className="flex relative">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="bg-[#261148] h-full min-h-screen">
          {children}
          {/* <div className="absolute right-[-100px] top-0">
            <img src={ellipseOneIcon} />
          </div>
          <div className="absolute bottom-0 left-[275px]">
            <img src={ellipseTwoIcon} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
