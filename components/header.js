import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import hero from '../public/images/hero.png'

export default function Header() {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-1/6">
          <Link href="/">
            <a>
              <Image priority src={logo} alt="logo"></Image>
            </a>
          </Link>
        </div>
        <div className="flex justify-around mx-2 my-4 font-bold text-lg text-green-t">
          <div className="flex justify-center items-center mx-4"><p>ABOUT</p></div>
          <div className="flex justify-center items-center mx-4"><p>SKILLS</p></div>
          <div className="flex justify-center items-center mx-4"><p>VALUES</p></div>
          <div className="flex justify-center items-center mx-5"><p>FUTURE</p></div>
        </div>
      </div>
		  <div className="flex flex-wrap justify-between bg-green-b">
        <div className="mx-24 my-52 font-serif tracking-widest">
          <p className="my-4 font-semibold text-3xl text-white">メインタイトル</p>
          <p className="font-semibold text-lg text-white">サブタイトル</p>
        </div>
        <div className="mx-12 my-8">
			    <Image src={hero} alt="hero"></Image>
        </div>
      </div>
    </>
	)
}