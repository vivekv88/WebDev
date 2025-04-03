const crypto = require('crypto')
const multer = require('multer')
const path = require('path')


//DiskStorage

// this all is for avoiding the overwriting of the files due to same filename
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12,function(err,bytes) {
            const fn = bytes.toString("hex") + path.extname(file.originalname)
            cb(null, fn)  // cb function ki wjh se hi hmara file name set hoga jiski wjh se uploaded files overwrite nhi hongi
          })
        
    }
  })
  

  //export upload variable

  const upload = multer({ storage: storage });

  module.exports = upload;

