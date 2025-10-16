// ===============================
// Projeto Base em TypeScript (POO)
// ===============================

// Classe Produto
class Produto {
  private id: number;
  private nome: string;
  private preco: number;

  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  public getId(): number {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(novoPreco: number): void {
    if (novoPreco > 0) {
      this.preco = novoPreco;
    }
  }
}

// Classe Loja
class Loja {
  private nome: string;
  private produtos: Produto[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  public adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  public listarProdutos(): void {
    console.log(`\nProdutos disponíveis na loja ${this.nome}:`);
    this.produtos.forEach((p) => {
      console.log(`- ${p.getNome()} | R$ ${p.getPreco().toFixed(2)}`);
    });
  }
}

// Classe Cliente
class Cliente {
  private nome: string;
  private carrinho: Produto[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  public adicionarAoCarrinho(produto: Produto): void {
    this.carrinho.push(produto);
  }

  public exibirCarrinho(): void {
    console.log(`\nCarrinho de ${this.nome}:`);
    this.carrinho.forEach((p) => {
      console.log(`- ${p.getNome()} | R$ ${p.getPreco().toFixed(2)}`);
    });
  }

  public calcularTotal(): number {
    return this.carrinho.reduce((total, p) => total + p.getPreco(), 0);
  }
}

// ===============================
// Execução do projeto
// ===============================

const loja = new Loja("Tech Store");

// Criando produtos
const produto1 = new Produto(1, "Notebook Gamer", 5500);
const produto2 = new Produto(2, "Mouse RGB", 200);
const produto3 = new Produto(3, "Teclado Mecânico", 350);

// Adicionando produtos à loja
loja.adicionarProduto(produto1);
loja.adicionarProduto(produto2);
loja.adicionarProduto(produto3);

// Exibindo produtos da loja
loja.listarProdutos();

// Criando cliente e adicionando itens ao carrinho
const cliente = new Cliente("Maria");
cliente.adicionarAoCarrinho(produto1);
cliente.adicionarAoCarrinho(produto3);

// Exibindo o carrinho e total
cliente.exibirCarrinho();
console.log(`\nTotal da compra: R$ ${cliente.calcularTotal().toFixed(2)}\n`);
