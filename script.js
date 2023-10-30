

xml parseFloat(`xml`)
API
fetch("https://restcountries.com/v3.1/all")
.then((response)=>console.log(response))
.catch(err=>console.log(err));

.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err.message))

.fetch("https://restcountries.com/v3.1/all")
.then(response=>response.json())
.then((data)=>{
console.log(data);
data.forEach(element=>{
    const countryRequired={
        ...element,
        name:element.name.common,
        flag:element.flags.png,
        population:element.population,
        region:element.region,
        captial:element.captial
    }
    createcountry((err)=>console.log(err));

});
})
.catch((err)=>console.log(err));
functionCreateCountry({name,flag,population,region,captial}){
document.body.innerHTML+=`
`

}