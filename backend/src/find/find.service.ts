import {Injectable} from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import {EntityManager, LessThan, MoreThan} from 'typeorm';
import {ConfigService} from "@nestjs/config";
import nodeFetch from "node-fetch";
import {FindDto} from "./dto/find.dto";

@Injectable()
export class FindService {
    constructor(
        @InjectEntityManager()
        private entityManager: EntityManager,
        private configService: ConfigService
    ) {
    }

    public async find(find: FindDto) : Promise<any> {
        const {
            googleCx,
            googleApi,
            googleLr,
            googleToken
        } = this.configService.get('api');
        const {q} = find;
        console.log(`${googleApi}?key=${googleToken}&cx=${googleCx}&lr=${googleLr}&q=${q}`)
       return await nodeFetch(`${googleApi}?key=${googleToken}&cx=${googleCx}&lr=${googleLr}&q=${q}`)
           .then(res => res.json());
    }
}
