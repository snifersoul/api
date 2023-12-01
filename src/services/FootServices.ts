import axios from "axios"
export const CATEGORIES = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ];

export default{
   
    async getDeporte(){
        return await axios.get(`https://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=37c1bffdd0854f0fa1aade4f5dc47772`)
        .then(response =>{
            return response.data
        })
        
        .catch(error =>{
            console.log (error)
        })
    },
    async getTitulares(){
        return await axios.get(`https://newsapi.org/v2/top-headlines?country=co&apiKey=37c1bffdd0854f0fa1aade4f5dc47772`)
        .then(response =>{
            return response.data
        })
        
        .catch(error =>{
            console.log (error)
        })
    }
}

