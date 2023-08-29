export const url_ngrok =  'http://localhost:1337/';

export const getAllOrders = async()=>{
    const response = await fetch(`${url_ngrok}api/orders`,{method:'GET'});
    const data = await response.json();
    const orders = data.data
    return orders;
}

export const getOrderById = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/orders/${id}`,{method:'GET'});
    const data = await response.json();
    const order = data.data
    return order;
}

export const createNewOrder = async (orderData:any,price:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/orders/`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          data: {
            name:orderData.name,
            phone:orderData.phone,
            email:orderData.email,
            comment:orderData.comment,
            delivery:orderData.delivery,
            pay:orderData.pay,
            price:String(price)
          },
        }),
      });
      const data = await response.json();
      const order = data.data
      return order;
    } catch (error) {
      console.log(error)
    }
  };
  export const payByCardOnlineFields = async (id: string,values:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/orders/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
           paid_online: true,
           card_number:values.number,
           card_date:values.date,
           card_code:values.code,
          },
        }),
      });
      const data = await response.json();
      const orderField = data.data
      return orderField;
    } catch (error) {
      console.log(error)
    }
  };
  export const deleteOrderById = async (id: string) => {
    try {
      const response = await fetch(`${url_ngrok}api/orders/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
    } catch (error) {
      console.log(error)
    }
  };

export const ordersApi = {getAllOrders,getOrderById, createNewOrder, deleteOrderById,payByCardOnlineFields}