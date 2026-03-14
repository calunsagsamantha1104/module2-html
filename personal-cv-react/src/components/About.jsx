import profile from "../assets/profile.jpg";
import Card from "./Card";

function About() {
  return (
    <section className="card">
      <Card title="About Me">
        <img src={profile} alt="Profile photo" width="150" />

        <p>
          I am an IT student with a growing interest in technology and problem-solving, currently learning the fundamentals of information technology, including programming, systems, and software tools.
        </p>

        <p>
          Email:{" "}
          <a href="mailto:calunsag.samantha1104@gmail.com">
            calunsag.samantha1104@gmail.com
          </a>
          <br />
          GitHub:{" "}
          <a href="https://github.com" target="_blank" rel="noreferrer">
            github.com
          </a>
        </p>
      </Card>
    </section>
  );
}

export default About;