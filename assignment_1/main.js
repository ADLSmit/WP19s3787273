
window.onload = function(){

    function changeTitleIndex() {

        if (document.title !== "Webprogramming (LIX019P05) - Index") {
            document.title = "Webprogramming (LIX019P05) - Index";
        }

        else if ( document.title === "Webprogramming (LIX019P05) - Second") {
            document.title = "Webprogramming (LIX019P05) - Second";
        }
    }

    function changeColor() {
        document.getElementsByClassName("nav-item")[0].style.backgroundColor = "red";
        document.getElementsByClassName("nav-item")[1].style.backgroundColor = "red";
    }

    function addArticle() {

        let art = document.createElement("article");

        let heading = document.createElement("H1");
        let par = document.createElement("P");

        art.appendChild(heading);
        art.appendChild(par);

        let txtH = document.createTextNode("Second Article");
        let txtP = document.createTextNode("This is the text of the second article.");

        heading.appendChild(txtH);
        par.appendChild(txtP);

        let artnew = document.getElementsByClassName("col-md-12")[0];
        artnew.appendChild(art);

    }

    function addSidebar() {

        let sideb = document.createElement("div");
        sideb.className = "col-md-4";

        let head = document.createElement("H1");
        sideb.appendChild(head);

        let text = document.createTextNode("This is the heading of the sidebar.");

        head.appendChild(text);

        let sidebnew = document.getElementsByClassName("col-md-8")[0];
        sidebnew.appendChild(sideb);

    }

    function addLink() {

        document.getElementsByClassName("tab-content");

        let link = document.getElementsByTagName("li")[2];
        link.href = "https://google.com";

        let addattr = document.getElementsByTagName("li")[0];
        addattr.setAttribute("target", "_blank")

    }

    window.addEventListener('load', function () {
        console.log('Document Object Model has been loaded.');
    });


    changeTitleIndex();
    addArticle();
    changeColor();
    addSidebar();
    addLink();

};
