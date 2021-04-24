/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
      <iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSupernatural%2F&tabs=timeline&width=340&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        height="1500" 
        style={{border: "none", overflow: "hidden"}} 
        scrolling="no" 
        frameBorder="0" 
        allowFullScreen={false} 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        alt="Supernatural Facebook Feed" 
        sameSite="None"
    ></iframe>
    </div>
  )
}

export default Widgets
