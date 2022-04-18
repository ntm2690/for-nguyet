class Login {
    $txtStatus;
    $form

    constructor() {
        this.$txtStatus = document.createElement("h1")
        this.$txtStatus.innerHTML ="Hehe 😁😁 ấn vào rồi là phải uy tín đấy nhé"
        this.$form = document.createElement("form")
        this.$form.classList.add("app","d-flex", "centering","flex-column")
    }

initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex", "centering","flex-column");
        flexContainer.appendChild(this.$txtStatus);
        this.$form.appendChild(flexContainer);
        container.appendChild(this.$form)
};
}
export default Login