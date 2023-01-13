const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horarioSchema = new Schema({
  salaoId: { type: mongoose.Types.ObjectId, ref: 'Salao', required: [true, 'Campo ID Salão é obrigatório'] },
  especialidades: [{  type: mongoose.Types.ObjectId, ref: 'Servico', required: [true, 'Campo ID Serviço é obrigatório'] }],
  colaboradores: [{  type: mongoose.Types.ObjectId, ref: 'Colaborador', required: [true, 'Campo ID Colaborador é obrigatório'] }],
  diasDaSemana: { type: [Number], required: [true, 'Campo Dias da Semana é obrigatório'] },
  dataInicio: { type: Date, required: [true, 'Campo Data Inicio é obrigatório'] },
  dataFim: { type: Date, required: [true, 'Campo Data Final é obrigatório'] },
  dataCdastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Horario', horarioSchema);
