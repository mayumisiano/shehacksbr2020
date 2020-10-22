var elements = document.getElementsByTagName('*');
var palavras = ["violência", "PCC", "misoginia", "Distanciamento social", "distanciamento social", "Misoginia", "Estuprar", "estuprar", "Estuprou", "estuprou", "Estuprada", "estuprada", "Degolado", "degolado", "Decapitado", "decapitado", "degolou", "Degolou", "crime", "Crime", "Chantagem", "chantagem", "chantageado", "Chantageado", "abuso", "ataque", "mutilação", "violação", "invasão", "assédio", "violação", "mortes", "morre", "Morre", "assassinato", "assassino", "sequestro", "sequestradores", "sangue", "sangramento", "ferida", "vítimas", "assédio", "estupro", "pedofilia", "pedófilo", "agressão", "ameaças", "atentado", "terrorismo", "terroristas", "suicídio", "suicida", "matar", "violar","Violência", "Abuso", "Ataque", "Mutilação", "Violação", "Invasão", "Assédio", "Violação", "Mortes", "Assassinato", "Assassino", "Sequestro", "Sequestradores", "Sangue", "Sangramento", "Ferida", "Vítimas", "Assédio", "Estupro", "Pedofilia", "Pedófilo", "Agressão", "Ameaças", "Atentado", "Terrorismo", "Terroristas", "Suicídio", "Suicida", "Matar", "Violar", "Morte", "morte", "Morto", "morto", "Morta", "morta", "mortas", "Mortas", "Mortos", "mortos", "Executar", "executar", "Execução", "execução", "Megaoperação"];
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            for (var k = 0; k < palavras.length; k++){
              if(text.includes(palavras[k])){
                text = "Conteúdo sensível, para visualizá-lo desligue o Redescansa";
              }
            }

            element.replaceChild(document.createTextNode(text), node);

        }
    }
}

console.log('We are ready to replace the images!');
// chrome.runtime.onMessage.addListener(replace);
// function replace()
// {
let file = "images/3.png";

let imgs = document.getElementsByTagName('img');

for(imgElt of imgs)
{
let url = chrome.extension.getURL(file);
imgElt.src = url;
//console.log(url);
}

