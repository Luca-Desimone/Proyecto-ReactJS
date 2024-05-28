import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../firebase/firebase";

export const fetchProducto = async () => {
  const productos = [];
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    querySnapshot.forEach((doc) => {
      productos.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error fetching productos:", error);
    throw error; 
  }
  return productos;
};
