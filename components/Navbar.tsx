import LayoutContext from "@context/LayoutContext"
import Link from "next/link"
import { useState } from "react"
import ShoppingBag from "./ShoppingBag"

const Navbar = () => {
  const [animation, setAnimation] = useState(false)
  const handleAnimation = (event: React.MouseEvent) => {
    event.preventDefault()
    setAnimation(!animation)
  }
  return (
    <LayoutContext.Provider value={{ handleAnimation }}>
      <div className="hidden md:flex justify-between ml-6 mr-6 mt-4 text-white">
        <a href="https://ericphifer.com" rel="noreferrer">
          <img
            src="../public/logo.png"
            alt="home"
            className="logo"
            height="60"
            width="75"
          />
        </a>
        <div className="flex items-center">
          <a
            className="hover:border bottom-blue-400"
            href="https://ericphifer.com/about"
          >
            About
          </a>
        </div>
        <div className="flex items-center">
          <a href="https://blog.ericphifer.com" rel="noreferrer">
            Blog
          </a>
        </div>
        <div className="flex items-center">
          <Link href="/">Services</Link>
        </div>
        <div className="flex items-center">
          <a href="https://ericphifer.com/contact" rel="noreferrer">
            Contact
          </a>
        </div>
        <ShoppingBag
          active={animation}
          handleAnimation={handleAnimation}
        />
      </div>
      <div className="grid grid-cols-2 fixed z-20 w-screen top-0 h-16 bg-black justify-evenly md:hidden">
        <div>
          <div className="menuToggle">
            <input type="checkbox" className="menuToggleInput" />
            <span className="menuToggleSpan" />
            <span className="menuToggleSpan" />
            <span className="menuToggleSpan" />
            <ul className="mobileMenu h-screen fixed z-10 bg-white flex flex-col justify-evenly items-center w-3/4 list-none">
              <li className="h-1/5 align-middle text-center text-2xl delay-1000 hover:bg-blue-400 transition duration-300 active:bg-blue-400">
                <a
                  href="https://ericphifer.com/about"
                  rel="noreferrer"
                  className="block text-sm.px-2.py-4"
                >
                  About
                </a>
              </li>
              <li className="h-1/5 align-middle text-center text-2xl hover:bg-blue-400 transition duration-300 active:bg-blue-400">
                <a
                  href="https://blog.ericphifer.com"
                  rel="noreferrer"
                  className="block text-sm.px-2.py-4"
                >
                  Blog
                </a>
              </li>
              <li className="h-1/5 align-middle text-center text-2xl hover:bg-blue-400 transition duration-300 active:bg-blue-400">
                <Link href="/">Services</Link>
              </li>
              <li className="h-1/5 align-middle text-center text-2xl hover:bg-blue-400 transition duration-300 active:bg-blue-400">
                <a
                  href="https://ericphifer.com/contact"
                  rel="noreferrer"
                  className="block text-sm.px-2.py-4"
                >
                  Contact
                </a>
              </li>
              <li className="h-1/5 ">
                <a
                  href="https://ericphifer.com"
                  rel="noreferrer"
                  className="block.text-sm.px-2.py-4"
                >
                  <img
                    src="/favicon.png"
                    alt="home"
                    className="logo"
                    height="60"
                    width="75"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ShoppingBag
          active={animation}
          handleAnimation={handleAnimation}
        />
      </div>
    </LayoutContext.Provider>
  )
}

export default Navbar
