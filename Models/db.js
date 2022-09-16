//Arquivo de conexão do banco de dados
//Utilizar o conceito de conection pool, ou seja, um objeto vai gerenciar a conexão
//Lembrando que deve existir a tabela

async function connect(){
    if(global.connection)
        return global.connection.connect()

    const {Pool} = require('pg') //chamei o pg e coloquei no Objeto
    const pool = new Pool({connectionString : "url de conexão "})
   
    const client = await pool.connect()
    client.release()
   
    //guadar a variável 
    global.connection =  pool
    return pool.connect()
}


//criar as funções no qual o obtem as buscas de todos os usuários e turmas do bancod de dados
async function alunos(){
    const client = connect()
    const res= await client.query("SELECT * FROM Alunos GROUP BY Turmas")
    return res.rows
}


async function facilitadores(){
    const client = connect()
    const res= await client.query("SELECT * FROM Facilitadores")
    return res.rows
}

async function supervisores(){
    const client = connect()
    const res= await client.query("SELECT * FROM Supervisores")
    return res.rows
}


async function turmas(){
    const client = connect()
    const res = await client.query("SELECT * FROM Turmas ORDER BY _id")
    return res.rows
}

async function calls(){
    const client = connect()
    const res = await client.query("SELECT * FROM Calls")
    return res.rows
}

module.exports = { alunos,turmas,facilitadores,supervisores,calls }