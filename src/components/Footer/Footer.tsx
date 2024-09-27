import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024.&nbsp;
        <a className="footer__link" href="https://github.com/temmmus" target="_blank">
          temmmus
        </a>
      </p>
    </footer>
  );
};

export default Footer;
