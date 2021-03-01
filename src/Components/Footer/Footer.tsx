function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer_container">
            <button onClick={()=> window.scrollTo(0, 0)} className="footer_top_button">- GO TO TOP -</button>
            <div className="footer_media">
                <a href="mailto:filip.lusnia@gmail.com" target="_blank" rel="noreferrer" className="footer_media_button -mail" aria-label="Send me an email!"> </a>
                <a href="https://www.linkedin.com/in/filiplusnia/" target="blank" rel="noreferrer" className="footer_media_button -linkedin" aria-label="Find me on LinkedIn!"> </a>
                <a href="https://github.com/FilipLusnia/" target="blank" rel="noreferrer" className="footer_media_button -github" aria-label="Check out my Github!"> </a>
            </div>
            <p>© {year} Filip Luśnia</p>
        </div>
    );
}

export default Footer;