export const medicines = [
  {
    generic: "Amodiaquine + Artesunate - 135mg / 50mg - Tablet",
    dose: "135mg / 50mg",
    category: "antimalaria",
    medicine_id: "amoart",
    locations: ["North Industrial Area", "Dzorwulu", "Spintex", "Mile 11"],
    pharmacies: ["Addpharma Retail", "Palace Pharmacy Ltd"]
  },
  {
    generic: "Amodiaquine + Artesunate - 67.5mg / 25mg - Tablet",
    dose: "67.5mg / 25mg",
    category: "antimalaria",
    medicine_id: "amoart",
    locations: ["North Industrial Area", "Dzorwulu", "Spintex", "Mile 11"],
    pharmacies: ["Addpharma Retail", "Palace Pharmacy Ltd"]
  },
  {
    generic: "Artemether + Lumefantrine - 20mg / 120mg - Tablet",
    dose: "20mg / 120mg",
    category: "antimalaria",
    medicine_id: "ARTLUM",
    locations: ["North Industrial Area", "Dzorwulu", "Spintex", "Mile 11"],
    pharmacies: ["Addpharma Retail", "Palace Pharmacy Ltd"]
  },
  {
    generic: "Quinine - 300mg - Tablet",
    dose: "20mg / 120mg",
    category: "antimalaria",
    medicine_id: "QUININ",
    locations: ["North Industrial Area", "Dzorwulu", "Spintex", "Mile 11"],
    pharmacies: ["Addpharma Retail", "Palace Pharmacy Ltd"]
  }
];

export const allPharmacies = [
  {
    name: "Addpharma Retail",
    address: "North Industrial Area, Reberrson Cres, Accra, Ghana",
    website: "addpharma4u.com",
    number: "(+) 233 30 226 0712",
    medicines: [
      {
        name: "Quinine - 300mg - Tablet",
        price: 2,
        dose: "300mg",
        manufacture_ids: [
          {
            name: "Alpharma",
            mobile_authenticator_system: "none",
            quantity: 28,
            price: 10
          },
          {
            name: "Co-pharma",
            mobile_authenticator_system: "none",
            quantity: 28,
            price: 2
          },
          {
            name: "Livealth Biopharma",
            mobile_authenticator_system: "none",
            quantity: 28,
            price: 18
          }
        ]
      },
      {
        name: "Artemether + Lumefantrine - 20mg / 120mg - Tablet",
        price: 4,
        dose: "20mg / 120mg",
        manufacture_ids: [
          {
            name: "Novartis Pharma",
            mobile_authenticator_system: "Sproxil",
            quantity: 24,
            price: 4
          },
          {
            name: "IPCA Laboratories Ltd",
            mobile_authenticator_system: "none",
            quantity: 24,
            price: 5
          },
          {
            name: "Anhui Medipharm",
            mobile_authenticator_system: "none",
            quantity: 24,
            price: 17
          },
          {
            name: "Ajanta Pharma",
            mobile_authenticator_system: "none",
            quantity: 24,
            price: 15
          }
        ]
      },
      {
        name: "Amodiaquine + Artesunate - 135mg / 50mg - Tablet",
        price: 7,
        dose: "135mg / 50mg",
        manufacture_ids: [
          {
            name: "Astral Pharmaceutical",
            mobile_authenticator_system: "none",
            quantity: 3,
            price: 9
          },
          {
            name: "Novartis Pharma",
            mobile_authenticator_system: "Sproxil",
            quantity: 3,
            price: 7
          },
          {
            name: "Mepha Pharma",
            mobile_authenticator_system: "none",
            quantity: 3,
            price: 13
          }
        ]
      },
      {
        name: "Amodiaquine + Artesunate - 67.5mg / 25mg - Tablet",
        price: 12,
        dose: "67.5mg / 25mg",
        manufacture_ids: [
          {
            name: "Astral Pharmaceutical",
            mobile_authenticator_system: "none",
            quantity: 3,
            price: 12
          },
          {
            name: "Novartis Pharma",
            mobile_authenticator_system: "Sproxil",
            quantity: 3,
            price: 18
          },
          {
            name: "Mepha Pharma",
            mobile_authenticator_system: "none",
            quantity: 3,
            price: 12
          }
        ]
      }
    ]
  },
  {
    name: "Palace Pharmacy Ltd",
    address: "Accra, Ghana",
    website: "palacepharmacy.org",
    number: "(+) 233 54 423 8855",
    medicines: [
      {
        name: "Amodiaquine + Artesunate - 135mg / 50mg - Tablet",
        price: 6,
        dose: "135mg / 50mg",
        manufacture_ids: [
          {
            name: "IPCA Laboratories Ltd",
            mobile_authenticator_system: "Sproxil",
            quantity: 3,
            price: 6
          },
          {
            name: "Sanofi Aventis",
            mobile_authenticator_system: "M-pedigree",
            quantity: 3,
            price: 7
          },
          {
            name: "Novartis Pharma",
            mobile_authenticator_system: "Sproxil",
            quantity: 3,
            price: 8
          }
        ]
      },
      {
        name: "Amodiaquine + Artesunate - 67.5mg / 25mg - Tablet",
        price: 12,
        dose: "67.5mg / 25mg",
        manufacture_ids: [
          {
            name: "IPCA Laboratories Ltd",
            mobile_authenticator_system: "Sproxil",
            quantity: 3,
            price: 6
          },
          {
            name: "Sanofi Aventis",
            mobile_authenticator_system: "M-pedigree",
            quantity: 3,
            price: 9
          },
          {
            name: "Novartis Pharma",
            mobile_authenticator_system: "Sproxil",
            quantity: 3,
            price: 14
          }
        ]
      },
      {
        name: "Artemether + Lumefantrine - 20mg / 120mg - Tablet",
        price: 1,
        dose: "20mg / 120mg",
        manufacture_ids: [
          {
            name: "Novartis Pharma",
            mobile_authenticator_system: "Sproxil",
            quantity: 24,
            price: 4
          },
          {
            name: "IPCA Laboratories Ltd",
            mobile_authenticator_system: "none",
            quantity: 24,
            price: 2
          },
          {
            name: "Ajanta Pharma",
            mobile_authenticator_system: "none",
            quantity: 24,
            price: 1
          }
        ]
      },
      {
        name: "Quinine - 300mg - Tablet",
        price: 5,
        dose: "300mg",
        manufacture_ids: [
          {
            name: "Co-Pharma",
            mobile_authenticator_system: "none",
            quantity: 28,
            price: 5
          },
          {
            name: "Livealth Biopharma",
            mobile_authenticator_system: "none",
            quantity: 28,
            price: 11
          }
        ]
      }
    ]
  }
  //   {
  //     name: "Bedita Pharmacy",
  //     address: "Dzorwulu, Blohum Rd, Accra, Ghana",
  //     website: "beditapharma.com",
  //     number: "(+) 233 30 277 8375"
  //   },
  //   {
  //     name: "Medimart Pharmacy",
  //     address: "Spintex Rd, Accra, Ghana",
  //     website: "",
  //     number: "(+) 233 50 229 6551"
  //   },
  //   {
  //     name: "Mile 11 Pharmacy",
  //     address: "Near Finney Hospital, Mile 11, Ghana",
  //     website: "",
  //     number: "(+) 233 54 423 8855"
  //   }
];
