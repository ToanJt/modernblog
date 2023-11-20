import { watch, computed, ref } from "vue";
import userAuth from "./useAuth";
import { db, dbCartRef } from "@/firebase";
import {
  collection,
  query,
  doc,
  addDoc,
  deleteDoc,
  getDocs,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

export default function useCart() {
  const { userStatus } = userAuth();
  const yourCart = ref([]);
  const message = ref('');

  async function getAllProduct() {
    try {
        console.log(userStatus.value)
      onSnapshot(dbCartRef, (docs) => {
        yourCart.value = [];
        docs.forEach((doc) => {
          if(doc.data().user.id === userStatus.value.uid) {
            yourCart.value.push({
                cid: doc.id,
                ...doc.data(),
              });
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  function test() {
    if (!userStatus.value === false) {
      getAllProduct();
    } else {
      yourCart.value = [];
    }
  }
  watch(
    () => !userStatus.value,
    () => {
      test();
    }
  );

  async function addToCart(item) {
    try {
      if (userStatus) {
        const q = query(collection(db, "cart"));
        const querySnapshot = await getDocs(q);
        const itemExists = ref();
        await querySnapshot.forEach((doc) => {
          if (doc.data().name === item.name && doc.data().user.id === userStatus.value.uid) {
            itemExists.value = doc.data();
            return;
          }
        });
        const user = {
          id: userStatus.value.uid,
          email: userStatus.value.email,
        };
        if (itemExists.value) {
          const q = query(collection(db, "cart"));
          const querySnapshot = await getDocs(q);
          await querySnapshot.forEach((doc) => {
            if (doc.data().name === item.name) {
              const updateRef = updateDoc(doc.ref, {
                quantity: doc.data().quantity + item.quantity,
              });
              updateRef;
            }
          });
        } else {
          const newItem = {
            user,
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
          };
          await addDoc(dbCartRef, newItem);
        }
      } else {
        console.log("Please Sign IN");
      }
      getAllProduct();
    } catch (error) {
        message.value = 'Please sign in'
    }
  }

  async function removeProduct(cid) {
    try {
      const product = doc(dbCartRef, cid);
      await deleteDoc(product);
      getAllProduct();
    } catch (error) {
      console.log("Khong the xoa");
    }
  }

  const totalCost = computed(function () {
    let total = 0;
    yourCart.value.forEach(function (item) {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  });

  return { message, yourCart, addToCart, totalCost, getAllProduct, removeProduct };
}
