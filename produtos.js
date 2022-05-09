var salvar = new Array();

class Cadastro{
  constructor(tipo, fornecedor, descricao, unidade, quantidade, custo, lote, fabricacao, vencimento){
    this.tipo = tipo;
    this.fornecedor = fornecedor;
    this.descricao = descricao;
    this.unidade = unidade;
    this.quantidade = quantidade;
    this.custo = custo;
    this.lote = lote;
    this.fabricacao = fabricacao;
    this.vencimento = vencimento;
  }
  

  mensagem()
    {
    alert("Cadastro Efetuado com Sucesso!"+"\n"+"\n"+"DETALHES"+"\n"+"\n"+"TIPO: "+this.tipo+"\n"+"FORNECEDOR: "+this.fornecedor+"\n"+"DESCRIÇÃO: "+this.descricao+"\n"+"UNIDADE: "+this.unidade+"\n"+"QUANTIDADE: "+this.quantidade+"\n"+"CUSTO: R$ "+this.custo+"\n"+"Nº DE LOTE: "+this.lote+"\n"+"DATA DE FABRICAÇÃO: "+this.fabricacao+"\n"+"DATA DE VENCIMENTO: "+this.vencimento);
    }


}


/* LISTAGEM DOS CADASTROS NA .HOME*/
function carregar(){
  var carrega = document.getElementById('load');
  var tamanho = salvar.length;
  var texto = "";
  if(tamanho !=0){
    texto="";
    for(i=0;i<tamanho;i++)
    {
     texto = texto+ '<li onclick="mostrar(' + salvar[i].descricao + ')">' + salvar[i].quantidade+"</li>";
     }
  } 				
  else{
    texto = "Nenhum cadastro até o momento";
  }

  carrega.innerHTML = texto;
}

function mostrar(descricao){
  alert(descricao);
}


/* LIMPAR AS INPUTS E SELECTS PARA PODER DIGITAR DE NOVO */
function limpar(){
  document.querySelector('#tipo').selectedIndex = 0;
  document.querySelector('#fornecedor').value = '';
  document.querySelector('#unidade').value = '';
  document.querySelector('#quantidade').value = '';
  document.querySelector('#custo').value ='';
  document.querySelector('#lote').value = '';
  document.querySelector('#fabricacao').selectedIndex = 0;
  document.querySelector('#vencimento').selectedIndex = 0;
}


/* SALVAR OS CADASTROS REALIZADOS*/
document.querySelector('#btnsalvar').onclick = function(evt) {

  if (document.querySelector('#tipo').value = "" || (document.querySelector('#fornecedor').value = "" || (document.querySelector('#unidade').value = "" || (document.querySelector('#quantidade').value = "" || (document.querySelector('#custo').value = "" || (document.querySelector('#lote').value = "" || (document.querySelector('#fabricacao').selectedIndex = "" || (document.querySelector('#vencimento').selectedIndex = "")))))))) {
    alert("Preencha todos os dados solicitados")
  }
  else {

  var tipo = document.querySelector('#tipo').value;
  var fornecedor = document.querySelector('#fornecedor').value;
  var descricao = document.querySelector('#descricao').value;
  var unidade = document.querySelector('#unidade').value;
  var quantidade = document.querySelector('#quantidade').value;
  var custo = document.querySelector('#custo').value;
  var lote = document.querySelector('#lote').value;
  var fabricacao = document.querySelector('#fabricacao').value;
  var vencimento = document.querySelector('#vencimento').value;
  var usuario = new Cadastro(tipo, fornecedor, descricao, unidade, quantidade, custo, lote, fabricacao, vencimento);
  salvar.push(usuario);
  usuario.mensagem();
  carregar();	

  limpar();
}
}


/* FAZER A .HOME E A .CADASTRO SUMIR E APARECER*/
document.querySelector('.cadastro').style.display = 'none'

document.querySelector('#add').onclick = function(evt){
  document.querySelector('.cadastro').style.display = 'block'
  document.querySelector('.home').style.display = 'none'
}

document.querySelector('#voltar').onclick = function(evt){
  document.querySelector('.cadastro').style.display = 'none'
  document.querySelector('.home').style.display = 'block'
}
