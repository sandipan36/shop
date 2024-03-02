import React from 'react'
import Au from './Au.css'

function Namep(props) {
  return (
    <div className='ap'>
      <div className='np'>
        <h2>Sandipan</h2>
        <img  className="Crpic"src='https://img.freepik.com/free-vector/cute-boy-round-background_1308-69494.jpg?w=740&t=st=1683225968~exp=1683226568~hmac=1fa69fb2cae9b185f748f6c897934274839d1684faa11a72e1a29eb4a8752dc2' alt="Careator" />
        <p>Student of JISSP Computer science and Engineering</p>
        <p>Contact:93305607</p>
        <button>{props.name}</button>
        <button>Twitter</button>
        <button>Youtube</button>
      </div>
    </div>
  )
}

export default Namep
