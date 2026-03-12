const btnContainer = document.getElementById("allBtnContainer");
const openIssuesContainer = document.getElementById("open-issues-container");
const closeIssuedContainer = document.getElementById("closed-issues-container");

btnContainer.addEventListener("click",async (e) =>{
    if(e.target.localName !== "button") 
        return;

    const buttons = document.querySelectorAll(".btn-nav");
    buttons.forEach(btn => btn.classList.remove("btn-primary"));
    e.target.classList.add("btn-primary");

    const tab = e.target.innerText;
    managespinner(true)


    await new Promise(resolve => setTimeout(resolve,o));
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res=>res.json())
    .then(data=>displayALLse(data.data))


    if(tab === "All"){
        allIssuesContainer.classList.remove("hidder");
        openIssuesContainer.classList.add("hidden");
        closeIssuedContainer.classList.add("hidden");
        updateIssuesCount(allIssuesContainer)

    }else if(tab === "Open"){
        allIssuesContainer.classList.add("hidden");
        openIssuesContainer.classList.remove("hidden");
        closeIssuedContainer.classList.add("hidden");
        updateIssueCount(openIssuesContainer);

    }
    else if(tab === "Closed"){
        allIssuesContainer.classList.add("hidden");
        openIssuesContainer.classList.add("hidden");
        closeIssuedContainer.classList.remove("hidden");
        updateIssueCount(closeIssuedContainer)

    }
    managespinner(false);
    
});
const managespinner = status => {
    if(status == true){
        document.getElementById("spinner").classList.remove("hidden")
        document
    }
}