import "./CssFile/NavbarOne.css";

const NavbarOne = () => {
  return (
    <div className="navContainer pt-3">
      <div className="container">
        <div className="displayFlex navSubContainer">
          <div className="logo">
            <ul className="displayFlex items miniItems">
              <li className="listItem marcellus miniItemsIcon">User</li>
              <li className="listItem marcellus miniItemsIcon">Name</li>
            </ul>
          </div>
          <div className="links">
            <ul className="displayFlex gap-3">
              <li className="listItem marcellus miniItems">Home</li>
              <li className="listItem marcellus miniItems">About</li>
              <li className="listItem marcellus miniItems">Projects</li>
            </ul>
          </div>
          <div className="contactPage listItem miniItems">
            <button className="navBtn openSans">CONTACT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarOne;
