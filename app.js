//For clicking button Events that will occur
var btn_Convert= document.querySelector("#btn-convert");
btn_Convert.addEventListener('click', clickEvent);

//Input Textarea queryselector
var input_text= document.querySelector("#txt-forEvent");

//For Output area
var output_txt= document.querySelector("#output-area");

//https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Sanu

//Minion Api URL
var minionAPI= "https://api.funtranslations.com/translate/minion.json";

function clickEvent(){
    //alert('Clicked');
    try{
        var txt_value= input_text.value;
    //var reverse_text="";
    // for(var letter= txt_value.length-1 ; letter>=0; letter--)
    // {
    //     reverse_text+= txt_value[letter];
    // }
    // console.log(txt_value);
    // console.log("Reversed: "+reverse_text);

    //Outputting in the output txt area
        output_txt.innerHTML= minionTranslate(txt_value);
    }
    catch(e){
        alert("Error fetching data from API: "+e);
    }


}

//function to fetch translated text from the minion api
function minionTranslate(text_to_be_translated)
{
    var url= minionAPI+"?text="+text_to_be_translated;
    output_txt.innerHTML= fetch(url)
    .then(response=>response.json())
    .then(json=>output_txt.innerHTML=(json.contents.translated))
}