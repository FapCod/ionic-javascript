console.log("hello world?")
const productName=document.querySelector('#productname')
const productPreci=document.querySelector('#productprice')
const btnSave=document.querySelector('#button-save')
const btnClear=document.querySelector('#button-clear')
const productList=document.querySelector('#product-list')
const totalId=document.querySelector('#total')
let total=0
const createNewProduct = (name,price)=>{
    const ionCard=document.createElement('ion-card')
    const ioncardContent= document.createElement('ion-card-content')
    ioncardContent.textContent= name +': $'+price
    ionCard.appendChild(ioncardContent)
    productList.appendChild(ionCard)
}
const clearInput= ()=>{
    productName.value=''
    productPreci.value=''
}
const validarVacio= str=> !str.trim().length

const  presentAlert=()=> {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = 'Por favor verifique los datos';
    alert.message = 'Los datos deben estar vacios.';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    return alert.present();
  }

btnSave.addEventListener('click', ()=>{
    const name=productName.value
    const price=productPreci.value
    console.log(name,price)

    if(validarVacio(name) || price<=0 || validarVacio(price)){
        console.log('datos no validos')
        presentAlert()
        return
    }
    createNewProduct(name,price)
    total+=+price
    totalId.textContent=total
    clearInput()
})

btnClear.addEventListener('click',()=>{
    clearInput()
})