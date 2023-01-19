const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arquivoSchema = new Schema({
  refPathId: { type: Schema.Types.ObjectId, refPath: 'model', required: [true, 'ID da referência é obrigatório'] },
  model: { type: String, enum: ['Salao', 'Servico'], required: [true, 'Modelo é obrigatório'] },
  path: { type: String, required: [true, 'Caminho do arquivo é obrigatório'] },
  dataCadastro: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Arquivo', arquivoSchema);