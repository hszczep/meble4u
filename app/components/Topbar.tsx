import { Link } from "react-router";

import logo from "~/assets/topbar/logo.svg";
import CartSheet from "./CartSheet";

export default function Topbar() {

  return (
    <header className="h-[80px]">
      <nav className="flex h-full justify-between items-center px-4">
        <div><img alt="Brak opisu." width={100} height={80} src="https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/494690452_2381749479014038_5998468392734365456_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=9f807c&amp;_nc_ohc=IEi7ff24NKkQ7kNvwELyn7V&amp;_nc_oc=Adlrrv49A72-TxRym1oBmyaq9jTmpjtrpjJErWhbyxgqSubie9Jtj_Z3-Qg0GHggSFQ&amp;_nc_zt=23&amp;_nc_ht=scontent-waw2-2.xx&amp;oh=03_Q7cD2gHkwvbxuwBHY7dKrOpzcnhL08kbflLEhVuUPl-WD6fhJA&amp;oe=68721401"/></div>
        <ul className="flex gap-4 md:gap-16">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li className="hidden md:block"><Link to="/about">About</Link></li>
          <li className="hidden md:block"><Link to="/Contact">Contact</Link></li>
        </ul>
        <div>
          <CartSheet />
        </div>
      </nav>
    </header>
  )
}