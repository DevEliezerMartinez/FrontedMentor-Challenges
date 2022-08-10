console.log("hello world");
open_cart = () => {
    let carrito_icon = document.getElementById("icon_cart");
    let cart = document.getElementsByClassName("cart")[0];

    carrito_icon.addEventListener('click', function() {



        if (cart.style.display == "") {
            cart.style.display = "block"
        } else {
            cart.style.display = ""
        }

    });
}


amount_products = () => {
    let buttons_op = document.getElementsByClassName("selector");
    let amount = 0;
    for (let index = 0; index < buttons_op.length; index++) {

        buttons_op[index].addEventListener('click', function() {
            if (buttons_op[index].innerText == "+") {
                amount++;
                document.getElementById("amount_product").innerText = amount;
            }

            if (buttons_op[index].innerText == "-") {
                if (amount > 0) {
                    amount--;
                    document.getElementById("amount_product").innerText = amount;
                }

            }

        });

    }

}
open_galery = () => {
    let pop = document.getElementsByClassName("popup")[0];
    let close = document.getElementById("close_gallery");
    let imagespop = document.getElementsByClassName("other_images");

    for (let index = 0; index < imagespop.length; index++) {

        imagespop[index].addEventListener('click', function() {
            pop.style.display = "flex"

        });
    }

    close.addEventListener('click', function() {
        pop.style.display = ""


    });

}
change_img = () => {
    let imagespop = document.getElementsByClassName("other_images");
    let principal_img = document.getElementById("carouselpop");


    for (let index = 0; index <= 3; index++) {
        imagespop[index].addEventListener('click', function() {
            for (let i = 4; i <= 7; i++) {
                imagespop[i].addEventListener('click', function() {
                    /*  console.log(`url(images/image-product-${i-3}.jpg)`); */
                    principal_img.style.backgroundImage = `url(images//image-product-${i-3}.jpg)`;



                });

            }
        });

    }


}

read_product_info = () => {
    const product = document.getElementsByClassName('content')[0];
    const amount = document.getElementById("amount_product");
    const info_product = {
        titulo: product.querySelector('h2').textContent,
        precio: product.querySelector('#normal_price').textContent,
        cantidad: amount.textContent,
    }
    add_cart(info_product);
    document.getElementsByClassName("label")[0].style.display = "none";
}

add_cart = (product) => {
    const amount = document.getElementById("amount_product");

    if (amount.innerText > 0) {
        const cona = document.createElement('div');
        cona.classList.add("container_cart");
        let contenedor = document.getElementsByClassName("container")[0];


        cona.innerHTML = `
        <div class="details">
        <img src="images/image-product-1.jpg" class="miniature_product" alt="miniature_product">
                                <p>${product.titulo}
                                    <span>${product.precio}</span>
                                    <span>x</span>
                                    <span>${product.cantidad}</span>
                                    <span id="final_price">$ ${product.precio*product.cantidad}</span>
                                </p>
                                <img src="images/icon-delete.svg" alt="delete icon" id="delete">
        </div>
    
                            
                            <button class="cart_button">Checkout</button>
    
        `;
        contenedor.appendChild(cona);
        change_amount_min();
    }



}

change_amount_min = () => {
    let n = document.getElementsByClassName("container_cart").length;
    console.log(n);
    let miniature_amount = document.getElementById("amount");
    miniature_amount.innerText = n;


}


open_cart();
amount_products();
open_galery();
change_img();

/*read_product_info(); */