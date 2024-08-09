const mongoose = require('mongoose');

const dataUser = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    correoElectronico: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
            },
            message: props => `${props.value} no es un correo electrónico válido!`
        }
    },
    numeroTelefono: {
        type: String,
        required: true,
        trim: true
    }
}, );

const User = mongoose.model('User', dataUser);

module.exports = User;
