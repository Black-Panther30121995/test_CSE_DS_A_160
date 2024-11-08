async function fetchGithubUsers() {
    try{
        let response=await fetch('https://api.github.com/users?per_page=10');
        let data=await response.json();
        html=''
        data.forEach((i)=>{
        html+=`<image class='js-ima st' src="${i.avatar_url}"><b>Node Id:</b> ${i.node_id}  <b>Html Url:</b> <a href="${i.html_url}">Click here to visit page</a><br>`;
     } );

     document.body.querySelector('#info').innerHTML=html;

    }
    catch(e){
        console.log(e);
    }
}