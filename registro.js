const aplication = document.querySelector('.table');
const getURL = new URLSearchParams(window.location.search);

const url = 'https://api.datos.gob.mx/v2/Releases_SFP';

id=getURL.get('id');
console.log(id);

fetch(url)
    .then(response => response.json())
    .then(data => mostrarInfo(data))
    .catch(err => console.log(err));

const mostrarInfo=(data)=>{
    data.results.forEach(element => {
        if(element._id == id){
            const tr = document.createElement('tr');
            tr.setAttribute('id',element._id);
            tr.addEventListener('click',()=>{
                window.location.href=`./registro.html?id=${element._id}`;
            });
            tr.innerHTML = `<td>${element._id}</td><td>${element.buyer.name}</td><td>${element.buyer.id}</td><td>${element.tender.title}</td>`;
            aplication.appendChild(tr);
        };
    });
}