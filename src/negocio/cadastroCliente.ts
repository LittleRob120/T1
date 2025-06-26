import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada";
import CPF from "../modelo/cpf"; 
export default class CadastroCliente {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        let nome = this.entrada.receberTexto("Nome do cliente: ");
        let nomeSocial = this.entrada.receberTexto("Nome social do cliente: ");
        let valorCpf = this.entrada.receberTexto("CPF do cliente: ");
        let genero = this.entrada.receberTexto("Gênero do cliente: ");
        let cpf = new CPF(valorCpf, new Date()); 
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        this.clientes.push(cliente);
        console.log("Cliente cadastrado!");
    }

    public listar(): void {
        this.clientes.forEach((cliente, i) => {
            console.log(`${i + 1}. ${cliente.nome}`);
        });
    }

    public atualizar(): void {
        this.listar();
        let idx = this.entrada.receberNumero("Escolha o cliente para atualizar: ") - 1;
        if (idx >= 0 && idx < this.clientes.length) {
            let novoNome = this.entrada.receberTexto("Novo nome: ");
            this.clientes[idx].nome = novoNome;
            console.log("Cliente atualizado!");
        }
    }

    public remover(): void {
        this.listar();
        let idx = this.entrada.receberNumero("Escolha o cliente para remover: ") - 1;
        if (idx >= 0 && idx < this.clientes.length) {
            this.clientes.splice(idx, 1);
            console.log("Cliente removido!");
        }
    }

    public adicionarPet(): void {
        this.listar();
        let idx = this.entrada.receberNumero("Escolha o cliente para adicionar pet: ") - 1;
        if (idx >= 0 && idx < this.clientes.length) {
            let nome = this.entrada.receberTexto("Nome do pet: ");
            let raca = this.entrada.receberTexto("Raça do pet: ");
            let tipo = this.entrada.receberTexto("Tipo do pet: ");
            let genero = this.entrada.receberTexto("Gênero do pet: ");
            let pet = new Pet(nome, raca, genero, tipo);
            this.clientes[idx].getPets.push(pet);
            console.log("Pet adicionado!");
        }
    }
}