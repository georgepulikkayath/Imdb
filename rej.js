function res(){
let qu=document.getElementById("txt_search").value;
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let movie = JSON.parse(this.responseText);
      console.log(movie);
       var s="";
       s = '<div class="dvImg">';
       s+="<h1>Movie Name:"+movie.Title+"</h1>";
       s+="<p>Director:"+movie.Director+"</p>";
       s+="<p>Year:"+movie.Year+"</p>";
       s+="<p>imdbRating:"+movie.imdbRating+"</p>";
       s+="<p>Plot:"+movie.Plot+"</p>";
       s+="<p>Writers:"+movie.Writer+"</p>";
       s+="<img src=" + movie.Poster+">";
     
       s+="</div>";
       document.getElementById("display").innerHTML=s;




    
    }
    
}
xhttp.open("GET", "http://www.omdbapi.com/?apikey=801668c5&t="+qu+"",true);
xhttp.send();
}