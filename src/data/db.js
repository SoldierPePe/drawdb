import { DiagramService } from "../core/services/diagramService"
import { TemplateService } from "../core/services/templateService"

export const db = {
  diagrams: new DiagramService(),
  templates: new TemplateService(),
  delete: ()=>{
    return new Promise((resolve, reject)=>{
      reject("Not implemented")
    })
  },
}