import React from "react"
import Link from "next/link";
import Image from "next/image"
import { customers } from "../../../components/data/dataContents"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { picImg } from '../../../public/img/user/Avatar_team.png'
import { BsSearch } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
const Customer = () => {
  return (
    <React.Fragment>
      <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto font-play">
            <p className="text-gray-400 text-base">Overview</p>
            <div className="py-2 inline-block min-w-full md:flex md:justify-between md:items-center">
              <a className="text-3xl py-4 font-semibold"><Link href='/customers'>Customers</Link></a>
              <div className="flex items-center space-x-3">
              <div className="w-full md:w-44 border relative mt-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <BsSearch />
                    </button>
                  </span>
                  <input type="text" placeholder="search" className="pl-10 py-2.5 w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto p-2 border bg-white">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th scope="col" className="text-xl font-medium text-back font-bold py-4 text-left px-4">
                        Name
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 py-4 text-left px-4">
                       Customer ID
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 py-4 text-left px-4">
                        Country
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 py-4 text-left px-4">
                        Email
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 py-4 text-center px-4">
                        Total Orders
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 py-4 text-center px-4">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((member, index) => {
                      //console.log(member, index)
                      return (
                        <>
                          <tr>
                            <td className="md:flex md:items-center md:gap-2 text-sm font-light py-4 px-4">
                              <Image src={member.img} alt="pic" width={50} height={50} />
                              <span className="font-semibold text-base font-bold">{member.name}</span>
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4 px-4">
                              {member.order_id}
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4 px-4">
                              {member.country.name}
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4 text-left px-4">
                              {member.email}
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4  text-center px-4">
                              $ {member.total_orders}
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4 flex justify-center px-4">
                               <Link href={'customers/'+ member.id} key={member.id}><MdEdit size={24} /></Link>
                            </td>
                          </tr>
                        </>
                      )
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Customer