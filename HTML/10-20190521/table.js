var table = document.createElement('table');
document.body.appendChild(table);

var thead = document.createElement('thead');
table.appendChild(thead);


var tr = document.createElement('tr');
thead.appendChild(tr);

var arrayth = ['ID', 'NAME', 'EMAIL', 'PASSWORD', 'CREATED_AT', 'UPDATED_AT']
for (var i = 0; i < arrayth.length; i = i + 1) {
  console.log(i);
  var th = document.createElement('th');
  var ContentTH = document.createTextNode(arrayth[i]);
  th.appendChild(ContentTH);
  tr.appendChild(th);
}


var tbody = document.createElement('tbody');
table.appendChild(tbody);

var tr = document.createElement('tr');
tbody.appendChild(tr);


var data = {
    "users": [{
        "id": 10,
        "name": "Ethyl Medhurst",
        "email": "noah.hand@example.org",
        "password": "$2y$10$GLfHbVK./jG2WD8QQ0.ZDOqqeJe7rz.hl827sKoHOhd9LLoXfyHHG",
        "created_at": "2019-03-26 04:55:04",
        "updated_at": "2019-03-26 04:55:04"
      },
      {
        "id": 9,
        "name": "Eula Lebsack PhD",
        "email": "schroeder.sylvan@example.org",
        "password": "$2y$10$.vzCIUVX34GibJ3.ObFqYu5Bd.Ig8PqF3adoLHza78eq510mfhy9G",
        "created_at": "2019-03-26 04:55:03",
        "updated_at": "2019-03-26 04:55:03"
      },
      {
        "id": 8,
        "name": "Mrs. Kathlyn Parisian DDS",
        "email": "ggrimes@example.net",
        "password": "$2y$10$N.DpYW9Sd0c8p3rSVjO0MeZ5e7idfPeKPZyOO77m8vNSEOnMws5O2",
        "created_at": "2019-03-26 04:55:03",
        "updated_at": "2019-03-26 04:55:03"
      }
    ]
  };  

var arraytd = data.users[0];
console.log(arraytd);  
for (var i = 0; i < arraytd.length; i = i + 1) {
    console.log(i);
    var td = document.createElement('td');
    var ContentTD = document.createTextNode(arraytd[i]);
    td.appendChild(ContentTD);
    tr.appendChild(td);
}  


