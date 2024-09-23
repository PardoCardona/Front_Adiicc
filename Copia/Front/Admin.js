//Se importa
import React, { useEffect, useState } from "react";
//Se importa
import crud from "../conexiones/crud";



















//Se utiliza para recibir todas las categorias que bienen
const [categoria, setCategoria] = useState([]);

//Se crea una funcion
const cargarCategorias = async () => {
  const response = await crud.GET(`/api/categorias`);
  console.log(response);
  setCategoria(response.categoria);
}
//Apenas se ingrese se debe ejecutar para mostrar las categorias
useEffect(() =>{
   cargarCategorias();
},[]);//Para que solo se ejecute una vez

//Se crea una funcion

const borrarCategoria = async (e, idCategoria) => {
  e.preventDefault();
  const response = await crud.DELETE(`/api/categorias/${idCategoria}`);
  console.log(response.msg);
  //Ventana modal que me indica que se borro la categoria
  const mensaje = "Se borro correctamente la categoria.";
    swal({
      title: "Error",
      text: mensaje,
      icon: "error",
      button: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-danger",
          closeModal: true,
        },
      },
    });
}



//Se crea una tabla para visualizar las categorias.
return (
    <>
   <Header />
    <div className="md:flex md:min-h-screen">
          <Sidebar />
    <main className="flex-1">
          <h1
            className=" colum bg-gradient-to-r from-indigo-200 via-violet-700 to-indigo-200
          bg-clip-text font-display text-4xl tracking-tight text-transparent text-center"
          >
            Lista de categorias
          </h1>
          <div>
              <table>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>ID</th>
                  <th>Opciones</th>
                </tr>
              </thead>

              <tbody className="bg-white">

                    {
                      //Esta es la funcion de javaScrip que nos permite hacer dinamico
                      //la tabla, nos permite realizar el llenado automatico
                      categoria.map(
                        item =>
                          <tr key={item._id}>
                            <td><img src={item.imagen}></img></td>
                             <td>{item.nombre}</td>
                             <td>{item._id}</td>

                             //Se Crean botones con diferentes opciones
                             <td>
                             <input
                                type="submit"
                                value="Eliminar"
                                className="bg-violet-600 mb-5 w-full py-3 px-4 text-white uppercase font-bold rounded hover:cursor-pointer"
                               //Se elimina 
                                onClick={(e) => borrarCategoria(e, item._id)} 
                              />  

                                <input
                                type="submit"
                                value="Actualizar"
                                className="bg-violet-600 mb-5 w-full py-3 px-4 text-white uppercase font-bold rounded hover:cursor-pointer"
                              />  

                                <input
                                type="submit"
                                value="Crear producto"
                                className="bg-violet-600 mb-5 w-full py-3 px-4 text-white uppercase font-bold rounded hover:cursor-pointer"
                              />  

                             </td>

                          </tr>
                      )
                    }


                  </tbody>

              </table>
          </div>
      </main>
    </div>
        
    </>
  );
};
export default Admin;

