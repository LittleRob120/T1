import Produto from "../modelo/produto";
import Entrada from "../io/entrada";

export default class CadastroProduto {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        let nome = this.entrada.receberTexto("Nome do produto: ");
        let valor = this.entrada.receberNumero("Valor do produto: ");
        let produto = new Produto(nome, valor);
        this.produtos.push(produto);
        console.log("Produto cadastrado!");
    }

    public listar(): void {
        this.produtos.forEach((produto, i) => {
            console.log(`${i + 1}. ${produto.nome}`);
        });
    }

    public atualizar(): void {
        this.listar();
        let idx = this.entrada.receberNumero("Escolha o produto para atualizar: ") - 1;
        if (idx >= 0 && idx < this.produtos.length) {
            let novoNome = this.entrada.receberTexto("Novo nome: ");
            this.produtos[idx].nome = novoNome;
            console.log("Produto atualizado!");
        }
    }

    public remover(): void {
        this.listar();
        let idx = this.entrada.receberNumero("Escolha o produto para remover: ") - 1;
        if (idx >= 0 && idx < this.produtos.length) {
            this.produtos.splice(idx, 1);
            console.log("Produto removido!");
        }
    }
}