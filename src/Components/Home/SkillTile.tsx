import { useCallback, useState } from 'react';

type PropsTypes = {skills: any, title: string};
function SkillTile({skills, title}: PropsTypes) {

  const [skillEmerged, setSkillEmerged] = useState(false);

  const skill = useCallback(div => {
    const newSkillObserver = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setSkillEmerged(true);
        newSkillObserver.disconnect();
      };
    }, {threshold: 0.5});
    div && newSkillObserver.observe(div);
  }, []);

  return (
    <>
      <div ref={skill} className={skillEmerged ? "skills_tile -emerged" : "skills_tile"}>
          <h1>{title}</h1>
          <div className="skills_tile_content">
            {skills.map((e: any) => {
              return(
                <div key={e.name}>
                  <e.icon className="skills_icon"/>
                  <p>{e.name}</p>
                </div>
              )
            })}
          </div>
      </div>
    </>
  );
}

export default SkillTile;
