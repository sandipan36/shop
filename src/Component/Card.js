import React from 'react'
import Color from './Color.css'
import Fetch from './Fetch'


function Card(props)  {
  return (
    <>
    <div className='Card_body'>
    <div className='Cards'>
        <div className='card'>
        <img src={props.Poster} alt='hello' className='img'/>
        </div>
        <div className='Card_info'>
        <span className='Card_catagory'> {props.title} </span>
        <h3 className='Card_title'>{props.thumbnailUrl} </h3>
        <a  href={props.link} target='_blank'>
        <button className='btn'>Watch Now</button>
        </a>
        </div>

    </div>
    </div>
    </>
  )
}

export default Card
