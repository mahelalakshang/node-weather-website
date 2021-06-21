console.log("JSJSJSJJS")

// fetch('http://puzzle.mead.io/puzzle').then((res)=>{

// res.json().then((data)=>{
//     console.log(data)
// })

// })



const wea=document.querySelector('form')
const search=document.querySelector('input')

const p1=document.querySelector('#m1')
const p2=document.querySelector('.m2')

p1.textContent="Loadin..."
p2.textContent=""

wea.addEventListener('submit',(event)=>{
    event.preventDefault()
    const xx=search.value

    fetch('http://localhost:3000/weather?address='+xx).then((res)=>{
    res.json().then((data)=>{
        if(data.error){
           p1.textContent=data.error
        }
        else{
            p1.textContent=data.location
            p2.textContent=data.forecast

        }
      
    })

})


})