const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicoSchema = new Schema({
  salaoId: { type: mongoose.Types.ObjectId, ref: 'Salao', required: [true, 'Campo ID Salão é obrigatório'] },
  titulo: { type: String, required: [true, 'Campo Titulo é obrigatório'] },
  preco: { type: Number, required: [true, 'Campo Preço é obrigatório'] },
  duracao: { type: Number, required: [true, 'Campo Duração é obrigatório'] },
  comissao: { type: Number, required: [true, 'Campo Comissão é obrigatório'] },
  recorrencia: { type: Number, required: [true, 'Campo Recorrência é obrigatório'] },
  descricao: { type: String, required: [true, 'Campo Descrição é obrigatório'] },
  status: { type: String, enum: ['A', 'I', 'E'], default: 'A', required: [true, 'Campo Status é obrigatório'] },
  dataCdastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Servico', servicoSchema);
