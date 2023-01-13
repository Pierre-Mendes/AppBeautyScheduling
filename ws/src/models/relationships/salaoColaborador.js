const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoColaboradorSchema = new Schema({
  salaoId: { type: mongoose.Types.ObjectId, ref: 'Salao', required: [true, 'Campo ID Salão é obrigatório'] },
  colaboradorId: { type: mongoose.Types.ObjectId, ref: 'Colaborador', required: [true, 'Campo ID Colaborador é obrigatório'] },
  status: { type: String, enum: ['A', 'I'], default: 'A', required: [true, 'Campo Status é obrigatório'] },
  dataCdastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SalaoColaborador', salaoColaboradorSchema);