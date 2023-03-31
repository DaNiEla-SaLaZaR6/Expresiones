const nombre=document.querySelector('.nombre1')
const apellido=document.querySelector('#apellido')
const telefono=document.querySelector('.telefono1')
const email=document.querySelector('.email1')
const contraseña=document.querySelector('.contraseña1')
const repetir=document.querySelector('.repetir1')
const botones=document.querySelector('.botones')
const fecha=document.querySelector('.fecha1')
const registrar=document.querySelector('.registrar')
const cancelar=document.querySelector('.cancelar')



const ini =/^[a-z]+\D$/i
const formato=/[0-3]{1}[0-9]{1}[/][0]{1}[0-9]{1}|[1]{1}[0-2]{1}[/]\d{4}/i
const telefon=/[3]\d{9}$/
const correo=/^[a-z]+[0-9]+@[a-z]+\.[a-z]/i
let apellidos=''
let nombres=''
let formatos=''
let telefonos=''
let correos=''
let contraseñas=''

registrar.addEventListener('click',(e) => {
    e.preventDefault()    
    nombres = ini.test(nombre.value)
    apellidos=ini.test(apellido.value)
    formatos=formato.test(fecha.value)
    telefonos=telefon.test(telefono.value)
    correos=correo.test(email.value)
    
    if (nombres == true){
     } else{
        alert('nombre incorrecto')
    }

    if(apellidos==true){
        console.log('listo')
    } else{
        alert('apellido incorrecto')
    }
    
    if(formatos==true){
        console.log('listo formato')
    } else{
        alert('formulario exitoso')
   
    }
    if(telefonos==true){
        console.log('listo el telefono')
    }else{
        console.log('inavalido telefono')
    }
    if(correos == true){
        console.log('listo el correo')
    }else{
        console.log('list correo')
    }
    if(contraseña.value === repetir1.value){
        console.log('la contraseña es igual')
        contraseñas=true
    }else{
        console.log(' contraseña invalida')
    }
})
