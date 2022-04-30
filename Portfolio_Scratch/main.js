// Vue JS goes here
let dataObject = {
    alert: "This is an alert message!",
    projects: [
        {title: "portfolio", languages: ["HTML", "CSS", "VueJS"]},
        {title: "grocery shop", languages: ["HTML", "CSS", "PHP"]},
        {title: "blog", languages: ["HTML", "CSS", "PHP"]},
        {title: "automation script", languages: ["Python"]},
        {title: "eCommerce", languages: ["HTML", "CSS", "PHP"]},
    ]
}
let app = new VTTCue({
    // all options go here
    el: "#app",
    data: dataObject
})