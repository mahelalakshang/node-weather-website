const x=require('./def')

const inp1=parseInt(process.argv[2])
const inp2=parseInt(process.argv[3])


x.xx(inp1,inp2,(data1)=>{

    x.yy(data1,(data2)=>{
        console.log(data2)
    })

})