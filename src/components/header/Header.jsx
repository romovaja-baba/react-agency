import "./Header.css";

const Header = () => {
    return (
        <header className="headerArea">
            <div className="headerNav">
                <div className="headerLogo"><img src="logo.png" alt="" height={"40px"}/></div>
                <nav>
                    <div className="headerNavItem">About</div>
                    <div className="headerNavItem">Services</div>
                    <div className="headerNavItem">Pricing</div>
                    <div className="headerNavItem">Blog</div>
                </nav>
                <button className="headerBtn">Contact</button>
            </div>
            <div className="headerContent">
                <h1>Portfolio</h1>
                <p>Agency provides a full service of range including technical skills, design, business understanding.</p>
            </div>
        </header>
    )
};

export default Header;