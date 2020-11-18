const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const spawn = require('child_process').spawn;

const process = spawn('python', ['./pl2020.py', 'pedro']);


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const corsOptions = {
    origin: '*',
};



app.use(cors(corsOptions));


process.stdout.on('data', data => {
  console.log(data.toString());
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads');
  },

  // By default, multer removes file extensions so let's add them back
  filename: (req, file, cb) => {
    const parts = file.mimetype.split("/");
    console.log(parts[0])
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


//multiplos ficheiros
app.post("/uploads", upload.array('files'), (req, res, next) => {
  const files = req.files;
  console.log(req.files.length)
  console.log(files[0])

  if(!files){
    const error = new Error('nenhum ficheiro')
    error.httpStatusCode = 400
    return next(error)
  }
  for(let i = 0; i< files.length; i++){

  }
  res.send(files);
})


app.use((err,req, res, next) => res.json({error: err.message}));

app.listen(8000, () => {
    console.log('Servidor porta 8000');
})
