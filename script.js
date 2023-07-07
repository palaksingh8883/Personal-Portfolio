let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbya9mD-W_1h3Zw4qqUaO108aPQihxmD1u2Vui1oCwemiLazXJ8Ub4ozHZ5q6AZChyrX4w/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "MESSAGE SENT SUCCESSFULLY";
                setTimeout(function(){
                    msg.innerHTML="";
                },5000)
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        })

       