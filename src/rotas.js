const express = require('express');
const { ListagemProdutos, vendas } = require('./controladores/vendas');

const rotas = express();

rotas.get('/produtos', ListagemProdutos)
rotas.post('/produtos', vendas)

module.exports = rotas