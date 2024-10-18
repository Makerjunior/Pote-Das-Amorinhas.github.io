const productsContainer = document.getElementById('products');
const productModal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');

const products = [
    {
        title: "Bolo de Chocolate",
        description: "Que tal um bolo de chocolate?",
        image: "./images/CaseirinhodeCenouracomChocolate.jpg",
        fullImage: "./images/CaseirinhodeCenouracomChocolate.jpg",
        animation: "animate__fadeInLeft"
    },
    {
        title: "Pool Cake Piscininha",
        description: "Doce de amorinha caseiro, feito com carinho.",
        image: "./images/Pool-Cake-Piscininha.jpg",
        fullImage: "./images/Pool-Cake-Piscininha.jpg",
        animation: "animate__fadeInRight"
    },
    {
        title: "Caseirinho de Ninho",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/CaseirinhodeNicho.jpg",
        fullImage: "./images/CaseirinhodeNicho.jpg",
        animation: "animate__bounceIn"
    },
    {
        title: "Bolo de Chocolate",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/CaseirinhoDeChocolate.jpg",
        fullImage: "./images/CaseirinhoDeChocolate.jpg",
        animation: "animate__fadeInLeft"
    },
    {
        title: "Caseirinho de Cenoura",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/Caseirinho.jpg",
        fullImage: "./images/Caseirinho.jpg",
        animation: "animate__fadeInUp"
    },
    {
        title: "Bolo de Aniversário",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/BolodeAniversario2.jpg",
        fullImage: "./images/BolodeAniversario2.jpg",
        animation: "animate__fadeInDown"
    },
    {
        title: "Bolo de Aniversário",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/BoloDeAniversario.jpg",
        fullImage: "./images/BoloDeAniversario.jpg",
        animation: "animate__bounceIn"
    },
    {
        title: "Bolo no pote",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/Ninho.jpg",
        fullImage: "./images/Ninho.jpg",
        animation: "animate__fadeInLeft"
    },
    {
        title: "Bolo no pote",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/DoisAmores.jpg",
        fullImage: "./images/DoisAmores.jpg",
        animation: "animate__fadeInRight"
    },
    {
        title: "Bolo no pote",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/Chocolate.jpg",
        fullImage: "./images/Chocolate.jpg",
        animation: "animate__bounceIn"
    },
    {
        title: "Bolo no pote",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/Cenoura.jpg",
        fullImage: "./images/Cenoura.jpg",
        animation: "animate__bounceIn"
    },
    {
        title: "Beijinho",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/Abacaxi.jpg",
        fullImage: "./images/Abacaxi.jpg",   
        animation: "animate__fadeInUp"
    },
    {
        title: "Pão de Mel",
        description: "Bolo fofinho com pedaços de amorinha.",
        image: "./images/pao.jpg",
        fullImage: "./images/pao.jpg",
        animation: "animate__fadeInLeft"
    },
    {
        title: "Palha Italiana de Ninho",
        description: "Pudim cremoso com cobertura de amorinha.",
        image: "./images/PalhaItalianadeNinho2.jpg",
        fullImage: "./images/PalhaItalianadeNinho2.jpg",
        animation: "animate__fadeInRight"
    },
    {
        title: "Beijinho",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/beijinho.jpg",
        fullImage: "./images/beijinho.jpg",
        animation: "animate__fadeInLeft"
    },
    {
        title: "Fatias Gourmet",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/FatiasGourmet.jpg",
        fullImage: "./images/FatiasGourmet.jpg",
        animation: "animate__fadeInRight"
    },
    {
        title: "Brigadeiro Tradicional",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/BrigadeiroTradicional.jpg",
        fullImage: "./images/BrigadeiroTradicional.jpg",
        animation: "animate__bounceIn"
    },
    {
        title: "Brigadeiro Gourmet",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/BriagadeiroGourmet.jpg",
        fullImage: "./images/BriagadeiroGourmet.jpg",
        animation: "animate__fadeInLeft"
    },
    {
        title: "Bento Cake",
        description: "Refrescante sorvete de amorinha, perfeito para o verão.",
        image: "./images/BentoCake.jpg",
        fullImage: "./images/BentoCake.jpg",
        animation: "animate__fadeInLeft"
    },
];

function loadProducts() {
    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'product bg-white p-4 rounded-lg shadow-md animate__animated cursor-pointer';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="mb-2 rounded image-size mx-auto">
            <h3 class="text-md font-semibold mb-1 text-center">${product.title}</h3>
            <p class="text-xs text-center">${product.description}</p>
        `;
        productsContainer.appendChild(productElement);

        // Configurar o observer para adicionar a animação quando o produto estiver visível
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    productElement.classList.add(product.animation);
                    observer.unobserve(productElement); // Para não observar mais após a animação
                }
            });
        });

        observer.observe(productElement); // Começar a observar o elemento

        // Evento de clique para abrir o modal
        productElement.onclick = () => {
            openModal(product);
        };
    });
}

function openModal(product) {
    modalTitle.textContent = product.title;
    modalImage.src = product.fullImage;
    modalDescription.textContent = product.description;
    productModal.style.display = 'block';
}

closeModal.onclick = () => {
    productModal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
}

loadProducts();