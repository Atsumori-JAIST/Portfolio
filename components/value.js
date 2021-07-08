import Image from 'next/image'

export default function Value() {
  return (
    <div className="z-30 relative mt-44 h-screen w-auto">
      <div className="text-5xl text-center">
        <p>価値観</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-1/5 mx-20">
          <Image
            src="/images/value1.png"
            width={270}
            height={270}
            alt="value1"
          ></Image>
          <div className="text-3xl text-center"><p>価値観01</p></div>
          <div className="text-2xl break-all"><p>AAAAAAAAAAAAAAAAAAAAAA</p></div>
        </div>
        <div className="w-1/5 mx-20">
          <Image
            src="/images/value2.png"
            width={270}
            height={270}
            alt="value2"
          ></Image>
          <div className="text-3xl text-center"><p>価値観02</p></div>
          <div className="text-2xl break-all"><p>AAAAAAAAAAAAAAAAAAAAAA</p></div>
        </div>
        <div className="w-1/5 mx-20">
          <Image
            src="/images/value3.png"
            width={270}
            height={270}
            alt="value3"
          ></Image>
          <div className="text-3xl text-center"><p>価値観03</p></div>
          <div className="text-2xl break-all"><p>AAAAAAAAAAAAAAAAAAAAAA</p></div>
        </div>
      </div>
    </div>
  )
}