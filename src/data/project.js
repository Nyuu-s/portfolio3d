import { Project } from "../Components";
import {Trans} from 'react-i18next'



export  const Projects = [
    <Project menuTitle={<Trans>Projects.1.menutitle</Trans>} title={<Trans>Projects.1.title</Trans> } lng={"Java"} status={0} shortDesc={<Trans>Projects.1.shortDesc</Trans>} link={"https://github.com/Nyuu-s/codeencoop"}>
        <div >
            
                <Trans components={{"div": <div className="ml-5"></div>}}>Projects.1.desc</Trans>
                <img className="mx-auto w-1/2 mt-10" src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/06/minecraft-mods-better-mc.jpg" alt="mod minecraft" />
           
        </div>
    </Project>,
    <Project menuTitle={<Trans>Projects.2.menutitle</Trans>} title={<Trans>Projects.2.title</Trans> } lng={"C++, GLSL"} status={3} shortDesc={<Trans>Projects.2.shortDesc</Trans>} link={"https://github.com/Nyuu-s/OpenGl_base"}>
       <div >
           
               <Trans components={{"div": <div className="ml-5"></div>}}>Projects.2.desc</Trans>
               <img className="mx-auto w-1/2 mt-10" src="https://learnopengl.com/img/lighting/basic_lighting_specular.png" alt="" />
          
       </div>
   </Project>,

    <Project menuTitle={<Trans>Projects.3.menutitle</Trans>} title={<Trans>Projects.3.title</Trans>} lng={"Javascript - Electron - React"} status={0}  shortDesc={<Trans>Projects.3.shortDesc</Trans>} link={"https://github.com/Nyuu-s/animelistReact"}>
    <div>
    <div>
        <Trans components={{"div": <div className="ml-5"></div>}}>Projects.3.desc</Trans>
        {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}

    </div>
    </div>
    </Project>,
    <Project menuTitle={<Trans>Projects.4.menutitle</Trans>} title={<Trans>Projects.4.title</Trans>} lng={"C++"} status={0}  shortDesc={<Trans>Projects.4.shortDesc</Trans>} link={"https://github.com/Nyuu-s/InfectiousEngine"}>
    <div>
    <div>
        <Trans components={{"div": <div className="ml-5"></div>}}>Projects.4.desc</Trans>
        {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}

    </div>
    </div>
    </Project>,
    <Project menuTitle={<Trans>Projects.5.menutitle</Trans>} title={<Trans>Projects.5.title</Trans>} lng={"Javascript - p5.js"} status={3}  shortDesc={<Trans>Projects.5.shortDesc</Trans>} link={""}>
    <div>
    <div>
        <Trans components={{"div": <div className="ml-5"></div>}}>Projects.5.desc</Trans>
        {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}

    </div>
    </div>
    </Project>,
        <Project menuTitle={<Trans>Projects.6.menutitle</Trans>} title={<Trans>Projects.6.title</Trans>} lng={"C++"} status={3}  shortDesc={<Trans>Projects.6.shortDesc</Trans>} link={""}>
        <div>
        <div>
            <Trans components={{"div": <div className="ml-5"></div>}}>Projects.6.desc</Trans>
            {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}
    
        </div>
        </div>
    </Project>,
    <Project menuTitle={<Trans>Projects.7.menutitle</Trans>} title={<Trans>Projects.7.title</Trans>} lng={"C++"} status={3}  shortDesc={<Trans>Projects.7.shortDesc</Trans>} link={"https://github.com/fds-napolitain/m2-temple-run"}>
        <div>
        <div>
            <Trans components={{"div": <div className="ml-5"></div>}}>Projects.7.desc</Trans>
            {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}
    
        </div>
        </div>
    </Project>,
    <Project menuTitle={<Trans>Projects.8.menutitle</Trans>} title={<Trans>Projects.8.title</Trans>} lng={"C++"} status={3}  shortDesc={<Trans>Projects.8.shortDesc</Trans>} link={"https://github.com/fds-napolitain/m2-image-hdr"}>
        <div>
        <div>
            <Trans components={{"div": <div className="ml-5"></div>}}>Projects.8.desc</Trans>
            {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}
    
        </div>
        </div>
    </Project>,
    <Project menuTitle={<Trans>Projects.9.menutitle</Trans>} title={<Trans>Projects.9.title</Trans>} lng={"C++"} status={2}  shortDesc={<Trans>Projects.9.shortDesc</Trans>} link={"https://github.com/fds-napolitain/m2-projet-ar"}>
        <div>
        <div>
            <Trans components={{"div": <div className="ml-5"></div>}}>Projects.9.desc</Trans>
            {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}
    
        </div>
        </div>
    </Project>


]
