import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { GrNotification } from "react-icons/gr"
import { BiMessageSquareDetail } from "react-icons/bi"
import { AiOutlineMore, AiOutlineMenu } from "react-icons/ai"
import { RiTeamLine } from "react-icons/ri"
import { SiDatabricks } from "react-icons/si"
import { TbUsers } from "react-icons/tb"
import { SlSettings } from "react-icons/sl"
import { MdEdit } from "react-icons/md"
import { CiShop } from "react-icons/ci"
import LogoIcon from "../public/img/Logo.svg"
import Image from "next/image"
import Link from "next/link"

const SideBar = () => {
  const [open, setOpen] = useState(true)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [color, setColor] = useState("text-gray-600")
  const [clicked, setClicked] = useState("/admin")
  const router = useRouter()
  useEffect(() => {
    function handleResize() {
      setOpen(window.innerWidth >= 767)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const [menu, setMenu] = useState([
    {
      title: "Overviews",
      visible: false,
      haveSub: false,
      icon:
        clicked === router.pathname ? (
          <SiDatabricks color={"#131313"} />
        ) : (
          <SiDatabricks color={"#13131380"} />
        ),
      linkurl: "/admin",
    },
    {
      title: "Customers",
      visible: false,
      haveSub: false,
      icon:
        clicked === router.pathname ? (
          <TbUsers color={"#131313"} />
        ) : (
          <TbUsers color={"#13131380"} />
        ),
      linkurl: "/admin/customers",
    },
    {
      title: "Orders",
      visible: false,
      haveSub: true,
      child: [
        { title: "All type" },
        { title: "Active" },
        { title: "Comolete" },
        { title: "Cancel" },
      ],
      icon:
        clicked === router.pathname ? (
          <CiShop color={"#131313"} />
        ) : (
          <CiShop color={"#13131380"} />
        ),
      linkurl: "/admin/orders",
    },
    {
      title: "Messages",
      visible: false,
      haveSub: false,
      icon:
        clicked === router.pathname ? (
          <BiMessageSquareDetail color={"#131313"} />
        ) : (
          <BiMessageSquareDetail color={"#13131380"} />
        ),
      linkurl: "/admin/messages",
    },
    {
      title: "Settings",
      visible: false,
      haveSub: true,
      child: [
        { title: "Personal Inormations" },
        { title: "Account" },
        { title: "Emails" },
        { title: "Security" },
        { title: "Notifications" },
        { title: "Stripe" },
      ],
      icon:
        clicked === router.pathname ? (
          <SlSettings color={"#131313"} />
        ) : (
          <SlSettings color={"#13131380"} />
        ),
      linkurl: "/admin/settings",
    },
  ])

  const onMenuClick = (index) => {
    menu[index].visible = !menu[index].visible
    setMenu([...menu])
  }

  const toggleSidebar = () => {
    setOpen(!open)
  }
  return (
    <div className="h-screen    flex items-end justify-end">
      <button
        className="fixed lg:hidden z-20 top-4 left-2 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu size={24} className="text-black" />
      </button>

      <div
        className={` ${
          open ? "sidebar visible" : "w-0"
        } lg:w-[190px] 2xl:w-[256px] bg-white fixed SmoothAnimation  left-0 z-20 overflow-hidden  bottom-0 top-0  border-r`}
      >
        <div className="justify-center   px-2  mt-3">
          <div
            className={`text-white flex justify-between  font-medium text-2xl text-center  pr-3  ${
              !open && "sidebar visible "
            }`}
          >
            <Link href={"/admin"}>
              <Image
                width={158}
                height={60}
                alt="loog"
                src={LogoIcon}
                className={`ml-4 lg:w-[140px] ${
                  !open && "sidebar "
                } cursor-pointer`}
              />
            </Link>
            <button
              onClick={toggleSidebar}
              className={`md:hidden block ${!open && "sidebar visible "}`}
            >
              <AiOutlineMenu size={24} className="text-black" />
            </button>
          </div>
        </div>

        <ul
          className={`pt-6 pl-2   SmoothAnimation ${
            !open && "sidebar visible "
          }`}
        >
          {menu.map((menu, index) => (
            <div>
              <ul>
                <a>
                  <Link href={menu.linkurl}>
                    <li className="ml-4">
                      <div
                        className={`border-r-4 flex ${
                          !open && "sidebar visible "
                        } space-x-3 mt-3 py-[5px] items-center text-gray-400  w-full ${
                          clicked === menu.linkurl
                            ? "border-[#007AFF] font-[600] text--font text-[#131313]"
                            : "border-r-0"
                        } `}
                        onClick={() => {
                          onMenuClick(index)
                          setClicked(menu.linkurl)
                        }}
                      >
                        {React.cloneElement(menu.icon, { color })}
                        <span>{menu.title}</span>
                      </div>
                      <div className="mt-0 ml-8 SmoothAnimation">
                        {menu.haveSub && menu.visible && (
                          <ul className="text-[12px] SmoothAnimation  text-gray-400 ">
                            {menu.child.map((item) => (
                              <li className="mt-2 SmoothAnimation">
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  </Link>
                </a>
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
