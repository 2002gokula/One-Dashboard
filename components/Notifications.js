import React, { useState, useEffect, useRef } from "react"
import { usePopper } from "react-popper"
import styled from "styled-components"
import Image from "next/image"
import ListNotifications from "./card/ListNotifications"
import { GrNotification } from "react-icons/gr"
import { AiOutlineClose } from "react-icons/ai"
import { notifications } from "./data/dataContents"
import notificationicon from "../public/img/icon/Notification.svg"
import CloseIcon from "../public/img/icon/Close Icon.svg"
import useMobile from "../Hooks/Mobile"
const Notifications = (props) => {
  const [visible, setVisibility] = useState(false)

  const referenceRef = useRef(null)
  const popperRef = useRef(null)
  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  )
  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick)
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick)
    }
  }, [])

  function handleDocumentClick(event) {
    if (referenceRef.current.contains(event.target)) {
      return
    }
    setVisibility(false)
  }
  function handleDropdownClick(event) {
    setVisibility(!visible)
  }
  return (
    <div ref={referenceRef} className="relative  font-play">
      <div
        onClick={handleDropdownClick}
        className="bg-gray-100 cursor-pointer rounded-full p-2"
      >
        <GrNotification size={16} />
      </div>
      <div
        className={` md:w-[430px] ${
          useMobile ? "w-[200px]" : null
        } w-[365px] h-[82vh] md:h-[400px] ${
          visible ? "bg-white overflow-y-scroll " : "hidden"
        }  fixed lg:absolute border-[1px] shadow-md rounded-[8px] lg:-right-6 md:top-16 right-0 sm:right-12 z-50 top-20 `}
        ref={popperRef}
        {...attributes.popper}
      >
        <DropdownContainer
          className="shadow-sm  flex flex-col"
          style={styles.offset}
          visible={visible}
        >
          <div className="w-[100%] px-5 sticky top-0  bg-[white]  flex space-x-2 items-center justify-between py-4  ">
            <div className="flex   space-x-4">
              {/* <GrNotification size={28} /> */}
              <Image className="w-5" src={notificationicon} alt="icon" />
              <span className="text-[18px] font-[500] leading-[25px] text-[ #131313]">
                Notification
              </span>
            </div>
            {/* <AiOutlineClose size={28} className="text-gray-400" /> */}
            <Image
              onClick={handleDropdownClick}
              className="cursor-pointer"
              src={CloseIcon}
              alt="icon"
            />
          </div>
          <hr className="bg-[#EBEBEB] w-[93%] flex items-center justify-center mx-auto h-[1px]" />

          {notifications.map((notifications, index) => (
            <div key={index}>
              <ListNotifications notifications={notifications} />
              <hr className="bg-[#EBEBEB] w-[93%] flex items-center justify-center mx-auto h-[1px]" />
            </div>
          ))}
        </DropdownContainer>
      </div>
    </div>
  )
}
const DropdownContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
`
export default Notifications
