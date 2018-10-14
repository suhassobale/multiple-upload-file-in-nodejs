var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage =   multer.diskStorage({
    destination: function (req, file, cb) {
        console.log( __dirname);
      cb(null,  './public/upload');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
var upload = multer({storage:storage}).array('filetitle',2);   // file name and limit to upload files
router.get('/',function(req,res,next){
    res.render('file-upload',{"form":"file upload form"});
});

router.post('/', function(req,res,next){
    upload(req, res, function(err) {
        if(err) {
            console.log('Error Occured');
            return;
          }
          res.end(JSON.stringify(req.file));
    });
     
});

module.exports=router;
