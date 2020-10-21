import { FindOneOptions, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import {
  deleteDataPlaceholder,
  getSingleDataPlaceholder,
  paginate,
  paginateAll,
  paginationOptions,
  insertDataPlaceholder,
} from '../utils';

export abstract class BaseService<Entity> extends Repository<Entity> {
  repo: Repository<Entity>;

  constructor(private repository: any) {
    super();
    this.repo = this.repository;
  }

  async insert(data: any): Promise<any> {
    try {
      const payload = await this.repo.save(data);
      return insertDataPlaceholder(payload);
    } catch (error) {
      return error;
    }
  }

  async filter(where: any, options: any, relations?: string[]): Promise<any> {
    try {
      const pOptions: any = paginationOptions(options);

      pOptions.where = where.where;

      if (relations) {
        pOptions.relations = relations;
      }

      const payload = await this.repo.findAndCount(pOptions);
      return paginate(options, payload);
    } catch (error) {
      return error;
    }
  }

  async findAll(options: any, relations?: string[]): Promise<any> {
    try {
      if (options.single) {
        const _options: FindOneOptions = {};
        delete options.take;
        delete options.page;
        delete options.single;

        _options.where = { ...options };
        _options.relations = relations;
        const payload = await this.repo.findOne(options);
        return getSingleDataPlaceholder(payload);
      } else {
        if (options.take && options.take === 'all') {
          delete options.take;
          delete options.page;

          options.where = { ...options };
          options.relations = relations;

          const payload = await this.repo.find(options);
          return paginateAll(payload);
        } else {
          const pOptions: any = paginationOptions(options);
          delete options.take;
          delete options.page;
          pOptions.where = { ...options };

          if (relations) {
            pOptions.relations = relations;
          }

          const payload = await this.repo.findAndCount(pOptions);
          return paginate(pOptions, payload);
        }
      }
    } catch (error) {
      return error;
    }
  }

  async findById(id: string, relations?: string[]): Promise<any> {
    try {
      const options: FindOneOptions = {};
      if (relations) {
        options.relations = relations;
      }
      const payload = await this.repo.findOne(id, options);
      return getSingleDataPlaceholder(payload);
    } catch (error) {
      return error;
    }
  }

  async update(
    id: string,
    options: QueryDeepPartialEntity<any>,
    relations?: string[],
  ): Promise<any | undefined> {
    try {
      await this.repo.update(id, options);
      return this.findById(id, relations);
    } catch (error) {
      return error;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const payload = await this.repo.delete(id);
      return deleteDataPlaceholder(payload);
    } catch (error) {
      return error;
    }
  }
}
