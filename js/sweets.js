function onResponse(resp) {
    // na koji cemo nacin cemo (ako je sve proslo ok) da rijesimo date podatke
    // return resp.text(); -> rezultat koji dobije pomocu f-je fetch da tretira kao tekst
    return resp.json();
}

function onJSON(t) {
    // console.log(t);
    let lista = document.createElement('ul');
    lista.classList.add('slatkisi');
    for (const el of t) {
        let slatkis = document.createElement('li');
        slatkis.classList.add('item');
        if (el.quantity > 0) {
            slatkis.classList.add('available');
        }
        else {
            slatkis.classList.add('sold-out');
        }
        slatkis.innerHTML = el.name + "<br>" + el.brand; // ne preporucuje se preko innerHTML, nego preko text node
        // console.log('Ime: ' + el.name);
        let btn = document.createElement('button');
        btn.classList.add('dugme');
        btn.textContent = 'Kupi';
        slatkis.appendChild(btn);
        lista.appendChild(slatkis); 
    }
    // lista mora da se zakaci za jedan od div elemenata
    document.querySelector('#listaslatkisa').appendChild(lista);
}

fetch('slatko.json')
.then(onResponse) // argument je Promise, a Promise je f-ja
.then(onJSON) // to sto je rezultat prvog then-a (Promisa) predaje se kao argument ovom then-u