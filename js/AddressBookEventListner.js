window.addEventListener('DOMContentLoaded',(event)=>
{
    const name=document.querySelector("#name");
    const textError = document.querySelector(".name-error");
    name.addEventListener('input', function () 
    {
        if(name.value.length==0)
        {
            textError.textContent="";
            return;
        }
        try
        {
            (new AddressBookData()).name=name.value;
            textError.textContent="";
        }
        catch(ex)
        {
            textError.textContent=ex;
        }
    });

    const phone=document.querySelector("#phone");
    const phoneError = document.querySelector(".phone-error");
    phone.addEventListener('input', function () 
    {
        if(phone.value.length==0)
        {
            phoneError.textContent="";
            return;
        }
        try
        {
            (new AddressBookData()).phone=phone.value;
            phoneError.textContent="";
        }
        catch(ex)
        {
            phoneError.textContent=ex;
        }
    });

    const zipcode=document.querySelector("#zipcode");
    const zipError = document.querySelector(".address-error");
    zipcode.addEventListener('input', function () 
    {
        if(zipcode.value.length==0)
        {
            zipError.textContent="";
            return;
        }
        try
        {
            (new AddressBookData()).zipcode=zipcode.value;
            zipError.textContent="";
        }
        catch(ex)
        {
            zipError.textContent=ex;
        }
    });
});

/*Uc3 - create employee payroll object on doing save operation */
const save=()=>
{
    try
    {
        let addressBookData=createAddressBook();
        if(addressBookData!=null)
        {
            createAndUpdateStorage(addressBookData); /Uc 4/
        }
    }
    catch(ex)
    {
        return;
    }
}

const createAddressBook=() =>
{
    let addressBookData=new AddressBookData();
    try
    {
        addressBookData.name=getInputValueById("#name");
    }
    catch(e)
    {
        setTextValue(".name-error",e);
        throw e;
    }
    addressBookData.notes=getInputValueById("#notes");
    addressBookData.state=getInputValueById("#state"); 
    addressBookData.city=getInputValueById("#city");
    try
    {
        addressBookData.zipcode=getInputValueById("#zipcode");
    }
    catch(e)
    {
        setTextValue(".zipcode-error",e);
        throw e;
    }
    try
    {
        addressBookData.phone=getInputValueById("#phone");
    }
    catch(e)
    {
        setTextValue(".phone-error",e);
        throw e;
    }
    alert(addressBookData.toString());
    return addressBookData;
}


const getSelectedValues=(propertyValue)=>
{
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item=>
    {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById=(id) =>
{
    let value=document.querySelector(id).value;
    return value;
}

const setTextValue=(id,value) =>
{
    const element=document.querySelector(id);
    element.textContent=value;
}
/Uc 4 storing in local storage/
function createAndUpdateStorage(addressBookData)
{
    let employeePayrollList=JSON.parse(localStorage.getItem("AddressBookList"));/*Json parse used to convert json to object format */
    if(employeePayrollList!=undefined)
    {
        employeePayrollList.push(addressBookData);
    }
    else
    {
        employeePayrollList=[addressBookData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("AddressBookList",JSON.stringify(employeePayrollList));/* json.stringify used to convert object to json */
}
/*Uc-5 reset operation */
const resetForm=() =>
{
  setValue('#name','');
  setValue('#notes','');
  setValue('#city','');
  setValue('#state','');
  setValue('#zipcode','');
  setValueByClassName('.name-error','');
  setValueByClassName('.phone-error','');
  setValueByClassName('.address-error','');
}

const setValue=(id,value)=>
{
  const element = document.querySelector(id);
  element.value=value;
}

const setValueByClassName=(id,value)=>
{
  const element = document.querySelector(id);
  element.textContent=value;
}

const unsetSelectedValues=(property)=>
{
  let allItems = document.querySelectorAll(property);
  allItems.forEach(item=>{
      item.checked=false;
  });
}