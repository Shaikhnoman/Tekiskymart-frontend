// import { useLocation, useNavigate } from "react-router-dom";

// const OrderSummaryPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { cart, subtotal, totalAmount, form } = location.state || {};

//   const deliveryCharge = subtotal >= 500 ? 0 : 30;
//   const savedAmount = 950; // Example saved amount

//   return (
//     <div className="max-w-5xl mx-auto p-4 flex gap-8">
//       {/* Left: Customer Details */}
//       <div className="w-1/2 border p-4 rounded">
//         <h1 className="text-2xl font-bold mb-4">Shipping Cart</h1>
//         <p><strong>Name:</strong> {form.name}</p>
//         <p><strong>WhatsApp Number:</strong> {form.whatsapp}</p>
//         <p><strong>Phone Number:</strong> {form.phone}</p>
//         <p><strong>Landmark:</strong> {form.landmark}</p>
//         <p><strong>Pin Code:</strong> {form.pincode}</p>
//         <p><strong>Address Details:</strong> {form.address}</p>
//         <div className="flex justify-between mt-4">
//           <button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={() => navigate(-1)}>Back</button>
//           <button className="bg-green-600 text-white py-2 px-4 rounded">Submit</button>
//         </div>
//       </div>

//       {/* Right: Cart Summary */}
//       <div className="w-1/2 border p-4 rounded">
//         <h2 className="text-xl font-bold">Cart Total</h2>
//         <p className="text-lg">Subtotal: <strong>₹{subtotal}</strong></p>
//         <h3 className="text-lg font-semibold mt-2">Shipping</h3>
//         <p className="text-blue-600">
//           Delivery Charge {deliveryCharge > 0 ? `30 Rupees Below 500₹` : `Free Delivery Above 500₹`}
//         </p>
//         <p className="text-green-600 font-semibold">Saved Amount: <strong>₹{savedAmount}</strong></p>
//         <p className="text-lg"><strong>Delivery Charge:</strong> ₹{deliveryCharge}</p>
//         <hr className="my-2" />
//         <p className="text-xl font-bold">Order Total: ₹{totalAmount}</p>
//         <h3 className="text-lg font-semibold mt-2">Pay On Delivery</h3>
//         <p className="text-sm">As of now, we deliver only in Nanded and nearby areas.</p>
//       </div>
//     </div>
//   );
// };

// export default OrderSummaryPage;
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OrderSummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, subtotal, totalAmount, form } = location.state || {};

  const deliveryCharge = subtotal >= 500 ? 0 : 30;
  const savedAmount = 950; // Example saved amount

  const handleOrderSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "Order Successful",
      html: `
        <p>Your Order Id: <strong>TekiskyMart:10001</strong></p>
        <p>Your Order Has Been Placed Successfully</p>
        <p>Our Team Will Contact You Shortly.</p>
      `,
      confirmButtonText: "Okay",
      confirmButtonColor: "#6b46c1",
    }).then(() => {
      navigate("/"); // Redirect to home after clicking "Okay"
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 flex gap-8">
      {/* Left: Customer Details */}
      <div className="w-1/2 border p-4 rounded">
        <h1 className="text-2xl font-bold mb-4">Shipping Cart</h1>
        <p><strong>Name:</strong> {form.name}</p>
        <p><strong>WhatsApp Number:</strong> {form.whatsapp}</p>
        <p><strong>Phone Number:</strong> {form.phone}</p>
        <p><strong>Landmark:</strong> {form.landmark}</p>
        <p><strong>Pin Code:</strong> {form.pincode}</p>
        <p><strong>Address Details:</strong> {form.address}</p>
        <div className="flex justify-between mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={() => navigate(-1)}>Back</button>
          <button className="bg-green-600 text-white py-2 px-4 rounded" onClick={handleOrderSubmit}>
            Submit
          </button>
        </div>
      </div>

      {/* Right: Cart Summary */}
      <div className="w-1/2 border p-4 rounded">
        <h2 className="text-xl font-bold">Cart Total</h2>
        <p className="text-lg">Subtotal: <strong>₹{subtotal}</strong></p>
        <h3 className="text-lg font-semibold mt-2">Shipping</h3>
        <p className="text-blue-600">
          Delivery Charge {deliveryCharge > 0 ? `30 Rupees Below 500₹` : `Free Delivery Above 500₹`}
        </p>
        <p className="text-green-600 font-semibold">Saved Amount: <strong>₹{savedAmount}</strong></p>
        <p className="text-lg"><strong>Delivery Charge:</strong> ₹{deliveryCharge}</p>
        <hr className="my-2" />
        <p className="text-xl font-bold">Order Total: ₹{totalAmount}</p>
        <h3 className="text-lg font-semibold mt-2">Pay On Delivery</h3>
        <p className="text-sm">As of now, we deliver only in Nanded and nearby areas.</p>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
