const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const fore=require('./utils/fore')

const app=express()

console.log("APPPP")
console.log(path.join(__dirname,'../publi'))

app.set('view engine', 'hbs')

const x=path.join(__dirname,'../publi')
const y=path.join(__dirname,'./vv')
const partpath=path.join(__dirname,'./parts')
hbs.registerPartials(partpath)

console.log(y);
app.set('views', y)

app.use(express.static(x))

app.get('', (req,res)=>{
   res.render('index',{title:'weather',name:'created by mahela'})
})

app.get('/about', (req,res)=>{
    res.render('about',{title:'About me',name:'this is a weather app you can search any place'})
 })

 app.get('/help', (req,res)=>{
    res.render('help',{title:'help me',name:'visit mlg@gmail.com'})
 })

// app.get('/help',(req,res)=>{
//     res.send([{name:'Mahela',age:22},{name:'Mahela',age:22},{name:'Mahela',age:22}])
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>about</h1>') 
// })

app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error:"must provide address"
        })

    }
    geocode(req.query.address,(e,{latitude,longtitude,location}={})=>{
        if(e){
           return res.send({e})
        }

        fore('New%20York',(e,foreData)=>{
            if(e){
                return res.send({e})
             }

             res.send({
                 forecast:foreData,
                 location,
                 address:req.query.address
             })
        })

    })

    // res.send({forecast:'it is snowing',location:'philipene',address:req.query.address}) 
})

app.get('/products',(req,res)=>{

    // res.send(req.query.name)

    if(!req.query.search){
        return res.send({
            error:"you must provide search item"
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
   
})



app.get('*',(req,res)=>{
res.render('404',{emss:"404 not found"})

})





app.listen(3000,()=>{
    console.log("Server running")
})









