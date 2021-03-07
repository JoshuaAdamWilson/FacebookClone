import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://dl.dropboxusercontent.com/s/te4zqft2h88bm5n/supernatural2.jpg?dl=0"
        profileSrc="https://dl.dropboxusercontent.com/s/80oyyrlobrqacwu/supernaturalicon.png?dl=0"
        title="Supernatural"
      />
      <Story 
        image="https://dl.dropboxusercontent.com/s/jduzyfph4xctjo2/kyler2.jpg?dl=0"
        profileSrc="https://dl.dropboxusercontent.com/s/sfuaeobtvc1fhtn/kyler1.jpg?dl=0"
        title="Kyler Jimenez"
      />
      <Story 
        image="https://dl.dropboxusercontent.com/s/8l5439lqq2muydp/lornaicon.jpg?dl=0"
        profileSrc="https://dl.dropboxusercontent.com/s/wx1zm81qn2hybkr/lorna1.jpg?dl=0"
        title="Lorna Jimenez"
      />
      <Story 
        image="https://dl.dropboxusercontent.com/s/tsqlb5mvc5yz6gz/dbz1.jpg?dl=0"
        profileSrc="https://dl.dropboxusercontent.com/s/6uu3c5kfwje9o9k/dbz2.jpg?dl=0"
        title="DragonBall Z"
      />
      <Story 
        image="https://dl.dropboxusercontent.com/s/1zw4iovl1p747k1/zombieland2.jpg?dl=0"
        profileSrc="https://dl.dropboxusercontent.com/s/q4lw9zy0lv8jbmb/zombieland1.jpg?dl=0"
        title="Zombieland"
      />
    </div>
  )
}

export default StoryReel
