import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact-container" id="section-3">
      <div className="contact-me-text">
        Give me a shout<span className="text-blue">!</span>
      </div>
      <div className="contact-me-info-more">
        I have a knack for learning new things and expanding my skill set.
      </div>
      <div className="contacts">
        <span className="contact"><span className="text-light">Phone:</span> 403 - 615 - 7302</span>
        <span className="contact"><span className="text-light">Email:</span> devinleamy@gmail.com</span>
      </div>
      <div className="contact-me-info-more" style={{ marginTop: "50px" }}>
        Also, check out my
        <span className="text-blue">→ </span>
        <a href="https://github.com/DevinLeamy" className="text-orange">
          Github
        </a>
        <span className="text-blue"> ←</span>
      </div>
    </div>
  );
};
