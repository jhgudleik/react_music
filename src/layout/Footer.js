import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </div>
  );
}

export default Footer;