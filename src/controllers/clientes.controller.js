import { Cliente } from "../models/Cliente.js"
import { Producto } from '../models/Producto.js'
export const getClientes = async(req , res)=> {
   try {
     
    const clientes = await Cliente.findAll()
    res.json(clientes)
   } catch (error) {
    return res.status(500).json({message : error.message });
   }
};


export const  getCliente = async (req, res) =>{
 try {
  const { id }= req.params;
  const cliente = await Cliente.findOne({
    where: {
      id,
    },
  });

  if (!cliente) 
    return res.status(404).json({ message: "cliente does not exist"});
  
  res.json(cliente);
 } catch (error) {
  return res.status(500).json({ message: error.message });
 }
};




export const createCliente = async(req , res)=> {
 
 const {nombre, apellido, rolId} = req.body
try {
    const newCliente = await Cliente.create({
        nombre,
        apellido,
        rolId
     })
    res.json(newCliente)
} catch (error) {
return res.status(500).json({message : error.message });

}
}

export const updateCliente = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, apellido, rol } = req.body;
  
      const cliente = await Cliente.findByPk(id);
      cliente.nombre = nombre;
      cliente.apellido = apellido;
      cliente.rol = rol;
      await cliente.save();
  
      res.json(cliente);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const deleteCliente = async (req , res) => {
 try {
    const {id} = req.params
    await Cliente.destroy({
     where:{
     id,
    }
    });
     res.sendStatus(204)
 } catch (error) {
    return res.status(500).json({message: error.message});
 }
}

export const getClienteProductos = async (req, res) => {
 try {
  const { id } = req.params;
  const productos = await Producto.findAll({
   where: { clienteId:id }
  });
  res.json(productos);
 } catch (error) {
  return res.status(500).json({message: error.message});

 }
}