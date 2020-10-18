import Link from 'next/link';
const menuStyle= {
  background:"#eeeeee",
  padding: "10px"
}
const NavBar = () => (
  <div style={menuStyle}>
     <ul>
       <li>
         <Link href="/grammar">
           <a>Грамматика</a>
         </Link>
       </li>
       <li>
         <Link href="/orphography">
           <a>Орфография</a>
         </Link>
       </li>
     </ul>
  </div>
);

export default NavBar;