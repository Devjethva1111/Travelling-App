import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

export interface Item {
  valid: any;
  id: number;
  title: string;
  value: string;
  modified: number;
}

const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private storageVar: Storage | null = null;

  constructor(private storage: Storage) {
    this.fnInIT();
   }

   async fnInIT() {
    const storageData = await this.storage.create();
    this.storageVar = storageData;
   }

  //create
  addItem(item: Item): Promise<any>{
    return this.storageVar.get(ITEMS_KEY).then((items: Item[]) =>{
      // console.log('items',items);
      // console.log('item',item);
      if (items) {
        items.push(item);
        // items = items.concat(item);

        return this.storageVar.set (ITEMS_KEY, items);
      }else {
        return this.storageVar.set (ITEMS_KEY, [item]);
      }
    });
  }

  // Read
  getItems(): Promise<Item[]> {
    return this.storageVar.get (ITEMS_KEY);
  }

  //update
  updateItem(item: Item): Promise<any> {
    return this.storageVar.get(ITEMS_KEY).then((items: Item[]) =>{
      if (!items || items.length === 0) {
        return null;
      }

      // eslint-disable-next-line prefer-const
      let newItems: Item[] = [];

      // eslint-disable-next-line prefer-const
      for (let i of items){
        if (i.id === item.id) {
          newItems.push(item);
        }else{
          newItems.push(item);
        }
      }

      return this.storageVar.set(ITEMS_KEY, newItems);
    });
  }

  //delete
   deleteItem(id: number): Promise<Item>{
    return this.storageVar.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0){
        return null;
      }

      // eslint-disable-next-line prefer-const
      let toKeep: Item[] = [];

      // eslint-disable-next-line prefer-const
      for (let i of items){
        if (i.id !== id){
          toKeep.push(i);
        }
      }

      return this.storageVar.set(ITEMS_KEY, toKeep);

    });
   }
}

