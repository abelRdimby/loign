  // var anana = 'maintso be mihintsy ';
  // console.log(anana)
fetch("https://jsonplaceholder.typicode.com/users")

.then ((response) => response.json())
.then(data => {
data.forEach(function (element, index, array) {
    // console.log(data)
    document.getElementById('tableau').innerHTML += `
    <tr>
        <th style="text-align: left"><p>${data[index].name}</p></th>
        <th style="text-align: left"><p>${data[index].username}</p></th>
        <th style="text-align: left"><p>${data[index].email}</p></th>
    </tr>
    ` 
    })  
  }       
)

