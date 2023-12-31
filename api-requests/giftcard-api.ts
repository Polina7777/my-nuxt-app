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
export const createGiftCardCollection = async () => {
  const response = await fetch(`${url_ngrok}api/giftcard-collections`, {
    headers:{
      "Content-Type": "application/json",
      },
    method: "POST",
    body: JSON.stringify({
      data: {
        giftcards: {
        },
      },
    }),
  });
  const data = await response.json();
  const collection = data.data
 return collection
};


export const setGiftCardToCollection = async (id: string, giftcard: any) => {
  const giftcardId = giftcard.id;
  console.log(giftcardId)
  try {
    const response = await fetch(`${url_ngrok}api/giftcard-collections/${id}`, {
      headers:{
      "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        data: { 
          giftcards: {
            connect: [giftcardId],
          },
        },
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBasketGiftCards = async (id: string) => {
  const response = await fetch(`${url_ngrok}api/baskets/${id}?populate=*`, {
    method: "GET",
  });
  const data = await response.json();
  const basketProducts = data.data.attributes.products.data;
  return basketProducts;
};
export const createBasketCollection = async () => {
  const response = await fetch(`${url_ngrok}api/baskets`, {
    headers:{
      "Content-Type": "application/json",
      },
    method: "POST",
    body: JSON.stringify({
      data: {
        products: {
        },
      },
    }),
  });
  const data = await response.json();
  const collection = data.data
 return collection
};

export const setBasketGiftCard = async (id: string, giftcard: any) => {
  const giftcardId = String(giftcard.id);
  try {
    const response = await fetch(`${url_ngrok}api/baskets/${id}`, {
      headers:{
      "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        data: {
          // products: {
          //   connect: [giftcardId],
          // },
          giftcards: {
            connect: [giftcardId],
          },
        },
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
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
      const data = await response.json();
      const giftcard = data.data;
     return giftcard;
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
      });
    } catch (error) {
      console.log(error)
    }
  };

export const giftcardApi = {getAllGiftCard,getBasketGiftCards,setGiftCardToCollection,setBasketGiftCard,createGiftCardCollection,getAllGiftCardFromBasket, getGiftCardById, createNewGiftCard, changeGiftCardCount, deleteGiftCardFromBasket}