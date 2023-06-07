import React, { Component } from 'react'
import Card from './Card'
import postsinfo from './Postsinfo'
export default class Posts extends Component {
    constructor(){
        super()
        this.state={postsinfo:postsinfo}
    }
    
    mapping =(x)=>{
        
      const posts =  x.map(post=><Card
                    key={post.key}
                    link={post.link}
                    img={post.img}
                    title={post.title}
                    text={post.text}
      />)
      return posts
    }
  render() {
    return (
      <div className=''>
      
        <div>
        {this.mapping(this.state.postsinfo)}
        </div>
      </div>
    )
  }
}
