import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShoppingCartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Show Peace Cycle",
      price: 249,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
  ]);

  const deliveryCharge = 30;
  const totalSaved = 350;

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalAmount = subtotal + deliveryCharge;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center p-4 mb-4 shadow-md border rounded-lg">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
              <div className="flex-1 ml-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-lg font-bold">₹{item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, -1)}>
                    <Minus size={16} />
                  </Button>
                  <span className="mx-2 text-lg">{item.quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, 1)}>
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
              <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
                <X size={20} />
              </Button>
            </div>
          ))}
          <div className="mt-4 p-4 border-t">
            <p className="text-lg">Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p className="text-lg">Delivery Charge: ₹{deliveryCharge}</p>
            <p className="text-lg text-blue-600 font-semibold">Total Amount Saved: ₹{totalSaved}</p>
            <p className="text-xl font-bold">Total Amount: ₹{totalAmount.toFixed(2)}</p>
            <Button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">
              Check Out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
