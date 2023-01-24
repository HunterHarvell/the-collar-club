
const saveUpdateFormHandler = async (event) => {
  event.preventDefault();
  const phone = document.querySelector("#phone-signup").value.trim();
  const city = document.querySelector("#location-signup").value.trim();
  const dogWalk = document.querySelector("#dogwalk-signup").checked;
  const dogFeed = document.querySelector("#dogfeeding-signup").checked;
  const sTDogSit = document.querySelector("#STdogSitting-signup").checked;
  const lTDogSit = document.querySelector("#LTdogSitting-signup").checked;
  const small = document.querySelector("#smallDog-signup").checked;
  const medium = document.querySelector("#medDog-signup").checked;
  const large = document.querySelector("#largeDog-signup").checked;

  console.log(phone, city, dogWalk, dogFeed, sTDogSit, lTDogSit, small, medium, large);

  if (phone&&city) {
    if (event.target.hasAttribute("provider-id")) {
    const pid = event.target.getAttribute("provider-id");
    const response = await fetch(`/api/providers/${pid}`, {
    //const response = await fetch(`/api/providers/`, {
      method: "PUT",
      body: JSON.stringify({
        phone,
        city,
        dogWalk,
        dogFeed,
        sTDogSit,
        lTDogSit,
        small,
        medium,
        large,
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    console.log("response:" + response);
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("change not saved");
    }
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("provider-id")) {
    const pid = event.target.getAttribute("provider-id");
    console.log("provider-id: " + pid);
//TODO: run the routes for providerupdate and user update
const isProvider = false;
 const response = await fetch("/api/users/updateisprovider", {
      method: "PUT",
      body: JSON.stringify({ isProvider }),
      headers: { "Content-Type": "application/json" },
    });
    const response2 = await fetch(`/api/providers/${pid}`, {
      method: "DELETE",
    });
      
    if (response.ok && response2.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete provider");
    }
  }
};

document
  .querySelector("#save-changes")
  .addEventListener("click", saveUpdateFormHandler);

document
.querySelector("#removeProvider")
.addEventListener("click", delButtonHandler);
