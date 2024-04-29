import itemModel from "../Model/itemModel/index.js";
import userModel from "../Model/userModel/index.js";


const initDb=async()=>{
    await itemModel.sync({
        alter:true,
        force:false

    })
    await userModel.sync({
        alter:true,
        force:false

    })
}
export default initDb;