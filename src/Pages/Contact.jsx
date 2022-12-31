import React from 'react'

import { HeaderFlow } from '../Components'
import { useCallback } from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { useTranslation } from 'react-i18next'




function Contact({sectionRef}) {
const {t} = useTranslation()
const section = useCallback(
  (node) => {
    sectionRef(node)
  },
  [sectionRef],
)




  return (
 
      <section ref={section} id='contact' className='overflow-y-auto pointer-events-auto absolute rounded-br-[450px]  w-full h-full pt-5 px-[4%] m-0 dark:bg-[#161640] bg-[#fff] dark:text-slate-300 font-raleway ContactSection'> 
          <div className="progress-wrapper  w-4 z-10 absolute top-0 left-0">
            <div className="progressbarB h-screen w-full dark:bg-[#3C3C86] bg-[#522263] origin-[top_center] scale-y-100"></div>
          </div>
          <div className="mt-24">

            <HeaderFlow text1={t('Contact.title2')} text2={t('Contact.title1')} bgClassDarkColor1={'#26265E'} bgClassDarkColor2={'#0D0D21'} bgClassColor1={'#c7a4dd'} bgClassColor2={'#D4C4DE'} colorText1={"black"} colorText2={"black"} flowDirection='right'/>
          
            
            <div className='my-10'>
                <h3 className='mb-10 text-xl '>{t('Contact.subtitle')}</h3>
                <div className='flex  flex-col items-start'>
           
                  <div className='flex   font-mono p-2'> <span className='mt-1 px-2'><BsFillTelephoneFill /></span> {t('Contact.tel')}</div>
                  <div className='flex   font-mono  p-2'> <span className='mt-1 px-2'><MdOutlineAlternateEmail /></span> {t('Contact.email')}</div>
                  <div className='flex   font-mono  p-2 text-blue-900 dark:text-cyan-300 hover:text-blue-600'> <span className='mt-1 px-2'><AiFillGithub /></span> <a target='_blank' rel="noreferrer" href={t('Contact.github')}>{t('Contact.github')}</a></div>
                  <div className='flex   font-mono  p-2 text-blue-900 dark:text-cyan-300 hover:text-blue-600'> <span className='mt-1 px-2'><AiFillLinkedin /></span> <a target='_blank' rel="noreferrer" href={t('Contact.linkedin')}>{t('Contact.linkedin')}</a></div>
                </div>
            </div>
         
          </div>
      </section>

  )
}

export default Contact