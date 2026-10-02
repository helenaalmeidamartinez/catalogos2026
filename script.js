// Lista de produtos
const produtos = [
    {
        id: 1,
        nome: "Batom Matte Rose",
        descricao: "Batom líquido de longa duração com acabamento aveludado e confortável.",
        categoria: "Lábios",
        preco: 79.90,
        imagem: "https://cdn.iset.io/assets/54712/produtos/9044/kikovelvetpassion-303.jpg"
    },
    {
        id: 2,
        nome: "Paleta de Sombras Nude",
        descricao: "12 cores neutras e cintilantes com alta pigmentação e fáceis de esfumar.",
        categoria: "Olhos",
        preco: 199.90,
        imagem: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/549513-800-800/paleta-de-sombras-mac-connect-in-colour-eye-shadow-palette-unfiltered-nudes--1-.jpg?v=638195198843800000"
    },
    {
        id: 3,
        nome: "Blush Compacto Pêssego",
        descricao: "Textura fininha com acabamento natural e brilho radiante para a pele.",
        categoria: "Rosto",
        preco: 125.99,
        imagem: "https://www.ninamakeup.com.br/cdn/shop/files/FOTOMODELO_BLUSHCOMPACTO_CORAL_1x1_99d5d7fc-a01e-4835-b610-74329ca8723e.png?v=1770321445"
    },
    {
        id: 4,
        nome: "Máscara de Cílios Volume",
        descricao: "Alongamento imediato e volume intenso resistente à água.",
        categoria: "Olhos",
        preco: 89.90,
        imagem: "https://www.facebeautiful.com.br/cdn/shop/files/mascara_luxury_Volume_define_modelo_contexto_1800x1800.png?v=1768244187"
    },
    {
        id: 5,
        nome: "Gloss Labial Hidratante",
        descricao: "Brilho espelhado com ácido hialurônico, sem sensação pegajosa.",
        categoria: "Lábios",
        preco: 69.90,
        imagem: "https://paguemenos.vtexassets.com/arquivos/ids/924345-800-auto?v=638606401917470000&width=800&height=auto&aspect=true"
    },
    {
        id: 6,
        nome: "Base Líquida Glow",
        descricao: "Cobertura média construível com acabamento luminoso e hidratação.",
        categoria: "Rosto",
        preco: 379.90,
        imagem: "https://lojadior.vtexassets.com/assets/vtex.file-manager-graphql/images/7fc5a54e-e99c-4b09-bb5e-e51d936998b9___90829318af6bd870ec9e7e5e7720a277.jpg"
    },
    {
        id: 7,
        nome: "Corretivo Matte",
        descricao: "Cobertura alta construível com acabamento matte mas sem craquelar.",
        categoria: "Rosto",
        preco: 59.90,
        imagem: "https://www.maybelline.com.br/-/media/project/loreal/brand-sites/mny/americas/br/artigos/2024/rosto/corretivo/como-passar-corretivo/como-passar-corretivo.jpg?rev=8257b3d7d1254611972d27ce023e8966&cx=0&cy=0&cw=650&ch=650&hash=1F5453A7FB19E89827658CC276E94123"
    },
];

const catalogContainer = document.getElementById('catalog');
const searchInput = document.getElementById('searchInput');

// cards na tela
function renderizarProdutos(lista) {
    catalogContainer.innerHTML = '';

    if (lista.length === 0) {
        catalogContainer.innerHTML = '<p style="color: #999;">Nenhum produto de beleza encontrado ✨</p>';
        return;
    }

    lista.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';

        const precoFormatado = produto.preco.toLocaleString('pt-BR', { 
            style: 'currency', 
            currency: 'BRL' 
        });

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="category">${produto.categoria}</p>
            <p class="description">${produto.descricao}</p>
            <p class="price">${precoFormatado}</p>
        `;

        catalogContainer.appendChild(card);
    });
}

// Filtro em tempo real
searchInput.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();

    const filtrados = produtos.filter(p => 
        p.nome.toLowerCase().includes(termo) ||
        p.descricao.toLowerCase().includes(termo) ||
        p.categoria.toLowerCase().includes(termo)
    );

    renderizarProdutos(filtrados);
});


renderizarProdutos(produtos);