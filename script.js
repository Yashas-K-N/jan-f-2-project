let topics_div=document.getElementsByClassName("topics");
console.log(topics);

let grand_topic_list=[
    "Tag Badge",
    "Tag Badge "
];

function display_topics(){
    grand_topic_list.map(topic=>{
        let newtopicElement=document.create("div");
        newtopicElement.classlist.add("topic");
        newtopicElement.innerText=topic;
        newtopicElement.addEventListener("click",()=>{
          if(!selected_topics.includes(newtopicElement.innerText)){
            selected_topics.push(newtopicElement.innerText);
            console.log(selected_topics);
          }  
       })
        topics_div.appendChild(newtopicElement);
    }) 
}
display_topics();