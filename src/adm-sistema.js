//Tela de Acesso ao Sistema

//cria uma função que busca de forma geral as turmas , alunos e calls
//retorna a visualização, edição e deleção desses componentes
//vamos usar o express  e Router para poder fazermos ações do CRUD na função


//imports

//

const router = express.Router()

async function sistema(req,res){
    const{turmas,facilitadores,supervisores,alunos,calls} =req.body //input
     
    const turmasTotal = db.turmas()
    const facilitadores = db.facilitadores()
    const supervisores = db.supervisores()
    const alunos = db.alunos()
    const calls = db.calls()
     
     
    //ações que podemos fazer com os componentes
    //deletar
    router.delete("/deleteTurmas",turmasTotal)
    router.delete("/deleteFacilitadores",facilitadores)
    router.delete("/deleteSupervisores",supervisores)
    router.delete("/deleteAlunos",alunos)
    router.delete("/deleteCalls",calls)
       
    //editar
    router.post("/updateTurmas",turmasTotal)
    router.post("/updateFacilitadores",facilitadores)
    router.post("/updateSupervisores",supervisores)
    router.post("/updateAlunos",alunos)
    router.post("/updateCalls",calls)


    //visualizar
    return res.send (
        router.get("/turmas",turmasTotal)
        router.get("/facilitadores",facilitadores)
        router.get("/supervisores",supervisores)
        router.get("/alunos",alunos)
        router.get("/calls",calls)
    ) //output
    
}        
