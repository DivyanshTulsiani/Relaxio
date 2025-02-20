




const weatherKey = "194292bb0f634338cecba7fe5f882312";
function startbutton(){
  let inp = document.getElementById("inputbox1");
  let cityname = inp.value
  console.log("hi" + cityname);
  fetchdata(cityname);
}
async function fetchdata(cityname) {
  try{
    const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${weatherKey}&units=metric`)
    if(!respone.ok){
      alert("Incorrect city name")
      throw new Error("Incorrect City Name")    
    }
    const incomdata = await respone.json()
    console.log("success");
    let tem = incomdata.main.temp;
    let temfeel = incomdata.main.feels_like;
    let conditions = incomdata.weather[0].main
    let conditions2 = incomdata.weather[0].description
    let visible = incomdata.visibility
    console.log(tem);
    let statevar = [tem,temfeel,conditions,conditions2,visible];
    // document.getElementById("weatherdis").style.display = "flex";
  }
  catch{

  }
}