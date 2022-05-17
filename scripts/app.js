function init() {

  const doorSizes = [300, 350, 400, 450, 500, 600]
  const kitchenTypes = ['U', 'L', 'I', 'Galley']

  // selections
  const sinkTypes = ['single', 'bowlAndHalf']

  // list different units out as objects i.e.
  //  300HL = {doorline: HL, doorsize: 300, cabinetsize: 300, CC: 0.2, price: 30.36}
  //  can incluce space object

  // --- work out skeleton first and then fill in with units


  //specific case
  const skeleton = []
  //choices
  const kitchenType = kitchenTypes[1]
  const walls = [2000, 2000, 2000]
  const fridgeWall = 1
  const cookerWall = 1
  const sinkWall = 1
  const sinkChoice = sinkTypes[1]
  let sinkUnitSize
  if (sinkChoice === sinkTypes[0]) sinkUnitSize = 500
  if (sinkChoice === sinkTypes[1]) sinkUnitSize = 600

  //option for swapping sink and cooker? anything else need swapped

  //configure kitchen

  //SKELETON
  const remainingWallSpace = [...walls]
  if (kitchenType === kitchenTypes[1]) { //U shape

    //maybe run initial checks first -  asking for same things on one run and not enough space- alert minimum requirements etc. 

    //corners
    skeleton.push(['BC631'], ['BC631', 'BC631'], ['BC631'])
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
      skeleton[0].unshift('FF650')
      remainingWallSpace[0] -= 650
    }
    if (fridgeWall === 3) {
      skeleton[2].push('FF650')
      remainingWallSpace[2] -= 650
    }

    for (let i = 0; i < remainingWallSpace.length; i++) {
      if (remainingWallSpace[i] < 0) {
        console.log(`insufficient space on wall ${i + 1} for a fridge/freezer`)
      }
    }


    //COOKER
    if (cookerWall === 1) {
      skeleton[0].splice(-1, 0, 'CS640')
      remainingWallSpace[0] -= 640
    }
    if (cookerWall === 2) {
      skeleton[1].splice(1, 0, 'CS640')
      remainingWallSpace[1] -= 640
    }
    if (cookerWall === 3) {
      skeleton[2].splice(1, 0, 'CS640')
      remainingWallSpace[2] -= 640
    }

    for (let i = 0; i < remainingWallSpace.length; i++) {
      if (remainingWallSpace[i] < 0) {
        console.log(`insufficient space on wall ${i + 1} for a fridge/freezer`)
      }
    }

    //SINK
    //place sink unit
    if (sinkWall === 1) {
      skeleton[0].splice(-1, 0, `SU${sinkUnitSize}`)
      remainingWallSpace[0] -= sinkUnitSize
    }
    if (sinkWall === 2) {
      skeleton[1].splice(1, 0, `SU${sinkUnitSize}`)
      remainingWallSpace[1] -= sinkUnitSize
    }
    if (sinkWall === 3) {
      skeleton[2].splice(1, 0, `SU${sinkUnitSize}`)
      remainingWallSpace[2] -= sinkUnitSize
    }

    for (let i = 0; i < remainingWallSpace.length; i++) {
      if (remainingWallSpace[i] < 0) {
        console.log(`insufficient space on wall ${i + 1} for a sink unit`)
      }
    }


    //build around the skeleton.
    //pseudo code all the rules and steps that need to happen and then order then code


  }
  //do the other kitchen types in the same way to help with more complex pseudo coding  
  //test for basic kitchen with set cooker/F/F sink etc then start adding for variables- cooker type/ sink type/ etc.
  //add things like WM/DW etc

  console.log(remainingWallSpace)
  console.log(skeleton)
}
init()