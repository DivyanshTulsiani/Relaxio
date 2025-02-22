




const weatherKey = "194292bb0f634338cecba7fe5f882312";
function startbutton(){
  let inp = document.getElementById("inputbox1");
  let cityname = inp.value
  console.log("hi" + cityname);
  fetchdata(cityname);
  let disp = document.getElementById("Weatherdisplay");
  disp.style.display = "flex";
}


function weatherToMood(weather) {
  const weatherDescription = {
      "clear": "The sun's out, sunglasses on! Perfect day to shine like the weather. 😎☀️",
      "clouds": "Fluffy clouds drifting by... maybe they’re gossiping about us? ☁️🤔",
      "rain": "Raindrops are nature's way of saying 'Stay in and sip some hot cocoa.' ☔🍵",
      "thunderstorm": "Boom! Crack! Mother Nature’s hosting a rock concert. 🎸⚡",
      "snow": "Winter magic in the air! Time to build a snowman or have an epic snowball fight. ❄️⛄",
      "mist": "A dreamy mist, like you’ve stepped into a mysterious fantasy novel. 📖🌫️",
      "fog": "Fog so thick, even ghosts might get lost. Drive safe! 👻🌁",
      "haze": "The world looks like an Instagram filter today. #NoFilterNeeded 🌆",
      "smoke": "The air’s got that smoky vibe—like a BBQ party but without the food. 🍗🚫",
      "dust": "Dusty winds blowing! Feels like you’ve been transported to an old Western movie. 🤠🌵",
      "sand": "Sandstorm incoming! Time to cover up and pretend you’re in a desert adventure. 🏜️🥷",
      "ash": "Volcanic ash? Yikes! Feels like a post-apocalyptic movie scene. Stay indoors! 🌋🚷",
      "squall": "Hold onto your hats! The wind’s trying to steal them. 🎩💨",
      "tornado": "Twister alert! Channel your inner storm chaser or, better yet, seek shelter! 🌪️🏃‍♂️",
  };

  return weatherDescription[weather] || "The weather's doing its thing—time to enjoy some good tunes! 🎶😊";
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
    let mood = weatherToMood(emojitype2)
    console.log(emoji)
    let visible = incomdata.visibility
    console.log(tem)
    let statevar = [tem,temfeel,name,conditions,emoji,mood]
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
  let Mood = document.getElementById("Mood");


  imgemoji.setAttribute("src",`${state[4]}`)
  tempdeg.textContent = `${Math.floor(state[0])}°C`
  feelslike.textContent = `Feels Like ${Math.floor(state[1])}`
  // cityname.textContent = `${state[2]}`
  cityname.innerHTML = `<span class="Behindbhopal">in</span> ${state[2]}`;
  Mood.textContent = `${state[5]}`
}