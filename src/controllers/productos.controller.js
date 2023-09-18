import { Producto } from "../models/Producto.js";


export const getProductos  = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
   } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}




export const createProducto = async (req, res) => {
  try {
    const {nombre,precio,cantidad,fecha,done,clienteId} = req.body 
  const newProducto = await Producto.create({
    nombre,
    precio,
    cantidad,
    fecha,
    done,
    clienteId
  })
  res.json(newProducto)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}
export const getProducto = async ( req, res)=> {
  const {id} = req.params
  try {
    const producto = await Producto.findOne({
      where: {id},
      attributes: ['nombre']
    })
    res.json(producto)
  } catch (error) {
    
  }
}
export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
   const producto = await Producto.findOne({
      where: {id},
    });
    producto.set(req.body);
    await producto.save();
    return res.json(producto);
  } catch (error) {
    return res.status(500).json({message: error.message});

  }
};

export const deleteProducto = async(req, res)=> {
  const { id }= req.params;
  try {
    const result = await Producto.destroy({
      where:{id}
    })
    console.log(result)
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}