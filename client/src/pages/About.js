import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={'About Us - Ecommerce app'}>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img src='https://img.freepik.com/free-vector/brainstorming-concept-landing-page_52683-26979.jpg?w=826&t=st=1707227086~exp=1707227686~hmac=c47573e491f4f737f88fc25c38eb756c56a7e7f02c2870f9abcba18f910bf3be' alt='about us' style={{ width: '100%' }} />
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

export default About