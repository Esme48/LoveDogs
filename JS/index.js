//Fetch Component, a promise that has our data//
const projectSection = document.getElementById("projects");
//console.log("projectSection:", projectSection);
const projectList = projectSection.querySelector("ul");
//console.log("projectList", projectList);

fetch("https://api.artic.edu/api/v1/artworks")
.then((response)=>{
  //Body of the callback function
  return response.json(); 
})
.then((json) => json.data)

.then((artWork)=>{
console.log("Pieces of Art: ", artWork);
for (let i=0; i < artWork.length; i++){
  const project = artWork[i].name;
  const li = document.createElement("li");
  //innertext of the li element
  li.innerText = project;
  projectList.appendChild(li);
}
 })

 .catch((error)=>{
console.log(error);
 });
 



