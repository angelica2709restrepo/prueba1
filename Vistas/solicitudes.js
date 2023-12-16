const mysql=require('mysql')

function insertar(conex,data,callback){
    let insertQ=
    "insert into usuario (documento,clave) VALUES (?,?)"
    let query=mysql.format(insertQ,[data.documento,data.clave])
    conex.query(query,function(err,result){
        if(err)throw err;
        callback(result)
    })
}

function eliminar(conex,data,callback){
    let deleteQ=
    "delete from usuario where documento=? and clave=? "
    let query=mysql.format(deleteQ,[data.documento,data.clave])
    conex.query(query,function(err,result){
        if(err)throw err;
        callback(result)
    })
}
module.exports={insertar,eliminar}