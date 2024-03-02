import React from 'react'
import Namep from './Namep'
import Abcss from './Abcss.css'

function About() {
  return (
   <>
   <div>
    <img className="Abimg"src='https://img.freepik.com/free-vector/3d-film-strip-cinema-background_1017-36808.jpg?size=626&ext=jpg&ga=GA1.2.1408401914.1683224318&semt=ais' alt='ABOUT bODY' />
    <div>
      <h1 className='Abhed'>About</h1>
      <div>
        <div>
          <h3> JobS</h3>
          <div  className='Job_div'>
            <div>
              <p>Web page Design</p>
              <img src="" alt='Web'/>
              <button>VISIT</button>
            </div>
            <div>
              <p>REACT APP </p>
              <img src="" alt='Web'/>
              <button>VISIT</button>
            </div>
            <div>
              <p>DIGITAL MARKETING</p>
              <img src="" alt='Web'/>
              <button>VISIT</button>
            </div>
            <div>
              <p>DIGITAL MARKETING</p>
              <img src="" alt='Web'/>
              <button>VISIT</button>
            </div>
            <div>
              <p>DIGITAL MARKETING</p>
              <img src="" alt='Web'/>
              <button>VISIT</button>
            </div>
            <Namep  name="Github"/>
          </div>
          <div className='thank'>
            <h1>Thank you</h1>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default About
