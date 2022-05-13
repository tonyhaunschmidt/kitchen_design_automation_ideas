function init() {

  // selections
  const doorSizes = [300, 350, 400, 450, 500, 600]
  const kitchenTypes = ['U', 'L', 'I', 'Galley']

  // list different units out as objects i.e.
  //  300HL = {doorline: HL, doorsize: 300, cabinetsize: 300, CC: 0.2, price: 30.36}
  //  can incluce space object


  //specific case
  const kitchen = []
  const kitchenType = kitchenTypes[1]
  const walls = [2000, 2000, 2000]
  const fridgeWall = 3
  const cookerWall = 2
  const sinkWall = 3

  //configure kitchen

  const remainingWallSpace = [...walls]
  if (kitchenType === kitchenTypes[1]) { //U shape

    //maybe run initial checks first -  asking for same things on one run and not enough space- alert minimum requirements etc. 

    //corners
    kitchen.push(['BC631'], ['BC631', 'BC631'], ['BC631'])
    remainingWallSpace[0] -= 631
    remainingWallSpace[1] -= 631 + 631
    remainingWallSpace[2] -= 631

    for (let i = 0; i < remainingWallSpace.length; i++) {
      if (remainingWallSpace[i] < 0) {
        console.log(`insufficient space on wall ${i + 1} for run`)
      }
    }

    //F/F
    if (fridgeWall === 1) {
      kitchen[0].unshift('FF650')
      remainingWallSpace[0] -= 650
    }
    if (fridgeWall === 3) {
      kitchen[2].push('FF650')
      remainingWallSpace[2] -= 650
    }

    for (let i = 0; i < remainingWallSpace.length; i++) {
      if (remainingWallSpace[i] < 0) {
        console.log(`insufficient space on wall ${i + 1} for a fridge/freezer`)
      }
    }


    //COOKER
    //place cooker

    //SINK
    //place sink unit

    //REMAINING UNITS

    //LEFT OVER (FILLERS/SPACE ETC)



  }
  //do the other kitchen types in the same way to help with more complex pseudo coding  
  //test for basic kitchen with set cooker/F/F sink etc then start adding for variables- cooker type/ sink type/ etc.
  //add things like WM/DW etc

  console.log(remainingWallSpace)
  console.log(kitchen)
}
init()