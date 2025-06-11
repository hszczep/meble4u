import { X } from "lucide-react"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "~/components/ui/sheet"
import { Button } from "~/components/ui/button"
import { useCartStore } from "~/store/useCartStore";

export default function CartSheet() {
  const { items, removeFromCart } = useCartStore();
  const total = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\D/g, ""))
    return sum + price * item.quantity
  }, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">🛒 Cart ({items.length})</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[360px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4 overflow-y-auto max-h-[60vh] pr-1">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 items-center border-b pb-3">
              <img alt={`${item.name}-${item.id}`} src={item.image} className="w-16 h-16 rounded-md object-cover" />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.quantity} × <span className="text-yellow-700">{item.price}</span>
                </p>
              </div>
              <Button
                onClick={() => removeFromCart(item.id)}
                size="icon"
                variant="ghost"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 mt-4 text-right text-sm">
          Subtotal: <span className="font-bold text-primary">Rp {total.toLocaleString("id-ID")}</span>
        </div>

        <SheetFooter className="mt-4 space-y-2">
          <Button className="w-full">Go to Cart</Button>
          <Button variant="outline" className="w-full">Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
