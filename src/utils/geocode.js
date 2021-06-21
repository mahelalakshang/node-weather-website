const request=require('request')

const geo=(add,callb)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+add+'.json?access_token=pk.eyJ1IjoibWFoZWxhMzQiLCJhIjoiY2txMGZ5NHo4MDRmczJvbzFlM3BtdWpmMSJ9.ZuL6vRA8blo4PyCb7rMHRQ&limit=1'
    
    request({url,json:true},(e,{body})=>{
        if(e){
            callb("Connect error",undefined)
        }
        else if(body.features.length==0){
            callb("url error",undefined)
        }
        else{
            callb(undefined,{
               latitude:body.features[0].center[0],
                longitude:body.features[0].center[1],
                location:body.features[0].place_name
            })
        }

    })

}
module.exports=geo