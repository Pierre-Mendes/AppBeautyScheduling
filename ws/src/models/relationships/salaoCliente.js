const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoClienteSchema = new Schema({
  salaoId: { type: mongoose.Types.ObjectId, ref: 'Salao', required: [true, 'Campo ID Salão é obrigatório'] },
  clienteId: { type: mongoose.Types.ObjectId, ref: 'Cliente', required: [true, 'Campo ID Cliente é obrigatório'] },
  status: { type: String, enum: ['A', 'I'], default: 'A', required: [true, 'Campo Status é obrigatório'] },
  dataCdastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SalaoCliente', salaoClienteSchema);