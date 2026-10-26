import "../css/resume.css";

function Resume(){
    function gotor(){
        window.open("", "_blank");
    }

    return(
        <div className="resumebtn" onClick={gotor}>
            Resume
        </div>
    )
}

export default Resume