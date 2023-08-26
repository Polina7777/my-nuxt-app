export const url_ngrok =  'http://localhost:1337/';

export const getAllGiftCard = async()=>{
    const response = await fetch(`${url_ngrok}api/giftcards`,{method:'GET'});
    const data = await response.json();
    const giftcards = data.data
    return giftcards;
}
export const getAllGiftCardFromBasket = async()=>{
    const response = await fetch(`${url_ngrok}api/giftcards?filters[basket]=true`,{method:'GET'});
    const data = await response.json();
    const giftcards = data.data
    return giftcards;
}

export const getGiftCardById = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/giftcards/${id}`,{method:'GET'});
    const data = await response.json();
    const giftcard = data.data
    return giftcard;
}

export const createNewGiftCard = async (info:any) => {
  const newPrice = `${info.count * 500 }p.`
    try {
      const response = await fetch(`${url_ngrok}api/giftcards/`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          data: {
           basket_count:info.count,
           basket:true,
           price:newPrice,
           name:info.name.name,
           for:info.name.type,
           adress:info.adress.adress,
           adress_type:info.adress.type,
           giftcard_text:info.giftcard_text,
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };
  export const changeGiftCardCount = async (id: string,count:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/giftcards/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
           basket_count: count,
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };
  export const deleteGiftCardFromBasket = async (id: string) => {
    try {
      const response = await fetch(`${url_ngrok}api/giftcards/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        // body: JSON.stringify({
        //   data: {
        //     basket:false
        //   },
        // }),
      });
    } catch (error) {
      console.log(error)
    }
  };

export const giftcardApi = {getAllGiftCard,getAllGiftCardFromBasket, getGiftCardById, createNewGiftCard, changeGiftCardCount, deleteGiftCardFromBasket}