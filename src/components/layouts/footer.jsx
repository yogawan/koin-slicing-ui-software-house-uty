const FooterLayouts = () => {
    return (
        <footer>
            <div className="left">
                <img src="./logo.png" alt="img" /><br /><br />
                <div className="link">
                    <a href="#">FAQ's</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Terms & Condition</a>
                    <a href="#">Privacy Policy</a>
                </div><br />
                <div className="link">
                    <a href="#"><img src="./ig.png" alt="icon" /></a>
                    <a href="#"><img src="./fb.png" alt="icon" /></a>
                    <a href="#"><img src="./x.png" alt="icon" /></a>
                    <a href="#"><img src="./in.png" alt="icon" /></a>
                </div>
            </div>
            <div className="right">
                <p>Join our mailing list</p>
                <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <button>Send</button>
                </form><br /><br /><br />
                <img src="./store.png" alt="img" />
            </div>
        </footer>
    );
};

export default FooterLayouts;