import { Program } from '../models/program.model';

export const mockProgram: Program = {
  id: 1,
  title: 'Program Test Title',
  description: 'Program Test Description',
  created: new Date().toISOString(),
  updated: new Date().toISOString(),
  meetingDocuments: 'document;document;',
  ngo: 'NGO',
  customCriteria: [],
  financialServiceProviders: [],
  credDefId: '',
  phoneNumberPlaceholder: '+000 000 00 00',
  validation: true,
};
