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
//console.log(createContact("altaf","hussain","Wellington street","wellington","new zealand",458538,9801234567,"altaf.hussain@gmail.com"));


/**
 * UC 2: Ensure valid contacts are added; 
 *      
 *  first name and last name should start with capital and should have minimum three characters
 * Address, city and state should have minimum 4 characters
 * zip- total 6 digits, special characters not allowed at beginning or end, mid whitespace allowed
 * phone number- special characters not allowed at beginning or end, total 10 digits with mid whitespace allowed
 * email id- minimum 3 characters before @, gmail.com after@ and optional 2 character of tld after .com
 * 
 * @return: A map containing contact details if contact validated properly, else if contact validation fails then throws error
 * 
 * @param: first_name,last name,address, city,state,zip , phone num and emailId
 * 
 */
 function createValidatedContact(first_name, last_name,address, city,state,zip , phone_no, email_id){
    // Creates a  new empty map
    const contact = new Map();

    
    try{
        // validate first name 
        let regex1 = RegExp("[A-Z][a-zA-Z]{2,}");
        result = regex1.test(first_name);
        if(result){
            // If first name validated, add first name into the map
            contact.set("first_name", first_name);
        }
        // else throw error
        else throw "Regex validation for first name failed"
        
        // validate last name 
        let regex2 = RegExp("[A-Z][a-zA-Z]{2,}");
        result = regex2.test(last_name);
        if(result){
            // If last name validated, add last name into the map
            contact.set("last_name", last_name);
        }
        // else throw error
        else throw "Regex validation for last name failed"
        
        // validate address
        let regex3 = RegExp("[a-zA-Z]{4,}");
        result = regex3.test(address);
        if(result){
            // If address validated, add address into the map
            contact.set("address", address);
        }
        // else throw error
        else throw "Regex validation for address failed.";
        
        // validate city
        let regex4 = RegExp("[a-zA-Z]{4,}");
        result = regex4.test(city);
        if(result){
            // If city validated, add city into the map
            contact.set("city", city);
        }else throw "Regex validation for city failed.";
        
        // validate state- minimum 4 characters required
        let regex5 = RegExp("[a-zA-Z]{4,}");
        result = regex5.test(state);
        if(result){
            // If state validated, add state into the map
            contact.set("state", state);
        }
        // else throw error
        else throw "Regex validation for state failed." + state;
        
        // validate zip- special characters not allowed at beginning or end, total 6 digits with mid whitespace allowed
        let regex6 = RegExp("^[1-9][0-9]{2}[\\s]?[0-9]{2}[0-9]$");
        result = regex6.test(zip);
        if(result){
            // If zip validated, add zip into the map
            contact.set("zip", zip);
        }
        // Else throw error
        else throw "Regex validation for zip failed.";
        
        // validate phone number- special characters not allowed at beginning or end, total 10 digits with mid whitespace allowed
        let regex7 = RegExp("^[7-9][0-9]{4}[\\s]?[0-9]{4}[0-9]$");
        result = regex7.test(phone_no);
        if(result){
            // If phone number validated, add phone number into the map
            contact.set("phone_no", phone_no);
        }      
        // Else throw error
        else throw "Regex validation for phone number failed.";


        // validate email Id- minimum 3 characters before @, gmail.com after@ and optional 2 character of tld after .com
        let regex8 = RegExp("([a-zA-Z0-9]{3,}|[a-zA-Z0-9]{3,}[+_.-]?[a-zA-Z0-9]{1,})[@]{1}[g][m][a][i][l](([.][c][o][m])|([.][c][o][m][.][a-zA-Z]{2}))");
        result = regex8.test(email_id);
        
        if(result){
            // If email Id validated, add email Id into the map
            contact.set("email_id", email_id);
        }
        // else throw error
        else throw "Regex validation for email Id failed. ";
    }catch(error){
        return console.log(error);
    }

    // Returns a map containing above details
    return contact;
}

// call the function to create an address book contact
//console.log(createValidatedContact("Altaf","Hussain","Wellington street","wellington","new zealandnd",458538,9801234567,"altaf.hussain@gmail.com"));

/**
 * UC 3: Create a new address book array and add new contacts to it 
 * 
 * @return: An array (addressbook) containing contacts
 * 
 * @param: arbitrary number of contacts
 */
 function createAddressBook(contact1,contact2){
    // Create a new addressbook of type array
    const addressBook = new Array();
    for (let i=0;i<arguments.length;i++){
        addressBook.push(arguments[i]);
    }

    // Returns an array containing above contacts
    return addressBook;
}
//let contact1 = createValidatedContact("Altaf","Hussain","Wellington street","wellington","newzealand",458538,9801234567,"altaf.hussain@gmail.com");
//let contact2 = createValidatedContact("Ashok","Kumaratunga","Middleton street","Jaipur","rajasthan",458538,9801234567,"ashok.kumaratunga@gmail.com");
//console.log("This Address book has contacts.");
//console.log(createAddressBook(contact1,contact2));


