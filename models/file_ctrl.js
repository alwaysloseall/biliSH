var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
var util = require('util');
var iconv = require("iconv-lite");
const images_url = "http://localhost:3000/images";
//images path
var imageDir = ".\\static\\images";
// tmp path
var tmpDir = ".\\static\\img_tmp";

exports.upload = function (req, res) {
    var form = new formidable.IncomingForm();
    form.encodeing = 'utf-8';

    //原始文件拓展名
    form.keepExtensions = false;
    //大小限制 <20m
    form.maxFieldsSize = 20 * 1024 * 1024;

    form.uploadDir = tmpDir;

    form.parse(req, function (err, fields, files) {
        //完整路径
        var imagePath = path.resolve(imageDir, files.file.name);

        //move tmpimg to imgpath
        fs.rename(files.file.path, imagePath, function (err) {
            if (err) {
                res.json({ 'success': false, 'msg': err });
            } else {
                var image_url = images_url + '/' + files.file.name;
                res.json({ 'success': true, 'msg': 'upload success !', 'image_url': image_url });
            }
        });
    });
}

// exports.download = function (req, res) {
//     var filename = req.params.filename;
//     var dir = imageDir;
//     var file_path = path.resolve(dir, filename);
//     fs.exists(file_path, function (exists) {
//         if (!exists) {
//             res.json({ 'success': false, 'msg': 'no such file !' });
//         } else {
//             res.download(file_path, function (err) {
//                 if (err) {
//                     res.json({ 'success': false, 'msg': err });
//                 }
//             });

//         }
//     });
// }