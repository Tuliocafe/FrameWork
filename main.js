function apagatela(){
    document.getElementById('divnome').style.display = 'none';
    document.getElementById('divpost').style.display = 'none';
    document.getElementById('divalbun').style.display = 'none';
    document.getElementById('divafazer').style.display = 'none';
}
function home(){
    document.getElementById('divnome').style.display = 'none';
    document.getElementById('divpost').style.display = 'none';
    document.getElementById('divalbun').style.display = 'none';
    document.getElementById('divafazer').style.display = 'none';
}

function post(mostrar){
    apagatela()
    document.getElementById(mostrar).style = 'block';
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {const postagem  = json.map(Post =>{
    return `<tr>
    <td>${Post.userId}</td>
    <td>${Post.id}</td>
    <td>${Post.title}</td>
    <td>${Post.body}</td>
</tr>`;})

document.querySelector("#Postagens tbody").innerHTML = postagem.join("");

});}

function albun(mostrar){
    apagatela()
    document.getElementById(mostrar).style = 'block';
fetch('https://jsonplaceholder.typicode.com/albums')
  .then((response) => response.json())
  .then((json) => {const albun  = json.map(Post =>{
    return `<tr>
    <td>${Post.userId}</td>
    <td>${Post.id}</td>
    <td>${Post.title}</td>
</tr>`;})

document.querySelector("#albun tbody").innerHTML = albun.join("");

});}

function tarefas(mostrar){
    apagatela();
    document.getElementById(mostrar).style = 'block';
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => {const todos  = json.map(Post =>{
    return `<tr>
    <td>${Post.userId}</td>
    <td>${Post.id}</td>
    <td>${Post.title}</td>
    <td>${Post.completed ? 'Completo' : 'Incompleto'}</td>
</tr>`;})

document.querySelector("#afazer tbody").innerHTML = todos.join("");
});}


// Funcao ainda em desenvolvimento, nao tive tempo de finalizar
// function usuario(mostrar){
//   apagatela()
//   document.getElementById(mostrar).style = 'block';
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((json) => {const user = json.map(identificacao =>{
//   return `<tr>
//   <td>${identificacao.id}</td>
//   <td>${identificacao.name}</td>
// </tr>`;})

// document.querySelector("#tabela tbody").innerHTML = user.join("");
// });}
