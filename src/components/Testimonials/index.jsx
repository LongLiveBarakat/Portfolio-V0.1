import "../Testimonials/Testimonials.scss";
import user from "../../assets/icons/user.svg";

const index = () => {
  return (
    <div className="testimonials">
      <span>Testimonials</span>
      <h1 className="main-title">Nice things people have said about me:</h1>
      <div className="container">
        <div className="person">
          <img src={user} alt="" />
          <p className="description">
            "Job well done! I am really impressed. He is very very good at what
            he does:) I would recommend Sagar and will rehire in the future for
            Frontend development."
          </p>
          <div className="user-name">
            <p>Krisztian Gyuris</p>
            <p className="position">Founder - inboxgenie.io</p>
          </div>
        </div>
        <div className="person">
          <img src={user} alt="" />
          <p className="description">
            "Job well done! I am really impressed. He is very very good at what
            he does:) I would recommend Sagar and will rehire in the future for
            Frontend development."
          </p>
          <div className="user-name">
            <p>Krisztian Gyuris</p>
            <p className="position">Founder - inboxgenie.io</p>
          </div>
        </div>
        <div className="person">
          <img src={user} alt="" />
          <p className="description">
            "Job well done! I am really impressed. He is very very good at what
            he does:) I would recommend Sagar and will rehire in the future for
            Frontend development."
          </p>
          <div className="user-name">
            <p>Krisztian Gyuris</p>
            <p className="position">Founder - inboxgenie.io</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
