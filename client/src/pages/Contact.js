import React from 'react'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout title={'Contact Us - Ecommerce app'}>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img src='https://media.istockphoto.com/id/1471845662/photo/telemarketing-call-center-and-woman-typing-on-laptop-for-technical-support-crm-consulting-and.webp?s=2048x2048&w=is&k=20&c=X8SB_bQ8RIAs5AeoUQWTpfhw-H8avV5XffxXW5CEyhw=' alt='about us' style={{ width: '80%', height:'80vh', marginLeft:'1.5rem' }} />
        </div>
        <div className='col-md-4' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
          <p className='text-justify mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias recusandae vero, qui accusamus hic libero. Cupiditate officia animi laborum at, deserunt vitae sapiente mollitia quibusdam autem rerum ab sunt quas dicta ipsa sed consectetur architecto doloribus nihil ad voluptas quidem fugiat consequatur. Qui doloribus nulla earum dolor id, non recusandae voluptatibus est, enim eum repellat consequatur velit ad? Hic, doloribus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias recusandae vero, qui accusamus hic libero. Cupiditate officia animi laborum at, deserunt vitae sapiente mollitia quibusdam autem rerum ab sunt quas dicta ipsa sed consectetur architecto doloribus nihil ad voluptas quidem fugiat consequatur. Qui doloribus nulla earum dolor id, non recusandae voluptatibus est, enim eum repellat consequatur velit ad? Hic, doloribus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias recusandae vero, qui accusamus hic libero. Cupiditate officia animi laborum at, deserunt vitae sapiente mollitia quibusdam autem rerum ab sunt quas dicta ipsa sed consectetur architecto doloribus nihil ad voluptas quidem fugiat consequatur. Qui doloribus nulla earum dolor id, non recusandae voluptatibus est, enim eum repellat consequatur velit ad? Hic, doloribus.
          </p>
        </div>

      </div>
    </Layout>
  )
}

export default Contact