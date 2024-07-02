import React, {useEffect, useState, useRef} from "react"

export default function App() {
const [generalActive, setGeneralActive] = useState("");
const [supportActive, setSupportActive] = useState("");
const [borderColorGeneral, setBorderColorGeneral] = useState("mdGray");
const [borderColorSupport, setBorderColorSupport] = useState("mdGray");
const [enquiry, setEnquiry] = useState("");
const [validationEnquiry, setvalidationEnquiry] = useState("");
const [validationFirstName, setvalidationFirstName] = useState("");
const [validationLastName, setvalidationLastName] = useState("");
const [validationEmail, setvalidationEmail] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
// const inputRef1 = useRef(null);
// const inputRef2= useRef(null);
const [isChecked, setIsChecked] = useState(null);


const colors = ["bg-lightGreen", "border-mdGreen", "border-mdGray"];



useEffect(() => {
  fetch("data.json")
  .then(res => res.json())
  .then(data => {
   setEnquiry(data)
  })
}, [])

// useEffect(() => {

//     inputRef1.current.focus()
//     inputRef2.current.focus()

// }, [])


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

function handleFormSubmit(e) {
  e.preventDefault()
  if (!firstName) {
    setvalidationFirstName("This field is required")
  } else {
    setvalidationFirstName("")
  }

  if (!lastName) {
    setvalidationLastName("This field is required")
  } else {
    setvalidationLastName("")
  }
  
  if (!email.includes('@')) {
    setvalidationEmail("Please enter a valid email address")
  } else {
    setvalidationEmail("")
  }
  
  if (!enquiry) {
    setvalidationEnquiry("Please select a query type")
  } else if (enquiry){
    setIsChecked(true)
    setvalidationEnquiry("")
  } 


  
}
console.log(isChecked)

  return (
    <section className="bg-lightGreen h-screen grid place-content-center">
      <form onSubmit={handleFormSubmit} className="h-auto w-auto md:w-[550px] bg-white p-6 flex flex-col gap-4 rounded-lg">
        <h1 className="text-black text-[18px] md:text-[21px] font-medium">Contact Us</h1>

        {/*form */}
        <div className="flex flex-col justify-center items-center w-full gap-3">

          {/*first name section */}
          <div className="flex flex-col md:flex-row w-full justify-center gap-3">
            <div className="flex flex-col w-full gap-2">
              <label className="text-darkGray text-[12px]" htmlFor="first-name">First Name <span className="text-mdGreen">*</span></label>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} id="first-name" className=" border-mdGray border focus:border-mdGreen hover:border-mdGreen  focus:outline-none focus:bg-focuslightGreen rounded-md cursor-pointer" type="text" />
              <span className="text-[10px] text-red-600">{validationFirstName}</span>
            </div>
            
            {/*last name section */}
            <div className="flex flex-col w-full gap-2">
              <label className="text-darkGray text-[12px]" htmlFor="last-name">Last Name <span className="text-mdGreen">*</span></label>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="border-mdGray border focus:border-mdGreen hover:border-mdGreen  focus:outline-none focus:bg-focuslightGreen rounded-md cursor-pointer" type="text" />
              <span className="text-[10px] text-red-600">{validationLastName}</span>

            </div>
          </div>

          {/*email */}
          <div className="flex flex-col w-full gap-2">
              <label className="text-darkGray text-[12px]" htmlFor="email">Email Adress <span className="text-mdGreen">*</span></label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="border-mdGray border focus:border-mdGreen hover:border-mdGreen  focus:outline-none focus:bg-focuslightGreen rounded-md cursor-pointer" type="text" />
              <span className="text-[10px] text-red-600">{validationEmail}</span>
          </div>
          

          {/*query section */}
          <div className="flex flex-col w-full gap-2">
              <div className="flex w-full gap-3 flex-col md:flex-row">

              <div className="flex flex-col w-full gap-2">
              <label className="text-darkGray text-[12px]" htmlFor="query-type">Query Type <span className="text-mdGreen">* </span></label>
              
              <div className={`flex w-full gap-3 flex-col md:flex-row`}>
                    <label onClick={handleActiveGeneralClick} 
                    className={`cursor-pointer text-[12px] text-darkGray bg-${generalActive} gap-2 flex flex-row-reverse rounded-md px-4 py-1 justify-end w-full capitalize border border-${borderColorGeneral} cursor-pointer`} 
                    htmlFor="general-enquiry">
                      {/* zorg ervoor dat de validatie beericht verdwijnt wanneer je een radio selecteert */}
                      General Enquiry
                      <input checked={isChecked} value={enquiry} onChange={(e) => setEnquiry(e.target.value)} className={`cursor-pointer accent-mdGreen`} type="radio" id="general-enquiry" name="query" />
                    </label>
                    <label onClick={handleActiveSupportClick} 
                    className={`cursor-pointer text-[12px] text-darkGray bg-${supportActive} gap-2 flex flex-row-reverse rounded-md px-4 py-1 justify-end w-full capitalize border border-${borderColorSupport} cursor-pointer`} 
                    htmlFor="support-request">
                      Support Request
                      <input value={enquiry} onChange={(e) => setEnquiry(e.target.value)} className={`cursor-pointer accent-mdGreen `} type="radio" id="support-request" name="query" />
                    </label>
              </div>
                    <span className="text-[10px] text-red-600">{validationEnquiry}</span>
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
              <label className="text-darkGray text-[12px]" htmlFor="message">Message <span className="text-mdGreen">*</span></label>
              <textarea className="border border-mdGray w-full rounded-md resize-none focus:border-mdGreen focus:outline-none focus:bg-focuslightGreen cursor-pointer h-28 flex" type="text"></textarea>
              <span className="text-[10px] text-red-600">This field is required</span>
          </div>

          {/* checkbox section */}
          <div className="flex flex-col gap-2 md:justify-start md:w-full md:mt-4 m-0">
            <div className="flex flex-row-reverse gap-4 justify-end w-full">
              <label className="text-darkGray text-[12px]"  htmlFor="agreement">I consent to being contacted by <br className="block md:hidden" /> the team</label>
              <input className="border-mdGray accent-mdGreen" type="checkbox" />
            </div>
              <span className="text-[10px] text-red-600">To submit this form, please consent to being contacted</span>
          </div>

          {/* submit section */}
          <div className="w-full mt-3">
            <button className="bg-mdGreen hover:bg-darkGreen round w-full py-2 rounded-md text-white">Submit</button>
          </div>

        </div>
      </form>
    </section>
  )
}