

const db = require('../database');




class incidente{
    constructor (id_lugar, id_tipo_incidente){
        this.id_lugar=id_lugar;
        this.id_tipo_incidente=id_tipo_incidente;
    }
    static fetchAll() {
        return db.execute('SELECT id ,nombre_lugar, tipo_incidente, fecha_incidente from lugar_incidente LI,lugar l,incidente i WHERE li.id_lugar=l.id_lugar and li.id_incidente=i.id_incidente ORDER by fecha_incidente DESC');
    }

    static fetchAllLugares() {
        return db.execute('SELECT * from lugar');
    }

    static fetchAllIncidentes() {
        return db.execute('SELECT * from incidente');
    }

    save(){
        return db.execute('INSERT INTO lugar_incidente (id_lugar, id_incidente) VALUES (?, ?)',
        [this.id_lugar, this.id_tipo_incidente]
    );
    }
}
module.exports=incidente;

