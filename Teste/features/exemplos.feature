Feature: Teste de calculos matemáticos
    Scenario: Conta de adição
        Given que tenho dois valores
        When faço a soma do numero 10 e 9
        Then o resultado será o número 19

    Scenario: Domingo não é sexta
        Given Hoje é Domingo
        When Eu pergunto se é sexta-feira ainda
        Then dito "nop"


        
    Scenario: Hoje é ou não é sexta
        Given hoje é "<dia>"
        When Eu pergunto se é sexta-feira ainda
        Then Eu deveria ser informado "<resposta>"

    Examples:
        | dia         | resposta |
        | Sexta-feira | TGIF     |
        | Domingo     | nop      |
        | algo mais!  | nop      |