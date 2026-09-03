export const legalIdentity = {
  brand: 'AEGRIX',
  responsibleName: 'Aníbal Benjamín Pérez Maestre',
  roleEs: 'CEO de AEGRIX',
  roleEn: 'CEO of AEGRIX',
  taxIdLabelEs: 'Identificación tributaria (RUT)',
  taxIdLabelEn: 'Tax identification (RUT)',
  taxId: '700347984-1',
  addressEs: 'Calle 30 88B, Belén, Medellín, Antioquia, Colombia',
  addressEn: 'Calle 30 88B, Belén, Medellín, Antioquia, Colombia',
  email: 'contacto@aegrix.com.co',
  website: 'https://aegrix.com.co',
  securitySubject: '[SECURITY]',
  dataSubject: '[DATOS PERSONALES]',
  pqrSubject: '[PQR]',
} as const;

export const legalRetention = {
  prospectMonths: 24,
  marketingInactivityMonths: 24,
  securityLogMonths: 12,
  commercialRecordsYears: 10,
} as const;
