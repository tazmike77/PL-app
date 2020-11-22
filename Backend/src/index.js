const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const spawn = require('child_process').spawn;
const path = require('path');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const corsOptions = {
    origin: '*',
};



app.use(cors(corsOptions));






const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');
  },

  // By default, multer removes file extensions so let's add them back
  filename: (req, file, cb) => {
    const parts = file.mimetype.split("/");
    // console.log(parts[0])
      cb(null, `PL_${file.originalname}`);
  }
});

const upload = multer({storage: storage});


// app.post("/upload", upload.single('file'), (req, res, next) => {
//   const file = req.file;
//   console.log(file.name);
//   if(!file){
//     const error = new Error('nenhum ficheiro')
//     error.httpStatusCode = 400
//     return next(error)
//   }
//   res.send(file);
// })

let testes = '';


//envia a lista de todos os testes realizados
app.get( '/hist-Tests', function ( request, response ) {
  response.json( require('fs').readFileSync('./fileInfo.json', 'utf8') );
});

//multiplos ficheiros
app.post("/uploads", upload.array('files'), async (req, res, next) => {

  const files = req.files;
  // const arrays = JSON.parse(files)

  const dados = [];

  for(let i = 0; i < files.length; i++){
    dados.push(files[i].originalname)
  }


  if(!files){
    const error = new Error('nenhum ficheiro')
    error.httpStatusCode = 400
    return next(error)
  }

  dados1 ={
    nome: 'pedro'
  };

  res.send(dados1);
    let process = spawn('python', ['./main.py', dados ] );

      process.stdout.on('data', data => {
        let dataFinal= data.toString().split('{')
        dataFinal = '{' + dataFinal[1];
        dataFinal = dataFinal.split('}')[0] + '}'





      });





})




app.use((err,req, res, next) => res.json({error: err.message}));

app.listen(8000, () => {
    console.log('Servidor porta 8000');
})
