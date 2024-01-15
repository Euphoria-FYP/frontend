import React from 'react'
import logo from '../../../assets/images/logo.png'

const Footer = () => {
  return (
    <>
    <footer>
            <div className='flex justify-center items-center mx-auto mt-16 mb-12 bg-gray-800 w-full'>

                {/* first div */}
                <div className=' flex '>
                    <img src={logo} alt="" width={50} height={50} />
                    <p>Buy and Sales 100+ Cryptocurrencies with flat currencies market using bank transfer your credit/debit card.</p>
                    
                </div>

                {/* second div */}
                <div>

                </div>

            </div>
    </footer>
    </>
  )
}

export default Footer