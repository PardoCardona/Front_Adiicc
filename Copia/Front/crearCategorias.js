//Se importa
import swal from "sweetalert";
//Tambien se debe importar el navigate
const navigate = useNavigate();

//Se crea una ventana modal para mostrar que la categoria se crea correctamente
//en la linea 32

const mensaje1 = "La categoria se crea correctamente";
        swal({
          title: "Información",
          text: mensaje,
          icon: "success",
          button: {
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className: "btn btn-primary",
              closeModal: true,
            },
          },
        });

        //Redireccionar nuevamente a la pagina de admin
      navigate("/admin");


     //Se crea otra cajita para el ingreso de datos en este caso el de las imagens
      <label className="uppercase text-gray-600 block text-lx font-bold">
                  Imagen de la Categoria
                </label>
                <input
                  type="text"
                  id="imagen"
                  name="imagen"
                  placeholder="Imagen"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={imagen}
                  onChange={onChange}
                />