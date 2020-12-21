import { useRef, useCallback, useState } from 'react';

function Showcase() {

  const [elementsEmerged, setElementsEmerged] = useState(false);
  const loader = useRef<any>(null);

  const anchor = useCallback(element => {
    loader.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setElementsEmerged(true);
      }
    }, {threshold: 0.3});
    if(element) loader.current.observe(element)
  }, [])

  return (
      <div className="showcase_container">
        <h1 ref={anchor} className={elementsEmerged ? "showcase_title -emerged" : "showcase_title"}>{">"} FEATURED PROJECTS</h1>
        
      </div>
  );
}

export default Showcase;
