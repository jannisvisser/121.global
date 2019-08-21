var programPost = {
  location: 'Lilongwe',
  countryId: 265,
  title: 'pilot_program_1a',
  description: 'Program to help people hit by earthquake examplename',
  startDate: '2020-05-23T18:25:43.511Z',
  endDate: '2021-05-23T18:25:43.511Z',
  currency: 'MWK',
  distributionFrequency: 'what is this',
  distributionChannel: 'mobileMoney',
  notifiyPaArea: true,
  notificationType: 'announcement',
  cashDistributionSites: {
    cashDistributionSites: [], // This nested level is because postgres does not have great support for arrays of json
  },
  financialServiceProviders: {
    financialServiceProviders: [], // This nested level is because postgres does not have great support for arrays of json
  },
  inclusionCalculationType: 'standard', // Only option for now later, it can also be a fancy algorithm
  customCriteria: [
    {
      criterium: 'nr_of_children',
      question: {
        english: 'How many children do you have?',
        nyanja: 'Zaka zanu ndi zingati?',
      },
      answerType: 'numeric',
      criteriumType: 'standard',
      options: null,
      scoring: {
        '0-18': 999, // Excluse if younger then 18
        '19-65': 0,
        '65>': 6,
      },
    },
    {
      criterium: 'roof_type',
      question: {
        english: 'What type is your roof?',
        nyanja: 'Denga lanu ndi lotani?',
      },
      answerType: 'dropdown',
      criteriumType: 'standard',
      options: [
        {
          id: 0,
          option: 'steel',
          name: {
            english: 'steel',
            nyanja: 'zitsulo',
          },
        },
        {
          id: 1,
          option: 'tiles',
          name: {
            english: 'tiles',
            nyanja: 'matayala',
          },
        },
      ],

      scoring: {
        0: 3,
        1: 6,
      },
    },
  ],
  minimumScore: 25,
};
console.log(JSON.stringify(programPost));