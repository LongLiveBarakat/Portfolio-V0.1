import copyrights from "../../../assets/icons/copyrights.svg";
import "../Footer/Footer.scss";

const index = () => {
  return (
    <div className="footer">
      <img src={copyrights} alt="" />
      <p>2023 | coded with ❤️️ by Mohamed Barakat</p>
    </div>
  );
};

export default index;
