const axios = require("axios");




export const fetchData=async(options)=>{





try {
   const res= await axios.request(options)
   console.log('res',res);
        return res.data
    
} catch (error) {
   
        console.error(error);
    
    
}




}