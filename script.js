//Build html elements
document.body.innerHTML=`<div class="heading-container">
<h1>Dictionary</h1>

</div>
<div class="main-Container" id="mainContainer"
</div>`

mainContainer.innerHTML+=
`
<div class="container-heading">
<h3>English Meaning</h3>
</div>


<div class="container">
<label for="name" =>Name</label>
<input type="text" class="form-control" id="name" placeholder="Enter a word">
<button type="submit" class="btn btn-primary" onclick="getData()">Submit</button>
<button class="btn btn-primary" onclick="history.go(0);">Reset</button>
</div>
`

//create a function to fetch data from API using async and await
//Displaying error using try and catch
const getData=async()=>{
    try{
        let name=document.getElementById("name").value;          
        const data=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${name}`);
        const nationalityDetails1=await data.json();
        const meaning=JSON.stringify(nationalityDetails1);
     displayData(meaning);   //calling function to display data
       

    }catch(error){
        console.log(error);
    }
}

//create a function to display data
const displayData=(obj)=>{
   
    mainContainer.innerHTML+=
    `<div class="container" id="resultData">
    <h2 id="name">Word: ${obj.word}</h2>
    <p> Meaning: ${obj.meanings.definitions.definition}</p>
  
    </div>
    `
}
// [{
//     "word":"hello",
//     "phonetics":[
//         {"audio":"https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
//         "sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=75797336",
//         "license":{
//             "name":"BY-SA 4.0",
//              "url":"https://creativecommons.org/licenses/by-sa/4.0"
//             }
//         },
//         {"text":"/həˈləʊ/",
//         "audio":"https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3",
//         "sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=9021983",
//         "license":{"name":"BY 3.0 US","url":"https://creativecommons.org/licenses/by/3.0/us"}
//         },
//         {"text":"/həˈloʊ/","audio":""}
//     ],
//     "meanings":[
//             {"partOfSpeech":"noun",
//             "definitions":[
//                 {"definition":"\"Hello!\" or an equivalent greeting.",
//                 "synonyms":[],
//                 "antonyms":[]
//                 }],
//             "synonyms":["greeting"],
//             "antonyms":[]
//             },
//             {"partOfSpeech":"verb","definitions":[{"definition":"To greet with \"hello\".","synonyms":[],"antonyms":[]}],"synonyms":[],"antonyms":[]},{"partOfSpeech":"interjection","definitions":[{"definition":"A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.","synonyms":[],"antonyms":[],"example":"Hello, everyone."},{"definition":"A greeting used when answering the telephone.","synonyms":[],"antonyms":[],"example":"Hello? How may I help you?"},{"definition":"A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.","synonyms":[],"antonyms":[],"example":"Hello? Is anyone there?"},{"definition":"Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.","synonyms":[],"antonyms":[],"example":"You just tried to start your car with your cell phone. Hello?"},{"definition":"An expression of puzzlement or discovery.","synonyms":[],"antonyms":[],"example":"Hello! What’s going on here?"}],"synonyms":[],"antonyms":["bye","goodbye"]}],"license":{"name":"CC BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"},"sourceUrls":["https://en.wiktionary.org/wiki/hello"]}]