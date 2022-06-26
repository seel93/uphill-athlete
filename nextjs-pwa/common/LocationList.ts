export type LocationArea = {
    name: string
    regionId: number
}

const NORDNORGE : LocationArea = {
    name :'Nord Norge',
    regionId: 54
};

const OSTLANDET : LocationArea = {
    name :'Østlandet',
    regionId: 34
};

const VESTLANDET : LocationArea = {
    name :'Vestlandet',
    regionId: 15
};

export type LocationInformation = {
    id: number,
    lat: string,
    lon: string,
    name: string,
    area: LocationArea,
    description: string
}


const ROMSDDALEN : LocationInformation = {
    id: 1,
    lat: "62.5678597208167",
    lon: "7.685160299871816",
    name: 'Romsdalen',
    area: VESTLANDET,
    description: 'Mekka for klatring og ski, høyt og lavt'
}

const HURRUNGANE : LocationInformation = {
    id: 2,
    lat: "61.47656933554466",
    lon: "7.839013657366785",
    name: 'Hurrungane',
    area: OSTLANDET,
    description: 'Det mest alpine området du finner på østlandet'
}

const TROMSOE : LocationInformation = {
    id: 3,
    lat: '69.6652494',
    lon: '18.8459193',
    name: 'Tromsø',
    area: NORDNORGE,
    description: 'Ubegrenset med muligheter sommer som vinter med et sentralt utgangspunkt'
}

const NARVIK : LocationInformation = {
    id: 4,
    lat:'68.4353563',
    lon: '17.4048245',
    name: 'Narvik',
    area: NORDNORGE,
    description: 'Midtpunktet mellom lofoten of Sverige'
}

const LYNGEN : LocationInformation = {
    id: 5,
    lat:'69.5752372',
    lon:'20.2001608',
    name: 'Lyngen',
    area: NORDNORGE,
    description: 'Norges svar på alpene'
}

const OSLO : LocationInformation = {
    id: 6,
    lat: '59.8937806',
    lon: '10.6450355',
    name: 'Oslo',
    area: OSTLANDET,
    description: 'Hovedstaden'
}

export const locationList = Array.of(ROMSDDALEN, HURRUNGANE, TROMSOE, NARVIK, LYNGEN, OSLO);


