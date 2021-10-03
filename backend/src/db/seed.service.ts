import {Injectable} from '@nestjs/common';
import {InjectEntityManager} from '@nestjs/typeorm';
import {EntityManager} from 'typeorm';
import {Role, User} from '../users/entities';
import fixtures from './fixtures';
import {Categories} from "../find/entities";

@Injectable()
export class SeedService {
    constructor(
        @InjectEntityManager()
        private entityManager: EntityManager
    ) {}

    async onModuleInit() {
        console.log('[Seed started]');

        if (await this.entityManager.findOne(User)) {
            console.log('[Seed success]');
            return false;
        }

        console.log('[Creating User started]');

        await this.entityManager.save(User, fixtures.users as User[]);

        console.log('[Creating Role started]');

        await this.entityManager.save(Role, fixtures.roles as Role[]);

        console.log('[Creating Categories started]');

        await this.entityManager.save(Categories, fixtures.categories as Categories[]);

        console.log('[Seed success]');
    }
}
