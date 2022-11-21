const app = new Vue({
    el: '#app',
    data: {
        saludar: 'Hola desde la instancia app',
        numero: 10,
        lista: ['1', '2', '3', '4', '100', '200'],
        activo: false,
        blog: '<h4>Hola querido mundo</h4>',
        texto: '',
        full_name: '',
        validation_error: '',
        nombre: '',
        text_error: false,
        text_success: false,
        sizetxt: '',
        font_texto: 20


    },
    methods: {
        saludando: function (saludo) {
            console.log(saludo);
        },
        verificarFullName: function () {
            if (this.full_name.length < 4) {
                this.validation_error = 'El nombre no es valido'
            } else {
                this.validation_error = ''
            }
        },
        verificarNombre: function () {
            if (this.nombre === 'neunapp') {
                this.text_success = true
                this.text_error = false
            } else {
                this.text_error = true
                this.text_success = false
            }
        },
        cambiarTexto: function () {
            this.font_texto = parseInt(this.sizetxt);

        }
    },
});