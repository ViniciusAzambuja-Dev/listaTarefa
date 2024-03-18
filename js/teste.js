let input = document.getElementById("digiteTarefa");
let main = document.getElementById("areaLista");
let contador = 0;

function adicionar(){
    let novoItem;
    valorInput = input.value;

    if((valorInput !== null) && (valorInput !== "")){
        contador++

        novoItem = `<div class="item" id= ${contador}>
        <div onclick="check(${contador})" class="icone_Div">
            <i id=icone_${contador} class="mdi mdi-circle-outline"></i>
        </div>
            
        <div class="nome_Tarefa"> ${valorInput}</div>
        <div onclick="deletar(${contador})" class="div_Button_Deletar">
            <button type="button" class="button_Deletar">Deletar</button>
        </div>

        </div>`
            
            main.innerHTML += novoItem;
            input.value = "";
        }
}

function check(id){
      var item = document.getElementById(id);
      var classe = item.getAttribute('class');
     

      if(classe == "item"){
        item.classList.add('itemclicado');

        var icone = document.getElementById("icone_"+ id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
      }
      else{
        item.classList.remove('itemclicado');
        item.classList.add('item');

        var icone = document.getElementById("icone_"+ id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    
      }
}

function deletar(id){
    var itemRemover = document.getElementById(id);
    itemRemover.remove();
}

function focar(){
    input.focus();
}

