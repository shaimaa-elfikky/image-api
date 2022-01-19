import supertest from 'supertest'
import app from '../index'
import imagResized from '../../utilities/resized'
import path from 'path'



// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('test Sucsess', async (done): Promise<void> => {
   const response: supertest.Response = await request.get('/api/images?imageNam=thump&width=400&hight=200')
    expect(response.status).toBe(400)
    done()
  })

  // it('test failed', async () => {
  //   const response = await request.get('/api/images?imageNam=picture&width=200&hight=200')
  //   expect(response.status).toBe(400)
  // })
 
     
  it('Invalid Output Path throws error', async () => {
    const resize = path.join(__dirname, `./../../image/resizedImage/thump-200-200.jpeg`)
    const img = path.join(__dirname, `./../../image/thump.jpeg`)
    const result = await imagResized (img, 0, 0 ,resize)
    expect(result).toBe('image faild');
  })
})
