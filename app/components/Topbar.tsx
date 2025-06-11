import { Link } from "react-router";

import logo from "~/assets/topbar/logo.svg";
import CartSheet from "./CartSheet";

export default function Topbar() {

  return (
    <header className="h-[80px]">
      <nav className="flex h-full justify-between items-center px-4">
        <div><img src={logo} /></div>
        <ul className="flex gap-18">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div>
          <CartSheet />
        </div>
      </nav>
    </header>
  )
}