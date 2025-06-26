import Servico from "../modelo/servico";
import Entrada from "../io/entrada";

export default class CadastroServico {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        let nome = this.entrada.receberTexto("Nome do serviço: ");
        let valor = this.entrada.receberNumero("Valor do serviço: ");
        let servico = new Servico(nome, valor); 
        this.servicos.push(servico);
        console.log("Serviço cadastrado!");
    }

    public listar(): void {
        console.log("\nServiços cadastrados:");
        this.servicos.forEach((s, i) => {
            console.log(`${i + 1} - ${s.nome}`);
        });
    }

    public remover(): void {
        this.listar();
        let idx = this.entrada.receberNumero("Digite o número do serviço para remover: ") - 1;
        if (idx >= 0 && idx < this.servicos.length) {
            this.servicos.splice(idx, 1);
            console.log("Serviço removido!");
        } else {
            console.log("Serviço não encontrado.");
        }
    }
}