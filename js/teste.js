let input = document.getElementById("digiteTarefa");
let buttonAdd = document.getElementById("buttonADD");
let main = document.getElementById("areaLista");
let contador = 0;

function adicionar(){
        let novoItem;
        valorInput = input.value;

        if((valorInput !== null) && (valorInput !== "")){
            contador++

            novoItem = `<div class="item" id= ${contador} >
            <div onclick="check(${contador})" class="icone_Div">
                <i id=icone_${contador} class="mdi mdi-circle-outline"></i>
            </div>
            
            <div class="nome_Tarefa"> ${valorInput}</div>
            <div class="div_Button_Deletar">
                <button type="button" class="button_Deletar">Deletar</button>
            </div>
            </div>`
            
            main.innerHTML += novoItem;
            
        }


}

function check(id){
      let item = document.getElementById(id);
      let classe = item.getAttribute('class');
     

      if(classe == "item"){
        item.classList.add('itemclicado');
        let icone = document.getElementById("icone_"+ id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
      }

      
    
}