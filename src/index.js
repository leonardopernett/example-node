import express from 'express'
import morgan from'morgan'
import fetch  from'node-fetch'
import path from 'path'
const app = express()

app.use(express.json())
app.use(morgan('dev'))


app.use(express.static(path.resolve('./public')))

app.get('/api/characters', async(req,res)=>{
   const resp = await  fetch('https://rickandmortyapi.com/api/character')
   const { results } = await resp.json()
   res.json(results)
})

async function main(){
  new Promise(resolve => { app.listen(3000), resolve })
  console.log('🚀Server on port 3000')
}

main()
