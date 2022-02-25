function color(clicked_id){
    let e = clicked_id;
    alert("entro aqui " + e );
   
    //function primera(e);
}

function primera(e)
{
    alert(e);
}
let newData = [];
function reply_click(clicked_id){
    let e = clicked_id;
    alert("entro aqui " + e )
    let a = newData.push(e);
    document.getElementById(e).style.backgroundColor = "#0000FF";
    console.log(a);
}
