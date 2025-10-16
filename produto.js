// ===============================
// Projeto Base em TypeScript (POO)
// ===============================
// Classe Produto
var Produto = /** @class */ (function () {
    function Produto(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getId = function () {
        return this.id;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (novoPreco) {
        if (novoPreco > 0) {
            this.preco = novoPreco;
        }
    };
    return Produto;
}());
// Classe Loja
var Loja = /** @class */ (function () {
    function Loja(nome) {
        this.produtos = [];
        this.nome = nome;
    }
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    Loja.prototype.listarProdutos = function () {
        console.log("\nProdutos dispon\u00EDveis na loja ".concat(this.nome, ":"));
        this.produtos.forEach(function (p) {
            console.log("- ".concat(p.getNome(), " | R$ ").concat(p.getPreco().toFixed(2)));
        });
    };
    return Loja;
}());
// Classe Cliente
var Cliente = /** @class */ (function () {
    function Cliente(nome) {
        this.carrinho = [];
        this.nome = nome;
    }
    Cliente.prototype.adicionarAoCarrinho = function (produto) {
        this.carrinho.push(produto);
    };
    Cliente.prototype.exibirCarrinho = function () {
        console.log("\nCarrinho de ".concat(this.nome, ":"));
        this.carrinho.forEach(function (p) {
            console.log("- ".concat(p.getNome(), " | R$ ").concat(p.getPreco().toFixed(2)));
        });
    };
    Cliente.prototype.calcularTotal = function () {
        return this.carrinho.reduce(function (total, p) { return total + p.getPreco(); }, 0);
    };
    return Cliente;
}());
// ===============================
// Execução do projeto
// ===============================
var loja = new Loja("Tech Store");
// Criando produtos
var produto1 = new Produto(1, "Notebook Gamer", 5500);
var produto2 = new Produto(2, "Mouse RGB", 200);
var produto3 = new Produto(3, "Teclado Mecânico", 350);
// Adicionando produtos à loja
loja.adicionarProduto(produto1);
loja.adicionarProduto(produto2);
loja.adicionarProduto(produto3);
// Exibindo produtos da loja
loja.listarProdutos();
// Criando cliente e adicionando itens ao carrinho
var cliente = new Cliente("Maria");
cliente.adicionarAoCarrinho(produto1);
cliente.adicionarAoCarrinho(produto3);
// Exibindo o carrinho e total
cliente.exibirCarrinho();
console.log("\nTotal da compra: R$ ".concat(cliente.calcularTotal().toFixed(2), "\n"));
