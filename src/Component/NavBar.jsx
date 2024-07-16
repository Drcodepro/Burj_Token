import "./All_css/NavBar.css";
import burj_logo from "../assets/Image/burj-token.webp";

export const NavBar = ()=>{
    return(
        <nav className=" nav-container">
            <h1 className="text-[1.5rem] font-bold flex gap-2 items-center"><img src={burj_logo} alt="token_logo" className="h-[3rem]"/>BTDT</h1>
            <ul className=" navigation-container flex space-x-10 text-[1rem]">
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
            </ul>
            <button className="nav_buy-btn"><span className="text">Buy Token</span></button>
        </nav>
    )
}