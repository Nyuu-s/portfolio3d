import React from 'react'
import { HeaderFlow } from '../Components'
import { useCallback } from 'react'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function CV({sectionRef, isScrollable}) {

const section = useCallback(
  (node) => {
    sectionRef(node)
  },
  [sectionRef],
)

 

  return (

      <section  ref={section} id='cv' className={`${isScrollable.cv ? 'overflow-auto' : 'overflow-hidden'} scrollbar-hide pointer-events-auto absolute rounded-tr-[450px] w-full h-full pt-5 px-[4%] m-0 dark:bg-[#2D2D6C] bg-[#eeeeee]  dark:text-slate-300 font-raleway CVSection`}> 
          <div className="progress-wrapper h-full w-4 z-10 absolute top-0 left-0">
            <div className="progressbarC h-full w-full dark:bg-[#3C3C86] bg-[#522263] origin-[top_center] scale-y-125"></div>
          </div>
          <div className='mt-24'>

          <HeaderFlow text1={"CV"} text2={'CV'} bgClassColor1={'#c7a4dd'} bgClassDarkColor1={'#26265E'} bgClassDarkColor2={'#0D0D21'} bgClassColor2={'#D4C4DE'} colorText1={"black"} colorText2={"black"} flowDirection='left'/>
        
          
          <div >
            <div className='mt-10 p-2 hover:cursor-pointer cursor-default flex justify-center' onClick={() => window.open(process.env.PUBLIC_URL +'/EdgarCV.pdf', '_blank')}>
              <Document file={'/EdgarCV.pdf'} renderMode='canvas' > <Page pageNumber={1}/> </Document>

            </div>
          </div>
          </div>
      </section>

  )
}

export default CV