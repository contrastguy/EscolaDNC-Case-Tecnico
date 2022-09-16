//Tela de acesso dos Facilitadores

//Segue o mesmo conceito de acesso dos alunos
//função com login que busca no banco de dados o usuário e senha
//Autenticação de senha com Bcrypt e JWT
//retorna a validação do token e do login

//imports

//


const login = async(req,res) => {
    const {username, password} = req.body
    const user =  db.users() //coloca a função para achar 

    if(!user) {
        return res.status(400).send({error:"Usuário não encontrado"})
    }
    const isTheSame =  await brypt.compare(password,user.password)
    if(!isTheSame){
        return res.status(400).send({error:"Credenciais incorretas"})
    }

    //else
    user.password = undefined 
    return res.send({
        user,
        token: this.generateToken(user) //geração de um token jwt
    })

    // função que gera um token jwt
    static generateToken(user){
        return jwt.sign({id:user.id, name: user.name},segredo)
    }

}

module.exports={login}