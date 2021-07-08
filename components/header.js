import Image from 'next/image'

export default function Header() {
  return (
    <>
      <div className="flex justify-between">
        <div className="m-1">
          <Image
            priority
            src="/images/logo.png"
            width={160}
            height={80}
            alt="logo"
          ></Image>
        </div>
        <div className="mx-2 my-8 flex justify-around text-lg text-green-t font-bold">
          <div className="mx-4"><p>ABOUT</p></div>
          <div className="mx-4"><p>SKILLS</p></div>
          <div className="mx-4"><p>VALUES</p></div>
          <div className="mx-5"><p>FUTURE</p></div>
        </div>
      </div>
		  <div className="bg-green-b flex flex-wrap justify-between">
        <div className="font-serif tracking-widest mx-24 my-52">
          <p className="font-semibold text-3xl text-white my-4">メインタイトル</p>
          <p className="font-semibold text-lg text-white">サブタイトル</p>
        </div>
        <div className="mx-12 my-8">
			    <Image
				    src="/images/hero.png"
		  	    width={550}
	  	 	    height={470}
  		      alt="hero"
  		    ></Image>
        </div>
      </div>
    </>
	)
}