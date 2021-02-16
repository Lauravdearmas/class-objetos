const http = require("http")

const book = [
    {
        nameStudent: "Laura V. De Armas",
        job: "Entrepreneur and Creator of content",
        git: "github.com/Lauravdearmas", 
    
    },
    {
        nameStudent: "Alejandro Becerra",
        job: "Administrador de empresas y Product Manager",
        git: "github.com/becerra2906",
    },
    {
        nameStudent: "Brianith Navarro",
        job: "Designer and Engineer",
        git: "github.com/briaenrose",
    },
    {
        nameStudent: "Cristian Moreno",
        job: "Developer",
        git: "github.com/khriztianmoreno",
    },
    {
        nameStudent: "Cristopher Rojas",
        job: "Analista Programador de sistemas",
        git: "github.com/cristopher1202",
    },
    {
        nameStudent: "Daniel Alvarez",
        job: "Web Designer",
        git: "github.com/dansata",
    },
    {
        nameStudent: "Daniela Calle Estrada",
        job: "Ingeniera de sistemas",
        git: "https://github.com/Dany0913",
    },
    {
        nameStudent: "Isabella Serna",
        job: "Desarrollador",
        git: "github.com/Isabella-417",
    },
    {
        nameStudent: "Juan Pablo Acosta",
        job: "Ingeniero Mecatrónico",
        git: "github.com/Jpacosta23",
    },
    {
        nameStudent: "Juan Lopera",
        job: "Publicista Estratega Digital",
        git: "none",
    },
    {
        nameStudent: "Laura V. De Armas",
        job: "Entrepreneur and Creator of content",
        git: "github.com/Lauravdearmas",
    },
    {
        nameStudent: "Laura Monsalve Arroyave",
        job: "Administradora Comercial y de Mercadeo",
        git: "github.com/lauramonsalvearroyave",
    },
    {
        nameStudent: "Laura Ramos",
        job: "Ingeniera Financiera",
        git: "github.com/lauramosdim",
    },
    {
        nameStudent: "Maria Sirley Tangarife Gil",
        job: "Tecnologa en Analisis y Desarrollo de sistemas de información",
        git: "github.com/Mariatangarife1998",
    },
    {
        nameStudent: "Monica González",
        job: "Ingeniera Quimica",
        git: "github.com/monicagmeza11",
    },
    {
        nameStudent: "Diana Rojas",
        job: "Developer",
        git: "none",
    },
] 


const header = {
    "content-type": "application/json"
}

const app = http.createServer((request, response) => {
    response.writeHead(200, header)
    response.end(JSON.stringify(book)) 
})


app.listen(8080)
console.log(`server running ${8080}`)