const http=require('http')



const url='http://api.weatherstack.com/current?access_key=8408d6b2f5be78aa46643ce149097a4b&query=London,%20United%20Kingdom'


const req=http.request(url,(response)=>{
     let data=''

     response.on('data',(chunk)=>{
         data=data+chunk.toString()
        
     })

    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body)
     })


})

req.on('error',(error)=>{
    console.log("eeeeeeeee"+error)
})

req.end()



