import React, { useEffect, useState } from 'react';
import './Certifications.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import  Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { client, urlFor } from '../../client';

const Certifications = () => {

    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
      const query = '*[_type == "Certifications"]'

      client.fetch(query).then((data)=>{
        setCertifications(data)
      })
    }, [])

    return (
        <div className='app__certifications '>
            <h2 className='head-text mb-5'>Certificaciones</h2>
            <Carousel data-bs-theme='dark'  className='caros' controls={false} indicators={true} interval={10000} pause={false} >
                {certifications.map((certification, index) => (
                    <Carousel.Item key={index} style={{transition:'none'}}>
                        <img
                            className="d-block ms-auto rounded w-100 "
                            src={urlFor(certification.imgurl)}
                            alt={certification.name}
                        />
                        <Carousel.Caption className='bg-dark rounded text-light mb-0 crsel'  >
                            <h3 style={{fontSize: 'calc(0.8em + 1vw)'}}>{certification.name}</h3>
                            <p style={{fontSize: 'calc(0.6em + 0.5vw)'}}>{certification.desc}</p>
                        </Carousel.Caption>

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default AppWrap(MotionWrap(Certifications,'app_certifications'),
'Certificaciones',
"app__primarybg"
);



