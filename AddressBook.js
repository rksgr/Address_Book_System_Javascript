console.log("Good Morning!");
console.log("Today we shall work on Address Book System using Node JS.");   

/**
 * UC 1: Create an address book contact with first name,last name,address, city,state,zip , phone number and email id 
 * 
 * @return: A map containing above contact details
 * 
 * @param: first_name,last name,address, city,state,zip , phone num and emailId
 */
 function createContact(first_name, last_name,address, city,state,zip , phone_no, email_id){
    // Creates a  new empty map
    const contact = new Map();

    // Put the above details into the map
    contact.set("first_name", first_name);
    contact.set("last_name", last_name);
    contact.set("address", address);
    contact.set("city", city);
    contact.set("state", state);
    contact.set("zip", zip);
    contact.set("phone_no", phone_no);
    contact.set("email_id", email_id);

    // Returns a map containing above details
    return contact;
}

// call the function to create an address book contact
console.log(createContact("altaf","hussain","Wellington street","wellington","new zealand",458538,9801234567,"altaf.hussain@gmail.com"));