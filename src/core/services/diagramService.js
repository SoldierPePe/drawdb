import { api } from "../../axios/axios"
import { ApiService } from "./apiUtilService"

export class DiagramService extends ApiService {
  async add(data) {
    try {
    //   const uploadedFiles = await this.uploadFile(data, data.name, 'Diagrams')
  
      const res = await api.diagrams.postDiagrams({
        data: {
          name: data.name,
          json: data,

        //   file: uploadedFiles[0].id as number,
        },
      })

      const { id } = this.parseResponse(res)
      
      return id
    } catch (e) {
      throw new Error(`Diagram add failed: ${e.message}`)
    }
  }
  
  async update(id, data) {
    try {
    //   const uploadedFiles = await this.uploadFile(data, data.name, 'Diagrams')
  
      const res = await api.diagrams.putDiagramsId(id, {
        data: {
          name: data.name,
          json: data,

        //   file: uploadedFiles[0].id as number,
        },
      })
  
      return this.parseResponse(res)
    } catch (e) {
      throw new Error(`Diagram update failed: ${e.message}`)
    }
  }
  
  async get(id) {
    try {
      if(isNaN(id) || id === 0) {
        throw `Invalid diagram id: ${id}`
      }

      const res = await api.diagrams.getDiagramsId(id, {
        query: {
        //   populate: 'file',
        },
      })
  
      const data = this.parseResponse(res)
      
      return this.getDiagramData(data)
      
    } catch (e) {
      throw new Error(`Diagram get failed: ${e.message}`)
    }
  }
  
  async toArray(params = {}) {
    try {
      const res = await api.diagrams.getDiagrams({
        "pagination[page]": 1,
        "pagination[pageSize]": 10000,

        // populate: 'file',
        ...params,
      })
  
      return this.parseResponse(res)
    } catch (e) {
      throw new Error(`Diagrams toArray failed: ${e.message}`)
    }
  }

  orderBy(field) {
    field = field || 'updatedAt'
    
    return {
      last: async () => {
        const data = await this.toArray({ sort: field })
    
        if (data.length === 0) {
          throw "No diagrams available"
        }
    
        return this.getDiagramData(data[data.length - 1])
      },
      first: async () => {
        const data = await this.toArray({ sort: field })
    
        if (data.length === 0) {
          throw "No diagrams available"
        }
    
        return this.getDiagramData(data[0])
      },
      toArray: async () => {
        return await this.toArray({ sort: field })
      },
    }
  }

  async delete(id) {
    try {
      await api.diagrams.deleteDiagramsId(id)
    } catch (e) {
      throw new Error(`Diagram delete failed: ${e.message}`)
    }
  }
}