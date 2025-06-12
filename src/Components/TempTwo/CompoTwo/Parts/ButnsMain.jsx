import { Link } from 'react-router-dom'
const ButnsMain = () => {
  return (
    <div>
         <div className="btns">
              <Link to="/Second/hireme"><button className="hireme">Hire Me</button></Link>
              <Link to="/Second/contact"><button className="contactme">Contact Me</button></Link>
            </div>
    </div>
  )
}

export default ButnsMain