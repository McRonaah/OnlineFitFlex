import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          For any technical issues, difficulties accessing the web app, or assistance with our online features, please contact our Technical Support team:
          <br />
          <br />
          Email: techinnovatorshub@gmail.com
          <br /> 
          Phone: +1 555-123-4567
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a href="https://www.linkedin.com/in/ronald-kipchirchir-034983246/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <p className="my-5">ronald.mololu@gmail.com</p>
          <a href="https://github.com/McRonaah/" target="_blank" rel="noopener noreferrer"
         className="my-5">Github
        </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">For general questions or information about our gym, facilities, classes, memberships, and more, please contact us at:</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;