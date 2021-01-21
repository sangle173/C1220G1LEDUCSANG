
function xacnhan() {
    let name=document.getElementById('fname').value;
    document.getElementById('fname_info').innerHTML=name;
    document.getElementById('fname_info1').innerText="Full Name :";
    document.getElementById('edit_name').innerHTML='<input type="button" value="Edit" onclick="editName()">';


    let cmnd=document.getElementById('cmndNum').value;
    document.getElementById('cmnd_info').innerHTML=cmnd;
    document.getElementById('cmnd_info1').innerText="Cmnd Number:";
    document.getElementById('edit_cmnd').innerHTML='<input type="button" value="Edit" onclick="editCmnd()">';



    let birthDay=document.getElementById('birthday').value;
    document.getElementById('birthday_info').innerHTML=birthDay;
    document.getElementById('birthday_info1').innerText="Birth Day :";
    document.getElementById('edit_birthday').innerHTML='<input type="button" value="Edit" onclick="editBirthDay()">';



    let email=document.getElementById('email').value;
    document.getElementById('email_info').innerHTML=email;
    document.getElementById('email_info1').innerText='Email : ';
    document.getElementById('edit_email').innerHTML='<input type="button" value="Edit" onclick="editEmail()">';



    let address=document.getElementById('address').value;
    document.getElementById('address_info').innerHTML=address;
    document.getElementById('address_info1').innerHTML='Address : ';
    document.getElementById('edit_address').innerHTML='<input type="button" value="Edit" onclick="editAddress()">'


    let typeCustomer=document.getElementById('typeCustomer').value;
    document.getElementById('typeCustomer_info').innerHTML=typeCustomer;
    document.getElementById('typeCustomer_info1').innerHTML='Type Customer : ';
    document.getElementById('edit_typeCustomer').innerHTML='<input type="button" value="Edit" onclick="editTypeCustomer()">'


    let discount=document.getElementById('discount').value;
    document.getElementById('discount_info').innerHTML=discount;
    document.getElementById('discount_info1').innerHTML='Discount : ';
    document.getElementById('edit_discount').innerHTML='<input type="button" value="Edit" onclick="editDiscount()">'

    let quantifiers=document.getElementById('quantifiers').value;
    document.getElementById('quantifiers_info').innerHTML=quantifiers;
    document.getElementById('quantifiers_info1').innerHTML='Quantifiers : ';
    document.getElementById('edit_quantifiers').innerHTML='<input type="button" value="Edit" onclick="editQuantifiers()">'

    let rentDays=document.getElementById('rentDays').value;
    document.getElementById('rentDays_info').innerHTML=rentDays;
    document.getElementById('renDays_info1').innerHTML='Rent Days : ';
    document.getElementById('edit_rentDays').innerHTML='<input type="button" value="Edit" onclick="editRentDays()">';

    let typeService=document.getElementById('typeService').value;
    document.getElementById('typeService_info').innerHTML=typeService;
    document.getElementById('typeService_info1').innerHTML='Type Service : ';
    document.getElementById('edit_typeService').innerHTML='<input type="button" value="Edit" onclick="editTypeService()">'

    let typeRoom=document.getElementById('typeRoom').value;
    document.getElementById('typeRoom_info').innerHTML=typeRoom;
    document.getElementById('typeRoom_info1').innerHTML='Type Room : ';
    document.getElementById('edit_typeRoom').innerHTML='<input type="button" value="Edit" onclick="editTypeRoom()">'

    document.getElementById('confirm_info').innerHTML='<input type="button" value="Confirm">';
    document.getElementById('typeCustomer_info1').innerHTML='Type Customer : ';
    document.getElementById('edit_typeCustomer').innerHTML='<input type="button" value="Edit" onclick="editTypeCustomer()">'

    document.getElementById('caption').innerText='Customer Information';
    document.getElementById('typeCustomer_info1').innerHTML='Type Customer : ';
    document.getElementById('edit_typeCustomer').innerHTML='<input type="button" value="Edit" onclick="editTypeCustomer()">'
    // let bang='<table border="" width="400">\n' +
    //     '    <tr>\n' +
    //     '        <th colspan="3">Customer Infomation</th>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Full Name</td>\n' +
    //     '        <td><input type="text" id="name" value=" '+name+'" readonly></td>\n' +
    //     '        <td id="name-edit"><input type="button"  value="Edit" onclick="edit()"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Cmnd Number:</td>\n' +
    //     '        <td>'+cmnd+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Birth Day:</td>\n' +
    //     '        <td>'+birthDay+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Email:</td>\n' +
    //     '        <td>'+email+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Address :</td>\n' +
    //     '        <td>'+address+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Type Customer :</td>\n' +
    //     '        <td>'+typeCustomer+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Discount :</td>\n' +
    //     '        <td>'+discount+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Quantifiers :</td>\n' +
    //     '        <td>'+quantifiers+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Rent Days :</td>\n' +
    //     '        <td>'+rentDays+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Type Service :</td>\n' +
    //     '        <td>'+typeService+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td>Type Room :</td>\n' +
    //     '        <td>'+typeRoom+'</td>\n' +
    //     '        <td><input type="button" value="Edit"></td>\n' +
    //     '    </tr>\n' +
    //     '    <tr>\n' +
    //     '        <td colspan="3" align="center"><input type="button" value="Confirm"></td>\n' +
    //     '    </tr>\n' +
    //     '\n' +
    //     '</table>';
    // document.getElementById('demo').innerHTML=bang;


    let price;
    switch (typeService) {
        case 'villa':
            typeService = 500;
            price = typeService * rentDays * (1 - discount / 100);
            document.getElementById('price').innerText = "Total Pay : " + price + '$';
            break;
        case 'house':
            typeService = 300;
            price = typeService * rentDays * (1 - discount / 100);
            document.getElementById('price').innerText = "Total Pay : " + price + '$';
            break;
        case 'room':
            typeService = 100;
            price = typeService * rentDays * (1 - discount / 100);
            document.getElementById('price').innerText = "Total Pay : " + price + '$';
            break;
    }

}
function editName() {
    let name=document.getElementById('fname').value;
    let newName=prompt('Change name');
    name=newName;
    document.getElementById('fname_info').innerHTML=name;
}
function editCmnd() {
    let cmnd=document.getElementById('cmndNum').value;
    let newCmnd=prompt('Change Cmnd Number');
    cmnd=newCmnd;
    document.getElementById('cmnd_info').innerHTML=cmnd;
}
function editBirthDay() {
    let birthDay=document.getElementById('birthday').value;
    let newBirthDay=prompt('Change Birth Day');
    birthDay=newBirthDay;
    document.getElementById('birthday_info').innerHTML=birthDay ;
}
function editEmail() {
    let email=document.getElementById('email').value;
    let newEmail=prompt('Change email');
    email=newEmail;
    document.getElementById('email_info').innerHTML=email;
}
function editAddress() {
    let address=document.getElementById('address').value;
    let newAddress=prompt('Chang Address');
    address=newAddress;
    document.getElementById('address_info').innerHTML=address;
}
function editTypeCustomer() {
    let typeCustomer=document.getElementById('typeCustomer').value;
    let newTypeCustomer=prompt('Change type of Customer');
    typeCustomer=newTypeCustomer;
    document.getElementById('typeCustomer_info').innerText=typeCustomer;
}
function editDiscount() {
    let discount=document.getElementById('discount').value;
    let newDiscount=prompt('Change discount');
    discount=newDiscount;
    document.getElementById('discount_info').innerText=discount;
}
function editQuantifiers() {
    let quantifiers=document.getElementById('quantifiers').value;
    let newQuantifiers=prompt('Change quantifiers');
    quantifiers=newQuantifiers;
    document.getElementById('quantifiers_info').innerText=quantifiers;
}
function editRentDays() {
    let rentDays=document.getElementById('rentDays').value;
    let newRentDays=prompt('Change rentdays');
    rentDays=newRentDays;
    document.getElementById('rentDays_info').innerText=rentDays;
}
function editTypeService() {
    let typeService=document.getElementById('typeService').value;
    let newTypeService=prompt('Change Type of Service');
    typeService=newTypeService;
    document.getElementById('typeService_info').innerText=typeService;
}
function editTypeRoom() {
    let typeRoom=document.getElementById('typeRoom').value;
    let newRoom=prompt('Change Type of Room');
    typeRoom=newRoom;
    document.getElementById('typeRoom_info').innerText=typeRoom;
}


