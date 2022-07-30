let app = document.querySelector(".app")
async function getWeather (city){
    let response = await fetch(`https://developers.parsijoo.ir/web-service/v1/weather/?type=search&city=${city}`,{
    headers:{
        "api-key":"51f1082f13564f3397bfa494b40c28e4"
    }
    })
    let data = await response.json()
    let now_temp = data.result.hava.summary.temp
    let today = data.result.hava.dayList[0]
    switch(today.condition){
        case "ارام":
        today.color = "t1"
        break
        case "نسیم":
        today.color = "t2"
        break
        case "ملایم":
        today.color = "t3"
        break
        case "باد ملایم":
        today.color = "t4"
        break
        case "باد شدید":
        today.color = "t5"
        break
        default:
            today.color = "t1"
        break

    }
    app.innerHTML = `
            <div class="card">
                <div class="weather-wraper" ${today.color}>
                    <i style="font-size: 3rem;" class="wi" ${today.symbol}></i>
                </div>
             </div>
            <h3>${city}</h3>
            <small>${today.condition}</small>
            <div class="number">
            <button class="btn btn-danger">${today.max}</button>
            <button class="btn btn-secondary">${now_temp}</button>
            <button class="btn btn-primery">${today.min}</button>
            </div>
             `
    
}
let city = document.querySelector("#city")
city.addEventListener("submit",e=>{
    e.preventDefault()
    getWeather(e.target.city.value)
})