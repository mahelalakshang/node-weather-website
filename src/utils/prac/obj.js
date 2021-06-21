const name='Andrew'
const useAge=27

const user={
    name,
    age:useAge,
    location:"phyli",
    price:22
}

const{name:nm,price,nee=30}=user

console.log(nm+" "+price+" "+nee)