import {useEffect} from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop(props: any){
    
    //scrolls to top when location changes
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [props.location]);

	return props.children;
};

export default withRouter(ScrollToTop)