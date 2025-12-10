export default function displayImage(imageURL) {
  const image = document.querySelector(".generatedImage");
  image.src = imageURL;
}
