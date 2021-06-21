const request=require('request')

const fore=(add,callb)=>{
    const x='New%20York'
    const url='http://api.weatherstack.com/current?access_key=8408d6b2f5be78aa46643ce149097a4b&query='+add+'&units=f'


    request({url,json:true},(e,{body})=>{

        if(e){
            callb("unable to connect",undefined)
        }
        else if(body.e){
            callb("unable to find location",undefined)
        }
        else{
            callb(undefined,body.current.weather_descriptions[0]+" It is now "+body.current.temperature+" degs out. it feals like "+body.current.feelslike)
        }
    })


}

module.exports=fore