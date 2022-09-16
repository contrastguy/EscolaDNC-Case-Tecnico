//Tela de acesso dos alunos 

// O que usaria  : node.js, express , jwt , bcrypt

//Como faria : Criaria uma função usando async e await 
//para procurar, de forma assícrona o Usuário no banco de dados
//criaria um token com jwt 
//retorna a validação do token e do login

//importações necessárias aqui

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

module.exports= {login}