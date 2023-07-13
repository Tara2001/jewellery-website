
fetch('https://fakestoreapi.com/users').then((data) => {
    // console.log(data);
    return data.json();
}).then((objectData) => {
    console.log(objectData);
    let tableData ="";
    objectData.map((values) => {
        // console.log(values.address.city);
        tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.name.firstname} ${values.name.lastname}</td>
        <td>${values.username}</td>
        <td>${values.password}</td>
        <td>${values.phone}</td>
        <td>${values.address.geolocation.lat} &nbsp ${values.address.geolocation.long}</td>
        <td>${values.address.city}</td>
        <td>${values.address.street}</td>
        <td>${values.address.number}</td>
        <td>${values.address.zipcode}</td>
    </tr>`;
    })
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err) => {
    console.log(err);
})