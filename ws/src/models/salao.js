const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoSchema = new Schema({
  nome: { type: String, required: [true, 'Campo Nome é obrigatório'] },
  foto: { type: String, required: [true, 'Campo Foto é obrigatório'] },
  capa: { type: String, required: [true, 'Campo Capa é obrigatório'] },
  email: { type: String, required: [true, 'Campo E-mail é obrigatório'] },
  senha: { type: String, default: null, required: [true, 'Campo Senha é obrigatório'] },
  telefone: { type: String, required: [true, 'Campo Telefone é obrigatório'] },
  endereco: {
    cidade: { type: String, required: [true, 'Campo Cidade é obrigatório'] },
    uf: { type: String, required: [true, 'Campo UF é obrigatório'] },
    cep: { type: String, required: [true, 'Campo CEP é obrigatório'] },
    numero: { type: String, required: [true, 'Campo Número é obrigatório'] },
    pais: { type: String, required: [true, 'Campo País é obrigatório'] },
  },
  geo: {
    tipo: { type: String },
    coordinates: { type: Array }
  },
  dataCdastro: { type: Date, default: Date.now },
});

salaoSchema.index({ geo: '2dsphere' });
module.exports = mongoose.model('Salao', salaoSchema);
