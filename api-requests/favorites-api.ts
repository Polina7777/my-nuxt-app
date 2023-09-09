export const url_ngrok =  'http://localhost:1337/';


export const getFavorites = async (id: string) => {
    const response = await fetch(`${url_ngrok}api/favorites/${id}?populate=*`, {
      method: "GET",
    });
    const data = await response.json();
    const favorites = data.data.attributes.products.data;
    return favorites;
  };
  export const createFavoritesCollection = async () => {
    const response = await fetch(`${url_ngrok}api/favorites`, {
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
  
  export const setFavorite = async (id: string, fav: any) => {
    const favId = String(fav.id);
    try {
      const response = await fetch(`${url_ngrok}api/favorites/${id}`, {
        headers:{
        "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            products: {
              connect: [favId],
            },
          },
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteFavorite = async (id: string, fav:any) => {
    const favId = String(fav.id);
    try {
      const response = await fetch(`${url_ngrok}api/favorites/${id}?populate=*`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            products: {
              disconnect: [favId],
            },
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };
  
  export const favoritesApi = { getFavorites, setFavorite, deleteFavorite,createFavoritesCollection };