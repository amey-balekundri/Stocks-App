import "../styles/common/loader.css";
import ClipLoader from "react-spinners/ClipLoader";

export const Loader = () => {
  return (
    <div className="overlay">
      <div className="center">
        <ClipLoader size={50} />
      </div>
    </div>
  );
};
