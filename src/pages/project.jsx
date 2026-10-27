import NavBar from "../components/navbar";
import MProject from "../components/Mproject";
import Contact from "../components/contact";


import Footer from "../components/footer";

import {useNavigate} from "react-router-dom";


function ProjectPage(){
    const navigate = useNavigate();

    return(
        <>
            <NavBar />
            <MProject />
            <Contact />
            <Footer />
        </>
    )
}

export default ProjectPage