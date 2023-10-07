export const url_ngrok =  'http://localhost:1337/';
 
export const setReviewImage = async (reviewId:any,file:any,token:any) => {
    const formData = new FormData();
    formData.append("files", file);
    formData.append("ref", "api::review.review"); 
       formData.append("refId", reviewId);
       formData.append("field", "image"); 
   let result = await fetch("http://localhost:1337/api/upload/", {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer:${token}`,
        },
        method: "POST",
       body: formData
        // timeout: 30000,
      }).then((response) => response.json());
      return result;
    }

    export const createAvatarImage = async (file:any,token:any,avatarCollectionId:any) => {
        const formData = new FormData();
        formData.append("files", file);
        // formData.append("ref", "api::avatar"); 
        formData.append("ref", "api::avatar-collection.avatar-collection"); 
           formData.append("refId",avatarCollectionId);
           formData.append("field", "avatar"); 
        let result = await fetch("http://localhost:1337/api/upload/", {
             headers: {
               // "Content-Type": "multipart/form-data",
               Authorization: `Bearer:${token}`,
             },
             method: "POST",
            body: formData
             // timeout: 30000,
           }).then((response) => response.json());
           return result;
         }

    export const createUserAvatarCollection = async () => {
        const response = await fetch(`${url_ngrok}api/avatar-collections`, {
          headers:{
            "Content-Type": "application/json",
            },
          method: "POST",
          body: JSON.stringify({
            data: {
              avatar: {
              },
            },
          }),
        });
        const data = await response.json();
        const collection = data.data
       return collection
      };


    export const setAvatarToUserAvatarCollection = async (id: string, avatarId: any) => {
        console.log(id,avatarId)
        try {
          const response = await fetch(`${url_ngrok}api/avatar-collections/${id}`, {
            headers:{
            "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify({
              data: {
               avatars: {
                  connect: [avatarId],
                },
              },
            }),
          }).then((response) => response.json());
          return response;

        } catch (error) {
          console.log(error);
        }
      };

      export const getAvatarCollectionById = async(id:string,locale:any)=>{
        // const response = await fetch(`${url_ngrok}api/products/${id}?locale=${locale}`,{method:'GET'});
        if(locale === 'ru'){
          const response = await fetch(`${url_ngrok}api/avatar-collections/${id}?populate=*`,{method:'GET'});
          const data = await response.json();
          const collection = data.data
        //   console.log(collection)
          return collection;
        }else{
          const response = await fetch(`${url_ngrok}api/avatar-collections/${id}?populate=*`,{method:'GET'});
          const data = await response.json();
          const collection = data.data.attributes.localizations.data;
          return collection[0];
        }
    }


export const mediaApi = {setReviewImage,createAvatarImage,createUserAvatarCollection,setAvatarToUserAvatarCollection,getAvatarCollectionById};