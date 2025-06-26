import Cliente from "../modelo/cliente";

export default class ListagemMelhoresClientes {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listarTop10(): void {
        let ranking: { cliente: Cliente, total: number }[] = [];
        this.clientes.forEach(cliente => {
            let total = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            ranking.push({ cliente, total });
        });
        ranking.sort((a, b) => b.total - a.total);
        console.log("\nTop 10 clientes que mais consumiram:");
        ranking.slice(0, 10).forEach((item, i) => {
            console.log(`${i + 1}. ${item.cliente.nome} - ${item.total} consumos`);
        });
    }

    public listarTop5PorValor(): void {
        let ranking: { cliente: Cliente, total: number }[] = [];
        this.clientes.forEach(cliente => {
            let total = 0;
            cliente.getProdutosConsumidos.forEach(produto => {
                total += produto.valor;
            });
            cliente.getServicosConsumidos.forEach(servico => {
                total += servico.valor;
            });
            ranking.push({ cliente, total });
        });
        ranking.sort((a, b) => b.total - a.total);
        console.log("\nTop 5 clientes que mais consumiram em valor:");
        ranking.slice(0, 5).forEach((item, i) => {
            console.log(`${i + 1}. ${item.cliente.nome} - R$ ${item.total.toFixed(2)}`);
        });
    }
}