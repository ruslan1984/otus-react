import Header from "./Header";
import NavBar from "./NavBar";

const leftMenuStyle = {
  width: "300px"
};
const page = {
  display:"flex"
};
const pageStyle= {
  padding: "0 20px",
}

const Layout = props => (
  <div>
    <Header />
    <div style={page}>
      <div style={leftMenuStyle}>
      <NavBar />
      </div>
      <div style={pageStyle}>
        {props.children}
      </div>
    </div>
  </div>
);

export default Layout;