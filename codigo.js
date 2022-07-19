const aplication = document.querySelector('.table');

const url = 'https://api.datos.gob.mx/v2/Releases_SFP';

fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(err=>console.log(err));

const mostrarData = (data)=>{
    console.log(data);
    data.results.forEach(element => {
        const tr = document.createElement('tr');
        tr.setAttribute('id',element._id);
        tr.addEventListener('click',()=>{
            window.location.href=`./registro.html?id=${element._id}`;
        });
        tr.innerHTML = `<td>${element._id}</td><td>${element.ocid}</td><td>${element.id}</td><td>${element.date}</td>`;
        aplication.appendChild(tr);
    });
}