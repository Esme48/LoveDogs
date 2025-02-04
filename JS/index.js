
///////////////////////////////////////////////////////////////////
function fetchArtworks(){
  //Fetch Component, a promise that has our data//
  const projectSection = document.getElementById("gallery");
//console.log("projectSection:", projectSection);
  const projectList = projectSection.querySelector("ul");
  //console.log("projectList", projectList);


  fetch("https://api.artic.edu/api/v1/artworks")
    .then((response)=>{
    //Body of the callback function
    return response.json();
  })
    .then((json) => json.data)


    .then((artworks)=>{
      console.log("Pieces of Art: ", artworks);
      for (let i=0; i < artworks.length; i++){
      const project = artworks[i].title;
      const identifier=artworks[i].image_id;
      const imgURL=`https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`
      const li = document.createElement("li");
      const img=document.createElement("img");
      img.src=imgURL;
      img.width=200;
      //innertext of the li element
      li.innerText = project;
      li.appendChild(img);
      projectList.appendChild(li);
  }
 })


      .catch((error)=>{
      console.log(error);
 });
}


 /////////////////////////////////////////////////////////////////////////


function fetchArtist(){
  //Fetch Component, a promise that has our data//
  const artistSection = document.getElementById("profiles");
  //console.log("projectSection:", projectSection);
  const artistList = artistSection.querySelector("ul");
  //console.log("projectList", projectList);


  fetch("https://api.artic.edu/api/v1/agents")
    .then((response)=>{
    //Body of the callback function
    return response.json();
  })
    .then((json) => json.data)


    .then((agents)=>{
      console.log("Our Creators: ", agents);
      for (let i=0; i < agents.length; i++){
      const artistName = agents[i].title;
     // const agentID=agents[i].id;
     // const agentURL=`https://www.artic.edu/iiif/2/${agentID}/full/200,/0/default.jpg`;
      const li = document.createElement("li");
     // const img = document.createElement("img");
      //img.src=agentURL;
      //innertext of the li element
      li.innerText = artistName;
      //li.appendChild(img);
      artistList.appendChild(li);
     }
 })


      .catch((error)=>{
        console.log(error);
    });
  }
////////////////////////////////////////////////////////////////
function fetchExhibits(){
    //Fetch Component, a promise that has our data//
    const exhibitSection = document.getElementById("outreach");
  //console.log("projectSection:", projectSection);
    const exhibitList = exhibitSection.querySelector("ul");
    //console.log("projectList", projectList);
  
  
    fetch("https://api.artic.edu/api/v1/exhibitions")
      .then((response)=>{
      //Body of the callback function
      return response.json();
    })
      .then((json) => json.data)
  
  
      .then((exhibitions)=>{
        console.log("Our Exhibits: ", exhibitions);
        for (let i=0; i < exhibitions.length; i++){
        const exhibitName = exhibitions[i].title;
        //const identifier=exhibitions[i].id;
        const imgURL = exhibitions[i].image_url;
        const li = document.createElement("li");
        const img=document.createElement("img");
        img.src=imgURL; 
        img.width=200;
        //innertext of the li element
        li.innerText = exhibitName;
        li.appendChild(img);
        exhibitList.appendChild(li);
    }
   })
  
  
        .catch((error)=>{
        console.log(error);
   });
  }

  document.addEventListener('DOMContentLoaded', () => {
   fetchArtist(); 
    fetchArtworks(); 
    fetchExhibits();
});


//////////////////////////////////////////////////////////////////