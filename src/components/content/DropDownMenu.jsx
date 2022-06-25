import "./DropDownMenu.css";
import { useState } from "react";

const DropDownMenu = (props) => {

    const [isShown, setShown] = useState(false);

    const toggleDropDownMenuContent = (event) => {
        setShown(!isShown);
    };

    return (
        <nav className="dropdownmenuArea">
            <div className="dropdownmenuItem dropdownmenuTitle" onClick={toggleDropDownMenuContent}>
                Show All<span><img src="Triangle.png" className="triangleImg" height={"6px"} alt="" /></span>
            </div>
            <div className={`dropdownmenuContent ${isShown ? "shown" : "hidden"}`} >
                <div className="dropdownmenuItem">Design</div>
                <div className="dropdownmenuItem">Branding</div>
                <div className="dropdownmenuItem">Illustration</div>
                <div className="dropdownmenuItem">Motion</div>
            </div>
        </nav>
    )
};

export default DropDownMenu;