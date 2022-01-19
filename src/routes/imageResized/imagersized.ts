import express from 'express'
import path from 'path'
import fs from 'fs'

import imagResized from '../../../utilities/resized'

const imagResizedRoute = express.Router()

imagResizedRoute.get('/',async (req: express.Request, res: express.Response):Promise <void> => {
  const imageNam = (req.query.imageNam);
  const width = Number(req.query.width);
  const hight = Number(req.query.hight);
  const img = path.join(__dirname, `./../../../image/${imageNam}.jpeg`);
  const resize = path.join(__dirname, `./../../../image/resizedImage/${imageNam}-${width}-${hight}.jpeg`);
  if (
    req.query.imageNam === undefined  || !fs.existsSync(img)){
     // console.log('from validation')
      res.status(400).send('this is invalid image');
   
    }
   else if(width <=0 || hight  <=0 || Number.isNaN(width) ||
     Number.isNaN(hight) ){
      console.log(' validation')
      res.status(400).send('this is inavalid Dimention ')
     } 
    else if(fs.existsSync(resize)){
     // console.log('from cash ')
      res.status(200).sendFile(resize)
     }
     else{
       const resort = await  imagResized(img, width, hight ,resize);
      if(resort === 'done'){
      //  console.log('done')
        res.status(200).sendFile(resize)
      }

         
     
     }
  
})   
  
    export default imagResizedRoute