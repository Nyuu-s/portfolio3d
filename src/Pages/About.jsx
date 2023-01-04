import React, { useRef } from 'react'
import { HeaderFlow } from '../Components'
import { useCallback } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import Lottie from "lottie-react";
import document from '../assets/lotties/document.json'
import bubble from '../assets/lotties/speech.json'


 
function About({sectionRef, isScrollable, ...props}) {
  const HobbyTranslate = useTranslation('translation', {keyPrefix: 'About.hobbies'})
  const FormationTranslate = useTranslation('translation', {keyPrefix: 'About.formation'})
  const documentRef = useRef()
  const bubbleRef = useRef()

  const section = useCallback(
    (node) => {
      sectionRef(node)
    },
    [sectionRef],
  )

  return (
    
    
    <section ref={section}  className={`absolute ${isScrollable.about ? 'overflow-auto' : 'overflow-hidden'} rounded-tr-[500px] scrollbar-hide h-full pt-5 px-[4%] w-full m-0  dark:bg-[#161640] bg-[#fff] dark:text-slate-300 font-raleway pointer-events-auto aboutSection`}> 
      <div className="progress-wrapper  w-4 z-10 absolute top-0 left-0">
        <div className="progressbarA rounded-full  h-screen w-full dark:bg-[#3C3C86] bg-[#522263] origin-[top_center] scale-y-150"></div>
      </div>

      <div className="mt-24">
        <HeaderFlow text1={<Trans components={{div: <div />}}>About.section</Trans>} text2={<Trans components={{div: <div />}}>About.section</Trans>} bgClassDarkColor1={'#26265E'} bgClassDarkColor2={'#0D0D21'} bgClassColor1={'#c7a4dd'} bgClassColor2={'#D4C4DE'} colorText1={"black"} colorText2={"black"} />
        
        <div className='dark:text-white'>
          <div className='m-5 text-lg'>
            <Trans components={{div: <div />}}>About.intro</Trans>
          </div>
         
            <h3 className='text-xl font-bold my-5'>{FormationTranslate.t('title')}</h3> 
            <p className='my-2'>{FormationTranslate.t('motivation')}</p>
            <p>{FormationTranslate.t('journey')}</p>

            <h1 className='text-xl font-bold my-5'>{HobbyTranslate.t('title')}</h1>
            <h3 className='text-lg font-bold my-2'>{HobbyTranslate.t('progTitle')}</h3>
            <p>{HobbyTranslate.t('prog')}</p>
            
            <h3 className='text-lg font-bold mb-2 mt-5 '>{HobbyTranslate.t('sciencesTitle')}</h3>
            <p className='my-2'>{HobbyTranslate.t('sciences')}</p>
            <p>{HobbyTranslate.t('learning')}</p>

            <div className='w-full h-80 text-center mt-10 '>
            <button  
              onMouseEnter={() => documentRef.current.play()} 
              onMouseLeave={() => documentRef.current.stop()} 
              onClick={() => props.changeSection('.CVSection') }
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5 ">
              <Lottie animationData={document} lottieRef={documentRef} autoplay={false}  />  Mon CV
            </button>
            <button 
            onMouseEnter={() => bubbleRef.current.play()}
            onMouseLeave={() => bubbleRef.current.stop()} 
            onClick={() => props.changeSection('.ContactSection') }
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Lottie animationData={bubble} lottieRef={bubbleRef} autoplay={false}  /> Contact
            </button>
            </div>
           
        </div>
      </div>
     
    </section>
   
    

  )
}

export default About