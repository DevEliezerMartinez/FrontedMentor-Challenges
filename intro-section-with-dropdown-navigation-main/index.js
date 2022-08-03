console.log("hi");
showExtendedMenu = () => {
    let container_item = document.getElementsByClassName("item");

    for (let index = 0; index <= 1; index++) {
        container_item[index].addEventListener('click', function() {
            if (document.getElementsByClassName("dropdown")[index].style.display == "none") {
                document.getElementsByClassName("dropdown")[index].style.display = "block";
            } else {
                document.getElementsByClassName("dropdown")[index].style.display = "flex";
            }


        });

        /* document.getElementsByTagName("main")[0].addEventListener('click', function() {

            document.getElementsByClassName("dropdown")[index].style.display = "none";
        }); */


    }
}

showMenuMobile = () => {
    let icon_menu = document.getElementsByClassName("menu_icon");
    let menu_drop = document.getElementsByClassName("container_list")[0];
    let main = document.getElementsByTagName("main")[0];



    for (let index = 0; index <= 1; index++) {
        console.log("a");
        icon_menu[index].addEventListener('click', function() {

            if (menu_drop.style.display == "flex") {
                menu_drop.style.display = "none";
                main.style.backgroundColor = "rgba(0,0,0,0.0)"

            } else {
                menu_drop.style.display = "flex";

                main.style.backgroundColor = "rgba(0,0,0,0.8)"

            }

        });
    }

}

showExtendedMenu();
showMenuMobile();