import {useState, useEffect} from 'react'

function ScrollTop() {

    const [scrollTop, setscrollTop]= useState(false)

    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY >= 80){
                setscrollTop(true)
            }else{
                setscrollTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <>
    {scrollTop &&(
        <li className="top" onClick={scrollUp}> <i className='fas fa-angle-up'></i> </li>
    )}
    </>
  )
}

export default ScrollTop