import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1760351867~exp=1760355467~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=ab7a2925e0fd7ac00c88c22690fdd138dc5b2ac8155b3c9a3f5bc1394fcb3826&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video