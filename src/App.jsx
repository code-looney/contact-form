import React, {useEffect, useState} from "react"

export default function App() {
const [generalActive, setGeneralActive] = useState("");
const [supportActive, setSupportActive] = useState("");
const [borderColorGeneral, setBorderColorGeneral] = useState("mdGray");
const [borderColorSupport, setBorderColorSupport] = useState("mdGray");
const [enquiry, setEnquiry] = useState(null);

const colors = ["bg-lightGreen", "border-mdGreen", "border-mdGray"];


useEffect(() => {
  fetch("data.json")
  .then(res => res.json())
  .then(data => {
   setEnquiry(data)
  })
}, [])

function handleActiveGeneralClick() {
  if (generalActive === "") {
    setGeneralActive("lightGreen");
    setSupportActive("");
    setBorderColorGeneral("mdGreen")
    setBorderColorSupport("mdGray")
  } return;
}


function handleActiveSupportClick () {
  if (supportActive === "") {
    setSupportActive("lightGreen");
    setGeneralActive("");
    setBorderColorSupport("mdGreen")
    setBorderColorGeneral("mdGray")
  } return;
}


  return (
    <section className="bg-lightGreen h-screen w-full grid place-content-center">
      <form className="h-auto w-auto md:w-[550px] bg-white p-6 flex flex-col gap-4 rounded-lg">
        <h1>Contact Us</h1>

        {/*form */}
        <div className="flex flex-col justify-center items-center w-full gap-6">

          {/*first name section */}
          <div className="flex flex-col md:flex-row w-full justify-center gap-3">
            <div className="flex flex-col w-full gap-2">
              <label className="text-darkGray" htmlFor="first-name">First Name <span className="text-mdGreen">*</span></label>
              <input id="first-name" className=" border-mdGray border focus:border-mdGreen focus:outline-none focus:bg-focuslightGreen rounded-md cursor-pointer" type="text" />
            </div>
            
            {/*last name section */}
            <div className="flex flex-col w-full gap-2">
              <label className="text-darkGray" htmlFor="last-name">Last Name <span className="text-mdGreen">*</span></label>
              <input className="border-mdGray border focus:border-mdGreen focus:outline-none focus:bg-focuslightGreen rounded-md cursor-pointer" type="text" />
            </div>
          </div>

          {/*email */}
          <div className="flex flex-col w-full gap-2">
              <label className="text-darkGray" htmlFor="email">Email Adress <span className="text-mdGreen">*</span></label>
              <input className="border-mdGray border focus:border-mdGreen focus:outline-none focus:bg-focuslightGreen rounded-md cursor-pointer" type="email" />
          </div>
          

          {/*query section */}
          <div className="flex flex-col w-full gap-2">
              <div className="flex w-full gap-3 flex-col md:flex-row">

              <div className="flex flex-col w-full gap-2">
              <label className="text-darkGray" htmlFor="query-type">Query Type <span className="text-mdGreen">* </span></label>
              
              <div className={`flex w-full gap-3 flex-col md:flex-row`}>
                    <label onClick={handleActiveGeneralClick} 
                    className={`cursor-pointer text-darkGray bg-${generalActive} gap-2 flex flex-row-reverse rounded-md px-4 py-1 justify-end w-full capitalize border border-${borderColorGeneral} cursor-pointer`} 
                    htmlFor="general-enquiry">
                      General Enquiry
                      <input className={`cursor-pointer accent-mdGreen`} type="radio" id="general-enquiry" name="query" />
                    </label>
                    <label onClick={handleActiveSupportClick} 
                    className={`cursor-pointer text-darkGray bg-${supportActive} gap-2 flex flex-row-reverse rounded-md px-4 py-1 justify-end w-full capitalize border border-${borderColorSupport} cursor-pointer`} 
                    htmlFor="support-request">
                      Support Request
                      <input className={`cursor-pointer accent-mdGreen `} type="radio" id="support-request" name="query" />
                    </label>
              </div>
          </div>

                {/* {enquiry && enquiry.map((item, index) => {
                 return (
                  <div key={item.id} className={`flex cursor-pointer border-2 border-black rounded-md w-full`}>
                    
                    <label className={`cursor-pointer gap-2 flex flex-row-reverse rounded-md px-4 py-1 justify-end w-full capitalize`} htmlFor={item.id}>
                      {item.name}
                      <input className={`cursor-pointer border-2 bg-black border-black`} type="radio" id={item.id} name="query" />
                    </label>
                  </div>
                 )
                })} */} {/* denk over een juiste algo om de quiry dynamisch te implementeren */}
              </div>
          </div>

          {/*message section */}
          <div className="flex flex-col w-full gap-2">
              <label className="text-darkGray" htmlFor="message">Message <span className="text-mdGreen">*</span></label>
              <textarea className="border border-mdGray w-full rounded-md resize-none focus:border-mdGreen focus:outline-none focus:bg-focuslightGreen cursor-pointer h-28 flex" type="text"></textarea>
          </div>

          {/* checkbox section */}
          <div className="flex flex-row-reverse gap-4 justify-end w-full">
            <label className="text-darkGray"  htmlFor="agreement">I consent to being contacted by the team</label>
            <input className="border-mdGray accent-mdGreen" type="checkbox" />
          </div>

          {/* submit section */}
          <div className="w-full">
            <button className="bg-mdGreen hover:bg-darkGreen round w-full py-2 rounded-md text-white">Submit</button>
          </div>

        </div>
      </form>
    </section>
  )
}