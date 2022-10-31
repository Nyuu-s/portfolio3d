import React from 'react'
import {AiFillGithub as GitHubIcon} from 'react-icons/ai'
import {GoLinkExternal as ExternalLink} from 'react-icons/go'

function openInNewTab(url) {
  window.open(url, '_blank').focus();
 }

function Project(props) {
  var isGithub = props.link.startsWith('https://github.com/')
  return (
    <div className='bg-black h-3/4 bg-opacity-95 w-3/4 mx-auto my-10 text-white overflow-auto' >
      <h1 className='flex items-center justify-center mx-auto w-fit font-extrabold text-2xl hover:cursor-pointer '
      onClick={() => { props.link && openInNewTab(`${props.link}`)}}
      >
           {props.title} 
           {props.link && <span className={`ml-5 ${isGithub ? '' : 'mt-1'}`}>
             {isGithub ? <GitHubIcon /> :  <ExternalLink size={20} />} 
             
            </span>}
      </h1>
      <div className='my-5 mx-5'>
        <p className='text-justify'>
          {props.shortDesc}
        </p>
      </div>
      {props.children}
  </div>
  )
}

export default Project