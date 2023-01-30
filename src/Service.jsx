import React from 'react'
import Card from './Card';
import data from './Sdata';

const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center '>My Works</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row gy-4'>
              {data.map((value)=> {
                return (
                  <Card 
                    imgsrc={value.image}
                    title={value.title}
                    text={value.text}
                    link={value.link}
                  />
                )
              })}
                  {/* <Card 
                    imgsrc=""
                    title=""
                    text=""
                  />

                  <Card 
                    imgsrc=""
                    title=""
                    text=""
                  />

                  <Card 
                    imgsrc=""
                    title=""
                    text=""
                  />

                  <Card 
                    imgsrc=""
                    title=""
                    text=""
                  />

                  <Card 
                    imgsrc=""
                    title=""
                    text=""
                  />

                  <Card 
                    imgsrc=""
                    title=""
                    text=""
                  /> */}

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Service;