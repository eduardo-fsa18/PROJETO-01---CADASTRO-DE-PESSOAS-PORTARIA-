//classe base acesso
class Pessoa{
    constructor (id){
        this.id = id;
    }
    mostrarDetalhes (){
        console.log(`ID do ${this.id}`);
    }
}
//subclasse da aluno
class Aluno extends Pessoa{
    constructor(id){
        super (id);
    }
}

class Professor extends Pessoa{
    constructor (id){
        super(id);

    }
}
class Visitantes extends Pessoa{
    constructor (id){
        super(id);

    }
}
class Administrativo extends Pessoa{
    constructor (id){
        super(id);
    }
}
class Terceiros extends Pessoa{
    constructor (id){
        super(id);
    }
}

// confirmar acesso abstrato da pessoa

class CadastroPessoa {
    confirmarAcesso(id){
        throw new Error (`Essa pessoa nao possui cadastro por tanto nao consegue acesso `);

    }
}
// confirmacao acesso concreto do aluno

class CadastroAluno extends CadastroPessoa{
    confirmarAcesso(id){
        return new Aluno (id);

    }
}
//confirmacao acesso concreto do professor 

class CadastroProfessor extends CadastroPessoa{
    confirmarAcesso(id){
        return new Professor (id);

    }
}
//confirmacao acesso concreto do visitante 

class CadastroVisitante extends CadastroPessoa{
    confirmarAcesso(id){
        return new Visitantes (id);

    }
}
class CadastroTerceiros extends CadastroPessoa{
    confirmarAcesso(id){
        return new Terceiros (id);
    }
}
class CadastroAdministrativo extends CadastroPessoa{
    confirmarAcesso(id){
        return new Administrativo (id);
    }
}
//uso padrao ..........

const cadastroAluno = new CadastroAluno();
const cadastroProfessor = new CadastroProfessor ();
const cadastroVisitante = new CadastroVisitante();
const cadastroTerceiros = new CadastroTerceiros();
const cadastroAdministrativo = new CadastroAdministrativo();

const pessoa1 = cadastroAluno.confirmarAcesso('Aluno: cleide');
const pessoa2 = cadastroAluno.confirmarAcesso('Aluno: joao');
const pessoa3 = cadastroProfessor.confirmarAcesso('Professor: rafael');
const pessoa4 = cadastroProfessor.confirmarAcesso('Professor: jacinto');
const pessoa5 = cadastroVisitante.confirmarAcesso('Visitante: juju');
const pessoa6 = cadastroVisitante.confirmarAcesso('Visitante: melissa');
const pessoa7 = cadastroTerceiros.confirmarAcesso('Terceiro: leo');
const pessoa8 = cadastroTerceiros.confirmarAcesso('Terceiro: geniel');
const pessoa9 = cadastroAdministrativo.confirmarAcesso('Administrativo: gabriel')
const pessoa10 = cadastroAdministrativo.confirmarAcesso('Administrativo: edu');

pessoa1.mostrarDetalhes();
pessoa2.mostrarDetalhes();
pessoa3.mostrarDetalhes();
pessoa4.mostrarDetalhes();
pessoa5.mostrarDetalhes();
pessoa6.mostrarDetalhes();
pessoa7.mostrarDetalhes();
pessoa8.mostrarDetalhes();
pessoa9.mostrarDetalhes();
pessoa10.mostrarDetalhes();
