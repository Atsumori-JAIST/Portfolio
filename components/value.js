import Image from 'next/image'
import value1 from '../public/images/value1.png'
import value2 from '../public/images/value2.png'
import value3 from '../public/images/value3.png'

export default function Value() {
  return (
    <div className="z-30 relative mt-44 h-screen w-auto">
      <div className="text-5xl text-center">
        <p>価値観</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-1/5 mx-20">
          <div className="text-center"><Image src={value1} alt="value1"></Image></div>
          <div className="text-3xl text-center"><p>価値観01</p></div>
          <div className="text-2xl break-all"><p>AAAAAAAAAAAAAAAAAAAAAA</p></div>
        </div>
        <div className="w-1/5 mx-20">
          <div className="text-center"><Image src={value2} alt="value2"></Image></div>
          <div className="text-3xl text-center"><p>価値観02</p></div>
          <div className="text-2xl break-all"><p>AAAAAAAAAAAAAAAAAAAAAA</p></div>
        </div>
        <div className="w-1/5 mx-20">
          <div className="text-center"><Image src={value3} alt="value3"></Image></div>
          <div className="text-3xl text-center"><p>価値観03</p></div>
          <div className="text-2xl break-all"><p>AAAAAAAAAAAAAAAAAAAAAA</p></div>
        </div>
      </div>
    </div>
  )
}