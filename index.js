// Variáveis de entrada
const nome = "Leandro";  // Substitua "Nome do Herói" pelo nome real do herói
const xp = 5000;  // Substitua 5000 pela quantidade real de experiência do herói

// Variável para armazenar o nível
let nivel;

// Estrutura de decisão para determinar o nível
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 6001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibir a mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
