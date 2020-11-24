// Unsplash API
const count = 10;
const apiKey = "kbVKKrNlOAv3mLktrCx3hTEdy9fSFJEiZ74VPCtzWXQ";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}
`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const respsonse = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos();
