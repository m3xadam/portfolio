import NavBar from "../components/navbar";
import Footer from "../components/footer";

import {useNavigate} from "react-router-dom";


function ProjectPage(){
    const navigate = useNavigate();

    return(
        <>
            <NavBar />
            <Footer />
        </>
    )
}

export default ProjectPage