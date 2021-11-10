//UC4-->using template literals ES6 features
//let addressBookList;
// window.addEventListener('DOMContentLoaded',(event)=>
// {
//     createInnerHtml();
// });
// const createInnerHtml=()=>
// {
//     const headerHtml="<th>Full Name</th><th>Address</th><th>City</th>"+
//     "<th>State</th><th>Zipcode</th><th>Phone Number</th> <th>Action</th>";
//     const tableContent=` ${headerHtml}  
//     <tr>
//     <td>Sakshi Lad</td>
//     <td>Shalini nivas,Panvel</td>
//     <td>Mumbai</td>
//     <td>Maharashtra</td>
//     <td>410222</td>
//     <td>91 9834978189</td>
//     <td>
//         <img id="1" onclick="remove(this)" alt="delete" src="../asserts/Delete.png" width="16" height="16">
//         <img id="1" onclick="remove(this)" alt="edit" src="../asserts/edit.png" width="16" height="16">
//     </td>
// </tr>
//     `;
//     document.querySelector('#display').innerHTML=tableContent;
// }
//uc6
let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList=getAddressBookFromLocalStorage();
    createInnerHtml();
});
//UC6--getting the data from local storage
const getAddressBookFromLocalStorage=()=>
{
    return localStorage.getItem("AddressBookList") ? JSON.parse(localStorage.getItem("AddressBookList")) : [];
}


//UC5-->employee details from json object
createInnerHtml = () => {
    let headerHtml="<th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zipcode</th><th>Phone Number</th> <th>Action</th>";
   //if (addressBookList.length==0) return;
    let innerHtml = `${headerHtml}`;
    for (let addressData of addressBookList) 
    {
        innerHtml = `${innerHtml}
        <tr>
        <td>${addressData._name}</td>
        <td>${addressData._notes}</td>
        <td>${addressData._city}</td>
        <td>${addressData._state}</td>
        <td>${addressData._zipcode}</td>
        <td>${addressData._phone}</td>
        <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../asserts/Delete.png" width="16" height="16">
        <img id="1" onclick="edit(this)" alt="edit" src="../asserts/edit.png" width="16" height="16">
        </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
//uc5
const AddressBookJSON = () => {
    let addressList = [
        {
            _name: 'Sarika Patil',
            _address: ' Ress Rasayani',
            _city: 'mumbai',
            _state: 'Maharashtra',
            _zipcode:'410222',
            _phone:'91 9834978189'

        },
        {
            _name: 'Sakshi Lad',
            _address: 'Thane',
            _city: 'mumbai',
            _state: 'Maharashtra',
            _zipcode:'410222',
            _phone:'91 9984978189'

        }
    ];
    return addressList;
}