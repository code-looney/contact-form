import React, {useEffect, useState} from "react"

export default function App() {
const [focusAactiveQuery, setFocusAactiveQuery] = useState("");
const [enquiry, setEnquiry] = useState(null);

const colors = ["bg-lightGreen"];


useEffect(() => {
  fetch("data.json")
  .then(res => res.json())
  .then(data => {
   setEnquiry(data)
  })
}, [])


function handleFocusActiveClick() {
  if (focusAactiveQuery === "") {
    setFocusAactiveQuery("lightGreen");
  } else {
    setFocusAactiveQuery("");
  }
}

  return (
    <section className="bg-lightGreen h-screen w-full grid place-content-center">
      <form className="h-auto w-auto md:w-[550px] bg-white p-6 flex flex-col gap-4  rounded-lg">
        <h1>Contact Us</h1>

        {/*form */}
        <div className="flex flex-col justify-center items-center w-full gap-6">

          {/*first name section */}
          <div className="flex flex-col md:flex-row w-full justify-center gap-3">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="first-name">First Name <span>*</span></label>
              <input id="first-name" className="border-2 border-black rounded-md" type="text" />
            </div>
            
            {/*last name section */}
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="last-name">Last Name <span>*</span></label>
              <input className="border-2 rounded-md gap-3 border-black" type="text" />
            </div>
          </div>

          {/*email */}
          <div className="flex flex-col w-full gap-2">
              <label htmlFor="email">Email<span>*</span></label>
              <input className="border-2 w-full rounded-md border-black" type="email" />
          </div>
          {/*query section */}
          <div className="flex flex-col w-full gap-2">
              <label htmlFor="query-type">Query Type <span>* </span></label>
              <div className="flex w-full gap-3 flex-col md:flex-row">
                {/* <div className={`flex cursor-pointer border-2 border-black bg-${focusAactiveQuery} rounded-md w-full`}>
                  <label className="cursor-pointer gap-2 flex flex-row-reverse rounded-md px-4 py-1 outline justify-end w-full" htmlFor="general-enquiry">General Enquiry
                  <button onClick={handleFocusActiveClick}><input className="cursor-pointer border-2 bg-black border-black" type="radio" id="general-enquiry" name="query" /></button>
                  </label>
                </div>
                <div className={`flex cursor-pointer border-2 border-black bg-${focusAactiveQuery} rounded-md w-full`}>
                  <label className="cursor-pointer gap-2 flex outline px-4 py-1 rounded-md  flex-row-reverse justify-end w-full" htmlFor="support-request">Support Request
                  <button onClick={handleFocusActiveClick}><input className="cursor-pointer border-2 bg-black border-black" type="radio" id="support-request" name="query" /></button>
                  </label>
                </div> */}

                {enquiry && enquiry.map(item => {
                 return (
                  <div className={`flex cursor-pointer border-2 border-black bg-${focusAactiveQuery} rounded-md w-full`}>
                    <label className="cursor-pointer gap-2 flex flex-row-reverse rounded-md px-4 py-1 outline justify-end w-full capitalize" htmlFor="general-enquiry">{item.name}
                      <button onClick={handleFocusActiveClick}><input className="cursor-pointer border-2 bg-black border-black" type="radio" id="general-enquiry" name="query" /></button>
                    </label>
                  </div>
                 )
                })}
              </div>
          </div>

          {/*message section */}
          <div className="flex flex-col w-full gap-2">
              <label htmlFor="message">Message<span>*</span></label>
              <textarea className="border-2 w-full rounded-md resize-none border-black h-28 flex" type="text"></textarea>
          </div>

          {/* checkbox section */}
          <div className="flex flex-row-reverse gap-4 justify-end w-full">
            <label htmlFor="agreement">I consent to being contacted by the team</label>
            <input type="checkbox" />
          </div>

          {/* submit section */}
          <div className="w-full">
            <button className="bg-mdGreen round w-full py-2 rounded-md text-white">Submit</button>
          </div>

        </div>
      </form>
    </section>
  )
}