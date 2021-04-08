import { useCallback, useState, lazy } from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as JsIcon } from '../../Resources/javascript.svg';
import { ReactComponent as TsIcon } from '../../Resources/typescript.svg';
import { ReactComponent as ReactIcon } from '../../Resources/react.svg';
import { ReactComponent as ReduxIcon } from '../../Resources/redux.svg';
import { ReactComponent as NextIcon } from '../../Resources/Nextjs-logo.svg';
import { ReactComponent as PhotoshopIcon } from '../../Resources/adobe-photoshop.svg';
import { ReactComponent as LightroomIcon } from '../../Resources/adobe-lightroom.svg';
import { ReactComponent as FigmaIcon } from '../../Resources/figma.svg';
import { ReactComponent as NodeIcon } from '../../Resources/node-dot-js.svg';
import { ReactComponent as WebpackIcon } from '../../Resources/webpack.svg';
import { ReactComponent as GraphQlIcon } from '../../Resources/graphql.svg';
import { ReactComponent as SassIcon } from '../../Resources/sass.svg';

const SkillTile = lazy(() => import('./SkillTile'));

function MoreAbout() {

  const [elementsEmerged, setElementsEmerged] = useState(false);
  const [bottomEmerged, setBottomEmerged] = useState(false);

  const anchor = useCallback(div => {
    const newObserver = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setElementsEmerged(true);
        newObserver.disconnect();
      };
    }, {threshold: 0.1});
    div && newObserver.observe(div);
  }, []);

  const secondAnchor = useCallback(div => {
    const newObserver = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setBottomEmerged(true);
        newObserver.disconnect();
      };
    }, {threshold: 1});
    div && newObserver.observe(div);
  }, []);

  return (
    <div className="more-about_container" ref={anchor}>
      <h1 className={elementsEmerged ? "more-about_info_title -emerged" : "more-about_info_title"}>{'>'} SKILLS</h1>
      <p className={elementsEmerged ? "more-about_info_description -emerged" : "more-about_info_description"}>Every developer specializes in certain technologies and knows their way around them.<br/>These are mine fields of expertise:</p>
      
      <div className="skills_container">
        <SkillTile title='LANGUAGES' skills={[{icon: JsIcon, name: 'JavaScript'}, {icon: TsIcon, name: 'TypeScript'}]}/>
        <SkillTile title='LIBRARIES' skills={[{icon: ReactIcon, name: 'React'}, {icon: ReduxIcon, name: 'Redux'}, {icon: ReactIcon, name: 'React Native'}]}/>
        <SkillTile title='FRAMEWORKS' skills={[{icon: NextIcon, name: 'Next.js'}]}/>
        <SkillTile title='GRAPHICS / UI' skills={[{icon: PhotoshopIcon, name: 'Photoshop'}, {icon: LightroomIcon, name: 'Lightroom'}, {icon: FigmaIcon, name: 'Figma'}]}/>
        <SkillTile title='RUNTIMES' skills={[{icon: NodeIcon, name: 'Node.js'}]}/>
        <SkillTile title='OTHER' skills={[{icon: GraphQlIcon, name: 'GraphQL'}, {icon: SassIcon, name: 'Sass'}, {icon: WebpackIcon, name: 'Webpack'}]}/>
      </div>

      <div className="more-about_bottom">
        <h1 ref={secondAnchor} className={bottomEmerged ? "more-about_bottom_title -emerged" : "more-about_bottom_title"}>WANT TO SEE HOW I HANDLE MY PROJECTS?</h1>
        <Link to='/projects' className={bottomEmerged ? "more-about_bottom_link -emerged" : "more-about_bottom_link"}>GET A GLIMPSE HERE.</Link>
        <div className={bottomEmerged ? "more-about_bottom_line -emerged" :"more-about_bottom_line"}/>
      </div>
    </div>
  );
}

export default MoreAbout;
