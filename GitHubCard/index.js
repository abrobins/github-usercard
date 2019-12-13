/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get("https://dog.ceo/api/breed/mastiff/images/random/12")
//   .then(response => {
// //   console.log(response);
//   response.data.message.forEach(item => {
//     // console.log(DogCard(item));
//     const newDog = DogCard(item)
//     entryPoint.appendChild(newDog);
//   })
// })
//   .catch((err) => {
//   console.log('You hit an error; ', err);
// })
const addCard = document.querySelector(".cards");

const followersArray = [
  "abrobins",
  "cscori",
  "april5622",
  "mlucky518",
  "tlewandowski18",
  "julisadiego",
  "sophiasagan"
];

automatedFollowers = [];
axios
  .get("https://api.github.com/users/abrobins/followers")
  .then(response => {
    //  for (let i = 0; i < response.data.length; i++) {
    // console.log(response);
    const followerList = response.data;

    followerList.forEach(item => {
      axios
        .get(item.url)
        .then(response => {
          const devInfoCard = createCard(response);
          addCard.appendChild(devInfoCard);
        })
        .catch(err => {
          console.log("You hit an error: ", err);
        });
    });
  })
  .catch(err => {
    console.log("You hit an error with the followers code: ", err);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:


<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(element) {
  const newCard = document.createElement("div");
  const newImg = document.createElement("img");
  const newClassInfo = document.createElement("div");
  const newHeading = document.createElement("h3");
  const newUser = document.createElement("p");
  const newLocation = document.createElement("p");
  const newProfile = document.createElement("p");
  const newProfileLink = document.createElement("a");
  const newFollowers = document.createElement("p");
  const newFollowing = document.createElement("p");
  const newBio = document.createElement("p");

  newCard.classList.add("card");
  newImg.src = element.data.avatar_url;
  newClassInfo.classList.add("card-info");
  newHeading.classList.add("name");
  newHeading.textContent = element.data.name;
  newUser.classList.add("username");
  newUser.textContent = element.data.login;
  newLocation.textContent = "Location: " + element.data.location;
  newProfile.textContent = "Profile: ";
  newProfileLink.setAttribute("href", `${element.data.html_url}`);
  const rawLink = document.createTextNode(element.data.html_url);
  newProfileLink.appendChild(rawLink);
  // '<a href="' + element.data.html_url + '">' + element.data.html_url + "</a>";
  newFollowers.textContent = "Followers: " + element.data.followers;
  newFollowing.textContent = "Following: " + element.data.following;
  newBio.textContent = "Bio: " + element.data.bio;

  newCard.appendChild(newImg);
  newCard.appendChild(newClassInfo);
  newClassInfo.appendChild(newHeading);
  newClassInfo.appendChild(newUser);
  newClassInfo.appendChild(newLocation);
  newClassInfo.appendChild(newProfile);
  newProfile.appendChild(newProfileLink);
  newClassInfo.appendChild(newFollowers);
  newClassInfo.appendChild(newFollowing);
  newClassInfo.appendChild(newBio);
  return newCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
