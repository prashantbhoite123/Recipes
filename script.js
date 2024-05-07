const searchBtn = document.querySelector("#searchBtn")
const input = document.querySelector("input")
const form = document.querySelector("form")
const para = document.querySelector("#pragraph")
const ul = document.querySelector("ul")
const statename = document.querySelector(".statename")
const imgspace = document.querySelector(".imgspace")

const URL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}"

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`
  )
  const data = await response.json()
  const DM = data.meals
  let ob = Object.values(DM[0])
  // const recipesStep = `1${ob[9]},2${ob[10]},3${ob[11]}4${12}`
  // console.log(recipesStep)
  console.log(DM[0])
  console.log(DM[0].strArea)
  console.log(DM[0].strInstructions)
  console.log(ul)
  let recipesStep
  for (let i = 9; i <= 20; i++) {
    recipesStep = ob[i]
    ul.innerHTML += `<li>${recipesStep}</li>`
  }
  statename.innerHTML = `${DM[0].strArea}`
  para.innerHTML = `${DM[0].strInstructions}`

  for (let j = 0; j < data.meals.length; j++) {
    
  }

  input.value === ""
})
