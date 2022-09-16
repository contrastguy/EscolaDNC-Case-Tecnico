////Tela de acesso dos Supervisores


//Função que busca no banco as turmas e retorna o link das calls


//imports

static login = async(req,res) => {
    const {username, password} = req.body
    const user = await db.users() //coloca a função para achar 

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

static turmas = async(req,res) => {
    const {turmas} = req.body.id
    const varTurma =  await db.turmas()

    if(!varTurma) {
        return res.status(400).send({error:"Turma não encontrada"})
    }
    return res.send({"link da call da turma"}) 
}