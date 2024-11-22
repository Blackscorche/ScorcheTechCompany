import React from 'react'
import './services.css'
import Card from './servicesCard'
import serviceImg from '../assets/services.png'
import reactIcon from '../assets/react.svg'
function services() {
  return (
    <>
    <section className='services-page'>
        <div className="content">
            <div className="text">
                <h2>
                We offer sleek, fast, and highly secure software solutions
                </h2>
                <p>
                Explore our services, and if you have any doubts, take a look at our projects for proof of our expertise.
                </p>
            </div>

            <div className="image">
                <img src={serviceImg} alt="" />
            </div>
        </div>
        <div className="cards-wrapper">
            <div className="cards-grid">    
                <Card icon={reactIcon} title={"Developing Sofware Applications"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <Card icon={reactIcon} title={"Developing Sofware Applications"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <Card icon={reactIcon} title={"Developing Sofware Applications"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <Card icon={reactIcon} title={"Developing Sofware Applications"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>

            </div>
        </div>

    </section>


    </>



  )
}

export default services