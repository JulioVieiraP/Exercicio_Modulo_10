$(document).ready(function(){

    $('#cadastroForm').submit(function(e) {
        e.preventDefault()
        if ($(this).valid()) {
          alert("Formulário completo!");
        }
    })

    // Aplicando máscaras aos campos
    $('#cpf').mask('000.000.000-00', {reverse: true})
    $('#telefone').mask('(00) 0 000-0000')
    $('#cep').mask('00000-000')

    // Adicionando regras de validação
    $('#cadastroForm').validate({
      rules: {
        nomeCompleto: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        telefone: {
          required: true
        },
        cpf: {
          required: true
        },
        enderecoCompleto: {
          required: true
        },
        cep: {
          required: true
        }
      },
      messages: {
        nomeCompleto: {
          required: "Por favor, insira seu nome completo."
        },
        email: {
          required: "Por favor, insira seu e-mail.",
          email: "Por favor, insira um e-mail válido."
        },
        telefone: {
          required: "Por favor, insira seu telefone."
        },
        cpf: {
          required: "Por favor, insira seu CPF."
        },
        enderecoCompleto: {
          required: "Por favor, insira seu endereço completo."
        },
        cep: {
          required: "Por favor, insira seu CEP."
        }
      },
      onfocusout: function(element) {
        this.element(element)
      },
      onkeyup: false
    
    })
})