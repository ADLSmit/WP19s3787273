function addArticle(){
    // New Article
    let newArticle = document.createElement('article');
    // New Heading
    let newHeading = document.createElement('h1');
    let headingText = document.createTextNode("New Heading");
    newHeading.appendChild(headingText);
    // New Paragraph
    let newParagraph = document.createElement('p');
    let paragraphText = document.createTextNode("New Paragraph");
    newParagraph.appendChild(paragraphText);
    // Fill Article
    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);
    // Add new article to main column
    let mainColumn = document.getElementsByClassName('col-md-12');
    mainColumn[0].append(newArticle);
}

function changeHref(){
    let liElement = document.getElementById('links').firstElementChild.childNodes[5].firstChild;
    // 4.3.
    liElement.setAttribute('href', 'https://google.com');
    // 4.4.
    liElement.setAttribute('target', '_blank');
}

function changeToRed(){
    let navBar = document.getElementsByClassName('nav-item');
    for (var i = 0; i < navBar.length; i++) {
        navBar[i].firstElementChild.style.color = 'red';
    }
}

function printObject(){
    let schedule = {
        'Week 1': 'Assignment 1',
        'Week 2': 'No lecture',
        'Week 3': 'Assignment 2',
        'Week 4': '-',
        'Week 5': 'Assignment 3',
        'Week 6': '-',
        'Week 7': 'Guest Lecture'
    };
    let newHtml = '';
    for (let week of Object.keys(schedule)) {
        let todo = schedule[week];
        newHtml += `${week} : ${todo}<br>`;
    }
    let mainColumn = document.getElementsByClassName('col-md-12');
    let newElement = document.createElement('div');
    newElement.innerHTML = newHtml;
    mainColumn[0].append(newElement);
}

function addSidebar() {
    // Change class of main column
    let mainColumn = document.getElementsByClassName('col-md-12')[0];
    mainColumn.classList.add('col-md-8');
    mainColumn.classList.remove('col-md-12');
    // Create sidebar with heading
    let sidebar = document.createElement('div');
    sidebar.classList.add('col-md-4');
    let newHeading = document.createElement('h1');
    let headingText = document.createTextNode("New Heading");
    newHeading.appendChild(headingText);
    sidebar.appendChild(newHeading);
    // Add sidebar besides main column
    mainColumn.parentNode.appendChild(sidebar);
    // Create row around both the main column and sidebar
    let row = document.createElement('div');
    row.classList.add('row');
    let oldParent = mainColumn.parentNode;
    while (oldParent.childNodes.length > 0) {
        row.appendChild(oldParent.childNodes[0]);
    }
    let container = document.getElementsByClassName('container')[0];
    container.appendChild(row);
}

window.addEventListener('load', function () {
    let url = window.location.href.split('/').slice(-1)[0];
    if (url == 'index.html'){
        // 4.1.
        document.title = 'Webprogrammering (LIX019P05) - Index';
        // 4.2.
        addArticle();
        // 4.3. and 4.4.
        changeHref();
        //4.5.
        changeToRed();
        // 4.6.
        printObject();
    } else if(url == 'second.html'){
        // 4.1.
        document.title = 'Webprogramming (LIX019P05) - Second';
        // 4.7.
        addSidebar();
    }
});