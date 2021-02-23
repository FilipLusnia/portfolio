import { useHistory } from 'react-router-dom';
import { ReactComponent as ProjectArrow } from '../Resources/arrow.svg';

function NoMatch(){
    const history = useHistory();

    return (
        <div className="nomatch_screen">
            <h1>ARE YOU LOST?</h1>
            <p onClick={() => history.push('/')}>Return to starting page <ProjectArrow className="nomatch_arrow"/></p>
        </div>
    );
};

export default NoMatch;