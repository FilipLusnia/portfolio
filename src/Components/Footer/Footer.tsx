function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer_container">
            <a href="#" className="footer_top_button">- GO TO TOP -</a>
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