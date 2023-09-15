export const url_ngrok =  'http://localhost:1337/';

export const getUsers = async () => {
  const response = await fetch(`${url_ngrok}api/users?populate=*`, {
    method: "GET",
  });
  const data = await response.json();
  const users = data;
  return users;
};
export const getUsersById = async (id: string) => {
  const response = await fetch(`${url_ngrok}api/users/${id}?populate=*`, {
    method: "GET",
  });
  const data = await response.json();
  const user = data;
  return user;
};
export const setFavoritesCollectionForUser = async (id: string, collection: any,token: any) => {
  const collectionId = String(collection.id);
    console.log(token,'token')
    const response = await fetch(`${url_ngrok}api/users/${id}`, {
      headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      },
      method: "PUT",
      body: JSON.stringify({
        data: {
          favorite: {
            connect: [collectionId],
          },
        },
      }),
    });
    const data = await response.json();
    if(data.error){
      return data.error
    }
    return data
};
export const setGiftCardCollectionForUser = async (id: string, collection: any,token: any) => {
  const collectionId = String(collection.id);
    console.log(token,'token')
    const response = await fetch(`${url_ngrok}api/users/${id}`, {
      headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      },
      method: "PUT",
      body: JSON.stringify({
        data: {
          giftcard: {
            connect: [collectionId],
          },
        },
      }),
    });
    const data = await response.json();
    if(data.error){
      return data.error
    }
    return data
};
export const setOrderCollectionForUser = async (id: string, collection: any,token: any) => {
  const collectionId = String(collection.id);
    console.log(token,'token')
    const response = await fetch(`${url_ngrok}api/users/${id}`, {
      headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      },
      method: "PUT",
      body: JSON.stringify({
        data: {
          order: {
            connect: [collectionId],
          },
        },
      }),
    });
    const data = await response.json();
    if(data.error){
      return data.error
    }
    return data
};
export const setBasketCollectionForUser = async (id: string, collection: any,token: any) => {
  const collectionId = String(collection.id);
    console.log(token,'token')
    const response = await fetch(`${url_ngrok}api/users/${id}`, {
      headers:{
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      },
      method: "PUT",
      body: JSON.stringify({
        data: {
          basket: {
            connect: [collectionId],
          },
        },
      }),
    });
    const data = await response.json();
    if(data.error){
      return data.error
    }
    return data
};

export const registerUser = async (name: any,surname: any,email: any,password: any,collectionFavId:any,collectionBasketId:any,collectionGiftCardId:any,collectionOrderId:any) => {
  const username = `${name} ${surname}`
  const response = await fetch(`${url_ngrok}api/auth/local/register`, {
    headers:{
           "Content-Type": "application/json",
             },
    method: "POST",
    body: JSON.stringify({
                name:name,
                surname:surname,
                username:username,
                email:email,
                password:password,
                favorite: collectionFavId,
                basket:collectionBasketId,
                giftcard_collection:collectionGiftCardId,
                order_collection:collectionOrderId
            }),
  });
  const data = await response.json();
  const user = data;
  return user;
};

export const changeUserData = async (id:string,field:string,info:string) => {
const  dynamicFieldName = `${field}`
  const requestData = {
  [dynamicFieldName]:info
  }
  const response = await fetch(`${url_ngrok}api/users/${id}`, {
    headers:{
           "Content-Type": "application/json",
             },
    method: "PUT",
    body: JSON.stringify(requestData),
  });
  const data = await response.json();
  const changedData = data;
  return changedData;
};
export const loginUser = async (email: any,password: any) => {
  const response = await fetch(`${url_ngrok}api/auth/local`, {
    headers:{
           "Content-Type": "application/json",
             },
    method: "POST",
    body: JSON.stringify({
      identifier: email,
        password: password
            }),
           
  });
  const data = await response.json();
  return data;
};
export const userBearer = async (jwt: any,user: { id: any; })=>{
 const response = await fetch(`${url_ngrok}api/users/${user.id}?populate=*`, {
    headers:{
           "Content-Type": "application/json",
           "Authorization": `Bearer ${jwt}`,
             },
    method: "POST",

  });
  const data = await response.json();

  return data;
}

export const userApi = { getUsers,changeUserData, getUsersById,setFavoritesCollectionForUser ,registerUser,loginUser,userBearer};