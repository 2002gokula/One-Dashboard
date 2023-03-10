import React, { useState } from "react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import CardDisscussion from "./card/CardDiscussion"
import { useSpring, animated } from "react-spring"

const Discussion = () => {
  const [clicked, setClicked] = useState(true)
  const fade = useSpring({
    opacity: clicked ? 1 : 0,
  })
  return (
    <React.Fragment>
      <div className="bg-white border shadow-sm  xl:px-3 px-3 py-3 xl:py-1 2xl:py-3 font-play">
        <div
          className="bg-white flex flex-col w-full"
          onClick={() => setClicked(!clicked)}
        >
          <div className="flex justify-between p-2">
            <div className="flex space-x-2 items-center">
              <div className="w-[2px] h-full bg-blue-500"></div>
              <p className="text-black 2xl:text-[16px] xl:text-[13px] text-sm font-semibold">
                Discussion
              </p>
            </div>
            <span className="text-black">
              {clicked === false ? <BsChevronDown /> : <BsChevronUp />}
            </span>
          </div>
        </div>
        <animated.div style={fade}>
          {clicked ? <CardDisscussion /> : null}
        </animated.div>
      </div>
    </React.Fragment>
  )
}
export default Discussion
