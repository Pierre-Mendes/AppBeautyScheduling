const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorSchema = new Schema({
  nome: { type: String, required: [true, 'Campo Nome é obrigatório'] },
  telefone: { type: String, required: [, 'Campo Telefone é obrigatório'] },
  email: { type: String, required: [true, 'Campo E-mail é obrigatório'] },
  senha: { type: String, required: [true, 'Campo Senha é obrigatório'] },
  foto: { type: String, required: [true, 'Campo Foto é obrigatório'] },
  dataNascimento: { type: String, required: [true, 'Campo Data de Nascimento é obrigatório'] },
  sexo: { type: String, enum: ['M', 'F'], required: [true, 'Campo Sexo é obrigatório'] },
  status: { type: String, enum: ['A', 'I'], default: 'A', required: true},
  contaBancaria: {
    titular: { type: String, required: [true, 'Campo Titular é obrigatório'] },
    cpfCnpj: { type: String, required: [true, 'Campo CPF/CNPJ é obrigatório'] },
    banco: { type: String, required: [true, 'Campo Banco é obrigatório'] },
    tipo: { type: String, enum: ['CC', 'CP'], required: [true, 'Campo Tipo é obrigatório'] },
    agencia: { type: String, required: [true, 'Campo Agência é obrigatório'] },
    numero: { type: String, required: [true, 'Campo Número é obrigatório'] },
    digitoVerificador: { type: String, required: [true, 'Campo Dígito Verificador é obrigatório'] },
  },
  recipientId: { type: String, required: [true, 'Campo Recipient ID é obrigatório']},
  dataCdastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Colaborador', colaboradorSchema);
