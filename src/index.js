import getRandomAddress from "./randomAddress";
import { nanoid } from "nanoid";
import mainImage from "./assets/image.jpg";
import "./styles/main.scss";

console.log("CONNECT::", nanoid());
console.log("CONNECT::", getRandomAddress());

const img = document.getElementById("mainImage");
img.src = mainImage;
