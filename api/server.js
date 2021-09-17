const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

dotenv.config()


app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ limit: '50mb',  extended: true, parameterLimit:50000 }))

app.use('/images', express.static(path.join(__dirname, '/images')))

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

//NEW MULTER

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: 'images',
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '_' + Date.now() + path.extname(file.originalname),
    )
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
})

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error('Please upload a Image'))
    }
    cb(undefined, true)
  },
})

app.post(
  '/api/upload',
  imageUpload.single('image'),
  (req, res) => {
    
    res.json({
      success: 1,
      file: {
        url: `https://mooimalaysian-f535oyzjxa-as.a.run.app/api/images/${req.file.filename}`,
        // ... and any additional fields you want to store, such as width, height, color, extension, etc
      },
      filename:req.file.filename,
    })
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  },
)

// UPLOAD URL
app.post('/api/urlUpload',function (req, res,next) {
 

 
    res.json({
      success: 1,
      meta: {
        "title" : "CodeX Team",
        "description" : "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
        "image" : {
            "url" : 'https://www.youtube.com/watch?v=HRxNrY0m-N8'
        }
    },
     
    })
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  },
)


//GET URL

// app.get('/api/url/:name', function (req, res, next) {
//   var options = {
//     root: path.join('images'),
//     dotfiles: 'deny',
//     headers: {
//       'x-timestamp': Date.now(),
//       'x-sent': true,
//     },
//   }


  //GET IMAGE
app.get('/api/images/:name', function (req, res, next) {
  var options = {
    root: path.join('images'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
    },
  }

  var fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      
    }
  })
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

// Serve static assets if in production
if (
  process.env.NODE_ENV === 'production'
    ? 'https://mooimalaysian.herokuapp.com/api'
    : 'http://localhost:5000'
) {
  // Set static folder
  // app.use(express.static('client/build'));

  // app.use('*', express.static(path.join(__dirname, "client", "build")))

  const root = require('path').join(__dirname, 'client', 'build')
  app.use(express.static(root))
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root })
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on PORT ${port}`))


