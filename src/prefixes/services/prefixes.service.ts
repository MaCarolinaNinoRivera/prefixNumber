// prefixes/services/prefixes.service.ts

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import countries from '../../country-json/src/country-by-telephone-code.json';

import { PrefixDto } from '../dtos/PrefixDto.dto';

@Injectable()
export class PrefixesService {
    private apiUrl: string;

    constructor(
        private httpService: HttpService,
        private configService: ConfigService,
    ) {
        this.apiUrl = this.configService.get<string>('API_URL');
    }
    getAllPrefixes() {
        return countries.map(country => ({
            country: country.country,
            code: country.code,
            prefix: country.prefix,
        }));
    }

    getAllPrefixesExtern(): Observable<any[]> {
        return this.httpService.get(this.apiUrl)
            .pipe(
                map((response: AxiosResponse<any[]>) => {
                    const countriesData = response.data;

                    if (!countriesData || countriesData.length === 0) {
                        throw new Error('No se encontraron datos de países');
                    }

                    // Mapea cada país para extraer el objeto idd
                    return countriesData.map(country => ({
                        country: country.name.common,
                        code: country.cca2,
                        prefix: country.idd ? (country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '')) : '',
                        idd: {
                            root: country.idd ? country.idd.root : '',
                            suffixes: country.idd && country.idd.suffixes ? country.idd.suffixes : [],
                        },
                    })) as PrefixDto[];
                })
            );
    }
}
