import imageNutricionista from "../assets/mulherMarcarConsulta.svg"
import { CardMarcarConsulta } from "./CardMarcarConsulta/CardMarcarConsulta"

export const MarcarConsulta = () => {
  return (
        <CardMarcarConsulta
        image={{url: imageNutricionista, alt: "Imagem Nutricionista Gabriella"}}
        
        nutricionist="Camilla Gabriella"
        socialMedia="@camig-nutri"

        />
  )
}
