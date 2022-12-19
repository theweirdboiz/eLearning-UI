import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

function PaypalBtn({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const handleApprove = (orderID) => {
    //call backend to fulfill order ( điền data vô database)
    // nếu call thành công ko lỗi thì chuyển hướng qua trang thanh toán thành công
    setPaidFor(true);
  };
  if (paidFor) {
    alert("payment successfull");
  }
  return (
    <PayPalButtons
      style={{ layout: "horizontal" }}
      //tạo hóa đơn
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      //nếu thanh toán thành công thì sẽ chạy đoạn này
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
        handleApprove(data.orderID);
      }}
      onError={(err) => {
        console.log(err);
      }}
    ></PayPalButtons>
  );
}

export default PaypalBtn;
