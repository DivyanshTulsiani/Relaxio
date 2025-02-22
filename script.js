




const weatherKey = "194292bb0f634338cecba7fe5f882312";
function startbutton(){
  let inp = document.getElementById("inputbox1");
  let cityname = inp.value
  console.log("hi" + cityname);
  fetchdata(cityname);
  let disp = document.getElementById("Weatherdisplay");
  disp.style.display = "flex";
}
function weatherTOEmoji(weather){
  const weatherEmojiMap= {
      "clear": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sun%20with%20Face.png",
      "clouds": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud.png",
      "rain": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Umbrella%20with%20Rain%20Drops.png",
      "thunderstorm": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud%20with%20Lightning%20and%20Rain.png",
      "snow": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Snowman.png",
      "mist": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Foggy.png",
      "fog": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fog.png",
      "haze": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Foggy.png",
      "smoke": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fog.png",
      "dust": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Tornado.png",
      "sand": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Tornado.png",
      "ash": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Mount%20Fuji.png",
      "squall": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fog.png",
      "tornado": "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Tornado.png"
  };
  
  
  if(weatherEmojiMap[weather]){

      console.log(weatherEmojiMap[weather]); 
      return weatherEmojiMap[weather]; 
  }
  return "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20Showing%20Asia-Australia.png";
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
    let tem = await incomdata.main.temp;
    let temfeel = await incomdata.main.feels_like;
    let name = await incomdata.name
    let conditions = await incomdata.weather[0].description
    let emojitype = await incomdata.weather[0].main
    console.log(emojitype);
    let emojitype2 = emojitype.toLowerCase()
    let emoji = weatherTOEmoji(emojitype2)
    console.log(emoji)
    let visible = incomdata.visibility
    console.log(tem)
    let statevar = [tem,temfeel,name,conditions,emoji]
    // document.getElementById("weatherdis").style.display = "flex";

    await setelements(statevar);
  }
  catch(e){
    alert("Enter a valid city name!!!! or Check your Internet Connection");
    console.log(e);
  }
}

async function setelements(state){
  let imgemoji = document.getElementById("imgemoji");
  let tempdeg = document.getElementById("temp");
  let feelslike = document.getElementById("feelslike");
  let cityname = document.getElementById("cityname");
  imgemoji.setAttribute("src",`${state[4]}`)
  tempdeg.textContent = `${Math.floor(state[0])}°C`
  feelslike.textContent = `Feels Like ${Math.floor(state[1])}`
  // cityname.textContent = `${state[2]}`
  cityname.innerHTML = `<span class="Behindbhopal">in</span> ${state[2]}`;
}