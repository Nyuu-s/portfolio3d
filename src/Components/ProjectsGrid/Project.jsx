import React from 'react'
import {AiFillGithub as GitHubIcon} from 'react-icons/ai'
import {GoLinkExternal as ExternalLink} from 'react-icons/go'
import { useTranslation, Trans } from 'react-i18next';

function openInNewTab(url) {
  window.open(url, '_blank').focus();
 }
const statusMap = {
  0: <div className='text-status-on px-2'><Trans>Projects.status.on</Trans></div>,
  1: <div className='text-status-off px-2'><Trans>Projects.status.off</Trans></div>,
  2: <div className='text-status-hiatus px-2'><Trans>Projects.status.hiatus</Trans></div>,
  3: <div className='text-status-done px-2'><Trans>Projects.status.done</Trans></div>
}
function Project(props) {
  const {t} = useTranslation()
  var isGithub = props.link.startsWith('https://github.com/')
  return (
    <div className='fixed h-full w-full top-24 overflow-y-auto overflow-ellipsis z-10 '>

      <div className='bg-black h-3/4 bg-opacity-95 w-3/4 mx-auto my-10 text-white overflow-auto' >
        <h1 className='flex items-center justify-center mx-auto w-fit font-extrabold text-2xl hover:cursor-pointer cursor-default'
        onClick={() => { props.link && openInNewTab(`${props.link}`)}}
        >
            {props.title} 
            {props.link && <span className={`ml-5 ${isGithub ? '' : 'mt-1'}`}>
              {isGithub ? <GitHubIcon /> :  <ExternalLink size={20} />} 
              
              </span>}
        </h1> 
        <div className=' my-5 mx-5'>
            <div>{props.shortDesc}</div>
          
        </div>
        <div className='px-5 '>{t('Projects.lang')} {props.lng}</div>
        <div className='px-5 flex'>Status: {statusMap[props.status]}</div>
        <div className='mt-2'>

          {props.children}
        </div>
     

       
    </div>
  </div>
  )
}

export default Project