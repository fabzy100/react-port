const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 My Portfolio. All rights reserved.</p>
          <p className="mt-2">
            <a href="https://linkedin.com" className="hover:text-gray-400">
              LinkedIn
            </a>{" "}
            |{" "}
            <a href="https://github.com" className="hover:text-gray-400">
              GitHub
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  