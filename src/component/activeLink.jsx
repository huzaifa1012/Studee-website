import { useEffect, useState } from "react";

const useActiveLink = () => {
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const handleRouteChange = () => {
            setActiveLink(window.location.pathname);
        };

        window.addEventListener("popstate", handleRouteChange);

        // Set initial active link on component mount
        handleRouteChange();

        return () => {
            window.removeEventListener("popstate", handleRouteChange);
        };
    }, []);

    return activeLink;
};

export default useActiveLink;
