import React from 'react'
import Image from 'next/image';
import { Stat, Text,StatHelpText } from '@chakra-ui/react';

const Blog = ({item}) => {
  return (
    <>
      <div className="container home  mb-5">
        <div className="row mt-1">
          <div className="col-md-8 col-8 col-xs-8 col-lg-8 mx-auto">
            <div className="blog p-3">
              <Text size="lg" color="teal" style={{fontWeight:'600',fontSize:'30px'}} className="text-left title text-capitalize mb-1">{item.title}</Text>
              {/* <Image  src={item.src} className='mt-2 card-img' height="300px" width="100%"/> */}
              <Stat>
              <StatHelpText color="white">{item.date}</StatHelpText>
              </Stat>
             <Text className='mt-3' color="black" fontWeight={30}><p>{item.desc}</p></Text>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Blog