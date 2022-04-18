import app from "./index.js";
import Login from "./login.js";

class Register {
    $txtStatus;
    $txtBtnNo;
    $txtBtnYes;
    $form
    
    constructor() {
        this.$txtStatus = document.createElement("h1")
        this.$txtStatus.innerHTML ="Chào Nguyệt 👋👋 chúng mình đi xem phim chứ !!"

        this.$txtBtnNo = document.createElement("button")
        this.$txtBtnNo.innerHTML= "Thôi bạn ơi 😔 t đang bận"
        this.$txtBtnNo.classList.add("change","space")

        this.$txtBtnYes = document.createElement("button")
        this.$txtBtnYes.innerHTML = "Đi thôi 🥳 t thích đi xem cùng c lắm"
        this.$txtBtnYes.type = "submit"
        this.$txtBtnYes.classList.add("change","space")
        this.$txtBtnYes.style.cursor="pointer";

        this.$form = document.createElement("form")
        this.$form.classList.add("app")
        this.$form.classList.add("d-flex", "centering","flex-column",);
    }
    gotoLogin = () => {
        const login = new Login ();
        app.changeActiveScreen(login)
        
        
    }

initRender = (container) => {
        const flexContainer = document.createElement("div");
        const flexYesNo = document.createElement("div");

        flexContainer.classList.add("d-flex", "centering","flex-column");
        flexYesNo.classList.add("d-flex", "centering");

        flexYesNo.appendChild(this.$txtBtnNo);
        flexYesNo.appendChild(this.$txtBtnYes);

        flexContainer.appendChild(this.$txtStatus);
        flexContainer.appendChild(flexYesNo);
        

        this.$form.appendChild(flexContainer);
        container.appendChild(this.$form)

        this.$txtBtnYes.addEventListener("click",this.gotoLogin)
        this.$txtBtnNo.addEventListener("mouseover",()=>{
        
            this.$txtBtnNo.style.bottom = Math.round(Math.random()*300)+"px";
            this.$txtBtnNo.style.left = Math.round(Math.random()*300)+"px";
        })
};
}

export default Register