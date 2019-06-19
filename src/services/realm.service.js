import Realm from 'realm';
import { Scheme, SchemaName } from '../realm/scheme'

class RealmService {
  _realm;
  dbConfig = {
    schema: Scheme,
    schemaVersion: 1,
  };
  SchemaName = SchemaName;

  async initialize() {
    try {
      this._realm = await Realm.open(this.dbConfig)
    } catch (e) {
      console.log('initialize error - ', e)
    }
  }

  get realm() {
    return this._realm;
  }

  async read(schemaName, filterQuery) {
    try {
      if (filterQuery) {
        return await this._realm.objects(schemaName).filtered(filterQuery)
      }

      return await this._realm.objects(schemaName)
    } catch (e) {
      console.log('read error - ', e)
    }
  }

  async write(schemaName, entity) {
    try {
      return await this._realm.write(() => this._realm.create(schemaName, entity, true))
    } catch (e) {
      console.log('write error - ', e)
    }
  }

  async delete(entityForDelete) {
    try {
      return await this._realm.delete(entityForDelete)
    } catch (e) {
      console.log('delete error - ', e)
    }
  }
}

export default new RealmService();