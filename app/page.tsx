import Header from "./components/header/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";
import Model_Handel from "./components/model_handel";
import FormComponent from "./components/formComponent";
import { FaSquarePhone } from "react-icons/fa6";


export default function Home() {
  return (
    <div className=" w-full">
      {/* nabar */}
      <div><Navbar /></div>


      {/* Header */}
      <div><Header /></div>


      {/* Body */}
      <div><Body /></div>




      <div className="flex px-2 mt-20 bg-[#f2f2f2] py-4 items-center md:hidden justify-center gap-3 text-[12px] text-black">
        <span className="font-semibold text-[20px] mr-2">전화상담</span>
        <span className='text-[25px] rounded-full'>
          <FaSquarePhone />

        </span>
        <a href="tel:01031142998" className="flex items-center">

          <span className="text-[18px] font-extrabold">010-3114-2998</span>
        </a>
      </div>
      {/* This is where your popup is rendered */}
      {/* <div className="hidden md:block"><InsurancePopup /> </div> */}


      {/* <CardContainer/> */}
      <div className="hidden md:block mt-32">  <FormComponent />

      </div>



      {/* Footer */}
      <div><Footer /></div>
      {/* model */}
      <div className="mt-[97px] md:hidden "><Model_Handel /></div>

      {/* Insurance Popup */}
    </div>
  )
}
