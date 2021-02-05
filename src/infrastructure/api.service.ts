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
        return resolve(items);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async fetch(id: number) {
    await oneSecondDelay();
    return new Promise<T>((resolve, reject) => {
      try {
        const item = this.db.get(id);
        return resolve(item);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async addItem(data: Omit<T, "id">) {
    await oneSecondDelay();
    return new Promise<T>((resolve, reject) => {
      try {
        const item = this.db.addItem(data);
        return resolve(item);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async editItem(data: T) {
    await oneSecondDelay();
    return new Promise<T>((resolve, reject) => {
      try {
        const item = this.db.editItem(data);
        return resolve(item);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async deleteItem(id: number) {
    await oneSecondDelay();
    return new Promise<void>((resolve, reject) => {
      try {
        this.db.deleteItem(id);
        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  }
}
