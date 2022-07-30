var mockData=[{
    name: 'sp 1',
    price:'999',
    picture:''
},
{
    name: 'sp 2',
    price:'999',
    picture:''
},
{
    name: 'sp 3',
    price:'999',
    picture:''
},
{
    name: 'sp 4',
    price:'999',
    picture:''
}]
var products = document.querySelector('.products')

/* <div class="product">
<img src="https://static2.yan.vn/YanNews/2167221/202101/mai-dora-d831557e-4d155a2a.png" alt="">
<div class="infor">
    <div class="name">Con di Thao My</div>
    <div class="price">1$</div>
</div>
</div> */

mockData.forEach(item=>{
    var newProduct = document.createElement('div')
    newProduct.classList.add('product')
    newProduct.innerHTML=`
    <img src="${item.img}" alt="">
    <div class="infor">
        <div class="name">${item.name}</div>
        <div class="price">${item.price}</div>
    </div>

    `
    products.appendChild(newProduct)
})


var text = document.querySelector('.search input')
text.addEventListener('input', function(e){
    let textTarget = e.target.value.trim().toLowerCase()
    let List = document.querySelectorAll('.products')
    List.forEach(item=>
        {
            if(item.innerHTML.toLowerCase().includes(textTarget)){
                item.classList.remove('hiden')
            }else{
                item.classList.add('hiden')
            }
        })
})