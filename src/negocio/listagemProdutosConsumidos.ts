import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class ListagemProdutosConsumidos {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
    }

    public listarProdutosMaisConsumidos(): void {
        let contagem: { [nome: string]: number } = {};
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach((produto: Produto) => {
                contagem[produto.nome] = (contagem[produto.nome] || 0) + 1;
            });
        });

        let ordenado: [string, number][] = [];
        for (let nome in contagem) {
            ordenado.push([nome, contagem[nome]]);
        }
        ordenado.sort((a, b) => b[1] - a[1]);

        console.log("\nProdutos mais consumidos:");
        for (let i = 0; i < ordenado.length; i++) {
            const [nome, qtd] = ordenado[i];
            console.log(`${i + 1}. ${nome} - ${qtd} vezes`);
        }
    }

    public listarServicosMaisConsumidos(): void {
        let contagem: { [nome: string]: number } = {};
        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach((servico: Servico) => {
                contagem[servico.nome] = (contagem[servico.nome] || 0) + 1;
            });
        });

        let ordenado: [string, number][] = [];
        for (let nome in contagem) {
            ordenado.push([nome, contagem[nome]]);
        }
        ordenado.sort((a, b) => b[1] - a[1]);

        console.log("\nServiços mais consumidos:");
        for (let i = 0; i < ordenado.length; i++) {
            const [nome, qtd] = ordenado[i];
            console.log(`${i + 1}. ${nome} - ${qtd} vezes`);
        }
    }

    public listarConsumoPorTipoRaca(): void {
        let mapa: { [tipo: string]: { [raca: string]: number } } = {};

        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                let tipo = pet.getTipo;
                let raca = pet.getRaca;
                if (!mapa[tipo]) mapa[tipo] = {};
                if (!mapa[tipo][raca]) mapa[tipo][raca] = 0;

                mapa[tipo][raca] += cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            });
        });

        console.log("\nConsumo por tipo e raça de pet (contagem por cliente):");
        for (let tipo in mapa) {
            console.log(`Tipo: ${tipo}`);
            for (let raca in mapa[tipo]) {
                console.log(`  Raça: ${raca} - Consumos: ${mapa[tipo][raca]}`);
            }
        }
    }
}