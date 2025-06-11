import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Adres */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Meble4U</h2>
          <p className="text-sm leading-6">
            400 University Drive Suite 200<br />
            Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-md font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-md font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="termsConditions">Terms & Conditions</Link></li>
            <li><Link to="returnPolicy">Returns</Link></li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-md font-semibold mb-4">Newsletter</h3>
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Enter Your Email Address"
              className="text-sm"
            />
            <Button className="text-sm font-semibold">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="border-t py-4 text-sm text-center text-gray-500">
        © 2025 Meble4U. All rights reserved
      </div>
    </footer>
  )
}
