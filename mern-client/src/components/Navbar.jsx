import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//react-Icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const[ isMenuOpen, setIsMenuOpen ] = useState(false);
    const[ isSticky, setIsSticky ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll",handleScroll);

        return () => {
            window.addEventListener("scroll",handleScroll);
        }
    },[])

    const navItems = [
        {link:"Home",path:"/"},
        {link:"About",path:"/about"},
        {link:"Shop",path:"/shop"},
        {link:"Sell Your Book",path:"/admin/dashboard"},
        {link:"Blog",path:"/blog"},
    ]
  return (
    <header>
        <nav>
            <div>
                <Link to="/" className='text-2xl font-bold text-blue-700 flex item-center gap-2'><FaBlog className='inline-block'/>Books</Link>

                {/* nav items for large display */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path})=><Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                    }
                </ul>
                {/*Button for large devices*/}

                <div className='space-x-12 hidden lg:flex items-centre'>
                    <button FaBarsStaggered className='w-5 hover:text-blue-700'></button>
                </div>
                <div className='md:hidden'>
                     <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>  
                        }
                     </button>
                </div>
            </div>

            {/*Nav items for smaller devices*/}

            <div className={'space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left -0": "hidden"}'}>
                {
                    navItems.map(({link,path})=><Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>)
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar