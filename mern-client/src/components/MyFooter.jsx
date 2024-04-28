import React from 'react'
// import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaDribbble } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MyFooter = () => {
  return (
    // <Footer bgDark>
    //   <div className="w-full px-4 lg:px-24">
    //     <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
    //       <div>
    //         <Footer.Title title="Company" />
    //         <Footer.LinkGroup col>
    //           <Footer.Link href="#">About</Footer.Link>
    //           <Footer.Link href="#">Careers</Footer.Link>
    //           <Footer.Link href="#">Brand Center</Footer.Link>
    //           <Footer.Link href="#">Blog</Footer.Link>
    //         </Footer.LinkGroup>
    //       </div>
    //       <div>
    //         <Footer.Title title="help center" />
    //         <Footer.LinkGroup col>
    //           <Footer.Link href="#">Discord Server</Footer.Link>
    //           <Footer.Link href="#">Twitter</Footer.Link>
    //           <Footer.Link href="#">Facebook</Footer.Link>
    //           <Footer.Link href="#">Contact Us</Footer.Link>
    //         </Footer.LinkGroup>
    //       </div>
    //       <div>
    //         <Footer.Title title="legal" />
    //         <Footer.LinkGroup col>
    //           <Footer.Link href="#">Privacy Policy</Footer.Link>
    //           <Footer.Link href="#">Licensing</Footer.Link>
    //           <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
    //         </Footer.LinkGroup>
    //       </div>
    //       <div>
    //         <Footer.Title title="download" />
    //         <Footer.LinkGroup col>
    //           <Footer.Link href="#">iOS</Footer.Link>
    //           <Footer.Link href="#">Android</Footer.Link>
    //           <Footer.Link href="#">Windows</Footer.Link>
    //           <Footer.Link href="#">MacOS</Footer.Link>
    //         </Footer.LinkGroup>
    //       </div>
    //     </div>
    //     <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
    //       <Footer.Copyright href="#" by="Flowbite™" year={2022} />
    //       <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    //         <Footer.Icon href="#" icon={BsFacebook} />
    //         <Footer.Icon href="#" icon={BsInstagram} />
    //         <Footer.Icon href="#" icon={BsTwitter} />
    //         <Footer.Icon href="#" icon={BsGithub} />
    //         <Footer.Icon href="#" icon={FaDribbble} />
    //       </div>
    //     </div>
    //   </div>
    // </Footer>
    <footer className="bg-body-tertiary text-center text-lg-start">

      <div className="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.05)" }}>
        © 2024 Copyright:
        <Link className="text-body" to="https://github.com/devrajmudgal/Online-Book-Store-App">EngiReads</Link>
      </div>

    </footer>
    // <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    //   <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

    //   {/* <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    //     <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    //   </a> */}

    //   <ul className="nav col-md-4 justify-content-end">
    //     <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
    //     <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
    //     <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
    //     <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
    //     <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
    //   </ul>
    // </footer>
  );
}

export default MyFooter
