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
    app.delete('/deleteTurmas', (req, res) => {
        res.send('DELETE turmasTotal')
      })
      app.delete('/deleteFacilitadores', (req, res) => {
        res.send('DELETE Facilitadores')
      })
      app.delete('/deleteSupervisores', (req, res) => {
        res.send('DELETE Supervisores')
      })
      app.delete('/deleteAlunos', (req, res) => {
        res.send('DELETE Alunos')
      })
      app.delete('/deleteCalls', (req, res) => {
        res.send('DELETE Calls')
      })
       
    //editar
    app.delete('/updateTurmas', (req, res) => {
        res.send('POST turmasTotal')
      })
       
      app.delete('/updateFacilitadores', (req, res) => {
        res.send('POST facilitadores')
      })
       
      app.delete('/updateSupervisores', (req, res) => {
        res.send('POST supervisores')
      })
       
      app.delete('/updateAlunos', (req, res) => {
        res.send('POST alunos')
      })
       
      app.delete('/updateCalls', (req, res) => {
        res.send('POST calls')
      })
       


    //visualizar
    return res.send (
        router.get('/', (req, res) => {
            res.send('turmas.total','facilitadores','supervisores','alunos','calls')
          })
        router.get('/facilitadores', (req, res) => {
            res.send('acesso-facilitadores.js')
          })
          router.get('/supervisores', (req, res) => {
            res.send('acesso-supervisores.js')
          })
          router.get('/alunos', (req, res) => {
            res.send('acesso-alunos.js')
          })
    ) //output
    
}        