class Database {
    connect() {
        console.log('fazendo conexao com o banco de dados genericos');
    }
}

// HERDA AS CARACTERISTICAS DE DATABASE
// SOBRESCREVENDO METODOS - pego metodo da superclasse e reescrevo na subclass com comportamento diferente
class MongoDataBase extends Database {
    connect() {
        console.log('fazendo conexao com banco de dados Mongo');
    }
}

class MySQL extends Database {
    connect() {
        console.log('fazendo conexao com banco SQL');
    }
}

const db1 = new Database();
const db2 = new MongoDataBase();
const db3= new MySQL();

// exemplo de uso
const connectToDataBase = (db: Database) => {
    db.connect();
}

connectToDataBase(db1);
connectToDataBase(db2);
connectToDataBase(db3);

// rodar 
// npx ts-node video.ts