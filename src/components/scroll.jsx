import "../css/scroll.css";
import { useEffect, useState } from "react";

function Scroll() {
    const [progressBar, SetProgressBar] = useState(0);

    useEffect(() => {
        function UpdateScroll() {
            const scrollTop = window.scrollY;

            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const percentage =
                scrollableHeight > 0
                    ? (scrollTop / scrollableHeight) * 100
                    : 0;

            SetProgressBar(percentage);
        }

        window.addEventListener("scroll", UpdateScroll);
        UpdateScroll();

        return () => {
            window.removeEventListener("scroll", UpdateScroll);
        };
    }, []);

    return (
        <div className="progressSection">
            <div className="progressBarWrap">
                <div
                    className="progressBar"
                    style={{ height: `${progressBar}%` }}
                ></div>
            </div>

            <div className="progress-num">
                {Math.round(progressBar)}%
            </div>
        </div>
    );
}

export default Scroll;
