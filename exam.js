let militaryUnit = {
    name: "1st Infantry Division",
    location: "Fort Bragg, North Carolina, USA",
    establishmentDate: "1941-06-01",
    unitType: "Infantry Division",
    commandStructure: {
      commandingOfficer: {
        rank: "Major General",
        name: "John Doe",
        contact: {
          email: "john.doe@example.com",
          phone: "+1-555-123-4567",
        },
      },
      executiveOfficer: {
        rank: "Colonel",
        name: "Jane Smith",
        contact: {
          email: "jane.smith@example.com",
          phone: "+1-555-987-6543",
        },
      },
      chiefOfStaff: {
        rank: "Brigadier General",
        name: "Robert Brown",
        contact: {
          email: "robert.brown@example.com",
          phone: "+1-555-555-1234",
        },
      },
    },
    personnel: [
      {
        id: 1,
        name: "Private First Class Alice Johnson",
        rank: "Private First Class",
        role: "Rifleman",
        contact: {
          email: "alice.johnson@example.com",
          phone: "+1-555-000-1111",
        },
      },
      {
        id: 2,
        name: "Sergeant Michael White",
        rank: "Sergeant",
        role: "Squad Leader",
        contact: {
          email: "michael.white@example.com",
          phone: "+1-555-000-2222",
        },
      },
    ],
    equipment: {
      vehicles: [
        {
          type: "M1 Abrams Tank",
          quantity: 20,
          status: "Operational",
        },
        {
          type: "Humvee",
          quantity: 50,
          status: "Operational",
        },
      ],
      firearms: [
        {
          type: "M16 Rifle",
          quantity: 500,
          status: "Operational",
        },
        {
          type: "M249 SAW",
          quantity: 100,
          status: "Operational",
        },
      ],
      otherEquipment: [
        {
          type: "Night Vision Goggles",
          quantity: 150,
          status: "Operational",
        },
        {
          type: "Field Radios",
          quantity: 100,
          status: "Operational",
        },
      ],
    },
    missions: [
      {
        missionName: "Operation Desert Storm",
        startDate: "1991-01-17",
        endDate: "1991-02-28",
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
      },
      {
        missionName: "Operation Enduring Freedom",
        startDate: "2001-10-07",
        endDate: "2014-12-28",
        description: "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
      },
    ],
    trainingPrograms: [
      {
        programName: "Basic Combat Training",
        duration: 10,
        focus: "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
      },
      {
        programName: "Advanced Individual Training",
        duration: 12,
        focus: "Specialized training for specific military occupational specialties.",
      },
    ],
    history: [
      {
        eventDate: "1941-06-01",
        eventDescription: "Establishment of the 1st Infantry Division.",
      },
      {
        eventDate: "1944-06-06",
        eventDescription: "Participated in the D-Day landings in Normandy.",
      },
    ],
    currentDeployment: {
      location: "Middle East",
      mission: "Counter-terrorism operations",
      startDate: "2024-01-01",
      estimatedEndDate: "2024-12-31",
    },
  };
  

  function Mission1(militaryUnitObj) {
    const chiefOfStaff = militaryUnitObj.commandStructure.chiefOfStaff;
    return `rank: ${chiefOfStaff.rank}. name: ${chiefOfStaff.name}. phone: ${chiefOfStaff.contact.phone}.`;
  }

  console.log(Mission1(militaryUnit));


  function Mission2(militaryUnitObj) {
    const personnels = militaryUnitObj.personnel;
    return `Number of personnel: ${personnels.length}`;
  }
  

  console.log(Mission2(militaryUnit));


  //help to mission3
  function CreateNewTask(location, mission, startDate, estimatedEndDate) {
    const newtaskObj = {
      location: location,
      mission: mission,
      startDate: startDate,
      estimatedEndDate: estimatedEndDate,
    }
    return newtaskObj;
  }




  function Mission3(militaryUnitObj, newtaskObj) {
    const newHistoryObj = {
      eventDate: militaryUnitObj.currentDeployment.estimatedEndDate,
      eventDescription: `${militaryUnitObj.currentDeployment.mission} at ${militaryUnitObj.currentDeployment.location}`,
    };
    militaryUnitObj.history.push(newHistoryObj);
    militaryUnitObj.currentDeployment = newtaskObj;
    return militaryUnitObj;
  }
  
  

  const newTask1 = CreateNewTask("Middle East", "Counterterrorism operations", "2024-01-01", "2024-12-31");
  console.log(Mission3(militaryUnit, newTask1));



  function CreateNewFirearm(type, quantity, status) {
    const newFirearmObj = {
      type: type,
      quantity: quantity,
      status: status,
    }
    return newFirearmObj;
  }


  function Mission4(militaryUnitObj, newFirearmObj) {
    const existingFirearm = militaryUnitObj.equipment.firearms.find(firearm => firearm.type === newFirearmObj.type && firearm.status === newFirearmObj.status);
    if (existingFirearm) {
      existingFirearm.quantity += newFirearmObj.quantity;
    } else {
      militaryUnitObj.equipment.firearms.push(newFirearmObj);
    }
    return militaryUnitObj;
  }


  const newFirearm1 = CreateNewFirearm("M16 Rifle", 500, "Operational");
  console.log(Mission4(militaryUnit, newFirearm1));
  


  function Mission5(militaryUnitObj) {
    const totalDuration = militaryUnitObj.trainingPrograms.reduce((total, Program) => total + Program.duration, 0);
    return `Total training duration: ${totalDuration} weeks.`;
  }
  
    

  console.log(Mission5(militaryUnit));


  module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4,
    Mission5
  };