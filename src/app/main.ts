import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemMelhoresClientes from "../negocio/listagemMelhoresClientes";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemProdutosConsumidos from "../negocio/listagemProdutosConsumidos";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Atualizar cliente`);
    console.log(`3 - Remover cliente`);
    console.log(`4 - Adicionar pet ao cliente`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Atualizar produto`);
    console.log(`7 - Remover produto`);
    console.log(`8 - Registrar consumo de produto`);
    console.log(`9 - Registrar consumo de serviço`);
    console.log(`10 - Listar top 10 clientes`);
    console.log(`11 - Listar produtos mais consumidos`);
    console.log(`12 - Listar serviços mais consumidos`);
    console.log(`13 - Listar consumo por tipo e raça de pet`);
    console.log(`14 - Listar top 5 clientes por valor consumido`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            new CadastroCliente(empresa.getClientes).cadastrar();
            break;
        case 2:
            new CadastroCliente(empresa.getClientes).atualizar();
            break;
        case 3:
            new CadastroCliente(empresa.getClientes).remover();
            break;
        case 4:
            new CadastroCliente(empresa.getClientes).adicionarPet();
            break;
        case 5:
            new CadastroProduto(empresa.getProdutos).cadastrar();
            break;
        case 6:
            break;
        case 7:
            new CadastroProduto(empresa.getProdutos).remover();
            break;
        case 8: {
            let clientes = empresa.getClientes;
            let produtos = empresa.getProdutos;
            if (clientes.length === 0 || produtos.length === 0) {
                console.log("Cadastre clientes e produtos primeiro!");
                break;
            }
            new ListagemClientes(clientes).listar();
            let idxCliente = entrada.receberNumero("Escolha o cliente pelo número: ") - 1;
            if (idxCliente < 0 || idxCliente >= clientes.length) {
                console.log("Cliente inválido.");
                break;
            }
            new CadastroProduto(produtos).listar();
            let idxProduto = entrada.receberNumero("Escolha o produto pelo número: ") - 1;
            if (idxProduto < 0 || idxProduto >= produtos.length) {
                console.log("Produto inválido.");
                break;
            }
            let clienteSelecionado = clientes[idxCliente];
            let produtoSelecionado = produtos[idxProduto];
            clienteSelecionado.getProdutosConsumidos.push(produtoSelecionado);
            console.log("Consumo registrado!");
            break;
        }
        case 9: {
            let clientes = empresa.getClientes;
            let servicos = empresa.getServicos;
            if (clientes.length === 0 || servicos.length === 0) {
                console.log("Cadastre clientes e serviços primeiro!");
                break;
            }
            new ListagemClientes(clientes).listar();
            let idxCliente = entrada.receberNumero("Escolha o cliente pelo número: ") - 1;
            if (idxCliente < 0 || idxCliente >= clientes.length) {
                console.log("Cliente inválido.");
                break;
            }
            new CadastroServico(servicos).listar();
            let idxServico = entrada.receberNumero("Escolha o serviço pelo número: ") - 1;
            if (idxServico < 0 || idxServico >= servicos.length) {
                console.log("Serviço inválido.");
                break;
            }
            let clienteSelecionado = clientes[idxCliente];
            let servicoSelecionado = servicos[idxServico];
            clienteSelecionado.getServicosConsumidos.push(servicoSelecionado);
            console.log("Consumo registrado!");
            break;
        }
        case 10:
            new ListagemMelhoresClientes(empresa.getClientes).listarTop10();
            break;
        case 11:
            new ListagemProdutosConsumidos(empresa.getClientes).listarProdutosMaisConsumidos();
            break;
        case 12:
            new ListagemProdutosConsumidos(empresa.getClientes).listarServicosMaisConsumidos();
            break;
        case 13:
            new ListagemProdutosConsumidos(empresa.getClientes).listarConsumoPorTipoRaca();
            break;
        case 14:
            new ListagemMelhoresClientes(empresa.getClientes).listarTop5PorValor();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}