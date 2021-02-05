export default class Collection<T extends { id: number }> {
  private name: string;
  private nextID = 0;

  constructor(name: string) {
    this.name = name;
    localStorage.setItem(this.name, JSON.stringify([]));
  }

  private save(data: T[]) {
    try {
      localStorage.setItem(this.name, JSON.stringify(data));
    } catch (error) {
      throw new Error("Error saving data to ls");
    }
  }

  getAll() {
    const data = localStorage.getItem(this.name) ?? "[]";
    try {
      return JSON.parse(data) as T[];
    } catch (error) {
      throw new Error("Error fetching data from ls");
    }
  }

  get(id: number) {
    const col = this.getAll();
    const data = col.find(item => item.id === id);
    if (data) {
      return data;
    }
    throw new Error("Item does not exist in ls");
  }

  addItem(data: Omit<T, "id">) {
    const col = this.getAll();
    const temp = { ...data, id: ++this.nextID } as T;
    col.push(temp);
    this.save(col);
    return temp;
  }

  editItem(data: T) {
    const col = this.getAll();
    const toUpdate = this.get(data.id);
    let updated = { ...toUpdate, ...data, id: toUpdate.id };
    const newCol = col.map(item => (item.id === data.id ? updated : item));
    this.save(newCol);
    return updated;
  }

  deleteItem(id: number) {
    const col = this.getAll();
    const newCol = col.filter(item => {
      return item.id !== id;
    });
    this.save(newCol);
  }
}
