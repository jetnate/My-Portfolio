import React from "react";
import "./contact.css";

const defaultState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
  messageError: ""
};

class ContactPage extends React.Component {
    state = defaultState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };

  // Checking if form requirements are met
  validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email. Must contain @";
    }

    if (!this.state.message) {
        messageError = "Message required";
      }

    if (nameError || emailError || messageError) {
      this.setState({ nameError, emailError, messageError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //Clearing form
      this.setState(defaultState);
    }
  };

  render() {
    return (
        <div className="skills-body">
          <div className="inner-width">
            <h1>Contact me</h1>
            <form onSubmit={this.handleSubmit}>
            <div className="validate" style={{ color: "red" }}>{this.state.nameError}</div>

            <input
            name="name"
            className="name"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleChange}
            />

            <div className="validate" style={{ color: "red" }}>{this.state.emailError}</div>

            <input
            name="email"
            className="email"
             placeholder="Your email"
             value={this.state.email}
            onChange={this.handleChange}
             />

            <div className="validate" style={{ color: "red", width: "50%" }}>{this.state.messageError}</div>

            <textarea rows="1"
            placeholder="Message"
             className="message"
             value={this.state.message}
             onChange={this.handleChange}
             />
            <button className="neon">Submit</button>
            </form>
          </div>
        </div>

    );
  }
}

export default ContactPage;