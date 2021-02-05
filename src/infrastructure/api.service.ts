import Collection from "./collection";
import { oneSecondDelay } from "utility";

export default class Api<T extends { id: number }> {
  db;

  constructor(name: string) {
    this.db = new Collection<T>(name);
  }

  async fetchAll() {
    await oneSecondDelay();
    return new Promise<T[]>((resolve, reject) => {
      try {
        const items = this.db.getAll();
        resolve(items);
      } catch (error) {
        reject(error);
      }
    });
  }

  async fetch(id: number) {
    await oneSecondDelay();
    return new Promise<T>((resolve, reject) => {
      try {
        const item = this.db.get(id);
        resolve(item);
      } catch (error) {
        reject(error);
      }
    });
  }

  async addItem(data: Omit<T, "id">) {
    await oneSecondDelay();
    return new Promise<T>((resolve, reject) => {
      try {
        const item = this.db.addItem(data);
        resolve(item);
      } catch (error) {
        reject(error);
      }
    });
  }

  async editItem(data: T) {
    await oneSecondDelay();
    return new Promise<T>((resolve, reject) => {
      try {
        const item = this.db.editItem(data);
        resolve(item);
      } catch (error) {
        reject(error);
      }
    });
  }

  async deleteItem(id: number) {
    await oneSecondDelay();
    return new Promise<void>((resolve, reject) => {
      try {
        this.db.deleteItem(id);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
