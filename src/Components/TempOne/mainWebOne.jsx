import HomeOne from './CompoOne/HomeOne'
import NavbarOne from './CompoOne/NavbarOne'
import AboutOne from './CompoOne/AboutOne'
import ContactOne from './CompoOne/ContactOne'
import ProjectOne from './CompoOne/ProjectOne'

const mainWebOne = () => {
  return (
    <>
      <NavbarOne />
      <div id="home"><HomeOne /></div>
      <div id="about"><AboutOne /></div>
      <div id="projects"><ProjectOne /></div>
      <div id="contact"><ContactOne /></div>
    </>
  )
}

export default mainWebOne