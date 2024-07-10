import { api } from "../../axios/axios";
import { ApiService } from "./apiUtilService";
export class TemplateService extends ApiService {
  async add(data) {
    try {
      //   const uploadedFiles = await this.uploadFile(data, data.name, 'Diagrams')

      const res = await api.templates.postTemplates({
        data: {
          title: data.title,
          custom: data.custom,
          json: data,

          //   file: uploadedFiles[0].id as number,
        },
      });

      const { id } = this.parseResponse(res);

      return id;
    } catch (e) {
      throw new Error(`Diagram add failed: ${e.message}`);
    }
  }

  async get(id) {
    try {
      if (isNaN(id) || id === 0) {
        throw `Invalid template id: ${id}`;
      }

      const res = await api.templates.getTemplatesId(id, {
        query: {
          //   populate: 'file',
        },
      });

      const data = this.parseResponse(res);

      return this.getTemplateData(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  async update(id, data) {
    try {
      //   const uploadedFiles = await this.uploadFile(data, data.name, 'Diagrams')

      const res = await api.templates.putTemplatesId(id, {
        data: {
          title: data.title,
          custom: data.custom,
          json: data,

          //   file: uploadedFiles[0].id as number,
        },
      });

      return this.parseResponse(res);
    } catch (e) {
      throw new Error(`Template update failed: ${e.message}`);
    }
  }

  async toArray(query = {}) {
    try {
      const res = await api.templates.getTemplates({
        "pagination[page]": 1,
        "pagination[pageSize]": 10000,
        filters: this.parseQuery(query),
      });

      return this.parseResponse(res);
    } catch (e) {
      throw new Error(`Templates toArray failed: ${e.message}`);
    }
  }

  where(query) {
    return {
      toArray: () => this.toArray(query),
    };
  }
  async delete(id) {
    try {
      await api.templates.deleteTemplatesId(id);
    } catch (e) {
      throw new Error(`Template delete failed: ${e.message}`);
    }
  }
}
