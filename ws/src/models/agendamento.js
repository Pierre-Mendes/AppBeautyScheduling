const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamentoSchema = new Schema({
  salaoId: { type: mongoose.Types.ObjectId, ref: 'Salao', required: [true, 'Campo ID Salão é obrigatório'] },
  clienteId: { type: mongoose.Types.ObjectId, ref: 'Cliente', required: [true, 'Campo ID Cliente é obrigatório'] },
  servicoId: { type: mongoose.Types.ObjectId, ref: 'Servico', required: [true, 'Campo ID Serviço é obrigatório'] },
  colaboradorId: { type: mongoose.Types.ObjectId, ref: 'Colaborador', required: [true, 'Campo ID Colaborador é obrigatório'] },
  dataAgendamento: { type: Date, required: [true, 'Campo Data Agendamento é obrigatório'] },
  comissao: { type: Number, required: [true, 'Campo Comissão é obrigatório'] },
  valor: { type: Number, required: [true, 'Campo Valor é obrigatório'] },
  transactionId: { type: String, required: [true, 'Campo Transaction ID é obrigatório'] },
  dataCdastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Agendamento', agendamentoSchema);
