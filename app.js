//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

document.addEventListener('DOMContentLoaded', function() {
    let titulo = document.querySelector("h1");
    titulo.innerHTML = "Amigo Secreto";
    let listaDeNomes = [];
  
    // funcoes em escopo
    window.adicionarAmigo = function() {
        let input = document.querySelector("input");
        let nomeSecreto = input.value.trim();
        let listaAmigos = document.getElementById("listaAmigos");
  
        let resultado = document.getElementById("resultado");
          resultado.innerHTML = "";
        
        // Verifica se o nome foi preenchido
        if (nomeSecreto === "") {
            alert("Por favor, insira um nome válido!");
            return;
        }
        
        // Se o nome não for vazio, adiciona à lista
        listaDeNomes.push(nomeSecreto);
        input.value = ""; // Limpar o campo após adicionar
        atualizarLista();
    }
  
    window.sortearAmigo = function() {
        let resultado = document.getElementById("resultado");
        let listaAmigos = document.getElementById("listaAmigos");
        resultado.innerHTML = "";
        listaAmigos.innerHTML = "";
        
        if (listaDeNomes.length === 0) {
            alert("Por favor insira um nome válido");
            return;
        }
        
        let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
        let nomeSorteado = listaDeNomes[indiceSorteado];
        listaDeNomes = []; // Esvazia a lista após o sorteio
        let li = document.createElement("li");
        li.textContent = ' O amigo secreto sorteado é: ' + nomeSorteado;
        resultado.appendChild(li);
    }
  
    function atualizarLista() {
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";
        listaDeNomes.forEach((nome) => {
            let li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }
  });