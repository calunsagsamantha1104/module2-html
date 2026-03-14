
import { useState } from "react";
import Card from "./Card";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you ${name}!`);
  }

  return (
    <div className="container">
      <Card title="Contact Me">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Send</button>
        </form>
      </Card>
    </div>
  );
}

export default Contact;
