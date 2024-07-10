import { api } from "../../axios/axios"

export class ApiService {
  async uploadFile(data, fileName, path) {
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" })
    const file = new File([blob], `${fileName}.json`, { type: "application/json" })
  
    try {
      const res = await api.upload.uploadCreate({
        files: [file],
        path,
      })
        
      return res
    } catch (e) {
      throw new Error(`File upload failed: ${e.message}`)
    }
  }
  
  parseResponse(response) {
    if (Array.isArray(response?.data)) {
      return response.data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }))
    }
  
    return {
      id: response.data.id,
      ...response.data.attributes,
    }
  }

  async getDiagramData(diagram) {
    // const fileUrl = `${import.meta.env.VITE_API_ENDPOINT}${diagram.file.data.attributes.url}`
    // const fileRes = await axios.get(fileUrl)
        
    return {
      ...diagram.json,
      id: diagram.id,
      name: diagram.name,
    }
  }

  async getTemplateData(template) {
    // const fileUrl = `${import.meta.env.VITE_API_ENDPOINT}${diagram.file.data.attributes.url}`
    // const fileRes = await axios.get(fileUrl)
        
    return {
      ...template.json,
      id: template.id,
      title: template.title,
      custom: Number(template.custom),
    }
  }
  parseQuery(query) {
    return Object.keys(query).reduce((acc, key) => {
      acc[key] = { $eq: query[key] }
      
      return acc
    }, {})
  }
}
  