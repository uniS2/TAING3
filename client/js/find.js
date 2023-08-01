import { getNode } from "../lib/index.js";




async function ready() {
    const header = await getNode("header");
    const nav = await getNode("nav");
    const form = await getNode("form");
    const userInfo = await getNode(".userInfo");
  
    header.style.position = "relative";
    nav.style.display = "none";
    form.style.display = "none";
    userInfo.style.display = "none";
  }
  
  ready();