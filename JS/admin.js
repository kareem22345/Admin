document.onreadystatechange = function(){
  if(document.readyState=="complete"){
    document.getElementsByClassName("Active")[0].innerHTML="<i class=\"fas fa-caret-right\"></i>";
    let loading=document.getElementById("loading");
    loading.style.opacity="0";
    loading.style.transform="scale( 5, 5)";
    loading.style.pointerEvents="none";
  }
};