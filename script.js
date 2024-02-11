const hadithBtn = document.querySelector("#hadith-btn");
const pElement = document.querySelector(".hadis");
const narratorName = document.querySelector(".narrator-name");

async function generateHaids() {
  try {
    hadithBtn.innerHTML = "Loading Hadith....";
    const response = await fetch(
      "https://random-hadith-generator.vercel.app/bukhari/"
    );
    const data = await response.json();
    narratorName.innerText = data.data.header;
    pElement.innerHTML = data.data.hadith_english;
    hadithBtn.innerHTML = "New Hadith";
  } catch (error) {
    console.log("Fetching error:", error);
    hadithBtn.innerHTML = "Failed To Load Hadith";
  }
}

hadithBtn.addEventListener("click", generateHaids);
