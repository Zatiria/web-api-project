import { Injectable, Scope } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ApiResponse } from '../models/response.model';
import { CovidData } from './dto/covid-data.dto';
import { HttpStatus } from '@nestjs/common';
import { mockCovidData } from './mock/covid.mock';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ scope: Scope.TRANSIENT })
export class CovidService {
  private storedData: CovidData[] = [...mockCovidData];

  constructor(private readonly httpService: HttpService) {}

  async fetchExternalData() {
    try {
      const response = await firstValueFrom(
        this.httpService.get('https://disease.sh/v3/covid-19/all')
      );
      return new ApiResponse(
        'Fetched external data successfully',
        HttpStatus.OK,
        response.data
      );
    } catch (error) {
      console.error('Error fetching external data:', error);
      throw new Error('Failed to fetch external data');
    }
  }

  getStoredData() {
    if (this.storedData.length === 0) {
      throw new Error('No data available');
    }
    return new ApiResponse(
      'Fetched stored data successfully',
      HttpStatus.OK,
      this.storedData
    );
  }

  saveData(data: CovidData) {
    const newData = { ...data, id: uuidv4() };
    this.storedData.push(newData);
    return new ApiResponse(
      'Data saved successfully',
      HttpStatus.CREATED,
      newData
    );
  }

  updateData(id: string, data: CovidData) {
    const index = this.storedData.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Data not found');
    }

    const updatedData = { ...this.storedData[index], ...data };
    this.storedData[index] = updatedData;
    return new ApiResponse(
      'Data updated successfully',
      HttpStatus.OK,
      updatedData
    );
  }

  deleteData(id: string) {
    const index = this.storedData.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Data not found');
    }

    this.storedData.splice(index, 1);
    return new ApiResponse(
      'Data deleted successfully',
      HttpStatus.NO_CONTENT,
      null
    );
  }
}
