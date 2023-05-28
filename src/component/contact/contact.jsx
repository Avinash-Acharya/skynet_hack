import "./contact.css"
// import {LocalPhone , Email , LocationOn , Chat} from "@mui/icons-material"


export default function contact() {
  return (
    <div className="container">
      <div className="phoneClass">
        {/* <img src="/assets/call_white_24dp.svg" alt="" className="phoneImg"/> */}
        <span className="phone">- (939) 984-3533</span>
      </div>
      <div className="emailClass">
        {/* <img src="/assets/email_white_24dp.svg" alt="" className="emailImg" /> */}
        <span className="email">- skynytuni@gmail.com</span>
      </div>
      <div className="locationClass">
        {/* <img src="/assets/location_on_white_24dp.svg" alt="" className="locationImg"/> */}
        <span className="location">- 123 Street, New York, USA</span>
      </div>
      <div className="chatClass">
          {/* <img src="/assets/1-1.svg" alt="" className="chatImg" /> */}
          <span className="chat">- Slack link (demo link)</span>
      </div>
    </div>

  )
}
