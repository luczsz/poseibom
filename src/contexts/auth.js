import React, {useState, useEffect, createContext} from 'react';
import * as SQLite from 'expo-sqlite';

// criar conexão 
function OpenDB(){
    const db = SQLite.openDatabase("fianceDB");
    return db;
  }

// criar db como uma variavel global
const db = OpenDB();


export const AuthContext = createContext({});

export default function AuthProvaider({children}){

    const [ user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ loadingAuth, setLoadingAuth ] = useState(false);
    const [id, setId] = useState(0);


    //criando base e tabela | verificando a existencia de tabelas
    db.transaction( (tx) => {
        tx.executeSql(
          "create table if not exists users (id integer primary key, nome TEXT, email TEXT, senha TEXT)"
        );
      });
    
    //Verificando ID 
    useEffect( () => {
        
        function verificar(){

            db.transaction( (tx) => {
              tx.executeSql(
                "SELECT * FROM users",
                [],
                (tx, results) => {
                  var len = results.rows.length;
                  if(len > 0){
                    console.log('existem:' + results.rows.length + 'registros');
                    console.log(results.rows);
                    setId( results.rows.length);
                  }
                  else{
                    console.log('Sem registros');
                    console.log(results);
                  }
                }
              )
            })
          };
          verificar();

    },[])
    

    //Logando um usuario
    function singIn(email, senha){
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM users WHERE email = ? AND senha = ? LIMIT 1;',
          [email, senha],
          (_, { rows }) => {
            if (rows.length > 0) {
              const user = rows.item(0);
              
              let data = {
                nome: user.nome,
                email: user.email,
                senha: user.senha,
                id: user.id,
              }
              
              setLoadingAuth(true);
              setUser(data);
              console.log(data);
            } else {
              alert('Erro ao logar')
              console.log(new Error('Credenciais inválidas'));
            }
          },
          (_, error) => {
            console.log(error);
          }
        );
      });
    }

    //Criando um usuario
    function singUp(nome, email, senha){
      
      setId(id + 1);

        let data ={
            nome: nome,
            email: email,
            senha: senha,
            id: id,
        }
        
        db.transaction( (tx) => {
            tx.executeSql(
                "INSERT INTO users (id, nome, email, senha) values (?, ?, ?, ?);", [id, nome, email, senha]
            )
        },
        (Error) => {
            console.log(Error.message);
            setLoading(false);
            alert('Erro ao se cadastrar');
        },
        () => {
            console.log('Certo');
            setLoadingAuth(true);
            setUser(data);
        }
        
        )

    };

    // Dados Ofiline

    return(
        <AuthContext.Provider value={{ signed: !!user, user, singUp, singIn, loadingAuth }} >
            {children}
        </AuthContext.Provider>
    )
}
