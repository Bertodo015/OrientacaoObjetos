class Pessoa {
    private _nome: string;
    private _idade: number;
  
    constructor(_nome: string, _idade: number) {
      this._nome = _nome;
      this.setIdade(_idade); 
    }
  
    public getNome(): string {
      return this._nome;
    }
  
    public getIdade(): number {
      return this._idade;
    }
  
    public setNome(novoNome: string): void {
      if (novoNome.trim().length > 0) {
        this._nome = novoNome;
      } else {
        console.log("Nome inválido!");
      }
    }
  
    public setIdade(novaIdade: number): void {
      if (novaIdade > 0) {
        this._idade = novaIdade;
      } else {
        console.log("Idade inválida");
      }
    }
  
    public exibirInformacoes(): string {
      return `Nome: ${this.getNome()}, Idade: ${this.getIdade()} anos`;
    }
  }
  
  const pessoa = new Pessoa("Ana", 30);
  console.log(pessoa.exibirInformacoes()); 
  pessoa.setNome("Carlos");
  pessoa.setIdade(35);
  console.log(pessoa.exibirInformacoes()); 
  
  
  class Produto {
    constructor(public readonly nome: string, private preco: number) {
      if (preco < 0) {
        console.warn("O preço fornecido é negativo. Ajustando para R$0.");
        this.preco = 0;
      }
    }
  
    public getPreco(): number {
      return this.preco;
    }
  
    public setPreco(novoPreco: number): void {
      if (novoPreco >= 0) {
        this.preco = novoPreco;
      } else {
        console.error("Erro: O preço não pode ser negativo.");
      }
    }
  
    private calcularDesconto(): number {
      return this.preco * 0.10;
    }
  
    public getPrecoComDesconto(): number {
      return this.preco - this.calcularDesconto();
    }
  
    public exibirInformacoes(): void {
      console.log(`Produto: ${this.nome}, Preço: R$${this.getPreco().toFixed(2)}`);
    }
  }
  
  const produto1 = new Produto("Notebook", 2500);
  const produto2 = new Produto("Teclado", -1500); // Preço negativo
  const produto3 = new Produto("Teclado", 150);
  
  produto1.exibirInformacoes();
  produto2.exibirInformacoes();
  produto3.exibirInformacoes();
  
  console.log(`Preço com desconto (10%) do Notebook: R$${produto1.getPrecoComDesconto().toFixed(2)}`); // Saída: Preço com desconto (10%) do Notebook: R$2250.00
  
  
  class Carrinho {
    private produtos: Produto[] = [];
  
    public adicionarProduto(produto: Produto): void {
      this.produtos.push(produto);
      console.log(`Produto ${produto.nome} adicionado ao carrinho.`);
    }
  
    public calcularTotal(): number {
      return this.produtos.reduce((total, produto) => total + produto.getPreco(), 0);
    }
  
    public exibirCarrinho(): void {
      console.log("Produtos no carrinho:");
      this.produtos.forEach(produto => produto.exibirInformacoes());
      console.log(`Total do carrinho: R$${this.calcularTotal().toFixed(2)}`);
    }
  }
  
  const carrinho = new Carrinho();
  
  carrinho.adicionarProduto(produto1);
  carrinho.adicionarProduto(produto2);
  carrinho.adicionarProduto(produto3);
  
  carrinho.exibirCarrinho();