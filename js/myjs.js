
function onEdit(td)
{



     var selectedRow = td.parentElement.parentElement;
     var id = selectedRow.cells[0].innerHTML;
     var item= selectedRow.cells[1].innerHTML;
     var price= selectedRow.cells[2].innerHTML;
     var active= selectedRow.cells[3].innerHTML;
     var dateof= selectedRow.cells[4].innerHTML;
     var cat= selectedRow.cells[5].innerHTML;
     var freed= selectedRow.cells[6].innerHTML;
    
    
     localStorage.setItem("id",id);
     localStorage.setItem("namee", item);
     localStorage.setItem("pricee", price);
     localStorage.setItem("activee", active);
     localStorage.setItem("doll", dateof);
     localStorage.setItem("catt", cat);
     localStorage.setItem("freedel", freed);
}

function onAddToCart(td)
{

     var selectedRow = td.parentElement.parentElement;
     var id = selectedRow.cells[0].innerHTML;
     var item= selectedRow.cells[1].innerHTML;
     var price= selectedRow.cells[2].innerHTML;
     var active= selectedRow.cells[3].innerHTML;
     var dateof= selectedRow.cells[4].innerHTML;
     var cat= selectedRow.cells[5].innerHTML;
     var freed= selectedRow.cells[6].innerHTML;
    
    
     localStorage.setItem("c_id",id);
     localStorage.setItem("c_namee", item);
     localStorage.setItem("c_pricee", price);
     localStorage.setItem("c_activee", active);
     localStorage.setItem("c_doll", dateof);
     localStorage.setItem("c_catt", cat);
     localStorage.setItem("c_freedel", freed);
}


function putData()
{
    document.getElementById("name").value=localStorage.getItem("namee");
    document.getElementById("price").value=localStorage.getItem("pricee");
    if(localStorage.getItem("activee")=="Yes")
    {
        document.getElementById("activeY").checked = true;
    }
    else{
     document.getElementById("activeN").checked = true;
    }
 
    document.getElementById("dateof").value=localStorage.getItem("doll");
 
    if(localStorage.getItem("catt")=="Main Course")
    {
     document.getElementById('category').value = 'main';
    }
    else if(localStorage.getItem("catt")=="Starters")
    {
     document.getElementById('category').value = 'starters';
    }
    
    if(localStorage.getItem("freedel")=="Yes")
    {
        document.getElementById("check").checked = true;
    }
}

function putDataCart()
{
    var name=localStorage.getItem("c_namee");
    var price=localStorage.getItem("c_pricee");
   
    if(localStorage.getItem("c_freedel")=="Yes")
    {
        var free = "Yes";
    }
    else{
        var free="No";
    }
    
}


function change()
{  if(localStorage.getItem("id")=="1")
{
    var name= document.getElementById("name").value;
    localStorage.setItem("item1", name);

    var price= document.getElementById("price").value;
    localStorage.setItem("pr1", price);
             
    var dateof= document.getElementById("dateof").value;
    localStorage.setItem("dol1", dateof);
}
else{
    var name= document.getElementById("name").value;
    localStorage.setItem("item2", name);

    var price= document.getElementById("price").value;
    localStorage.setItem("pr2", price);
             
    var dateof= document.getElementById("dateof").value;
    localStorage.setItem("dol2", dateof);   
}
}
function adminLogin()
{
    if((localStorage.getItem("a_username")==document.getElementById("user").value)&&(localStorage.getItem("a_pass")==document.getElementById("pass").value)) {
              window.open("menu-item-list-admin.html");
    }
    else{
        window.alert("invalid Entries");
    }
}
    function userLogin()
{
    if((localStorage.getItem("c_username")==document.getElementById("user").value)&&(localStorage.getItem("c_pass")==document.getElementById("pass").value)) {
              window.open("menu-item-list-user.html");
    }
    else{
        window.alert("invalid Entries");
    }
}
   