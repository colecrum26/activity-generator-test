import { getCategories } from "../helpers/getCategories";

function Categories() {
  
  
  return (
    <div>
      <button type="submit" id="education" onClick={getCategories}>Educational</button>
      <button type="submit" id="recreational" onClick={getCategories}>Recreational</button>
      <button type="submit" id="social" onClick={getCategories}>Social</button>
      <button type="submit" id="diy" onClick={getCategories}>DIY</button>
      <button type="submit" id="charity" onClick={getCategories}>Charity</button>
      <br />
      <button type="submit" id="cooking" onClick={getCategories}>Cooking</button>
      <button type="submit" id="relaxation" onClick={getCategories}>Relaxation</button>
      <button type="submit" id="music" onClick={getCategories}>Music</button>
      <button type="submit" id="busywork" onClick={getCategories}>Busywork</button>
    </div>
  )
}

export default Categories;
