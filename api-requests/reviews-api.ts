export const url_ngrok =  'http://localhost:1337/';

export const getAllReviewCollections = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/review-collections?locale=${locale}`,{method:'GET'});
    const data = await response.json();
    const reviews = data.data
    return reviews;
}
export const getReviewCollectionByProductId = async(productId:any,locale:any)=>{
    const response = await fetch(`${url_ngrok}api/review-collections?populate=*&locale=${locale}&filters[product_id][$eq]=${productId}`,{method:'GET'});
    const data = await response.json();
    const reviews = data.data[0].attributes
    // console.log(reviews)
    return reviews;
}
  export const getAllReviewCollectionById = async(id:string,locale:any)=>{
      // const response = await fetch(`${url_ngrok}api/products/${id}?locale=${locale}`,{method:'GET'});
      if(locale === 'ru'){
        const response = await fetch(`${url_ngrok}api/review-collections/${id}`,{method:'GET'});
        const data = await response.json();
        const review = data.data
        console.log(review)
        return review;
      }else{
        const response = await fetch(`${url_ngrok}api/review-collections/${id}?populate=localizations`,{method:'GET'});
        const data = await response.json();
        const review = data.data.attributes.localizations.data;
        console.log(review)
        return review[0];
      }
  }
  export const createNewReview = async (username:any,review_text:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/reviews/`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          data: {
            username:username,
            review_text:review_text,
          },
        }),
      });
      const data = await response.json();
      const review = data.data
      return review;
    } catch (error) {
      console.log(error)
    }
  };
  export const setReview = async (id: string, review: any) => {
    const reviewId = review.id;
    try {
      const response = await fetch(`${url_ngrok}api/products/${id}`, {
        headers:{
        "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
           reviews: {
              connect: [reviewId],
            },
          },
        }),
      });
      const response2 = await fetch(`${url_ngrok}api/reviews/${reviewId}`, {
        headers:{
        "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
          product: {
              connect: [id],
            },
          },
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  export const setReviewToUser = async (id: string, userId: any,token:any) => {
    // const reviewId = review.id;
    try {
      const response = await fetch(`${url_ngrok}api/reviews/${id}`, {
        headers:{
        "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            users_permissions_user: {
              connect: [userId],
            },
          },
        }),
      });
      console.log(await response.json())
      const response2 = await fetch(`${url_ngrok}api/users/${userId}`, {
        headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            reviews: {
              connect: [id],
            },
          },
        }),
      });
      console.log(await response2.json())
    } catch (error) {
      console.log(error);
    }
  };

  export const reviewApi = {getAllReviewCollections,getAllReviewCollectionById,getReviewCollectionByProductId,createNewReview,setReview,setReviewToUser}