/**
 * UC 4 : Find existing contact person using their name and edit it
 * 
 * @return: An array (addressbook after modification) containing contacts
 * 
 * @param: addressbook, first and last name of contact to be edited, contact details to replace
 */
 function editExistingContact(addressbook, first_name,last_name, contact){
    let range = addressbook.length;

    // Loop through the contacts inside the address book
    for(let i=0;i<range;i++){
        
        // Match for the contact using first and last name
        if((addressbook[i].get("first_name") === first_name) &&(addressbook[i].get("last_name") === last_name)){
            // edit the contact details
            addressbook[i].set("first_name",contact.get("first_name"));
            addressbook[i].set("last_name",contact.get("last_name"));
            addressbook[i].set("address",contact.get("address"));
            addressbook[i].set("city",contact.get("city"));
            addressbook[i].set("state",contact.get("state"));
            addressbook[i].set("zip",contact.get("zip"));
            addressbook[i].set("phone_no",contact.get("phone_no"));
            addressbook[i].set("email_id",contact.get("email_id"));
        }
    }

    // Returns an array containing above contacts
    return addressbook;
}
//let contact3 = createValidatedContact("Altaf","Hussain","Wellington street","wellington","newzealand",458538,9801234567,"altaf.hussain@gmail.com");
//let contact4 = createValidatedContact("Ashok","Kumaratunga","Middleton street","Jaipur","rajasthan",458538,9801234567,"ashok.kumaratunga@gmail.com");
// create an addressbook containing above contacts
//let addressBook = createAddressBook(contact3,contact4);
// Edit the contact based on name
let contact_new = createValidatedContact("Altaf","Hussain","Iqbal street","Kohima","nagaland",458538,9801234567,"altaf.hussain@gmail.com");
//let first_name = "Altaf";
//let last_name = "Hussain";
//console.log(editExistingContact(addressBook,first_name,last_name,contact_new));



/**
 * UC 5 : Find a person with name and delete it from array
 * 
 * @return: An array (addressbook after modification) containing contacts
 * 
 * @param: addressbook, first and last name of contact to be deleted
 */
 function deleteExistingContact(addressbook, first_name,last_name){
    let range = addressbook.length;

    // Loop through the contacts inside the address book
    for(let i=0;i<range;i++){
        
        // Match for the contact using first and last name
        if((addressbook[i].get("first_name") === first_name) && (addressbook[i].get("last_name") === last_name)){
            // delete the contact details
            delete addressbook[i];
        }
    }

    // Returns an array after deletion of above contact
    return addressbook;
}
let contact3 = createValidatedContact("Altaf","Hussain","Wellington street","wellington","newzealand",458538,9801234567,"altaf.hussain@gmail.com");
let contact4 = createValidatedContact("Ashok","Kumaratunga","Middleton street","Jaipur","rajasthan",458538,9801234567,"ashok.kumaratunga@gmail.com");
// create an addressbook containing above contacts
let addressBook = createAddressBook(contact3,contact4);
// Delete the existing contact based on name
let first_name = "Altaf";
let last_name = "Hussain";
// call the function
//console.log(deleteExistingContact(addressBook,first_name,last_name));


/**
 * UC 6 : Find the number of contacts inside addressbook 
 * 
 * @return: int value (number of contacts inside addressbook)
 * 
 * @param: addressbook
 */
 function countContact(addressbook){

    // Reduce function cannot work on an empty array, so minimum 1 element will be there
    let count = 1;
    let contacts_no = addressbook.reduce((acc,num)=>{
            count++;
            return count;
    })
    return contacts_no;
}

let contact11 = createValidatedContact("Altaf","Hussain","Wellington street","wellington","newzealand",458538,9801234567,"altaf.hussain@gmail.com");
let contact12 = createValidatedContact("Ashok","Kumaratunga","Middleton street","Jaipur","rajasthan",458538,9801234567,"ashok.kumaratunga@gmail.com");
let contact14 = createValidatedContact("Asim","Singh","Iqbal street","Kohima","nagaland",458538,9801234567,"altaf.hussain@gmail.com");

// create an addressbook containing above contacts
let addressBook1 = createAddressBook(contact11,contact12,contact14);

// Display the number of contacts inside the addressbook
console.log("The number of contacts inside address book = "+ countContact(addressBook1));
