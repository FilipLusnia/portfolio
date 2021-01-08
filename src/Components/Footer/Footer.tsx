function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    // eslint-disable jsx-a11y/anchor-is-valid

    return (
        <div className="footer_container">
            <button onClick={()=> window.scrollTo(0, 0)} className="footer_top_button">- GO TO TOP -</button>
            <div className="footer_media">
                <a href="mailto:filip.lusnia@onet.pl" target="_blank" rel="noreferrer" className="footer_media_button -mail"> </a>
                <a href="https://www.linkedin.com/in/filiplusnia/" target="_blank" rel="noreferrer" className="footer_media_button -linkedin"> </a>
                <a href="https://github.com/FilipLusnia/" target="_blank" rel="noreferrer" className="footer_media_button -github"> </a>
            </div>
            <p>© {year} Filip Luśnia. All rights reserved</p>
        </div>
    );
}

export default Footer;