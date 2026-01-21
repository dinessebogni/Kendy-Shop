const products = [
  {
    name: "Robe élégante",
    category: "vetements",
    description: "Robe moderne pour toutes occasions",
    prices: "28000 Fcfa",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Sac à main",
    category: "accessoires",
    description: "Sac pour soirée",
    prices: "8 500 Fcfa",
    image: "assets/image/sac1.jpg",
  },
  {
    name: "Sac à main",
    category: "accessoires",
    description: "Sac pour soirée",
    prices: "8 500 Fcfa",
    image: "assets/image/sac2.jpg",
  },
  {
    name: "Sac à main",
    category: "accessoires",
    description: "Sac pour soirée",
    prices: "8 500 Fcfa",
    image: "assets/image/sac3.jpg",
  },
  {
    name: "pérruque",
    category: "perruque",
    description: "Buncy T14 sur closure 5*5",
    prices: "28 000 Fcfa",
    image: "assets/image/perruque1.jpg",
  },
  {
    name: "pérruque",
    category: "perruque",
    description: "Chioma frontale",
    prices: "14 000 Fcfa",
    image: "assets/image/perruque2.jpg",
  },
  {
    name: "pérruque",
    category: "perruque",
    description: "Bob frontal T12",
    prices: "15 000 Fcfa",
    image: "assets/image/perruque3.jpg",
  },
  {
    name: "pérruque",
    category: "perruque",
    description: "Pixie water wave sur closure 5*5",
    prices: "45 000 Fcfa",
    image: "assets/image/perruque4.jpg",
  },
  {
    name: "pérruque",
    category: "perruque",
    description: "Bob indienne T14",
    prices: "19 900 Fcfa",
    image: "assets/image/perruque6.jpg",
  },
  {
    name: "pérruque",
    category: "perruque",
    description: "Pixie full lace",
    prices: "9 500 Fcfa",
    image: "assets/image/perruque7.jpg",
  },
  {
    name: "pérruque",
    category: "perruque",
    description: "Chioma coupe",
    prices: "8 500 Fcfa",
    image: "assets/image/perruque8.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Escapins noir tendance",
    prices: "7 000 Fcfa",
    image: "assets/image/chaussure1.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Escapins vert tendance",
    prices: "6 500 Fcfa",
    image: "assets/image/chaussure2.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Escapins marron tendance",
    prices: "6 500 Fcfa",
    image: "assets/image/chaussure3.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Escapins rouge tendance",
    prices: "6 500 Fcfa",
    image: "assets/image/chaussure4.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Talon Zara",
    prices: "7 000 Fcfa",
    image: "assets/image/chaussure5.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Talon Zara",
    prices: "7 000 Fcfa",
    image: "assets/image/chaussure6.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Talon Zara",
    prices: "7 000 Fcfa",
    image: "assets/image/chaussure7.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Escarpins rouge chic",
    prices: "6 500 Fcfa",
    image: "assets/image/chaussure8.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Escarpins vert chic",
    prices: "6 500 Fcfa",
    image: "assets/image/chaussure9.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Escarpins jaune-or chic",
    prices: "6 500 Fcfa",
    image: "assets/image/chaussure10.jpg",
  },
  {
    name: "chaussures",
    category: "chaussures",
    description: "Escarpins noir tendance",
    prices: "6 500 Fcfa",
    image: "assets/image/chaussure11.jpg",
  },
  {
    name: "cosmetiques",
    category: "cosmetiques",
    description: "savon o'miel anti-boutton",
    prices: "1 500 Fcfa",
    image: "assets/image/o'miel.jpg",
  },
  {
    name: "cosmetiques",
    category: "cosmetiques",
    description: "savon bright hydratant",
    prices: "1 500 Fcfa",
    image: "assets/image/bright.jpg",
  },
  {
    name: "cosmetiques",
    category: "cosmetiques",
    description: "savon smooth skin à la bave d'escagot",
    prices: "1 500 Fcfa",
    image: "assets/image/smooth-skin.jpg",
  },
  {
    name: "Sac à main",
    category: "accessoires",
    description: "Sac pour soirée",
    prices: "8 500 Fcfa",
    image: "assets/image/sac4.jpg",
  },
  {
    name: "Sac à main",
    category: "accessoires",
    description: "Sac pour soirée",
    prices: "8 500 Fcfa",
    image: "assets/image/sac5.jpg",
  },
];

const container = document.getElementById("products");

// Filtrage
function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.category === category));
  }
}

// Affichage des produits
function displayProducts(list) {
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product hidden";

    div.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p>${p.prices}</p>
      <a href="https://wa.me/237XXXXXXXX?text=Bonjour,%20je%20veux%20ce%20produit">
        Commander via WhatsApp
      </a>
    `;
    container.appendChild(div);
  });

  observeProducts();
}

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

function observeProducts() {
  document.querySelectorAll(".product").forEach(p => {
    p.classList.add("hidden");
    observer.observe(p);
  });
}

// Liste des vidéos
const videoPlaylist = [
  "assets/video/video1.mp4",
  "assets/video/video2.mp4",
  "assets/video/video3.mp4",
  "assets/video/video4.mp4"
];

let currentVideo = 0;
const mainVideo = document.getElementById("mainVideo");

mainVideo.addEventListener("ended", () => {
  currentVideo++;
  if (currentVideo >= videoPlaylist.length) {
    currentVideo = 0; // recommence au début
  }
  mainVideo.src = videoPlaylist[currentVideo];
  mainVideo.play();
});

// Loader + affichage produits
window.addEventListener("load", () => {
  displayProducts(products); // affiche produits

  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  }, 300);
});
