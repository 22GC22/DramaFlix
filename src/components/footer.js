import './footer.css'

function Footer(){
    return(<div className=" container footer">
        <footer>
        <div className="d-flex flex-column flex-sm-row justify-content-between border-top">
            <p>© 2022 DramaFlix, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
              <li className="ms-3"><a className="link-dark" href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
              <li className="ms-3"><a className="link-dark" href="https://www.facebook.com/"><i className="fa-brands fa-meta"></i></a></li>
            </ul>
          </div>
      </footer>
    </div>);
}

export default Footer;