const express = require("express");
const app = express();
app.set("view engine", "ejs"); 
app.use(express.static("public"));
var noRepeat;


app.get("/", function(req,res){
	var cantadas = ["Se você fosse uma variável, seria um ponteiro que aponta para o endereço de memória do meu coração",
		"Você é a chave estrangeira da minha entidade coração", 
		"Você é o CSS que faltava no meu HTML", 
		"Me dá um Ctrl Alt Delete…acho que travei quando te vi", 
		"Deixa eu ser a instância da sua classe love no seu objeto heart?", 
		"Você é uma constante nesse mar de variáveis", 
		"Não importa em qual plataforma você foi feito, eu me adequo ao seu sistema", 
		"Com você até o Word fica sem palavras",
		"Você não é CSS, mas é puro estilo",
		"Você não é um código de programação bem feito, mas dispensa comentários",
		"Gata, você é o ' ; ' que falta no meu código",
		"Você não é orientada a objetos, mas é cheia de classe",
		'Você me ganhou no "Hello World"...'
	];

	do{
		var numerocantada = Math.floor(Math.random() * cantadas.length);	
	}while(noRepeat==numerocantada);
	
	noRepeat = numerocantada;

	res.render("index.ejs", {
		cantadas: cantadas,
		numero: numerocantada,
	});
});

app.listen(8181,()=>{console.log("App rodando!");});
