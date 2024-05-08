const searchBtn = document.querySelector("#searchBtn")
const input = document.querySelector("input")
const form = document.querySelector("form")
const outPutcontainer = document.querySelector("#outPutcontainer")

const URL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}"

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`
  )
  const data = await response.json()
  const DM = data.meals
  let ob
  if (DM === null) {
    alert("Recipes Not available");
  } else {
    for (let j = 0; j < DM.length; j++) {
      ob = Object.values(DM[j])
      console.log(DM[0])
      console.log(DM[0].strArea)
      console.log(DM[0].strInstructions)

      let recipesStep = []
      let conteti = []
      for (let i = 9; i <= 20; i++) {
        recipesStep = recipesStep + ob[i]
        // console.log(recipesStep)
      }
      for (let k = 29; k <= 42; k++) {
        conteti = conteti + ob[k]
        // console.log(conteti)
      }
      console.log(recipesStep)
      console.log(conteti)
      outPutcontainer.innerHTML += `
  <div class="col-12 col-md-6 mt-5">
    <div class="card" style="background-image: linear-gradient( 179deg,  rgba(0,0,0,1) 9.2%, rgba(127,16,16,1) 103.9% );color:#fff;">
  <div class="card-header container">
  <div class="row">
          <div className="col-4"><img " src="${
            DM[j].strMealThumb
          }" class="h-75 w-75" alt="..."></div>
          <div className="col-4">
          <h3 class="card-title text-warning">${DM[j].strMeal}</h3>
    <h3 class="card-text text-warning">Category : ${DM[j].strArea}</h3>
          </div>
        </div>
  </div>
  <div class="card-body">
    
    <div class="ul-conten">
        <h6 class="text-primary">Ingredients</h6>
          <ul class="object">${recipesStep}</ul>
           <h6 class="text-primary">Measurements</h6>
          <ul class="conteti">${conteti}</ul>
          </div>
    <p class="card-text">${DM[j].strInstructions.slice(0, 200)}</p>
    <a href="${DM[j].strYoutube}" class="btn btn-outline-warning">View More</a>
  </div>
</div>
  </div>
  `
    }
    const footer = document.querySelector("#footer")
    console.log(footer)
    footer.style.display = "inline"
  }
  input.value === ""
})
