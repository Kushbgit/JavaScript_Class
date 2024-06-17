// async function fet(){
//     let a = await fetch("https://jsonplaceholder.typicode.com/photos")
//     let b = await a.json();
//     //document.write(b.map((e) =>`<div> <img src="${e.url}" </div>
//     //<div> ${e.id} </div>
//     //`))
//     console.log(b.map((e)=>{return e}));

// }
// fet()



async function fet(){
    let a = await fetch("http://localhost:3000/student")
    let b = await a.json();
    console.log(b.map((e)=>{return e.students}));

}
fet()