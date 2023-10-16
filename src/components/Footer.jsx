const Footer = ({ paragraph, listItems }) => {
  return (
    <div className="footer">
      <p>{paragraph}</p>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
