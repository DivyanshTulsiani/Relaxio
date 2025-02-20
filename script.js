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
    console.log(tem);
  }
  catch{

  }
}