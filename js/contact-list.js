var contacts = getContacts();

function displayContactList() {
    var contactList = document.getElementById('contactList');

    if(contacts !== null )
    {
        for(var i = 0; i < contacts.length; i ++)
        {
            var contact = contacts[i];

            var li = document.createElement('li');
            
            

            var ul = document.createElement('ul');

            ul.setAttribute('data-contact-index', i);

            ul.onclick = function() { displayDetails(this); };

            ul.classList.add('contactListRow');
            ul.classList.add('bottomBorder');
            if(i % 2 == 1){
                ul.classList.add('lighter')

            }
            else{
                ul.classList.add('darker');
            }

            var iconLi = document.createElement('li');

            iconLi.classList.add(contact.status);
            iconLi.classList.add('circle');

            ul.appendChild(iconLi);

            var nameLi = document.createElement('li');

            nameLi.classList.add('nameCol');

            var nameNode = document.createTextNode(contact.name);

            nameLi.appendChild(nameNode);

            ul.appendChild(nameLi);

            var contactLi = document.createElement('li');

            contactLi.classList.add('contactInfoCol');

            var displayTypeDropdown =  document.getElementById('contactDisplay');

            var displayType = displayTypeDropdown.value;

            if(displayType == 'phone')
            {
                var contactNode = document.createTextNode(contact.phoneNumber);
                contactLi.appendChild(contactNode);
            }
            else{

                var contactNode = document.createTextNode(contact.email);
                contactLi.appendChild(contactNode);
            }

            ul.appendChild(contactLi);
            
            var detailLiDiv = document.createElement('div');

            var emailAnchor = document.createElement('p');

            emailAnchor.appendChild(document.createTextNode(contact.email));

            detailLiDiv.appendChild(emailAnchor);

            var phone = document.createElement('p');

            phone.appendChild(document.createTextNode(contact.phoneNumber));

            var phone = document.createElement('p');

            phone.appendChild(document.createTextNode(contact.phoneNumber));

            detailLiDiv.appendChild(phone);

            detailLiDiv.appendChild(document.createElement('br'));

            var address = document.createElement('p');

            address.appendChild(document.createTextNode(contact.address));

            detailLiDiv.appendChild(address);            

            var cityStateAndZip  = document.createElement('p');

            cityStateAndZip.appendChild(document.createTextNode(`${contact.city} ${contact.state} ${contact.zipCode}`));

            detailLiDiv.appendChild(cityStateAndZip);
            
            detailLiDiv.classList.add('hidden');
            detailLiDiv.classList.add('details')

            ul.appendChild(detailLiDiv);

            li.appendChild(ul);

            contactList.appendChild(li);
        }
    }
}

function getContacts(){
    return [
        getContact('Christian', getPhoneNumber(), 'christian@yahoo.com', 'green'),
        getContact('Rich', getPhoneNumber(), 'rich@tripod.com', 'green'),
        getContact('Scott', getPhoneNumber(), 'scott@mailinator.com', 'green'),
        getContact('Danny', getPhoneNumber(), 'danny@hotmail.com.com', 'green'),
        getContact('Taka', getPhoneNumber(), 'taka@myspace.com', 'red'),
        getContact('Tim', getPhoneNumber(), 'tim@netscape.com', 'yellow'),
        getContact('Patrick', getPhoneNumber(), 'patrick@live.com', 'red'),
        getContact('Jacques', getPhoneNumber(), 'jacques@aol.com', 'red')
        
    ];
}

function getContact(name, phoneNumber, email, status){
    return {name : name, phoneNumber : phoneNumber, email: email, status : status, focused : false, address : '6539 Wilton Ave.', city : 'Culver City', state: 'CA', zipCode: '90234'};
}

function getPhoneNumber()
{
    return '323-555-1234';
}

function displayDetails(element){
    var index =  element.getAttribute('data-contact-index');
    var contact = contacts[index];
    var newFocusState = !contact.focused;
    element.classList.remove('lighter');
            
    element.classList.remove('darker');

    element.classList.remove('focused');
    
    assignRowColor(index, element);
    
    
    var elements = document.getElementsByClassName('focused');
    for(var i = 0; i < elements.length; i ++)
    {        
        elements[i].classList.remove('focused');
    }

    var contactInfoElements = document.getElementsByClassName('contactInfoCol');

    var detailElements = document.getElementsByClassName('details');

    for(var i= 0; i < detailElements.length; i++)
    {
        detailElements[i].classList.add('hidden');
    }
        
    var contactDisplay = document.getElementById('contactDisplay');
    if(newFocusState === false)
    {
        for(var i = 0; i < contactInfoElements.length; i ++){
            contactInfoElements[i].classList.remove('hidden');            
        }
        contactDisplay.classList.remove('hidden');
        element.classList.remove('focused')  
        

    }
    else
    {
        for(var i = 0; i < contactInfoElements.length; i ++)
        {
            contactInfoElements[i].classList.add('hidden');
        }       
        
        element.classList.add('focused') ;
        detailElements[index].classList.remove('hidden');
        contactDisplay.classList.add('hidden');
    }     
        
        
    for(var i =0; i < contacts.length; i ++){
        contacts[i].focused = false;
    }
    contact.focused = newFocusState;   
    contact[index] = contact; 
}

function assignRowColor(i, ul) {
    if (i % 2 == 1) {
        ul.classList.add('lighter');
    }
    else {
        ul.classList.add('darker');
    }
}
