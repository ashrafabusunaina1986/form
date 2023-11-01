const fs =require('node:fs')
const {v4:id}=require('uuid')

const write=(file,data='')=>{
    const f=require(file)
    f.push({
        id:id(),data
    })
    return fs.writeFileSync(file,JSON.stringify(f,null,2))
}
const read=file=>{
    return JSON.parse(fs.readFileSync(file))
}
exports.write=write
exports.read=read