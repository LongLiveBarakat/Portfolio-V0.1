import "../AboutMe/AboutMe.scss";
import profile2 from "../../assets/images/profile-2.jpeg";

const index = () => {
  return (
    <div className="about-me">
      <span>About Me</span>
      <div className="container">
        <div className="left-side">
          <span></span>
          <img src={profile2} alt="" />
        </div>
        <div className="right-side">
          <h1>Curious about me? Here you have it:</h1>
          <p>
            I'm a passionate, self-proclaimed developer who specializes in front
            end development (React.js & Vue.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a front end developer in 2022, and since then,
            I've continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 2 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as React.js, Javascript, Vue.js, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me learing new
            technologies, witnessing the journey of early startups or enjoying
            some free time. You can follow me on Linkedin where I share my
            experiences and journies, or you can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <ul>
            <li>Computers and Informations Graduate</li>
            <li>Avid learner</li>
            <li>Full time freelancer</li>
            <li>Fast learner</li>
          </ul>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
