import {React} from "react";
import { Link } from "react-router-dom";
import pdf from "./resume.pdf";

function Navbar()
{
    return(
        <div id="Navbar">
         <h1> Jayden Russell</h1>
         <hr/>
         <nav>
        <ul>
            <p class="zoom"> <Link to="/"> Portfolio </Link></p>
            <p class="zoom"> <a href={pdf}> Resume </a> </p>
            <p class="zoom"> <Link to="/about"> About </Link></p>
            <p class="zoom"> <Link to="/contact"> Contact </Link></p>
        </ul>
        </nav>
        <hr/>
        </div>
);
};

export default Navbar