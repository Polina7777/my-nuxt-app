export const url_ngrok =  'http://localhost:1337/';
export const changeAdressData = async (id:string,field:string,info:string) => {
    const  dynamicFieldName = `${field}`
      const requestData = {
        data:{
      [dynamicFieldName]:info
        }
      }
      const response = await fetch(`${url_ngrok}api/adresses/${id}`, {
        headers:{
               "Content-Type": "application/json",
                 },
        method: "PUT",
        body: JSON.stringify(requestData)
      });
      const data = await response.json();
      const changedData = data;
      return changedData;
    };
    export const adressesApi = {changeAdressData};