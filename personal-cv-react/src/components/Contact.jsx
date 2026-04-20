import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
      .then(res => res.json())
      .then(data => {
        // POPUP HERE
        alert(data.message);
        setName(""); // clear input after submit
      })
      .catch(err => {
        console.error(err);
        alert("Error connecting to server");
      });
  }

  return (
    <div>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;