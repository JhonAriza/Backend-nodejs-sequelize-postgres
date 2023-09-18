import { Rol } from "../models/Rol.js";


export const getRols  = async (req, res) => {
  try {
    const rols = await Rol.findAll();
    res.json(rols);
   } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}




export const createRol = async (req, res) => {
  try {
    const {nombrerol} = req.body 
  const newRol = await Rol.create({
    nombrerol,
  })
  res.json(newRol)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}
export const getRol = async ( req, res)=> {
  const {id} = req.params
  try {
    const rol = await Rol.findOne({
      where: {id},
      attributes: ['nombrerol']
    })
    res.json(rol)
  } catch (error) {
    
  }
}
export const updateRol = async (req, res) => {
  try {
    const { id } = req.params;
   const rol = await Rol.findOne({
      where: {id},
    });
    rol.set(req.body);
    await rol.save();
    return res.json(rol);
  } catch (error) {
    return res.status(500).json({message: error.message});

  }
};

export const deleteRol = async(req, res)=> {
  const { id }= req.params;
  try {
    const result = await Rol.destroy({
      where:{id}
    })
    console.log(result)
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}