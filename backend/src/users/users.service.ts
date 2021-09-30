import {Injectable} from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import {EntityManager, LessThan, MoreThan} from 'typeorm';
import {Repository} from 'typeorm';
import {User} from './entities';
import {StaffQuery, PersonDataFormat, StaffResponse} from './dto/user.dto';

const excelToJson = require('convert-excel-to-json');

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly uRepo: Repository<User>,
        @InjectEntityManager()
        private entityManager: EntityManager
    ) {
    }

    public async removeUserById(id: number) : Promise<void> {
        await this.uRepo.delete(id);
    }

    public async getUsers(body: StaffQuery): Promise<StaffResponse> {
        const find: any = {};

        find.take = body.take || 1000;
        find.skip = body.skip;

        if (body.data_to) {
            find.data_to = LessThan(body.data_to)
        }

        if (body.data_from) {
            find.data_from = MoreThan(body.data_from);
        }

        const users = await this.uRepo.find(find);
        return {
            data_from: body.data_from,
            data_to: body.data_to,
            filter: body.filter,
            staff: users
        };
    }

    public async getUserById(id: number): Promise<User> {
        const user = await this.entityManager.createQueryBuilder(User, 'user')
            .where('user.id = :id', {id})
            .getOne();

        return user;
    }

    public async createUser(user: PersonDataFormat): Promise<User> {
        return await this.uRepo.save(user);
    }

    public async createUsers(user: PersonDataFormat): Promise<User> {
        return await this.uRepo.save(user);
    }

    public async addUserFromFile(file): Promise<void> {
        const json = excelToJson({
            source: file.buffer
        });

        const keys = Object.keys(json);

        keys.forEach(key => {
            json[key] = json[key].flat(Infinity)
        });

        const data = {};

        keys.forEach((key) => {
            const headers = json[key].find(el => el['A'] === 'ID');

            json[key].forEach((el) => {
                if (Number.isInteger(el['A'])) {
                    data[el['A']] = data[el['A']] || {};

                    Object.keys(el).forEach((k) => {
                        data[el['A']][headers[k].toLowerCase()] = el[k];
                    });
                }
            })
        });

        const arr = Object.keys(data).map(k => ({
            id: data[k]['id'],
          //  working_years: data[k]['дата приема'],
           // age: data[k]['дата рождения'],
            salary: data[k]['оклад/тариф на конец отчетного периода'],
            have_children: !!data[k]['количество детей'],
            have_mentor: !!data[k]['Работа с наставником']
        }));

        await this.entityManager.save(User, arr)
    }
}
