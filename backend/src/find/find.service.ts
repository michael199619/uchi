import {Body, Get, Injectable, Post} from '@nestjs/common';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import {EntityManager, In, LessThan, MoreThan, Repository} from 'typeorm';
import {ConfigService} from "@nestjs/config";
import nodeFetch from "node-fetch";
import {FindDto} from "./dto/find.dto";
import {Categories} from "./entities";

@Injectable()
export class FindService {
    constructor(
        @InjectEntityManager()
        private entityManager: EntityManager,
        private configService: ConfigService,

        @InjectRepository(Categories)
        private readonly cRepo: Repository<Categories>,
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

        const tags = await this.cRepo.find({
            id: In(find.tagIds)
        });

        console.log(find.tagIds)


        return await Promise.all(tags.map(async (e) => {
           let url = `${googleApi}?key=${googleToken}&cx=${googleCx}&lr=${googleLr}&q=${q}`;

           if (e.fileType) {
               url = `${url}&fileType=${e.fileType}`;
           }

           if (e.searchType) {
               url = `${url}&searchType=${e.searchType}`;
           }

           return await nodeFetch(url).then(async (res) => {
               const data = await res.json();

               return {
                   id: e.id,
                   name: e.name,
                   items: data.items.map((item) => ({
                       title: item.title,
                       link: item.link,
                       linkTitle: item.htmlTitle,
                       snipet: item.snipet,
                       pagemap: item.pagemap,
                       rating: 0,
                       images: (item.cse_image || []).map(({src}) => src)
                   }))
               }
           });
       }));
    }

    saveCategories(categories) {
        return this.cRepo.save(categories);
    }

    getCategories() {
        return this.cRepo.find()
    }

    async removeCategories(id: number) : Promise<void> {
        await this.cRepo.delete(id);
    }
}
