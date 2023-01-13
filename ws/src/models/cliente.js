const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  nome: { type: String, required: [true, 'Campo Nome é obrigatório'] },
  telefone: { type: String, required: [, 'Campo Telefone é obrigatório'] },
  email: { type: String, required: [true, 'Campo E-mail é obrigatório'] },
  senha: { type: String, required: [true, 'Campo Senha é obrigatório'] },
  foto: { type: String, required: [true, 'Campo Foto é obrigatório'] },
  dataNascimento: { type: String, required: [true, 'Campo Data de Nascimento é obrigatório'] },
  sexo: { type: String, enum: ['M', 'F'], required: [true, 'Campo Sexo é obrigatório'] },
  status: { type: String, enum: ['A', 'I'], default: 'A', required: [true, 'Campo Status é obrigatório']},
  documento: {
    tipo: { type: String, enum: ['individual', 'corporation'], required: [true, 'Campo Tipo é obrigatório'] },
    numero: { type: String, required: [true, 'Campo Número é obrigatório'] },
  },
  endereco: {
    cidade: { type: String, required: [true, 'Campo Cidade é obrigatório'] },
    uf: { type: String, required: [true, 'Campo UF é obrigatório'] },
    cep: { type: String, required: [true, 'Campo CEP é obrigatório'] },
    numero: { type: String, required: [true, 'Campo Número é obrigatório'] },
    pais: { type: String, required: [true, 'Campo País é obrigatório'] },
  },
  dataCdastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Colaborador', clienteSchema);
