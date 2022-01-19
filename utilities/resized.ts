
import sharp from 'sharp'




const imagResized = async (img:string, width:number, hight:number ,imagResized:string):Promise<string> => {
   
     
   try{
      await  sharp(img).resize({width:width ,height:hight})
       .toFile(imagResized);
       return 'done'
   }catch(error){
  // console.log(error)
   return 'image faild'
   }
  
    }
    export default imagResized