import { Project } from "../Components";
import {Trans, Translation  } from 'react-i18next'




export const Projects = [
    <Project category={0} menuTitle={<Trans>Projects.1.menutitle</Trans>} title={<Trans>Projects.1.title</Trans> } lng={"Java"} status={0} shortDesc={<Trans>Projects.1.shortDesc</Trans>} link={"https://github.com/Nyuu-s/codeencoop"}>
        <div >
            
                <Trans components={{"div": <div className="ml-5"></div>}}>Projects.1.desc</Trans>
                <img className="mx-auto w-1/2 mt-10" src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/06/minecraft-mods-better-mc.jpg" alt="mod minecraft" />
           
        </div>
    </Project>,
    <Project category={0} menuTitle={<Trans>Projects.2.menutitle</Trans>} title={<Trans>Projects.2.title</Trans> } lng={"C++, GLSL"} status={3} shortDesc={<Trans>Projects.2.shortDesc</Trans>} link={"https://github.com/Nyuu-s/OpenGl_base"}>
       <div >
           
               <Trans components={{"div": <div className="ml-5"></div>}}>Projects.2.desc</Trans>
               <img className="mx-auto w-1/2 mt-10" src='/images/pj_0_openglbase.jpg'alt="capture ecran scene 3d" />
          
       </div>
   </Project>,

    <Project category={0} menuTitle={<Trans>Projects.3.menutitle</Trans>} title={<Trans>Projects.3.title</Trans>} lng={"Javascript - Electron - React"} status={0}  shortDesc={<Trans>Projects.3.shortDesc</Trans>} link={"https://github.com/Nyuu-s/animelistReact"}>
    <div>
    <div>
        <Trans components={{"div": <div className="ml-5"></div>}}>Projects.3.desc</Trans>
        <img className="mx-auto w-1/2 mt-10" src='/images/pj_0_animelist.jpg' alt="capture ecran liste de serie" />
        <Trans components={{"div": <div className="ml-5 my-5"></div>}}>Projects.3.desc2</Trans>
        <img className="mx-auto w-1/2 mt-10" src='/images/pj_1_animelist.jpg' alt="capture ecran liste de serie" />

    </div>
    </div>
    </Project>,
    <Project category={0} menuTitle={<Trans>Projects.4.menutitle</Trans>} title={<Trans>Projects.4.title</Trans>} lng={"C# Unity"} status={2}  shortDesc={<Trans>Projects.4.shortDesc</Trans>} link={"https://github.com/Nyuu-s/InfectiousEngine"}>
    <div>
    <div>
        <Trans components={{"div": <div className="ml-5"></div>}}>Projects.4.desc</Trans>
       
    </div>
    </div>
    </Project>,
    <Project category={0} menuTitle={<Trans>Projects.5.menutitle</Trans>} title={<Trans>Projects.5.title</Trans>} lng={"Javascript - p5.js"} status={3}  shortDesc={<Trans>Projects.5.shortDesc</Trans>} link={"https://github.com/Nyuu-s/labyJs"}>
    <div>
    <div>
        <Trans components={{"div": <div className="ml-5"></div>}}>Projects.5.desc</Trans>
        <video className="my-5 mx-auto" autoPlay={true} loop={true} src='/videos/pj_0_labyjs.mp4'></video>


    </div>
    </div>
    </Project>,
        <Project category={1} menuTitle={<Trans>Projects.6.menutitle</Trans>} title={<Trans>Projects.6.title</Trans>} lng={"Qt C++, OpenGL"} status={3}  shortDesc={<Trans>Projects.6.shortDesc</Trans>} link={"https://github.com/fds-napolitain/m2-temple-run"}>
        <div>
        <div>
            <Trans components={{"div": <div className="ml-5"></div>}}>Projects.6.desc</Trans>
            <Trans components={{"div": <div className="ml-5 my-5"></div>}}>Projects.6.desc2</Trans>
            <iframe className="mx-auto w-1/3 h-80 mt-10"  src="https://www.youtube.com/embed/nZomznO4QcE" title="Temple Run / Qt - OpenGL ES 3.0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </div>
    </Project>,
    <Project category={1} menuTitle={<Trans>Projects.7.menutitle</Trans>} title={<Trans>Projects.7.title</Trans>} lng={"Qt C++"} status={3}  shortDesc={<Trans>Projects.7.shortDesc</Trans>} link={"https://github.com/fds-napolitain/m2-image-hdr"}>
        <div>
        <div>
            <Trans components={{"div": <div className="ml-5"></div>}}>Projects.7.desc</Trans>
            <img className="mx-auto w-1/2 mt-10" src='/images/pj_0_imagehdr.jpg' alt="poster fonctionnement hdr" />
            
    
        </div>
        </div>
    </Project>,
    <Project category={1} menuTitle={<Trans>Projects.8.menutitle</Trans>} title={<Trans>Projects.8.title</Trans>} lng={"C# Unity"} status={3}  shortDesc={<Trans>Projects.8.shortDesc</Trans>} link={"https://github.com/fds-napolitain/m2-projet-ar"}>
        <div>
        <div>
            <Trans components={{"div": <div className="ml-5"></div>}}>Projects.8.desc</Trans>
            <iframe className="mx-auto w-2/4 "height={400} src="https://www.youtube.com/embed/u1Y226gDEoo?list=PLvsOC5PoBqO5ggNxiqPKSkO_ZL5-JctbU" title="quantification"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}
    
        </div>
        </div>
    </Project>,
    <Project category={1} menuTitle={<Trans>Projects.9.menutitle</Trans>} title={<Trans>Projects.9.title</Trans>} lng={"C#, UWP"} status={2}  shortDesc={<Trans>Projects.9.shortDesc</Trans>} link={"https://github.com/fds-napolitain/m1-image-inpainting"}>
        <div>
        <div>
            <Trans components={{"div": <div className="ml-5"></div>}}>Projects.9.desc</Trans>
            <video className="my-5 mx-auto w-2/3" autoPlay={true} loop={true} src='/videos/pj_0_inpainting.mov'></video>
            {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}
    
        </div>
        </div>
    </Project>,
    <Project category={2} menuTitle={<Trans>Projects.10.menutitle</Trans>} title={<Trans>Projects.10.title</Trans>} lng={"C++"} status={3}  shortDesc={<Trans>Projects.10.shortDesc</Trans>} link={""}>
        <div>
        <div>
            <Trans components={{"div": <div className="ml-5"></div>}}>Projects.10.desc</Trans>
           
        

        </div>
        </div>
    </Project>,
    <Project category={0} menuTitle={<Trans>Projects.11.menutitle</Trans>} title={<Trans>Projects.11.title</Trans>} lng={"Javascript, React, Three.js"} status={0}  shortDesc={<Trans>Projects.11.shortDesc</Trans>} link={""}>
        <div>
            <div>
                <Trans components={{"div": <div className="ml-5"></div>}}>Projects.11.desc</Trans>
                <Trans components={{"div": <div className="ml-5 mt-5"></div>}}>Projects.11.moreInfoSubTitle</Trans>

                    <ul className="ml-5">
                        <Translation>
                                {
                                    (t) => t('Projects.11.moreinfo', {returnObjects: true}).map((item, i) => (<li key={i} className='p-2'>{item}</li>))
                                }
                        </Translation>
                    </ul>
                {/* <img className="mx-auto w-1/2 mt-10" src="" alt="capture d'ecran" /> */}
        
            </div>
        </div>
    </Project>


]
