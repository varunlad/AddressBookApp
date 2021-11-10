class AddressBookData{
    get name()
    {
        return this._name;
    }
    set name(name)
    {
        let nameRegex=RegExp("^[A-Z]{1}[a-z]{2,}[ ][A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))
        {
            this._name=name;
        }
       else throw "Invalid name";
    }
    get zipcode()
    {
        return this._zipcode;
    }
    set zipcode(zipcode)
    {
        let zipcodeRegex=RegExp("^[0-9]{6}$");
        if(zipcodeRegex.test(zipcode))
        {
            this._zipcode=zipcode;
        }
       else throw "Invalid zipcode";
    }
    get phone()
    {
        return this._phone;
    }
    set phone(phone)
    {
        let phoneRegex=RegExp("^[0-9]{2}[ ][0-9]{10}$");
        if(phoneRegex.test(phone))
        {
            this._phone=phone;
        }
       else throw "Invalid PhoneNumber";
    }
    get notes()
    {
        return this._notes;
    }
    set notes(notes)
    {
        this._notes=notes;
    }
    get city()
    {
        return this._city;
    }
    set city(city)
    {
        this._city=city;
    }
    get state()
    {
        return this._state;
    }
    set state(state)
    {
        this._state=state;
    }
    toString()
    {
        return "Person name = "+this.name+", Notes: "+this.notes+", Phone Number: "+this.phone+", state: "+this.state+", city: "+this.city+", Zipcode: "+this.zipcode; 
    }
}