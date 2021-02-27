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

function MoreAbout() {
  return (
    <div className="more-about_container">
        <h1 className="more-about_info_title">{'>'} SKILLS</h1>
        <p className="more-about_info_description">Technologies I use for my projects:</p>
        
        <div className="skills_container">

          <div className="skills_tile">
            <h1>LANGUAGES</h1>
            <div className="skills_tile_content">
              <div>
                <JsIcon className="skills_icon"/>
                <p>JavaScript</p>
              </div>
              <div>
                <TsIcon className="skills_icon"/>
                <p>TypeScript</p>
              </div>
            </div>
          </div>

          <div className="skills_tile">
            <h1>LIBRARIES</h1>
            <div className="skills_tile_content">
              <div>
                <ReactIcon className="skills_icon"/>
                <p>React</p>
              </div>
              <div>
                <ReduxIcon className="skills_icon"/>
                <p>Redux</p>
              </div>
              <div>
                <ReactIcon className="skills_icon"/>
                <p>React Native</p>
              </div>
            </div>
          </div>

          <div className="skills_tile">
            <h1>FRAMEWORKS</h1>  
            <div className="skills_tile_content">
              <div>
                <NextIcon className="skills_icon"/>
                <p>Next.js</p>
              </div>
            </div>
          </div>

          <div className="skills_tile">
            <h1>GRAPHICS / UI</h1>
            <div className="skills_tile_content">
              <div>
                <PhotoshopIcon className="skills_icon"/>
                <p>Photoshop</p>
              </div>
              <div>
                <LightroomIcon className="skills_icon"/>
                <p>Lightroom</p>
              </div>
              <div>
                <FigmaIcon className="skills_icon"/>
                <p>Figma</p>
              </div>
            </div>
          </div>

          <div className="skills_tile">
            <h1>RUNTIME</h1>
            <div className="skills_tile_content">
              <div>
                <NodeIcon className="skills_icon"/>
                <p>Node.js</p>
              </div>
            </div>
          </div>

          <div className="skills_tile">
            <h1>OTHER</h1>
            <div className="skills_tile_content">
              <div>
                <GraphQlIcon className="skills_icon"/>
                <p>GraphQL</p>
              </div>
              <div>
                <SassIcon className="skills_icon"/>
                <p>Sass</p>
              </div>
              <div>
                <WebpackIcon className="skills_icon"/>
                <p>Webpack</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default MoreAbout;
