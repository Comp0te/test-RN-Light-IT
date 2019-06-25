import Realm from 'realm';
import { Scheme, SchemaName } from '../realm/scheme';

class RealmService {
  _realm;

  _dbConfig = {
    schema: Scheme,
    schemaVersion: 1,
  };

  SchemaName = SchemaName;

  async initialize() {
    try {
      this._realm = await Realm.open(this._dbConfig);
    } catch (e) {
      console.log('initialize error - ', e);
    }
  }

  get realm() {
    return this._realm;
  }

  async read(schemaName, filterQuery) {
    try {
      if (filterQuery) {
        return await this.realm.objects(schemaName).filtered(filterQuery);
      }

      return await this.realm.objects(schemaName);
    } catch (e) {
      console.log('read error - ', e);

      return null;
    }
  }

  async write(schemaName, entity) {
    try {
      return await this.realm.write(() => this.realm.create(schemaName, entity, true));
    } catch (e) {
      console.log('write error - ', e);

      return null;
    }
  }

  async delete(entityForDelete) {
    try {
      return await this.realm.write(() => {
        this.realm.delete(entityForDelete);
      });
    } catch (e) {
      console.log('delete error - ', e);

      return null;
    }
  }

  async deleteAll() {
    try {
      return await this.realm.write(() => {
        this.realm.deleteAll();
      });
    } catch (e) {
      console.log('delete All error - ', e);

      return null;
    }
  }
}

export default new RealmService();
