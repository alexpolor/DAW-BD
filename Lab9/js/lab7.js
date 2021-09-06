const formPass = document.getElementById("form");
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
formPass.addEventListener("submit", comparaPass);

const expresiones = {
	
	password: /^.{4,12}$/, 
	
}

function comparaPass(){
    if(pass1.value!=pass2.value){
        
        alert("Contraseña no coincide, verificar");
        
    }else{
        alert("Correcto, puede continuar");
        
    }
    
    

}


