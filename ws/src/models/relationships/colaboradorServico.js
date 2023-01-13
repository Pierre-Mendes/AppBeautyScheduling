const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServicoSchema = new Schema({
  colaboradorId: { type: mongoose.Types.ObjectId, ref: 'Colaborador', required: [true, 'Campo ID Colaborador é obrigatório'] },
  servicoId: { type: mongoose.Types.ObjectId, ref: 'Servico', required: [true, 'Campo ID Serviço é obrigatório'] },
  status: { type: String, enum: ['A', 'I'], default: 'A', required: [true, 'Campo Status é obrigatório'] },
  dataCdastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ColaboradorServico', colaboradorServicoSchema);